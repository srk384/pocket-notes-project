import "./ModalStyles.css";
import { useModalContext } from "../../Context/ModalContext";
import { useState } from "react";
import { useNotesContext } from "../../Context/NotesContext";
import { ToastContainer, toast } from "react-toastify";

const Modal = () => {
  const { openModal, setOpenModal } = useModalContext();
  const { notes, setNotes } = useNotesContext();

  const [error, setError] = useState({
    group: false,
    color: false,
    duplicate: false,
  });
  const [pickColor, setPickColor] = useState("");
  const [groupName, setGroupName] = useState("");

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const notify = () => toast("Group Added Successfully!");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = notes.some(
      (note) => note.groupName?.toLowerCase() === groupName.toLowerCase()
    );

    if (groupName.length < 3 && !pickColor) {
      setError({ group: true, color: true });
      return;
    } else if (groupName.length < 3) {
      setError({ group: true, color: false, duplicate: false });
      return;
    } else if (!pickColor) {
      setError({ group: false, color: true, duplicate: false });
      return;
    } else if (isDuplicate) {
      setError({ group: false, color: false, duplicate: true });
      return;
    }

    setNotes([
      ...notes,
      {
        groupName: groupName,
        color: pickColor,
        id: crypto.randomUUID(),
        notelist: [],
      },
    ]);

    setError({
      group: false,
      color: false,
      duplicate: false,
    });

    setOpenModal(false);
    notify();
  };

  return (
    <div
      className="modalBody"
      onClick={(e) => {
        e.preventDefault();
        setOpenModal(false);
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>Create New Group</h2>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="nameInput">
            <label htmlFor="groupNameInput">Group Name</label>
            <input
              type="text"
              name=""
              id="groupNameInput"
              onChange={(e) => setGroupName(e.target.value)}
              value={groupName}
            />
          </div>
          {error.group && (
            <div className="displayError">
              Group name should be 3 character long.
            </div>
          )}
          <div className="colorPickerInput">
            <label htmlFor="" style={{ display: "inline-block" }}>
              Choose Color
            </label>
            {colors.map((color) => (
              <div
                key={color}
                style={
                  pickColor == color
                    ? {
                        backgroundColor: color,
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginLeft: "10px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        border: "2px solid black",
                      }
                    : {
                        backgroundColor: color,
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginLeft: "10px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }
                }
                className={`colorpicker ${color}`}
                onClick={(e) => {
                  setPickColor(color);
                  //   e.currentTarget.style.;
                }}
              ></div>
            ))}
          </div>
          {error.color && (
            <div className="displayError">Please select a color.</div>
          )}
          {error.duplicate && (
            <div className="displayError">
              Please enter a unique group name.
            </div>
          )}
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
