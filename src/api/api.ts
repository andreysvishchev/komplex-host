import axios, {AxiosResponse} from "axios";
import {ApplicationType, MessageType} from "../reducers/supportReducer";
import {EquipType} from "../reducers/equipReducer";
import {LoginParamsType} from "../reducers/authReducer";

const instance = axios.create({
    baseURL: 'https://192.168.254.26/api/',
    withCredentials: true,

})


export const supportApi = {
    getApplications() {
        return axios.get('http://localhost:3004/applications')
    },
    getMessages() {
        return axios.get('http://localhost:3004/messages')
    }
}

export const servicesApi = {
    getEquips() {
        return axios.get('http://localhost:3004/equips')
    }
}

export const authApi = {
    getStatus () {
      return instance.post(`status`)
    },
    login(data: LoginParamsType) {
        return instance.post(`login`, data)
    },
    logout() {
        return instance.post(`logout`)
    },
    registration(email: string, password: string) {
        return instance.post(`reg`, {email, password})
    },
    captchaUrl() {
        return instance.post(`captcha`)
    },
    sendCaptcha(captcha: string) {
        return instance.post(`cap`, {captcha})
    },
    recoveryPassword(email: string) {
        return instance.post(`rec`, {email})
    },
    confirmRecoveryPassword(guid: string, password: string) {
        return instance.post(`recovery`, {guid, password})
    }
}

