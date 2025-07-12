import Addnote from "../AddNote/AddNote.jsx";
import LoadScreen from "../LoadScreen/LoadScreen";
import "./NotesStyle.css";
import { useNotesContext } from "../../Context/NotesContext";

const Notes = () => {
  const { openNote } = useNotesContext();

  return (
    <div className="containerRight">
      {!openNote && <LoadScreen />}
      {openNote && <Addnote />}
    </div>
  );
};

export default Notes;
