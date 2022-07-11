import {v1} from "uuid";


export const initState = [
    {id: v1(), serialNumber: 3059340, name: 'Наименование оборудования 1', comment: 'Редактировать Редактировать Редактировать Редактировать Редактировать Редактировать'},
    {id: v1(), serialNumber: 3059341, name: 'Наименование оборудования 2', comment: ''},
    {id: v1(), serialNumber: 3059342, name: 'Наименование оборудования 3', comment: ''},
    {id: v1(), serialNumber: 3059343, name: 'Наименование оборудования 4', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059344, name: 'Наименование оборудования 5', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059345, name: 'Наименование оборудования 6', comment: ''},
    {id: v1(), serialNumber: 3059346, name: 'Наименование оборудования 7', comment: ''},
    {id: v1(), serialNumber: 3059347, name: 'Наименование оборудования 8', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059348, name: 'Наименование оборудования 9', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059349, name: 'Наименование оборудования 10', comment: ''},
    {id: v1(), serialNumber: 3059350, name: 'Наименование оборудования 11', comment: ''},
    {id: v1(), serialNumber: 3059351, name: 'Наименование оборудования 12', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059352, name: 'Наименование оборудования 13', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059353, name: 'Наименование оборудования 14', comment: ''},
    {id: v1(), serialNumber: 3059354, name: 'Наименование оборудования 15', comment: ''},
    {id: v1(), serialNumber: 3059355, name: 'Наименование оборудования 16', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059356, name: 'Наименование оборудования 17', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059357, name: 'Наименование оборудования 18', comment: ''},
    {id: v1(), serialNumber: 3059358, name: 'Наименование оборудования 19', comment: ''},
    {id: v1(), serialNumber: 3059359, name: 'Наименование оборудования 20', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059360, name: 'Наименование оборудования 21', comment: 'Редактировать'},
    {id: v1(), serialNumber: 3059361, name: 'Наименование оборудования 22', comment: ''},
    {id: v1(), serialNumber: 3059362, name: 'Наименование оборудования 23', comment: ''},
    {id: v1(), serialNumber: 3059363, name: 'Наименование оборудования 24', comment: 'Редактировать'},
]


export const equipReducer = (state: initStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "SAVE-COMMENT":
            debugger
            return state.map(el=>el.id === action.id ? {...el, comment: action.comment} : el)
        default:
            return state

    }
}

// actions
export const saveCommentAC = (id: string, comment: string) => {
    return {type: 'SAVE-COMMENT', id, comment} as const
}

// types
type ActionsType =
    | ReturnType<typeof saveCommentAC>
export type initStateType = EquipType[]
export type EquipType = {
    id: string
    serialNumber: number
    name: string
    comment: string
}