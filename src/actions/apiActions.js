import axios from "axios";
import qs from "qs";
//actions are imported here for the api call to dispatch
import { LOGIN_GET, LOGIN_SUCCESS, LOGIN_FAILED } from "./types";

export const loginUser = (loginInfo) => (dispatch) => {
   dispatch({
      type: LOGIN_GET,
   });

   axios({
      method: "post",
      url: "http://localhost:5000/api/users/login",
      data: qs.stringify(loginInfo),
      headers: {
         "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
   })
      .then((res) => {
         //standard dispatch with payload syntax
         dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
         });
      })
      .catch((err) => {
         dispatch({
            type: LOGIN_FAILED,
            payload: err.data,
         });
      });
};
