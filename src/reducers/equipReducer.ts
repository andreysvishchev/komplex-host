import {v1} from "uuid";
import {Dispatch} from "redux";
import {servicesApi} from "../api/api";
import {a} from "@react-spring/web";


export const initState = []

export const equipReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "GET-EQUIPS":
            return action.items
        case "SAVE-COMMENT":
            return state.map(el => el.id === action.id ? {...el, comment: action.comment} : el)
        default:
            return state

    }
}

// actions
const getEquips = (items: EquipType[]) => {
    return {type: 'GET-EQUIPS', items} as const
}
export const saveCommentAC = (id: string, comment: string) => {
    return {type: 'SAVE-COMMENT', id, comment} as const
}

// thunk
export const fetchEquips = () => (dispatch: Dispatch) => {
    servicesApi.getEquips()
        .then((res)=> {
            dispatch(getEquips(res.data))
        })
}

// types
type ActionsType =
    | ReturnType<typeof saveCommentAC>
    | ReturnType<typeof getEquips>
export type InitStateType = EquipType[]
export type EquipType = {
    id: string
    number: string
    name: string
    comment: string
}