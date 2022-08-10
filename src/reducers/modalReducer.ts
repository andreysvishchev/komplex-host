const initialState = {
    noticeModal: {
        open: false,
        success: true,
        message: ''
    },
    captchaModal: false,
    recoverModal: false,
    confirmRecoveryModal: false,
    confirmModal: false,
    noteModal: false,
    confidantModal: false,
    equipsModal: false,
    configurator: false,
    payModal: false,
    applicationModal: false


}


export const modalReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "OPEN-NOTICE":
            return {...state, noticeModal: action.params}
        case "OPEN-CAPTCHA":
            return {...state, captchaModal: action.isOpen}
        case "OPEN-RECOVERY":
            return {...state, recoverModal: action.isOpen}
        case "OPEN-CONFIRM-RECOVERY":
            return {...state, confirmRecoveryModal: action.isOpen}
        default:
            return state
    }
}

export const openConfidantModal = (isOpen: boolean) => {
    return {type: 'OPEN-CONFIDANT', isOpen} as const
}
export const openNoticeModal = (params: NoticeParamsType) => {
    return {type: 'OPEN-NOTICE', params} as const
}
export const openCaptchaModal = (isOpen: boolean) => {
    return {type: 'OPEN-CAPTCHA', isOpen} as const
}
export const openRecoveryModal = (isOpen: boolean) => {
    return {type: 'OPEN-RECOVERY', isOpen} as const
}
export const openConfirmRecoveryModal = (isOpen: boolean) => {
    return {type: 'OPEN-CONFIRM-RECOVERY', isOpen} as const
}

export type ActionType =
    | ReturnType<typeof openNoticeModal>
    | ReturnType<typeof openCaptchaModal>
    | ReturnType<typeof openRecoveryModal>
    | ReturnType<typeof openConfirmRecoveryModal>

export type InitialStateType = typeof initialState
export type NoticeParamsType = {
    open: boolean
    success: boolean
    message: string
}