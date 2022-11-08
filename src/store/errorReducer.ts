const initState = {
    loginError: false,
    messageError: '',
    captchaError: false,
    captchaErrorMessage: '',
    captchaUrl: '',
    resetCaptcha: 0,
    recoveryError: false,
    recoveryErrorMessage: ''
}

export const errorReducer = (state: initStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "LOGIN-ERROR":
            return {...state, loginError: action.value}
        case "SHOW-LOGIN-ERROR":
            return {...state, messageError: action.error}
        case "GET-CAPTCHA":
            return {...state, captchaUrl: action.url}
        case "CAPTCHA-ERROR":
            return {...state, captchaError: action.value}
        case "SHOW-CAPTCHA-ERROR":
            return {...state, captchaErrorMessage: action.error}
        case "RESET-CAPTCHA":
            return {...state, resetCaptcha: Math.random()}
        case "RECOVERY-ERROR":
            return {...state, recoveryError: action.value}
        case "SHOW-RECOVER-ERROR":
            return {...state, recoveryErrorMessage: action.error}
        default:
            return state

    }
}

export const loginError = (value: boolean) => {
    return {type: "LOGIN-ERROR", value} as const
}
export const showLoginError = (error: string) => {
    return {type: 'SHOW-LOGIN-ERROR', error} as const
}
export const captchaUrl = (url: string) => {
    return {type: 'GET-CAPTCHA', url} as const
}
export const captchaError = (value: boolean) => {
    return {type: "CAPTCHA-ERROR", value} as const
}
export const showCaptchaError = (error: string) => {
    return {type: 'SHOW-CAPTCHA-ERROR', error} as const
}
export const resetCaptcha = () => {
    return {type: 'RESET-CAPTCHA'} as const
}
export const recoveryError = (value: boolean) => {
    return {type: 'RECOVERY-ERROR', value} as const
}
export const showRecoveryError = (error: string) => {
    return {type: 'SHOW-RECOVER-ERROR', error} as const
}

//types
export type initStateType = typeof initState

type ActionsType =
    | ReturnType<typeof loginError>
    | ReturnType<typeof showLoginError>
    | ReturnType<typeof captchaUrl>
    | ReturnType<typeof captchaError>
    | ReturnType<typeof showCaptchaError>
    | ReturnType<typeof resetCaptcha>
    | ReturnType<typeof recoveryError>
    | ReturnType<typeof showRecoveryError>