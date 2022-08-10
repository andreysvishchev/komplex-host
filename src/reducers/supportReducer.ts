import {Dispatch} from "redux";
import {supportApi} from "../api/api";
import {v1} from "uuid";

export type ApplicationType = {
    id: string
    number_app: string
    title: string
    last_message: string
    created_date: string
    read: boolean
    status: string
    messages: MessageType[]
}

export type MessageType = {
    id: string
    text: string
    time: string
    my: boolean
}


let initialState:ApplicationType[] = [
    {
        id: v1(),
        number_app: '20124',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: false,
        status: 'open',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: false
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: false
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: false
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: false
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
    {
        id: v1(),
        number_app: '20224',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: true,
        status: 'open',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
    {
        id: v1(),
        number_app: '20254',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: true,
        status: 'close',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
    {
        id: v1(),
        number_app: '20124',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: true,
        status: 'close',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
    {
        id: v1(),
        number_app: '20324',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: true,
        status: 'close',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
    {
        id: v1(),
        number_app: '20124',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: true,
        status: 'close',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
    {
        id: v1(),
        number_app: '20224',
        title: 'Как оплатить аренду стойки',
        last_message: 'Какой-то текст из последнего диалога последнего диалога',
        created_date: '06.07.2022, 12:01:12',
        read: true,
        status: 'close',
        messages: [
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
            {
                id: v1(),
                text: 'Какой-то текст Какой-то текст',
                time: '12:34',
                my: true
            },
        ]
    },
]

export const supportReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action) {


        default:
            return state
    }
}



export type InitialStateType = ApplicationType[]




export type ActionsType = {}