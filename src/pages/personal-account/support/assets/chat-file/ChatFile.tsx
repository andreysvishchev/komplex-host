import React from 'react';
import s from "./ChatFile.module.scss";

type PropsType = {
    title: boolean
}
const ChatFile = (props: PropsType) => {
    return (
        <div className={s.file}>
            <label className={s.file__label}>
                <input multiple type="file" className={s.file__input}/>
                <div className={s.file__icon}/>
                {
                    props.title &&
                    <div className={s.file__title}>Прикрепить файл</div>
                }

            </label>

        </div>
    );
};

export default ChatFile;