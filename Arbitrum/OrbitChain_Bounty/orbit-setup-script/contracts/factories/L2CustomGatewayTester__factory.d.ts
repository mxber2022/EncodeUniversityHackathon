import { Signer, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2CustomGatewayTester,
  L2CustomGatewayTesterInterface,
} from '@arbitrum/sdk/dist/lib/abi/L2CustomGatewayTester'
declare type L2CustomGatewayTesterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>
export declare class L2CustomGatewayTester__factory extends ContractFactory {
  constructor(...args: L2CustomGatewayTesterConstructorParams)
  deploy(
    overrides?: Overrides & {
      from?: string | Promise<string>
    }
  ): Promise<L2CustomGatewayTester>
  getDeployTransaction(
    overrides?: Overrides & {
      from?: string | Promise<string>
    }
  ): TransactionRequest
  attach(address: string): L2CustomGatewayTester
  connect(signer: Signer): L2CustomGatewayTester__factory
  static readonly contractName: 'L2CustomGatewayTester'
  readonly contractName: 'L2CustomGatewayTester'
  static readonly bytecode =
    '0x608060405234801561001057600080fd5b50611925806100206000396000f3fe6080604052600436106100b25760003560e01c806395fcea781161006f57806395fcea7814610318578063a0c76a961461032d578063a7e28d4814610406578063b8f41ee414610439578063d2ce7d651461044e578063d4f5532f146104e8578063f887ea40146105b3576100b2565b8063015234ab146100b75780632db09c1c146100de5780632e567b361461010f578063485cc955146101a75780637b3a3c8b146101e25780638a2dc014146102e5575b600080fd5b3480156100c357600080fd5b506100cc6105c8565b60408051918252519081900360200190f35b3480156100ea57600080fd5b506100f36105ce565b604080516001600160a01b039092168252519081900360200190f35b6101a5600480360360a081101561012557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561016757600080fd5b82018360208201111561017957600080fd5b803590602001918460018302840111600160201b8311171561019a57600080fd5b5090925090506105dd565b005b3480156101b357600080fd5b506101a5600480360360408110156101ca57600080fd5b506001600160a01b0381358116916020013516610887565b610270600480360360808110156101f857600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561023257600080fd5b82018360208201111561024457600080fd5b803590602001918460018302840111600160201b8311171561026557600080fd5b509092509050610895565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102aa578181015183820152602001610292565b50505050905090810190601f1680156102d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102f157600080fd5b506100f36004803603602081101561030857600080fd5b50356001600160a01b03166108b1565b34801561032457600080fd5b506101a56108cc565b34801561033957600080fd5b50610270600480360360a081101561035057600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111600160201b831117156103c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610929945050505050565b34801561041257600080fd5b506100f36004803603602081101561042957600080fd5b50356001600160a01b0316610a21565b34801561044557600080fd5b506101a5610a3f565b610270600480360360c081101561046457600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156104aa57600080fd5b8201836020820111156104bc57600080fd5b803590602001918460018302840111600160201b831117156104dd57600080fd5b509092509050610c20565b3480156104f457600080fd5b506101a56004803603604081101561050b57600080fd5b810190602081018135600160201b81111561052557600080fd5b82018360208201111561053757600080fd5b803590602001918460208302840111600160201b8311171561055857600080fd5b919390929091602081019035600160201b81111561057557600080fd5b82018360208201111561058757600080fd5b803590602001918460208302840111600160201b831117156105a857600080fd5b509092509050610e7a565b3480156105bf57600080fd5b506100f361100a565b60035481565b6001546001600160a01b031681565b6001546001600160a01b031633148061061157506001546001600160a01b031661060633611019565b6001600160a01b0316145b61065d576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60608061066a8484611028565b91509150805160001461068857506040805160208101909152600081525b600061069389610a21565b90506106a7816001600160a01b0316611152565b6106ce5760006106bb8a838b8b8b89611158565b905080156106cc575050505061087f565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106107345780518252601f199092019160209182019101610715565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610794576040519150601f19603f3d011682016040523d82523d6000602084013e610799565b606091505b509150915060008215806107ae575060208251105b156107bb575060016107ea565b60006107c883600c611184565b90508c6001600160a01b0316816001600160a01b0316146107e857600191505b505b80156108185761080c8c308d8c604051806020016040528060008152506111e4565b5050505050505061087f565b505050610826818888611264565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb2896040518082815260200191505060405180910390a45050505b505050505050565b61089182826112d8565b5050565b60606108a78686866000808888610c20565b9695505050505050565b6004602052600090815260409020546001600160a01b031681565b60006108d661132a565b9050336001600160a01b03821614610926576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b6060632e567b3660e01b868686866109436003548861134f565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b838110156109ae578181015183820152602001610996565b50505050905090810190601f1680156109db5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6001600160a01b039081166000908152600460205260409020541690565b6000805481906000198101908110610a5357fe5b6000918252602091829020600391909102018054600180830154600280850180546040805161010096831615969096026000190190911692909204601f81018890048802850188019092528184529496506001600160a01b039093169490936060939091830182828015610b085780601f10610add57610100808354040283529160200191610b08565b820191906000526020600020905b815481529060010190602001808311610aeb57829003601f168201915b505050505090506000805480610b1a57fe5b60008281526020812060036000199093019283020180546001600160a01b03191681556001810182905590610b526002830182611810565b5050905560006060846001600160a01b031684846040518082805190602001908083835b60208310610b955780518252601f199092019160209182019101610b76565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610bf7576040519150601f19603f3d011682016040523d82523d6000602084013e610bfc565b606091505b50915091508160008114610c0f57610c17565b815160208301fd5b50505050505050565b60603415610c60576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610c6d336113e2565b15610c8657610c7c85856113f6565b9092509050610cc3565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b805115610d0d576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b600080610d198c610a21565b9050610d2d816001600160a01b0316611152565b610d73576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610db657600080fd5b505afa158015610dca573d6000803e3d6000fd5b505050506040513d6020811015610de057600080fd5b50516001600160a01b031614610e35576040805162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b604482015290519081900360640190fd5b610e4081858c611434565b9950610e4f8c858d8d876111e4565b6040805160208082019390935281518082039093018352810190529c9b505050505050505050505050565b6001546001600160a01b0316331480610eae57506001546001600160a01b0316610ea333611019565b6001600160a01b0316145b610efa576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60005b8381101561100357828282818110610f1157fe5b905060200201356001600160a01b031660046000878785818110610f3157fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550828282818110610f9157fe5b905060200201356001600160a01b03166001600160a01b0316858583818110610fb657fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600101610efd565b5050505050565b6002546001600160a01b031681565b61111061111160901b01190190565b6060808383604081101561103b57600080fd5b810190602081018135600160201b81111561105557600080fd5b82018360208201111561106757600080fd5b803590602001918460018302840111600160201b8311171561108857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156110da57600080fd5b8201836020820111156110ec57600080fd5b803590602001918460018302840111600160201b8311171561110d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b3b151590565b600061117687308786604051806020016040528060008152506111e4565b506001979650505050505050565b600081601401835110156111d4576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b6003546000908161120287866111fd8b838b848b610929565b611557565b604080516001600160a01b038b811682526020820186905281830189905291519293508392828a16928b16917f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d73919081900360600190a4979650505050505050565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156112c457600080fd5b505af1158015610c17573d6000803e3d6000fd5b6112e28282611586565b6001600160a01b038116610891576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611399578181015183820152602001611381565b50505050905090810190601f1680156113c65780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6002546001600160a01b0390811691161490565b600060608383604081101561140a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156110da57600080fd5b600080846001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561148d57600080fd5b505afa1580156114a1573d6000803e3d6000fd5b505050506040513d60208110156114b757600080fd5b505190506114c6858585611652565b506000856001600160a01b03166370a08231866040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561151f57600080fd5b505afa158015611533573d6000803e3d6000fd5b505050506040513d602081101561154957600080fd5b505190506108a782826116c4565b6003805460019081019091555460009061157e90829086906001600160a01b031685611721565b949350505050565b6001600160a01b0382166115d7576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6001546001600160a01b031615611624576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b604080516374f4f54760e01b81526001600160a01b0384811660048301526024820184905291516000928616916374f4f547916044808301928692919082900301818387803b1580156116a457600080fd5b505af11580156116b8573d6000803e3d6000fd5b50939695505050505050565b60008282111561171b576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600061172f85858585611738565b95945050505050565b604080516060810182526001600160a01b03848116825260208083018881529383018581526000805460018101825581805285517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563600390920291820180546001600160a01b0319169190961617855595517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564870155905180519195611805937f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56590910192910190611854565b505050949350505050565b50805460018160011615610100020316600290046000825580601f106118365750610926565b601f01602090049060005260206000209081019061092691906118d2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061189557805160ff19168380011785556118c2565b828001600101855582156118c2579182015b828111156118c25782518255916020019190600101906118a7565b506118ce9291506118d2565b5090565b6118ec91905b808211156118ce57600081556001016118d8565b9056fea2646970667358221220cbbc7ed7c90f6731e07664b198cd6398b2e41ba15f490d3745242944bc28e3c164736f6c634300060b0033'
  static readonly abi: (
    | {
        anonymous: boolean
        inputs: {
          indexed: boolean
          internalType: string
          name: string
          type: string
        }[]
        name: string
        type: string
        outputs?: undefined
        stateMutability?: undefined
      }
    | {
        inputs: {
          internalType: string
          name: string
          type: string
        }[]
        name: string
        outputs: {
          internalType: string
          name: string
          type: string
        }[]
        stateMutability: string
        type: string
        anonymous?: undefined
      }
  )[]
  static createInterface(): L2CustomGatewayTesterInterface
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGatewayTester
}
export {}
