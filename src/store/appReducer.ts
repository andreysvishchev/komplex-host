const initState = {
    loading: false
}

export const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "TOGGLE-LOADING":
            return {...state, loading: action.value}
        default:
            return state
    }
}

export const setLoading = (value: boolean) => {
    return {type: 'TOGGLE-LOADING', value} as const
}

type InitStateType = typeof initState;
type ActionsType =
    | ReturnType<typeof setLoading>