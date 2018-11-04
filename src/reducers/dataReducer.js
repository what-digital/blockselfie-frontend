import {DECODE_WIF} from "../actions/neo/types";
import {FETCH_IMAGES} from "../actions/firebase/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DECODE_WIF:
      return action.payload;
    case FETCH_IMAGES:
      return action.payload;
    default:
      return state;
  }
};
