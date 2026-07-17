import { Navbar } from "../../components/navbar"
import { Sidebar } from "../../components/sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/notes-card"

export const Archive = () => {

    const { notes } = useNotes();

    const archiveNotes = notes.filter((note) => note.archived && !note.bin);

    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col">
                        <h2 className="header-style">Archived</h2>
                        {
                            archiveNotes.length === 0 &&
                            <p className="header-style">No archives</p>
                        }
                        <div className="flex flex-row flex-wrap">
                            {
                                archiveNotes.length > 0 &&
                                archiveNotes.map((note) => <NotesCard key={note.id} note={note} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}