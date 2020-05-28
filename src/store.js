import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const initialState = {};
//thunk is needed for asynchronus actions inside of js
const middleware = [thunk];

//the store needs to combined reducer 'rootReducer'
const store = createStore(
   rootReducer,
   //it needs its initial state listed above
   //not sure how this relates to each reducers own initial state
   initialState,
   //this statement ties thunk into redux and allows
   //redux dev tools to function
   compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export default store;
