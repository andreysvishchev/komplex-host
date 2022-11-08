const initState: InitStateType = [
    {id: 1, check: 'Счет №3059', sum: 7000, date: '23.02.2022', download: true},
    {id: 2, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 3, check: 'Счет №3049', sum: 800, date: '24.01.2022', download: true},
    {id: 4, check: 'Поступление денежных средств ', sum: 2800, date: '24.01.2022', download: false},
    {id: 5, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 6, check: 'Счет №3049', sum: 800, date: '24.01.2022', download: true},
    {id: 7, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
    {id: 8, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
    {id: 9, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 10, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 11, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
    {id: 12, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 13, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
    {id: 14, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 16, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
    {id: 21, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 123, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
    {id: 136, check: 'Счет №3029', sum: 2500, date: '26.03.2021', download: true},
    {id: 1124, check: 'Поступление денежных средств ', sum: 22800, date: '24.01.2022', download: false},
]

export const unionReducer = (state: InitStateType = initState, actions: ActionsType): InitStateType => {
    switch (actions) {
        default:
            return state
    }
}

export type UnionType = {
    id: number
    check: string
    sum: number
    date: string
    download: boolean
}
export type InitStateType = UnionType[]
type ActionsType = {}
