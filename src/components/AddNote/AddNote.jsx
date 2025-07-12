import "./AddNoteStyle.css";
import { useNotesContext } from "../../Context/NotesContext";
import { useState } from "react";
import { useMobileViewContext } from "../../Context/MobileViewContext";

const AddNote = () => {
  const { notes, setNotes, openNote, setOpenNote } = useNotesContext();
  const { isMobileView, setView } = useMobileViewContext();

  const [noteText, setNoteText] = useState("");

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!noteText.trim()) return;

    const date = new Date();
    const newNote = {
      note: noteText,
      date: date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    const updatedNotes = notes.map((note) =>
      note.id === openNote.id
        ? { ...note, notelist: [...note.notelist, newNote] }
        : note
    );

    setNotes(updatedNotes);
    setOpenNote((prev) => ({
      ...prev,
      notelist: [...prev.notelist, newNote],
    }));
    setNoteText("");
  };
  return (
    <div className="addnoteBody">
      <nav className="navbar">
        {isMobileView && (
          <img
            src="./backarrow.svg"
            alt=""
            className="backarrow"
            onClick={() => setView("list")}
          />
        )}
        <div style={{ backgroundColor: openNote?.color }}>
          {openNote.groupName
            ?.split(" ")
            .map((word) => word[0].toUpperCase())
            .join("")
            .slice(0, 2)}
        </div>
        <div>{openNote.groupName}</div>
      </nav>

      <div className="displaynotes">
        {openNote?.notelist?.map((note, index) => (
          <div className="note" key={index}>
            <p>{note.note}</p>
            <div className="datestamp">
              <div className="date">{note.date}</div>
              <div className="seperator"></div>
              <div className="time">{note.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="textarea">
        <textarea
          id="textareaInput"
          placeholder="Enter your text here..."
          onChange={handleNoteChange}
          value={noteText}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey &&
              noteText.trim().length > 0
            ) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <button className="sendbtn" onClick={handleSubmit} disabled={!noteText}>
          <svg
            className="sendsvg"
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={
              noteText.trim().length > 0
                ? { fill: "#001f8b" }
                : { fill: "#ABABAB" }
            }
          >
            <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddNote;
