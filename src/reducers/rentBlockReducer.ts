import {v1} from "uuid";

export const initState: InitStateType = {
    configurator: {
        typeEquip: {
            caption: 'Тип оборудования',
            title: 'ATX/Unit',
            price: null
        },
        amountUnit: {
            caption: 'Количество Unit',
            amount: 4,
            price: 1000
        },
        power: {
            caption: 'Питание',
            list: [
                {value: '200 W', label: '200 W'},
                {value: '300 W', label: '300 W'},
                {value: '400 W', label: '400 W'},
                {value: '500 W', label: '500 W'}
            ]
        },
        sockets: {
            caption: 'Розетки питания',
            list: [
                {value: '1', label: '1'},
                {value: '2', label: '2'},
                {value: '3', label: '3'},
                {value: '4', label: '4'}
            ]
        },
        ports: {
            caption: 'Порты коммутатора',
            list: [
                {value: '1', label: '1'},
                {value: '2', label: '2'},
                {value: '3', label: '3'},
                {value: '4', label: '4'}
            ]
        },
        amountIP: {
            caption: 'Количество IP-адресов',
            list: [
                {value: '1', label: '1'},
                {value: '2', label: '2'},
                {value: '3', label: '3'},
                {value: '1', label: '1'},
                {value: '2', label: '2'},
                {value: '3', label: '3'},
                {value: '4', label: '4'}
            ]
        },
        speed: {
            caption: 'Скорость интернета',
            list: [
                {value: '100 MB/S', label: '100 MB/S'},
                {value: '200 MB/S', label: '200 MB/S'},
                {value: '300 MB/S', label: '300 MB/S'},
                {value: '400MB/S', label: '400MB/S'}
            ]
        },
    },
    servers: [
        {id: v1(), number: 'D-01', cpu: 'Intel Xeon E3-1220', ram: '16 GB', hdd: '2 x 1000 GB', ipmi: 'Да', price: 4000 },
        {id: v1(), number: 'D-02', cpu: 'Intel Xeon E3-1220', ram: '32 GB', hdd: '2 x 2000 GB', ipmi: 'Да', price: 5000 },
        {id: v1(), number: 'D-03', cpu: 'Intel Xeon E3-1220', ram: '64 GB', hdd: '2 x 3000 GB', ipmi: 'Да', price: 6000 },
        {id: v1(), number: 'D-04', cpu: 'Intel Xeon E3-1220', ram: '16 GB', hdd: '2 x 1000 GB', ipmi: 'Да', price: 4000 },
        {id: v1(), number: 'D-05', cpu: 'Intel Xeon E3-1220', ram: '32 GB', hdd: '2 x 1000 GB', ipmi: 'Да', price: 4500 },
        {id: v1(), number: 'D-06', cpu: 'Intel Xeon E3-1220', ram: '64 GB', hdd: '3 x 2000 GB', ipmi: 'Да', price: 7000 },
        {id: v1(), number: 'D-07', cpu: 'Intel Xeon E3-1220', ram: '32 GB', hdd: '2 x 2000 GB', ipmi: 'Да', price: 5000 },
    ]
}

export const rentBlockReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action) {
        default:
            return state

    }
}

//types
type ActionsType = {}
type InitStateType = {
    configurator: ConfiguratorType
    servers: ServerItemType[]
}
export type ServerItemType = {
    id: string
    number: string
    cpu: string
    ram: string
    hdd: string
    ipmi: string
    price: number
}
export type ConfiguratorType = {
    typeEquip: {
        caption: string
        title: string
        price: null
    }
    amountUnit: {
        caption: string
        amount: number
        price: number
    }
    power: {
        caption: string
        list: ConfiguratorListType[]
    }
    sockets: {
        caption: string
        list: ConfiguratorListType[]
    }
    ports: {
        caption: string
        list: ConfiguratorListType[]
    }
    amountIP: {
        caption: string
        list: ConfiguratorListType[]
    }
    speed: {
        caption: string
        list: ConfiguratorListType[]
    }
}
export type ConfiguratorListType = {
    value: string
    label: string
}