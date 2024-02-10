import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";

const UserContext = createContext();
const initialState = {users: [], show: 8, search: ""};

const ContextProvider = ({ children }) => {

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((value) => {
      dispatch({ type: "LOADDATA", payload: value?.data?.users });
    });
  }, []);

  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;

export const ConsumeContext = () => useContext(UserContext);
