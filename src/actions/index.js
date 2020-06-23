import * as ACTIONS from "../utils/actionsConsts";
import { URLs } from "../utils/constants";
import axios from "axios";

export const fetchProfile = () => (dispatch) => {
  dispatch({type: ACTIONS.FETCH_PROFILE});

  axios.get(URLs.FETCH_PROFILE_URL)
    .then(({ data }) => {
      dispatch({
        type: ACTIONS.FETCH_PROFILE_SUCCESS,
        payload: data
      });
    }, ({ error }) => {
      dispatch({
        type: ACTIONS.FETCH_PROFILE_FAILED,
        payload: error
      });
    })
};

export const fetchRepos = () => (dispatch) => {
  dispatch({type: ACTIONS.FETCH_REPOS});

  axios.get(URLs.FETCH_REPOS_URL)
    .then(({ data }) => {
      dispatch({
        type: ACTIONS.FETCH_REPOS_SUCCESS, 
        payload: data
      });
    }, ({ error }) => {
      dispatch({
        type: ACTIONS.FETCH_REPOS_FAILED, 
        payload: error
      });
    })
};
