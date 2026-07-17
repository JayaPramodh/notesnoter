import { useNotes } from "../../context/notes-context";

export const NotesCard = ({ note }) => {

    const { id, title, text, pinned, archived, bin } = note;

    const { notesDispatch } = useNotes();

    console.log(id);

    const handlePinToggle = (id) => {
        notesDispatch({
            type: 'PINTOGGLE',
            payload: {
                id: id,
            }
        })
    }

    const handleArchiveToggle = (id) => {
        notesDispatch({
            type: 'ARCHIVETOGGLE',
            payload: {
                id: id,
            }
        })
    }

    const handleBinToggle = (id) => {
        notesDispatch({
            type: 'BINTOGGLE',
            payload: {
                id: id,
            }
        })
    }

    return (
        <div key={id} className="notes-card relative p-10 m-10">
            <h3 className="border-bottom-2 p-2" style={{ color: "#0D652D" }}>
                {title}
                <button onClick={() => handlePinToggle(id)}>
                    <span className='material-symbols-outlined absolute top-right-4 cursor-pointer'>
                        {
                            !pinned ? 'push_pin' : 'keep_off'
                        }
                    </span>
                </button>
            </h3>
            <p>
                {text}
                <button onClick={() => handleArchiveToggle(id)}>
                    <span className="material-symbols-outlined absolute bottom-15 right-50 cursor-pointer">
                        {
                            !archived ? 'archive' : 'unarchive'
                        }
                    </span>
                </button>
                <button onClick={() => handleBinToggle(id)}>
                    <span className="material-symbols-outlined absolute bottom-right-15 cursor-pointer">
                        {
                            !bin ? 'delete' : 'restore_from_trash'
                        }
                    </span>
                </button>
            </p>
        </div>
    )
}