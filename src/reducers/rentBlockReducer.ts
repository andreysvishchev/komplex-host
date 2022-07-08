export const initState = {
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
    }

}

export const rentBlockReducer = (state: initStateType = initState, action: ActionsType) => {
    switch (action) {
        default:
            return state

    }
}

//types
export type initStateType = {
    configurator: ConfiguratorType
}
export type ConfiguratorType = typeof initState.configurator
type ActionsType = {}