import Neon from '@cityofzion/neon-js';
import {rpc, api, u, sc, wallet} from '@cityofzion/neon-js';
import {todosRef} from "../../config/firebase";
import {FETCH_TODOS} from "../todo/types";

console.log(new wallet.Account('L3QGJ5FMg7LQWYkVekkwRDyYL3HXTw3ntYrTupjp3EViru7kTGN7').address)

// const config = {
//   net: new api.neoscan.instance("TestNet"),
//   script: Neon.create.script({
//     scriptHash: "5c723121a650400b4e3084103e3b0642fab3e063",
//     operation: "get_requests_for_target_address",
//     args: [u.reverseHex('414c4131655965504d694e56666948765147566e757044466d6a6f504677536f5563')]
//   }),
//   // account: new wallet.Account(privateKey),
//   // gas: 1
// };

// Neon.doInvoke(config).then(res => {
//   console.log(res);
// }).catch(console.log);

// let config = {
//   name: 'PrivateNet',
//   extra: {
//     neoscan: 'http://localhost:4000/api/main_net'
//   }
// }
// const privateNet = new rpc.Network(config)
// Neon.add.network(privateNet)
//
const param2 = sc.ContractParam.byteArray(
  "ALA1eYePMiNVfiHvQGVnupDFmjoPFwSoUc",
  "address"
);

rpc.Query.invoke(
  '9639e60a66ec024a4b32503d3078ca4b1bed5310',
  Neon.create.contractParam("String", "get_requests_for_target_address"),
  sc.ContractParam.array(param2)
).execute('http://neo-privnet.what.digital:30336').then(res => {
  console.log(res);
});

// rpc.Query.invokeFunction(
//   '5c723121a650400b4e3084103e3b0642fab3e063',
//   ["get_requests_for_target_address", 'ALA1eYePMiNVfiHvQGVnupDFmjoPFwSoUc']
// ).execute('http://neo-privnet.what.digital:30336').then(res => {
//   console.log(res);
// });

// const props = {
//   scriptHash: '5b7074e873973a6ed3708862f219a6fbf4d1c411', // Scripthash for the contract
//   operation: 'balanceOf', // name of operation to perform.
//   args: ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y'] // any optional arguments to pass in. If null, use empty array.
// }
//
// const script = Neon.create.script(props)
// rpc.Query.invokeScript(script).execute('http://neo-privnet.what.digital:30336').then(console.log)

export const getName = () => {
  // const config = {
  //   net: new api.neoscan.instance("TestNet"),
  //   script: Neon.create.script({
  //     scriptHash: "5b7074e873973a6ed3708862f219a6fbf4d1c411",
  //     operation: "balanceOf",
  //     args: [Neon.u.reverseHex("cef0c0fdcfe7838eff6ff104f9cdec2922297537")]
  //   }),
  //   account: new wallet.Account(privateKey),
  //   gas: 1
  // };
}

// const privateKey = 'L3QGJ5FMg7LQWYkVekkwRDyYL3HXTw3ntYrTupjp3EViru7kTGN7'
//  config = {
//   net: new api.neoscan.instance("PrivateNet"),
//   script: Neon.create.script({
//     scriptHash: "5b7074e873973a6ed3708862f219a6fbf4d1c411",
//     operation: "create_verification_request",
//     args: [
//       Neon.u.reverseHex("414c4131655965504d694e56666948765147566e757044466d6a6f504677536f5563"),
//       Neon.u.reverseHex("414b326e4a4a704a72366f36363443574a4b69315152586a71656963327a52703879")
//     ]
//   }),
//   account: new wallet.Account(privateKey),
//   gas: 1
// };
//
// Neon.doInvoke(config).then(res => {
//   console.log(res);
// });
