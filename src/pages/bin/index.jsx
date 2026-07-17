import { Navbar } from "../../components/navbar"
import { Sidebar } from "../../components/sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/notes-card"

export const Bin = () => {

    const { notes } = useNotes();

    const binNotes = notes.filter((note) => note.bin);

    return (
        <>
            <Navbar />
            <main>
                <div className="flex flex-row">
                    <Sidebar />
                    <div className="flex flex-col">
                        <h2 className="header-style">General Notes</h2>
                        {
                            binNotes.length === 0 &&
                            <p className="header-style">No items in Bin</p>
                        }
                        <div className="flex flex-row flex-wrap">
                            {
                                binNotes.length > 0 &&
                                binNotes.map((note) => <NotesCard key={note.id} note={note} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}