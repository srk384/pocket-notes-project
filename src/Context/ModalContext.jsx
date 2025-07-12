import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;
