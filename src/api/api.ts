import axios, { AxiosResponse } from "axios";
import {ApplicationType, MessageType} from "../reducers/supportReducer";

const instance = axios.create({
    baseURL: 'http://localhost:3004/',
})


export const supportApi = {
    getApplications () {
        return instance.get<ApplicationType[]>(`/applications`)
    },
    getMessages () {
        return instance.get<MessageType[]>(`/messages`)
    }

}

