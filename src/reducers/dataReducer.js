import { FETCH_TODOS } from "../actions/todo/types";
import {DECODE_WIF} from "../actions/neo/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DECODE_WIF:
      return action.payload;
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
