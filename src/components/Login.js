import React from "react";
import { loginUser } from "../actions/loginUsers";
import { useDispatch, connect } from "react-redux";

const Login = (props) => {
   //required for dispatch call below
   const dispatch = useDispatch();

   //placeholder function to dispatch a login
   const handleLogin = () => {
      dispatch(loginUser(form));
   };

   //redux state as props example
   //see index.js in ./reducers to see how auth became a keyword
   if (props.redux.auth.loading)
      return (
         <div className="formContainer">
            <h1>LOADING...</h1>
         </div>
      );
   else {
      return <div className="formContainer"></div>;
   }
};

// state gets passed into the function and then mapped
// to a key for reference inside of the component

const mapStatetoProps = (state) => {
   return {
      redux: state,
   };
};

//connect uses the mapstatetoprops function above to tie app into the store
export default connect(mapStatetoProps)(Login);
