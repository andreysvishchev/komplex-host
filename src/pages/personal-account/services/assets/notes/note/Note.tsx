import React from "react";
import s from './Note.module.scss'
import NoteMenu from "../../../../../components/contextMenu/NoteMenu";

type NotePropsType = {
    id: string
    date: string
    caption: string
    important: boolean
}

export const Note: React.FC<NotePropsType> = (props) => {

    const {
        id,
        date,
        caption,
        important,
    } = props



    return (
        <div data-note='style'
             className={s.item}>
            <div className={s.data}>{date}</div>
            <div className={important ? `${s.caption} ${s.important}` : s.caption}>{caption}</div>
            <NoteMenu

                date={date}
                text={caption}
                important={important}
                id={props.id}
            />
        </div>
    )
}

