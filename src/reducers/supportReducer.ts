import {Dispatch} from "redux";
import {supportApi} from "../api/api";

let initialState: InitialStateType = {
    applications: [],
    messages: []
}

export const supportReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET-APPLICATIONS":
            // return [...action,]
            return {...state, applications: action.applications}
        case "GET-MESSAGES":
            return {...state, messages: action.messages}
        case "GET-APP-MESS":
        const newarr =  state.messages.filter(el=>el.dialog === action.applicationId)
            console.log(newarr)
            return {...state, messages: newarr}

        default:
            return state
    }
}

const getApplications = (applications: ApplicationType[]) => {
    return {
        type: 'GET-APPLICATIONS',
        applications
    } as const
}

const getMessages = (messages: MessageType[]) => {
    return {
        type: 'GET-MESSAGES',
        messages
    } as const
}

export const getApplicationMessages = (applicationId: string) => {
    return {
        type: 'GET-APP-MESS',
        applicationId
    } as const
}

export const fetchApplications = () => (dispatch: Dispatch) => {
    supportApi.getApplications()
        .then((res) => {
            dispatch(getApplications(res.data))
        })
}

export const fetchMessages = () => (dispatch: Dispatch) => {
    supportApi.getMessages()
        .then((res) => {
            dispatch(getMessages(res.data))
        })
}


export type ApplicationType = {
    id: string
    number_app: string
    title: string
    lastMessage: string
    created_date: string
    read: boolean
    status: string
    // messages: MessageType[]
}
export type MessageType = {
    id: string
    text: string
    time: string
    my: boolean
    dialog: string
}
export type InitialStateType = {
    applications: ApplicationType []
    messages: MessageType []
}
export type ActionsType =
    | ReturnType<typeof getApplications>
    | ReturnType<typeof getMessages>
    | ReturnType<typeof getApplicationMessages>