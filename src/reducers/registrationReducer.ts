

let initialState: InitialStateType = {
    registrationPage: true,
    partners: null,
    privateData: {
        firstName: '',
        lastName: '',
        parent: '',
        dateOfBirth: '',
        phone: '',
        series: '',
        number: '',
        placeOfIssue: '',
        dateOfIssue: '',
        inn: '',
        scan_main: '',
        scan_reg: '',
        index: '',
        country: '',
        area: '',
        district: '',
        locality: '',
        street: '',
        home: '',
        flat: '',
    }

}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REG-PAGE":
            return {...state, registrationPage: action.value}
        case "CHOICE-PARTNER":
            return {...state, partners: action.partner}
        case "ADD-PRIVATE-DATA":
            return {...state, privateData: action.data}
        default:
            return state
    }
}

export const registrationPage = (value: boolean) => {
    return {type: 'REG-PAGE', value} as const
}

export const choicePartner = (partner: PartnersType) => {
    return {type: 'CHOICE-PARTNER', partner} as const
}

export const addPrivateData = (data: DataType) => {
    return {type: 'ADD-PRIVATE-DATA', data} as const
}

export type  PartnersType = 'private' | 'entrepreneur' | 'company' | null
export type InitialStateType = {
    registrationPage: boolean
    partners: PartnersType
    privateData: DataType
}

export type DataType = {
    firstName: string
    lastName: string
    parent: string
    dateOfBirth: string
    phone: string
    series: string
    number: string
    placeOfIssue: string
    dateOfIssue: string
    inn: string
    scan_main: string
    scan_reg: string
    index: string
    country: string
    area: string
    district: string
    locality: string
    street: string
    home: string
    flat: string
}
export type ActionsType =
    | ReturnType<typeof registrationPage>
    | ReturnType<typeof choicePartner>
    | ReturnType<typeof addPrivateData>

