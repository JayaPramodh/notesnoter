import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import { NotesCard } from "../../components/notes-card";
import { useNotes } from "../../context/notes-context";

export const Important = () => {

    const { notes } = useNotes();

    const pinnedNotes = notes.filter((note) => note.pinned && !note.bin);

    console.log(notes);

    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col">
                        <h2 className="header-style">Important Notes</h2>
                        {
                            pinnedNotes.length === 0 &&
                            <p className="header-style">Please pin to add notes to important</p>
                        }
                        <div className="flex flex-row flex-wrap">
                            {
                                pinnedNotes.length > 0 &&
                                pinnedNotes.map((note) => <NotesCard key={note.id} note={note} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}