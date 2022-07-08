let initialState = {
    isLoggedIn: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType ): initialStateType => {
    switch (action.type) {
        case "APP/SET-INITIALIZED":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setAppInitializedAC = (value: boolean) => {
    return {
        type: 'APP/SET-INITIALIZED',
       value
    } as const
}

export type initialStateType = typeof initialState
export type ActionsType =
    | ReturnType<typeof setAppInitializedAC>