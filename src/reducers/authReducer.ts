import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {AxiosError} from "axios";
import {openCaptchaModal, openConfirmRecoveryModal, openModalAC, openRecoveryModal} from "./modal-reducer";
import {AppDispatchType} from "../store/store";
import {
    captchaError,
    captchaUrl,
    loginError,
    recoveryError,
    resetCaptcha,
    showCaptchaError,
    showLoginError, showRecoveryError
} from "./errorReducer";
import {setLoading} from "./appReducer";

let initialState = {
    isLoggedIn: false,
    status: '1',

}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "CHANGE-STATUS":
            return {...state, status: action.value}

        default:
            return state
    }
}

// actions
export const changeUserStatus = (value: string) => {
    return {type: 'CHANGE-STATUS', value} as const
}

// thunk
export const getStatus = () => (dispatch: AppDispatchType) => {
    authApi.getStatus()
        .then((res) => {

            dispatch(changeUserStatus(res.data.result))
        })
}

export const login = (values: LoginParamsType) => (dispatch: AppDispatchType) => {
    dispatch(setLoading(true))
    authApi.login(values)
        .then((res) => {
            if (res.data.result === '0') {
                dispatch(loginError(false))
                //  dispatch(changeUserStatus('0'))
                dispatch(getStatus())
            } else {
                if (res.data.result === '100') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Введен неверный логин или пароль'))
                } else if (res.data.result === '101') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Превышено число попыток ввода неверного пароля. Обратитесь в Тех. поддержку'))
                } else if (res.data.result === '102') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Учетная запись временно заблокирована'))
                }
            }
        })
        .catch((err: AxiosError) => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setLoading(false))
        })

}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then((res => {
            if (res.data.result === '0') {
                dispatch(changeUserStatus('1'))
            }
        }))
}
export const registration = (email: string, password: string) => (dispatch: AppDispatchType) => {
    dispatch(setLoading(true))
    authApi.registration(email, password)
        .then((res) => {
            if (res.data.result === '0') {
                dispatch(openCaptchaModal(true))
            } else {
                console.log(res)
                if (res.data.result === '103') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Ошибка в введенных данных'))
                } else if (res.data.result === '104') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Нажмите выход в Личном Кабинете'))
                } else if (res.data.result === '105') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Неправильно введен email'))
                } else if (res.data.result === '106') {
                    dispatch(loginError(true))
                    dispatch(showLoginError('Пароль должен содержать 8 символов. Заглавные, строчные буквы и цифры'))
                }
            }
        })
        .catch((err: AxiosError) => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
}
export const getCaptchaUrl = () => (dispatch: AppDispatchType) => {
    authApi.captchaUrl()
        .then((res => {
            dispatch(captchaUrl(res.request.responseURL))
        }))
}
export const sendCaptcha = (values: string) => (dispatch: AppDispatchType) => {
    dispatch(setLoading(true))
    authApi.sendCaptcha(values)
        .then((res => {
            if (res.data.result === '0') {
                dispatch(openCaptchaModal(false))
                dispatch(openModalAC(true, true, 'Письмо с подтверждением регистрации отправлено на почту'))
            } else {
                if (res.data.result === '107') {
                    dispatch(getCaptchaUrl())
                    dispatch(resetCaptcha())
                    dispatch(captchaError(true))
                    dispatch(showCaptchaError('Вы ввели не правильный текст'))
                }
            }
        }))
        .finally(() => {
            dispatch(setLoading(false))
        })
}
export const recoveryPassword = (email: string) => (dispatch: AppDispatchType) => {
    authApi.recoveryPassword(email)
        .then((res) => {
            if (res.data.result === '0') {
                dispatch(openRecoveryModal(false))
                dispatch(openModalAC(true, true, 'Письмо с инструкцией по смене пароля отправлено на почту'))
            } else {
                if (res.data.result === '103') {
                    dispatch(recoveryError(true))
                    dispatch(showRecoveryError('Ошибка в введенных данных'))
                }
            }
        })
}

export const confirmRecoveryPassword = (guid: string, password: string) => (dispatch: AppDispatchType) => {
    authApi.confirmRecoveryPassword(guid, password)
        .then((res) => {
            if (res.data.result === '0') {
                dispatch(openConfirmRecoveryModal(false))
                dispatch(openModalAC(true, true, 'Пароль успешно изменён'))
            } else {
                if (res.data.result === '103') {
                    dispatch(recoveryError(true))
                    dispatch(showRecoveryError('Ошибка в введенных данных'))
                }
            }
        })
}

// types
export type initialStateType = typeof initialState
export type LoginParamsType = {
    email: string
    password: string
}
export type ActionsType =
    | ReturnType<typeof changeUserStatus>