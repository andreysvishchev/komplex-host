import {v1} from "uuid";


export const initState = [
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: ''},
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: ''},
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования', comment: 'Редактировать'},
]


export const equipReducer = (state: initStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "SAVE-COMMENT":
            return state.map(el=>el.id === action.id ? {...el, comment: action.comment} : el)
        default:
            return state

    }
}

// actions
export const saveCommentAC = (id: string, comment: string) => {
    return {type: 'SAVE-COMMENT', id, comment} as const
}

// types
type ActionsType =
    | ReturnType<typeof saveCommentAC>
export type initStateType = EquipType[]
export type EquipType = {
    id: string
    serialNumber: number
    name: string
    comment: string
}