let initialState: InitialStateType = {
    registrationPage: false,
    partners: null
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REG-PAGE":
            return {...state, registrationPage: action.value}
        case "CHOICE-PARTNER":
            return {...state, partners: action.partner}
        default:
            return state
    }
}

export const registrationPage = (value: boolean) => {
    return {type: 'REG-PAGE', value} as const
}

export const choicePartner = (partner:  PartnersType) => {
    return{type: 'CHOICE-PARTNER', partner} as const
}

export type  PartnersType = 'private' | 'entrepreneur' | 'company' | null
export type InitialStateType = {
    registrationPage: boolean
    partners: PartnersType
}
export type ActionsType =
    | ReturnType<typeof registrationPage>
    | ReturnType<typeof choicePartner>

