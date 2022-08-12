import {v1} from "uuid";

export type NoteType = {
    id: string
    date: string
    caption: string
    important: boolean
}

export type InitStateType = NoteType []

let initState: InitStateType = [
    {id: v1(), date: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: true},
    {id: v1(), date: '17.09.2021', caption: 'Пополнить счёт', important: false},
    {id: v1(), date: '27.10.2021', caption: 'НужYно не забыть заплатить за сервер!!!', important: false},
    {id: v1(), date: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: false}
]

export const notesReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "DELETE-NOTE":
            return state.filter(el => el.id !== action.noteId)
        case "DELETE-ALL-NOTES":
            return state = []
        case "ADD-NOTE":
            return [{id: action.id, date: action.date, caption: action.text, important: action.important}, ...state]
        case "EDIT-NOTE":
            debugger
            return state.map(el=> el.id === action.id ? {...el, caption: action.text, important: action.important} : el)
        default:
            return state
    }
}

export type ActionType =
    | ReturnType<typeof deleteAllNotes>
    | ReturnType<typeof deleteNote>
    | ReturnType<typeof addNoteAC>
    | ReturnType<typeof editNoteAC>


export const deleteNote = (noteId: string) => {
    return {type: 'DELETE-NOTE', noteId} as const
}
export const deleteAllNotes = () => {
    return {type: 'DELETE-ALL-NOTES',} as const
}
export const addNoteAC = (date: string, text: string, important: boolean) => {
    return {type: 'ADD-NOTE', date, text, important, id: v1()} as const
}
export const editNoteAC = (id: string, text: string, important: boolean) => {
    return {type: 'EDIT-NOTE', id, text, important} as const
}
