import { LOGIN_GET, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/types";

const initialState = {
   isAuthenticated: false,
   user: {},
   loading: false,
};

//the reducer gets handed the dispatch actions from the apiActions
export default function (state = initialState, action) {
   switch (action.type) {
      case LOGIN_GET:
         return {
            ...state,
            loading: true,
         };
      case LOGIN_SUCCESS:
         return {
            ...state,
            isAuthenticated: true,
            //payload from dispatched action is used to
            //add passed in information to state
            user: action.payload,
            loading: false,
         };
      case LOGIN_FAILED:
         return {
            ...state,
            loading: false,
         };
      //make sure there is a default in the switch statement
      default:
         return state;
   }
}
