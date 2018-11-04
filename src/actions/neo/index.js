import Neon from '@cityofzion/neon-js';
import {rpc, api, u, sc, wallet} from '@cityofzion/neon-js';
import {DECODE_WIF} from "./types";


export const getName = () => {

}

export const decodeWIF = wif => async dispatch => {
  const account = wallet.Account(wif);
  dispatch({
    type: DECODE_WIF,
    payload: account.address
  })
};
