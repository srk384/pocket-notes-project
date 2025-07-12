import { createContext, useContext, useState, useEffect } from "react";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("pocketnotes")) || [];
  });

  const [openNote, setOpenNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("pocketnotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes, openNote, setOpenNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;

export const useNotesContext = () => useContext(NotesContext);
