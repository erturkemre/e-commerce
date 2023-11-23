import { useDispatch } from "react-redux";
import "./App.css";
import Main from "./layout/Main";
import { useEffect } from "react";
import { getUserVerify } from "./store/actions/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserVerify());
  }, []);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
