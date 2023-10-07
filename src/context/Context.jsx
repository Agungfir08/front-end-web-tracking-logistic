import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const Context = ({ children }) => {
  const [order, setOrder] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default Context;
