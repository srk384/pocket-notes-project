import { createContext, useContext, useState, useEffect } from "react";
import { useIsMobileview } from "../Hooks/useIsMobileview";

const MobileViewContext = createContext();

const MobileViewContextProvider = ({ children }) => {
  const mobileView = useIsMobileview();
  const [isMobileView, setIsMobileView] = useState(null);
  const [view, setView] = useState("list");

  useEffect(() => {
    setIsMobileView(mobileView);
  }, [mobileView]);

  return (
    <MobileViewContext.Provider
      value={{ isMobileView, setIsMobileView, view, setView }}
    >
      {children}
    </MobileViewContext.Provider>
  );
};

export const useMobileViewContext = () => useContext(MobileViewContext);

export default MobileViewContextProvider;
