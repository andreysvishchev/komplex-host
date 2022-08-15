import axios from "axios";
import {LoginParamsType} from "../reducers/authReducer";

const instance = axios.create({
    baseURL: 'https://192.168.254.26/api/',
    withCredentials: true,
})


export const supportApi = {
    getSupportData() {
        return axios.get('http://localhost:3004/support')
    },
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



