const initialState: InitialStateType = {
    noticeModal: {
        open: false,
        success: true,
        message: ''
    },
    captchaModal: false,
    recoverModal: false,
    confirmRecoveryModal: false,
    confirmModal: {
        open: false,
        type: '',
        deleteAll: false,
        messages: '',
        confidantData: {
            id: '',
            caption: '',
        },
        noteData: {
            id: '',
            caption: '',
        }
    },
    noteModal: {
        open: false,
        newNote: false,
        id: '',
        date: '',
        text: '',
        important: false
    },
    confidantModal: {
        id: '',
        name: '',
        newConfidant: false,
        open: false,
        passport:'',
        tel:'',
        title: ''
    },
    equipsModal: false,
    configurator: false,
    payModal: false,
    applicationModal: false,
    addRentModal: false
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
        case "OPEN-ADD-RENT":
            return {...state, addRentModal: action.isOpen}
        case "OPEN-CONFIRM":
            return {...state, confirmModal: action.params}
        case "OPEN-CONFIDANT":
            return {...state, confidantModal: action.params}
        case "OPEN-NOTE":
            return {...state, noteModal: action.params}
        case "OPEN-APPLICATION":
            return {...state, applicationModal: action.isOpen}
        case "OPEN-CONFIGURATOR":
            return {...state, configurator: action.isOpen}
        case "OPEN-EQUIPS":
            return {...state, equipsModal: action.isOpen}
        case "OPEN-PAY":
            return {...state, payModal: action.isOpen}
        default:
            return state
    }
}

export const openConfidantModal = (params: ConfidantParamsType) => {
    return {type: 'OPEN-CONFIDANT', params} as const
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
export const openAddRentModal = (isOpen: boolean) => {
    return {type: 'OPEN-ADD-RENT', isOpen} as const
}
export const openConfirmModal = (params: ConfirmParamsType) => {
    return {type: 'OPEN-CONFIRM', params} as const
}
export const openNoteModal = (params: NoteParamsType) => {
    return {type: 'OPEN-NOTE', params} as const
}
export const openEquipsModal = (isOpen: boolean) => {
    return {type: 'OPEN-EQUIPS', isOpen} as const
}
export const openConfigurator = (isOpen: boolean) => {
    return {type: 'OPEN-CONFIGURATOR', isOpen} as const
}
export const openPayModal = (isOpen: boolean) => {
    return {type: 'OPEN-PAY', isOpen} as const
}
export const openApplicationModal = (isOpen: boolean) => {
    return {type: 'OPEN-APPLICATION', isOpen} as const
}

export type ActionType =
    | ReturnType<typeof openNoticeModal>
    | ReturnType<typeof openCaptchaModal>
    | ReturnType<typeof openRecoveryModal>
    | ReturnType<typeof openConfirmRecoveryModal>
    | ReturnType<typeof openAddRentModal>
    | ReturnType<typeof openConfirmModal>
    | ReturnType<typeof openNoteModal>
    | ReturnType<typeof openConfidantModal>
    | ReturnType<typeof openEquipsModal>
    | ReturnType<typeof openConfigurator>
    | ReturnType<typeof openPayModal>
    | ReturnType<typeof openApplicationModal>

export type InitialStateType = {
    noticeModal: NoticeParamsType,
    captchaModal: boolean,
    recoverModal: boolean,
    confirmRecoveryModal: boolean,
    confirmModal: ConfirmParamsType,
    noteModal: NoteParamsType,
    confidantModal: ConfidantParamsType,
    equipsModal: boolean,
    configurator: boolean,
    payModal: boolean,
    applicationModal: boolean,
    addRentModal: boolean
}
export type NoticeParamsType = {
    open: boolean
    success: boolean
    message: string
}
export type ConfirmParamsType = {
    open: boolean
    type?: '' | 'confidant' | 'notes' | 'rent'
    deleteAll? : boolean
    messages?: string
    confidantData?: {
        id: string
        caption: string
    },
    noteData?: {
        id: string
        caption: string
    }
}

export type NoteParamsType = {
    open: boolean
    newNote?: boolean
    id?: string
    date?: string
    text?: string
    important?: boolean
}

export type ConfidantParamsType = {
    open: boolean
    title?: string
    newConfidant?: boolean
    id?: string
    passport?: string
    name?: string
    tel?: string
}

