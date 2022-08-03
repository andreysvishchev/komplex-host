const initialState = {
    open: false,
    success: true,
    message: '',
    openCaptchaModal: false,
    openRecoverModal: false,
    openConfirmRecoveryModal: false,
    openEditorModal: false,
    payModal: false,
    url: ''
}


export const modalReducer = (state: ModalType = initialState, action: ActionType): ModalType => {
    switch (action.type) {
        case "OPEN-MODAL":
            return {...state, open: action.isOpen, success: action.success, message: action.message}
        case "CLOSE-MODAL":
            return {...state, open: action.isOpen}
        case "OPEN-CAPTCHA":
            return {...state, openCaptchaModal: action.isOpen}
        case "OPEN-RECOVERY":
            return {...state, openRecoverModal: action.isOpen}
        case "OPEN-CONFIRM-RECOVERY":
            return {...state, openConfirmRecoveryModal: action.isOpen}
        case "OPEN-EDITOR":
            return {...state, openEditorModal: action.isOpen, url: action.url}
        case "PAY-MODAL":
            return {...state, payModal: action.isOpen}
        default:
            return state
    }
}

export const openModalAC = (isOpen: boolean, success: boolean, message: string) => {
    return {type: 'OPEN-MODAL', isOpen, success, message} as const
}
export const openCaptchaModal = (isOpen: boolean) => {
    return {type: 'OPEN-CAPTCHA', isOpen} as const
}
export const closeModalAC = (isOpen: boolean) => {
    return {type: 'CLOSE-MODAL', isOpen} as const
}
export const openRecoveryModal = (isOpen: boolean) => {
    return {type: 'OPEN-RECOVERY', isOpen} as const
}
export const openConfirmRecoveryModal = (isOpen: boolean) => {
    return {type: 'OPEN-CONFIRM-RECOVERY', isOpen} as const
}
export const openEditorModal = (isOpen: boolean, url: any) => {
    return {type: 'OPEN-EDITOR', isOpen, url} as const
}
export const togglePayModal = (isOpen: boolean) => {
    return {type: 'PAY-MODAL', isOpen} as const
}

export type ActionType =
    | ReturnType<typeof openModalAC>
    | ReturnType<typeof closeModalAC>
    | ReturnType<typeof openCaptchaModal>
    | ReturnType<typeof openRecoveryModal>
    | ReturnType<typeof openConfirmRecoveryModal>
    | ReturnType<typeof openEditorModal>
    | ReturnType<typeof togglePayModal>
export type ModalType = typeof initialState