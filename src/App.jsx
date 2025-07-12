import "./App.css";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";
import { useModalContext } from "./Context/ModalContext";
import { useMobileViewContext } from "./Context/MobileViewContext";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { openModal } = useModalContext();

  const { view, isMobileView } = useMobileViewContext();

  return (
    <div className="body">
      <ToastContainer />
      {(view === "list" || !isMobileView) && <List />}
      {(view === "notes" || !isMobileView) && <Notes />}
      {openModal && <Modal />}
    </div>
  );
}

export default App;
