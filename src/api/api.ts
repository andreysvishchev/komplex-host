import axios, { AxiosResponse } from "axios";
import {ApplicationType, MessageType} from "../reducers/supportReducer";
import {EquipType} from "../reducers/equipReducer";
import {LoginParamsType} from "../reducers/authReducer";

const instance = axios.create({
    baseURL: 'https://192.168.254.26/api/',
    withCredentials: true,

})


export const supportApi = {
    getApplications () {
       return axios.get('http://localhost:3004/dialogs')
    },
    getMessages () {
        return axios.get('http://localhost:3004/messages')
    }
}

export const servicesApi = {
    getEquips () {
        return axios.get('http://localhost:3004/equips')
    }
}

export const authApi = {
    login (data: LoginParamsType) {
        return instance.post(`login`, data)
    },
    logout () {
        return instance.post(`logout`)
    },
    registration (email: string, password: string) {
        return instance.post(`reg`, {email, password})
    }
}

