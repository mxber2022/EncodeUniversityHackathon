'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TestArbCustomToken__factory = void 0
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require('ethers')
const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Gateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'bridgeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Address',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Gateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'someWackyCustomStuff',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferAndCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620025c5380380620025c5833981810160405260408110156200003757600080fd5b508051602090910151600054610100900460ff1680620000655750620000656001600160e01b036200018216565b8062000074575060005460ff16155b620000b15760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff16158015620000dd576000805460ff1961ff0019909116610100171660011790555b8015620000f0576000805461ff00191690555b5060cc80546001600160a01b038085166001600160a01b03199283161790925560cd805492841692909116919091179055604080518082018252600f81526e2a32b9ba21bab9ba37b6aa37b5b2b760891b6020808301919091528251808401909352600483526321a0a92160e11b838201526200017a929060129062000b52620001a1821b17901c565b505062000875565b60006200019a306200029460201b62000c131760201c565b1590505b90565b600054610100900460ff1680620001c65750620001c66001600160e01b036200018216565b80620001d5575060005460ff16155b620002125760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff161580156200023e576000805460ff1961ff0019909116610100171660011790555b62000252846001600160e01b036200029a16565b6200026784846001600160e01b03620003a016565b6200027b826001600160e01b036200047d16565b80156200028e576000805461ff00191690555b50505050565b3b151590565b600054610100900460ff1680620002bf5750620002bf6001600160e01b036200018216565b80620002ce575060005460ff16155b6200030b5760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff1615801562000337576000805460ff1961ff0019909116610100171660011790555b6200034a6001600160e01b036200049316565b6200037582604051806040016040528060018152602001603160f81b8152506200054660201b60201c565b62000389826001600160e01b036200061716565b80156200039c576000805461ff00191690555b5050565b600054610100900460ff1680620003c55750620003c56001600160e01b036200018216565b80620003d4575060005460ff16155b620004115760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff161580156200043d576000805460ff1961ff0019909116610100171660011790555b620004506001600160e01b036200049316565b6200046583836001600160e01b03620006e616565b801562000478576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b600054610100900460ff1680620004b85750620004b86001600160e01b036200018216565b80620004c7575060005460ff16155b620005045760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff1615801562000530576000805460ff1961ff0019909116610100171660011790555b801562000543576000805461ff00191690555b50565b600054610100900460ff16806200056b57506200056b6001600160e01b036200018216565b806200057a575060005460ff16155b620005b75760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff16158015620005e3576000805460ff1961ff0019909116610100171660011790555b8251602080850191909120835191840191909120606591909155606655801562000478576000805461ff0019169055505050565b600054610100900460ff16806200063c57506200063c6001600160e01b036200018216565b806200064b575060005460ff16155b620006885760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff16158015620006b4576000805460ff1961ff0019909116610100171660011790555b604051806052620025458239604051908190036052019020609a555080156200039c576000805461ff00191690555050565b600054610100900460ff16806200070b57506200070b6001600160e01b036200018216565b806200071a575060005460ff16155b620007575760405162461bcd60e51b815260040180806020018281038252602e81526020018062002597602e913960400191505060405180910390fd5b600054610100900460ff1615801562000783576000805460ff1961ff0019909116610100171660011790555b825162000798906036906020860190620007d3565b508151620007ae906037906020850190620007d3565b506038805460ff19166012179055801562000478576000805461ff0019169055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200081657805160ff191683800117855562000846565b8280016001018555821562000846579182015b828111156200084657825182559160200191906001019062000829565b506200085492915062000858565b5090565b6200019e91905b808211156200085457600081556001016200085f565b611cc080620008856000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80637ecebe00116100ad578063a708acce11610071578063a708acce14610449578063a9059cbb14610451578063c2eeeebd1461047d578063d505accf14610485578063dd62ed3e146104d65761012c565b80637ecebe001461039f5780638c2a993e146103c55780638fa74a0e146103f157806395d89b4114610415578063a457c2d71461041d5761012c565b80633644e515116100f45780633644e5151461025c57806339509351146102645780634000aea01461029057806370a082311461034b57806374f4f547146103715761012c565b806306fdde0314610131578063095ea7b3146101ae57806318160ddd146101ee57806323b872dd14610208578063313ce5671461023e575b600080fd5b610139610504565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017357818101518382015260200161015b565b50505050905090810190601f1680156101a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101da600480360360408110156101c457600080fd5b506001600160a01b03813516906020013561059b565b604080519115158252519081900360200190f35b6101f66105b8565b60408051918252519081900360200190f35b6101da6004803603606081101561021e57600080fd5b506001600160a01b038135811691602081013590911690604001356105be565b61024661064b565b6040805160ff9092168252519081900360200190f35b6101f6610654565b6101da6004803603604081101561027a57600080fd5b506001600160a01b038135169060200135610663565b6101da600480360360608110156102a657600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156102d657600080fd5b8201836020820111156102e857600080fd5b8035906020019184600183028401116401000000008311171561030a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106b7945050505050565b6101f66004803603602081101561036157600080fd5b50356001600160a01b0316610792565b61039d6004803603604081101561038757600080fd5b506001600160a01b0381351690602001356107ad565b005b6101f6600480360360208110156103b557600080fd5b50356001600160a01b031661080b565b61039d600480360360408110156103db57600080fd5b506001600160a01b038135169060200135610832565b6103f961088c565b604080516001600160a01b039092168252519081900360200190f35b61013961089b565b6101da6004803603604081101561043357600080fd5b506001600160a01b0381351690602001356108fc565b61039d61096a565b6101da6004803603604081101561046757600080fd5b506001600160a01b03813516906020013561096c565b6103f9610980565b61039d600480360360e081101561049b57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561098f565b6101f6600480360360408110156104ec57600080fd5b506001600160a01b0381358116916020013516610b27565b60368054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105905780601f1061056557610100808354040283529160200191610590565b820191906000526020600020905b81548152906001019060200180831161057357829003601f168201915b505050505090505b90565b60006105af6105a8610c19565b8484610c1d565b50600192915050565b60355490565b60006105cb848484610d09565b610641846105d7610c19565b61063c85604051806060016040528060288152602001611bb4602891396001600160a01b038a16600090815260346020526040812090610615610c19565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610e6016565b610c1d565b5060019392505050565b60385460ff1690565b600061065e610ef7565b905090565b60006105af610670610c19565b8461063c8560346000610681610c19565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610f2a16565b60006106c3848461096c565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561073e578181015183820152602001610726565b50505050905090810190601f16801561076b5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a361078284610c13565b1561064157610641848484610f8b565b6001600160a01b031660009081526033602052604090205490565b60cc546001600160a01b031633146107fd576040805162461bcd60e51b815260206004820152600e60248201526d4f4e4c595f6c324741544557415960901b604482015290519081900360640190fd5b6108078282611065565b5050565b6001600160a01b038116600090815260996020526040812061082c9061115b565b92915050565b60cc546001600160a01b03163314610882576040805162461bcd60e51b815260206004820152600e60248201526d4f4e4c595f6c324741544557415960901b604482015290519081900360640190fd5b610807828261115f565b60cc546001600160a01b031681565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105905780601f1061056557610100808354040283529160200191610590565b60006105af610909610c19565b8461063c85604051806060016040528060258152602001611c666025913960346000610933610c19565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610e6016565b565b60006105af610979610c19565b8484610d09565b60cd546001600160a01b031681565b834211156109e4576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6000609a54888888610a19609960008e6001600160a01b03166001600160a01b0316815260200190815260200160002061115b565b604080516020808201979097526001600160a01b0395861681830152939094166060840152608083019190915260a082015260c08082018990528251808303909101815260e0909101909152805191012090506000610a778261124b565b90506000610a8782878787611297565b9050896001600160a01b0316816001600160a01b031614610aef576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a166000908152609960205260409020610b1090611402565b610b1b8a8a8a610c1d565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b600054610100900460ff1680610b6b5750610b6b61140b565b80610b79575060005460ff16155b610bb45760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff16158015610bdf576000805460ff1961ff0019909116610100171660011790555b610be88461141c565b610bf284846114f2565b610bfb826115a8565b8015610c0d576000805461ff00191690555b50505050565b3b151590565b3390565b6001600160a01b038316610c625760405162461bcd60e51b8152600401808060200182810382526024815260200180611c426024913960400191505060405180910390fd5b6001600160a01b038216610ca75760405162461bcd60e51b8152600401808060200182810382526022815260200180611a566022913960400191505060405180910390fd5b6001600160a01b03808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610d4e5760405162461bcd60e51b8152600401808060200182810382526025815260200180611c1d6025913960400191505060405180910390fd5b6001600160a01b038216610d935760405162461bcd60e51b8152600401808060200182810382526023815260200180611a116023913960400191505060405180910390fd5b610d9e8383836115a3565b610de181604051806060016040528060268152602001611a78602691396001600160a01b038616600090815260336020526040902054919063ffffffff610e6016565b6001600160a01b038085166000908152603360205260408082209390935590841681522054610e16908263ffffffff610f2a16565b6001600160a01b038084166000818152603360209081526040918290209490945580518581529051919392871692600080516020611bdc83398151915292918290030190a3505050565b60008184841115610eef5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610eb4578181015183820152602001610e9c565b50505050905090810190601f168015610ee15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061065e6040518080611b626052913960520190506040518091039020610f1d6115be565b610f256115c4565b6115ca565b600082820183811015610f84576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604051635260769b60e11b815233600482018181526024830185905260606044840190815284516064850152845187946001600160a01b0386169463a4c0ed369490938993899360840190602085019080838360005b83811015610ff9578181015183820152602001610fe1565b50505050905090810190601f1680156110265780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561104757600080fd5b505af115801561105b573d6000803e3d6000fd5b5050505050505050565b6001600160a01b0382166110aa5760405162461bcd60e51b8152600401808060200182810382526021815260200180611bfc6021913960400191505060405180910390fd5b6110b6826000836115a3565b6110f981604051806060016040528060228152602001611a34602291396001600160a01b038516600090815260336020526040902054919063ffffffff610e6016565b6001600160a01b038316600090815260336020526040902055603554611125908263ffffffff61162016565b6035556040805182815290516000916001600160a01b03851691600080516020611bdc8339815191529181900360200190a35050565b5490565b6001600160a01b0382166111ba576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6111c6600083836115a3565b6035546111d9908263ffffffff610f2a16565b6035556001600160a01b038216600090815260336020526040902054611205908263ffffffff610f2a16565b6001600160a01b0383166000818152603360209081526040808320949094558351858152935192939192600080516020611bdc8339815191529281900390910190a35050565b6000611255610ef7565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156112ee5760405162461bcd60e51b8152600401808060200182810382526022815260200180611a9e6022913960400191505060405180910390fd5b8360ff16601b148061130357508360ff16601c145b61133e5760405162461bcd60e51b8152600401808060200182810382526022815260200180611b406022913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015611396573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166113f9576040805162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015290519081900360640190fd5b95945050505050565b80546001019055565b600061141630610c13565b15905090565b600054610100900460ff1680611435575061143561140b565b80611443575060005460ff16155b61147e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff161580156114a9576000805460ff1961ff0019909116610100171660011790555b6114b161167d565b6114d482604051806040016040528060018152602001603160f81b81525061171f565b6114dd826117df565b8015610807576000805461ff00191690555050565b600054610100900460ff168061150b575061150b61140b565b80611519575060005460ff16155b6115545760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff1615801561157f576000805460ff1961ff0019909116610100171660011790555b61158761167d565b611591838361189c565b80156115a3576000805461ff00191690555b505050565b6038805460ff191660ff92909216919091179055565b60655490565b60665490565b60008383836115d7611974565b6040805160208082019690965280820194909452606084019290925260808301523060a0808401919091528151808403909101815260c090920190528051910120949350505050565b600082821115611677576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600054610100900460ff1680611696575061169661140b565b806116a4575060005460ff16155b6116df5760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff1615801561170a576000805460ff1961ff0019909116610100171660011790555b801561171c576000805461ff00191690555b50565b600054610100900460ff1680611738575061173861140b565b80611746575060005460ff16155b6117815760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff161580156117ac576000805460ff1961ff0019909116610100171660011790555b825160208085019190912083519184019190912060659190915560665580156115a3576000805461ff0019169055505050565b600054610100900460ff16806117f857506117f861140b565b80611806575060005460ff16155b6118415760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff1615801561186c576000805460ff1961ff0019909116610100171660011790555b604051806052611ac08239604051908190036052019020609a55508015610807576000805461ff00191690555050565b600054610100900460ff16806118b557506118b561140b565b806118c3575060005460ff16155b6118fe5760405162461bcd60e51b815260040180806020018281038252602e815260200180611b12602e913960400191505060405180910390fd5b600054610100900460ff16158015611929576000805460ff1961ff0019909116610100171660011790555b825161193c906036906020860190611978565b508151611950906037906020850190611978565b506038805460ff1916601217905580156115a3576000805461ff0019169055505050565b4690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106119b957805160ff19168380011785556119e6565b828001600101855582156119e6579182015b828111156119e65782518255916020019190600101906119cb565b506119f29291506119f6565b5090565b61059891905b808211156119f257600081556001016119fc56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c75655065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e74726163742945524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122061299314cfd20d7805f0045192a6b2b04a078a8dd9cd80d45b6b925c2a1a6d2c64736f6c634300060b00335065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564'
const isSuperArgs = xs => xs.length > 1
class TestArbCustomToken__factory extends ethers_1.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = 'TestArbCustomToken'
  }
  deploy(_l2Gateway, _l1Address, overrides) {
    return super.deploy(_l2Gateway, _l1Address, overrides || {})
  }
  getDeployTransaction(_l2Gateway, _l1Address, overrides) {
    return super.getDeployTransaction(_l2Gateway, _l1Address, overrides || {})
  }
  attach(address) {
    return super.attach(address)
  }
  connect(signer) {
    return super.connect(signer)
  }
  static createInterface() {
    return new ethers_1.utils.Interface(_abi)
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider)
  }
}
exports.TestArbCustomToken__factory = TestArbCustomToken__factory
TestArbCustomToken__factory.bytecode = _bytecode
TestArbCustomToken__factory.abi = _abi