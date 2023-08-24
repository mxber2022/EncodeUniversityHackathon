const { providers, Wallet } = require('ethers')
const hre = require('hardhat')
const ethers = require('ethers')
const {
  L1ToL2MessageGasEstimator,
} = require('@arbitrum/sdk/dist/lib/message/L1ToL2MessageGasEstimator')
const { requireEnvVariables, arbLog } = require('../index.js')
const { L1TransactionReceipt, L1ToL2MessageStatus } = require('@arbitrum/sdk')
const { getBaseFee } = require('@arbitrum/sdk/dist/lib/utils/lib')
requireEnvVariables(['TESTNET_PRIVKEY', 'L2RPC', 'L1RPC'])
const RETRYABLE_DASHBOARD = 'https://retryable-dashboard.arbitrum.io/tx/'
const ETHERSCAN_TX = 'https://etherscan.io/tx/'
/**
 * Set up: instantiate L1 / L2 wallets connected to providers
 */
const walletPrivateKey = process.env.TESTNET_PRIVKEY

const l1Provider = new providers.JsonRpcProvider(process.env.L1RPC)
const l2Provider = new providers.JsonRpcProvider(process.env.L2RPC)

const l1Wallet = new Wallet(walletPrivateKey, l1Provider)
const l2Wallet = new Wallet(walletPrivateKey, l2Provider)

const l1GreeterAddress = '0x0cA074640f359879F981E4D3D74caB20Bdde9fb2' //the address of the L2 Greeter
const l2GreeterAddress = '0xdF6Da9483CA9edAe8e526aF2928565cf5A369a2D' //the address of the L3 Greeter

const main = async () => {
  await arbLog()

  const l1Greeter = await (
    await hre.ethers.getContractAt('GreeterL1', l1GreeterAddress)
  ).connect(l1Wallet)
  const l2Greeter = await (
    await hre.ethers.getContractAt('GreeterL2', l2GreeterAddress)
  ).connect(l2Wallet)

  /**
   * Let's log the L2 greeting string
   */
  const currentL2Greeting = await l2Greeter.greet()
  console.log(`Current L2 greeting: "${currentL2Greeting}"`)

  /*
  Get L3 Greeting 
  */
  const newGreetingL3 = await l2Greeter.greet();
  console.log("L3 greeting is: ",newGreetingL3);


  console.log('Updating greeting from L2 to L3:')


  const newGreeting = "Hello L3 XYZ"
  const ABI = ['function setGreeting(string _greeting)']
  const iface = new ethers.utils.Interface(ABI)
  const calldata = iface.encodeFunctionData('setGreeting', [newGreeting])

  const L1ToL2MessageGasEstimate = new L1ToL2MessageGasEstimator(new providers.JsonRpcProvider("http://127.0.0.1:8449/"))
  const L1ToL2MessageGasParams = await L1ToL2MessageGasEstimate.estimateAll({
    from: l1GreeterAddress,
    to: l2GreeterAddress,
    excessFeeRefundAddress: l2Wallet.address,
    callValueRefundAddress: l2Wallet.address,
    l2CallValue: 0,
    data: calldata,
  },
  await getBaseFee(l1Provider),
  l1Provider
  )

  console.log(`Current retryable base submission price is: ${L1ToL2MessageGasParams.maxSubmissionCost.toString()}`)

  const gasPriceBid = await l2Provider.getGasPrice()
  console.log(`L2 gas price: ${gasPriceBid.toString()}`)

  const setGreetingTx = await l1Greeter.setGreetingInL2(
    newGreeting,
    L1ToL2MessageGasParams.maxSubmissionCost,
    L1ToL2MessageGasParams.gasLimit,
    L1ToL2MessageGasParams.maxFeePerGas,
    {value:L1ToL2MessageGasParams.deposit}
  )

  const setGreetingRec = await setGreetingTx.wait()
  //console.log("setGreetingRec: ", setGreetingRec);
  console.log(`Greeting txn confirmed !\nYou can check the ticket's status here: ${RETRYABLE_DASHBOARD + setGreetingRec.transactionHash}`)
  console.log(L1ToL2MessageGasParams.deposit.toString());

  const L1TxReceipt = new L1TransactionReceipt(setGreetingRec);
  const messages =  await L1TxReceipt.getL1ToL2Messages(l2Wallet);
  const message = messages[0];
  const messageResult = await message.waitForStatus();
  const status = messageResult.status;
  if (status == await L1ToL2MessageStatus.REDEEMED) {
    console.log(`your ticket is redeemed ${messageResult.l2TxReceipt.transactionHash}`);
  }

  const newGreetingL2 = await l2Greeter.greet();
  console.log("Updated L3 greeting is: ",newGreetingL2);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
