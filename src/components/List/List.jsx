import "./ListStyle.css";
import { useModalContext } from "../../Context/ModalContext";
import { useNotesContext } from "../../Context/NotesContext";
import { useMobileViewContext } from "../../Context/MobileViewContext";

const List = () => {
  const { setOpenModal } = useModalContext();
  const { notes, openNote, setOpenNote } = useNotesContext();
  const { setView } = useMobileViewContext();

  return (
    <>
      <div className="containerLeft">
        <h1
          onClick={() => {
            setOpenNote(false);
          }}
        >
          Pocket Notes
        </h1>
        <div className="noteslist">
          {notes &&
            notes.map((note, index) => (
              <div
                key={index}
                className="noteTitle"
                style={
                  openNote == note
                    ? { backgroundColor: "#2f2f2f20" }
                    : { backgroundColor: "white" }
                }
                onClick={() => {
                  setOpenNote(note);
                  setView("notes");
                }}
              >
                <div style={{ backgroundColor: note.color }}>
                  {note.groupName
                    .split(" ")
                    .map((word) => word[0].toUpperCase())
                    .join("")}
                </div>
                <div>{note.groupName}</div>
              </div>
            ))}
        </div>
        <div className="addbtn">
          <img
            src="./addbtn.svg"
            alt=""
            style={{ width: "60px" }}
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
    </>
  );
};

export default List;
