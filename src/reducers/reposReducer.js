import { FETCH_REPOS, FETCH_REPOS_FAILED, FETCH_REPOS_SUCCESS } from "../utils/actionsConsts";

const initalData = {loading: false, error: false, data: null};
export default (state = initalData, action) => {
  switch(action.type) {
    case FETCH_REPOS: return { ...state, loading: true };
    case FETCH_REPOS_SUCCESS: return { ...state, data: action.payload, loading: false };
    case FETCH_REPOS_FAILED: return { ...state, error: action.payload };
    default: return state;
  }
};