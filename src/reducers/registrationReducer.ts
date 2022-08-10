let initialState: InitialStateType = {
    registrationPage: true,
    partners: null,
    registrationData: {
        contact_person: '',
        partner: null,
        first_name: '',
        last_name: '',
        parent: '',
        d_first_name: '',
        d_last_name:'',
        d_parent: '',
        post: '',
        email:'',
        date_birth: null,
        phone: '',
        series: '',
        number: '',
        place_issue: '',
        date_issue: '',
        scan_main: '',
        scan_reg: '',
        inn: '',
        company_name: '',
        kpp: '',
        mail_index: '',
        mail_country: '',
        mail_area: '',
        mail_district: '',
        mail_locality: '',
        mail_street: '',
        mail_home: '',
        mail_flat: '',
        mail_corps:'',
        business_index: '',
        business_country: '',
        business_area: '',
        business_district: '',
        business_locality: '',
        business_street: '',
        business_home: '',
        business_corps:'',
        business_flat: '',
        bank: '',
        payment_score: '',
        correspondent_score: '',
        bank_index: '',
        bank_country: '',
        bank_area: '',
        bank_district: '',
        bank_locality: '',
        bank_street: '',
        bank_home: '',
        bank_corps:'',
        bank_office: '',
        tech_first_name: '',
        tech_last_name: '',
        tech_parent: '',
        tech_email: '',
        tech_phone: '',
        finance_first_name: '',
        finance_last_name: '',
        finance_parent: '',
        finance_email: '',
        finance_phone: '',
        create_application: false
    },
    step: 0
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REG-PAGE":
            return {...state, registrationPage: action.value}
        case "CHOICE-PARTNER":
            return {...state, partners: action.partner}
        case "ADD-DATA-REG":
            return {...state, registrationData: action.data}
        case "NEXT-PAGE":
            return {...state, step: state.step + 1}
        case "PREV-PAGE":
            return {...state, step: state.step - 1}
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

export const addPrivateData = (data: RegistrationDataType) => {
    return {type: 'ADD-DATA-REG', data} as const
}

export const nextPage = () => {
    return {type: 'NEXT-PAGE'} as const
}
export const prevPage = () => {
    return {type: 'PREV-PAGE'} as const
}

export type  PartnersType = 'private' | 'entrepreneur' | 'company' | null
export type InitialStateType = {
    registrationPage: boolean
    partners: PartnersType
    registrationData: RegistrationDataType
    step: number
}
export type RegistrationDataType = {
    partner: '1' | '2' | '3' | null
    first_name: string
    last_name: string
    parent: string
    d_first_name: string
    d_last_name: string
    d_parent: string
    post: string
    email: string
    contact_person: string

    date_birth: Date | null
    phone: string
    series: string
    number: string
    place_issue: string
    date_issue: string
    scan_main: string
    scan_reg: string
    inn: string
    company_name: string
    kpp: string
    mail_index: string
    mail_country: string
    mail_area: string
    mail_district: string
    mail_locality: string
    mail_street: string
    mail_home: string
    mail_corps: string
    mail_flat: string
    business_index: string
    business_country: string
    business_area: string
    business_district: string
    business_locality: string
    business_street: string
    business_home: string
    business_corps: string
    business_flat: string
    bank: string
    payment_score: string
    correspondent_score: string
    bank_index: string
    bank_country: string
    bank_area: string
    bank_district: string
    bank_locality: string
    bank_street: string
    bank_home: string
    bank_office: string
    bank_corps: string
    tech_first_name: string
    tech_last_name: string
    tech_parent: string
    tech_email: string
    tech_phone: string
    finance_first_name: string
    finance_last_name: string
    finance_parent: string
    finance_email: string
    finance_phone: string
    create_application: boolean
}
export type ActionsType =
    | ReturnType<typeof registrationPage>
    | ReturnType<typeof choicePartner>
    | ReturnType<typeof addPrivateData>
    | ReturnType<typeof nextPage>
    | ReturnType<typeof prevPage>
