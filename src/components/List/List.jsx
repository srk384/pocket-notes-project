import "./ListStyle.css";
import { useModalContext } from "../../Context/ModalContext";
import { useNotesContext } from "../../Context/NotesContext";
import { useMobileViewContext } from "../../Context/MobileViewContext";
import { useState } from "react";
const List = () => {
  const { setOpenModal } = useModalContext();
  const { notes, setOpenNote } = useNotesContext();
  const { setView } = useMobileViewContext();
  const [activeNote, setActiveNote] = useState(null);

  return (
    <>
      <div className="containerLeft">
        <h1
          onClick={() => {
            setOpenNote(false);
            setActiveNote(null);
          }}
        >
          Pocket Notes
        </h1>
        <div className="noteslist">
          {notes.length == 0 && <div className="noNote">Add some notes</div>}
          {notes &&
            notes.map((note, index) => (
              <div
                key={index}
                className="noteTitle"
                style={
                  activeNote === index
                    ? { backgroundColor: "#2f2f2f20" }
                    : { backgroundColor: "white" }
                }
                onClick={() => {
                  setOpenNote(note);
                  setView("notes");
                  setActiveNote(index);
                }}
              >
                <div style={{ backgroundColor: note.color }}>
                  {note.groupName
                    .split(" ")
                    .map((word) => word[0].toUpperCase())
                    .join("")
                    .slice(0, 2)}
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
