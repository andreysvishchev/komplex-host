import {Dispatch} from "redux";
import {supportApi} from "../api/api";

let initialState: ApplicationType[] = []

export const supportReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET-DATA":
            return action.data

        default:
            return state
    }
}

export const getSupportData = (data: ApplicationType[]) => {
    return {type: 'GET-DATA', data} as const
}

export const fetchSupportData = () => (dispatch: Dispatch) => {

    supportApi.getSupportData()
        .then((res)=> {
          dispatch(getSupportData(res.data))
        })


}

export type InitialStateType = ApplicationType[]
export type ApplicationType = {
    id: number
    number_app: string
    title: string
    last_message: string
    created_date: string
    read: boolean
    status: boolean
    messages: MessageType[]
}
export type MessageType = {
    id: number
    text: string
    time: string
    my: boolean
}

export type ActionsType = ReturnType<typeof getSupportData>