import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/actionCreators";

function App() {
  const logged = useSelector(state => state.loggedIn)
  const dispatch = useDispatch()
  const { login, logout } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      <h1>{logged ? "Member" : "Guest"}</h1>
      <button onClick={() => login(true)}>Login </button>
      <button onClick={() => logout(false)}>Logout</button>
    </>
  );
}

export default App;
