import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";
const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    productsList: [],
    addToCart: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const items = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "getProducts", payload: items.data });
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(state.addToCart);
  const data = { state, dispatch };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};
export const customState = () => useContext(stateContext);
