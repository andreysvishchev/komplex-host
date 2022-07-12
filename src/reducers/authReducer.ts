import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {AxiosError} from "axios";

let initialState = {
    isLoggedIn: false,
    loginError: false,
    messageError: ''
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, isLoggedIn: action.value}
        case "LOGIN-ERROR":
            return {...state, loginError: action.value}
        case "SHOW-ERROR":
            return {...state, messageError: action.error}
        default:
            return state
    }
}

// actions
export const setAppInitialized = (value: boolean) => {
    return {type: 'SET-INITIALIZED', value} as const
}
export const loginError = (value: boolean) => {
    return {type: "LOGIN-ERROR", value} as const
}
export const showError = (error: string) => {
    return {type: 'SHOW-ERROR', error} as const
}


// thunk
export const login = (values: LoginParamsType) => (dispatch: Dispatch) => {
    authApi.login(values)
        .then((res) => {
            if (res.data.result === '0') {
                dispatch(loginError(false))
                dispatch(setAppInitialized(true))
            } else {
                console.log(res)
                if (res.data.result === '100') {
                    dispatch(loginError(true))
                    dispatch(showError('Введен неверный логин или пароль'))
                } else if (res.data.result === '101') {
                    dispatch(loginError(true))
                    dispatch(showError('Превышено число попыток ввода неверного пароля. Обратитесь в Тех. поддержку'))
                } else if (res.data.result === '102') {
                    dispatch(loginError(true))
                    dispatch(showError('Учетная запись временно заблокирована'))
                }
            }
        })
        .catch((err: AxiosError) => {
            console.log(err)
        })

}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then((res => {
            if (res.data.result === '0') {
                dispatch(setAppInitialized(false))
            }
        }))
}
export const registration = (email: string, password: string) => (dispatch: Dispatch) => {
    authApi.registration(email, password)
        .then((res) => {
            if (res.data.result === '0') {
                console.log(123)
            } else {
                console.log(res)
                if (res.data.result === '103') {
                    dispatch(loginError(true))
                    dispatch(showError('Ошибка в введенных данных'))
                } else if (res.data.result === '104') {
                    dispatch(loginError(true))
                    dispatch(showError('Нажмите выход в Личном Кабинете'))
                } else if (res.data.result === '105') {
                    dispatch(loginError(true))
                    dispatch(showError('Неправильно введен email'))
                } else if (res.data.result === '106') {
                    dispatch(loginError(true))
                    dispatch(showError('Пароль должен содержать 8 символов. Заглавные, строчные буквы и цифры'))
                }
            }
        })
        .catch((err: AxiosError) => {
            console.log(err)
        })
}

// types
export type initialStateType = typeof initialState
export type ActionsType =
    | ReturnType<typeof setAppInitialized>
    | ReturnType<typeof loginError>
    | ReturnType<typeof showError>
export type LoginParamsType = {
    email: string
    password: string
}