import { Navbar } from "../../components/navbar";
import { NotesCard } from "../../components/notes-card";
import { Sidebar } from "../../components/sidebar";
import { useNotes } from "../../context/notes-context";

export const Home = () => {

    const { title, text, notes, notesDispatch } = useNotes();

    const handleTitleChange = (event) => {
        notesDispatch({
            type: 'TITLE',
            payload: {
                title: event.target.value
            }
        })
    }

    const handleTextChange = (event) => {
        notesDispatch({
            type: 'TEXT',
            payload: {
                text: event.target.value
            }
        })
    }

    const handleAddNotesClick = () => {
        if (title.length > 0 && text.length > 0) {
            notesDispatch({
                type: 'ADDNOTE'
            })
        }
    }

    const pinnedNotes = notes.filter((note) => note.pinned && !note.bin);
    const generalNotes = notes.filter((note) => !note.bin && !note.archived && !note.pinned);

    return (
        <>
            <Navbar />
            <main className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col flex-grow-1  p-10 m-10 text-color overflow-y-auto">
                    <div className="flex flex-col p-10 relative notes-area">
                        <h1>Add new note</h1>
                        <input value={title} placeholder="title" onChange={handleTitleChange} className="border-none border-bottom-2 p-2" style={{ height: "15%", color: "#0D652D" }} />
                        <textarea value={text} placeholder="description" onChange={handleTextChange} className="border-none" style={{ height: "80%" }}></textarea>
                        <button onClick={handleAddNotesClick}>
                            <span class="material-symbols-outlined absolute bottom-right-15 cursor-pointer">
                                add
                            </span>
                        </button>
                    </div>
                    <h2 className="header-style">General Notes</h2>
                    {
                        generalNotes.length === 0 &&
                        <p className="header-style">No general notes</p>
                    }
                    <div className="flex flex-row flex-wrap">
                        {
                            generalNotes.length > 0 &&
                            generalNotes.map((note) => <NotesCard key={note.id} note={note} />)
                        }
                    </div>
                    {
                        pinnedNotes.length > 0 && 
                        <h2 className="header-style">No Important Notes</h2>
                    }
                    <div className="flex flex-row flex-wrap">
                        {
                            pinnedNotes.length > 0 &&
                            pinnedNotes.map((note) => <NotesCard key={note.id} note={note} />)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}