import "./App.css";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";
import { useModalContext } from "./Context/modalContext";
import { useMobileViewContext } from "./Context/MobileViewContext";

function App() {
  const { openModal } = useModalContext();

  const { view, isMobileView } = useMobileViewContext();

  return (
    <div className="body">
      {(view === "list" || !isMobileView) && <List />}
      {(view === "notes" || !isMobileView) && <Notes />}
      {openModal && <Modal />}
    </div>
  );
}

export default App;
