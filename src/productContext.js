import React from "react";

const productContext = React.createContext({});
export const ProductProvider = productContext.Provider;
export const ProductConsumer = productContext.Consumer;
export default productContext;
