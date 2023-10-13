import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [notFound, setNotFound] = useState(false);
  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        authenticated,
        setAuthenticated,
        notFound,
        setNotFound,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
