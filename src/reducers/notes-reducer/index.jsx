export const notesReducer = (state, {type, payload}) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload.title
            }
        case 'TEXT':
            return {
                ...state,
                text: payload.text
            }
        case 'ADDNOTE':
            return {
                ...state,
                notes: [...state.notes, {
                    title: state.title,
                    text: state.text,
                    pinned: false,
                    archived: false,
                    bin: false,
                    id: crypto.randomUUID()
                }],
                title: '',
                text: ''
            }
        case 'PINTOGGLE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id
                        ? { ...note, pinned: !note.pinned }
                        : note
                )
            }
        case 'ARCHIVETOGGLE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id
                        ? { ...note, archived: !note.archived }
                        : note
                )
            }
        case 'BINTOGGLE': 
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id
                        ? { ...note, bin: !note.bin }
                        : note
                )
            }
        default:
            return state;
    }
}