import {Dispatch} from "redux";
import {servicesApi} from "../api/api";

export const initState = []

export const equipReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "GET-EQUIPS":
            return action.items
        case "SAVE-COMMENT":
            return state.map(el => el.id === action.id ? {
                ...el,
                comment: action.comment
            } : el)
        case "ASC-EQUIP-SORT":
            return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
        case "DESC-EQUIP-SORT":
            return [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
        default:
            return state

    }
}

// actions
const getEquips = (items: EquipType[]) => {
    return {type: 'GET-EQUIPS', items} as const
}
export const saveComment = (id: string, comment: string) => {
    return {type: 'SAVE-COMMENT', id, comment} as const
}
export const descEquipSort = () => {
    return {type: 'DESC-EQUIP-SORT'} as const
}
export const ascEquipSort = () => {
    return {type: 'ASC-EQUIP-SORT'} as const
}


// thunk
export const fetchEquips = () => (dispatch: Dispatch) => {
    servicesApi.getEquips()
        .then((res) => {
            dispatch(getEquips(res.data))
        })
}

// types
type ActionsType =
    | ReturnType<typeof saveComment>
    | ReturnType<typeof getEquips>
    | ReturnType<typeof descEquipSort>
    | ReturnType<typeof ascEquipSort>
export type InitStateType = EquipType[]
export type EquipType = {
    id: string
    number: string
    name: string
    comment: string
}