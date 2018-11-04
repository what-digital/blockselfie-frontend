import Neon from '@cityofzion/neon-js';
import * as neon from '@cityofzion/neon-js';
import {tx, rpc, api, u, sc, wallet} from '@cityofzion/neon-js';
import {todosRef} from "../../config/firebase";
import {FETCH_TODOS} from "../todo/types";
import {DECODE_WIF} from "./types";


const net = 'http://neo-privnet.what.digital:30336';
const neoscan = 'http://neo-privnet.what.digital';
const scriptHash = '5c723121a650400b4e3084103e3b0642fab3e063';
const WIF = 'L3QGJ5FMg7LQWYkVekkwRDyYL3HXTw3ntYrTupjp3EViru7kTGN7';
const account = new wallet.Account(WIF);
const publicKey = '02cd1ec4298c2739095d48859eeba539de31b39f630821005973c1d86b4287a324';


const param1 = Neon.create.contractParam("String", "set_owner");
// This is a convenient way to convert an address to a reversed scriptHash that smart contracts use.
const param2 = sc.ContractParam.byteArray(
  "AVf4UGKevVrMR1j3UkPsuoYKSC4ocoAkKx",
  "address"
);
const invoke = {
  useTailCall: true,
  scriptHash: '6739aef754964ea9dba65761b16acb8e6efdfcd0',
  operation: "set_owner",
  args: [sc.ContractParam.string("NOPE MARIO NOPE")]
};

const sb = Neon.create.scriptBuilder();
sb.emitAppCall(invoke.scriptHash, invoke.operation, invoke.args, false);
console.log(sb.str, 43232432)
// Returns a hexstring
const script = Neon.create.script({
  args: [sc.ContractParam.string("NOPE MARIO NOPE1")],
  useTailCall: true,
  scriptHash: '6739aef754964ea9dba65761b16acb8e6efdfcd0',
  operation: "set_owner",
});

let invokeTx = Neon.create.invocationTx();
invokeTx.script = sb.str;
console.log(script, 13123312)
console.log(invokeTx)
// invokeTx.attributes.push()

const signedTx = invokeTx.sign(WIF);
const params = sb.toScriptParams();
const hexTx = signedTx.serialize();

//
rpc.queryRPC('http://neo-privnet.what.digital:30336', {
  method: 'sendrawtransaction',
  params: [hexTx],
  // id: 1

}).then(() => rpc.Query.invokeFunction(
  '6739aef754964ea9dba65761b16acb8e6efdfcd0',
  "get_owner",
  // sc.ContractParam.array(param2)
).execute(net))


export const getName = () => {
}


// // TRANSACTION SEND


export const decodeWIF = wif => async dispatch => {
  const account = wallet.Account(wif);
  dispatch({
    type: DECODE_WIF,
    payload: account.address
  })
};
