import { FETCH_PROFILE, FETCH_PROFILE_FAILED, FETCH_PROFILE_SUCCESS } from "../utils/actionsConsts";

const initalData = {loading: false, error: false, data: null};
export default (state = initalData, action) => {
  switch(action.type) {
    case FETCH_PROFILE: return { ...state, loading: true };
    case FETCH_PROFILE_SUCCESS: return { ...state, data: action.payload, loading: false };
    case FETCH_PROFILE_FAILED: return { ...state, error: action.payload };
    default: return state;
  }
};
