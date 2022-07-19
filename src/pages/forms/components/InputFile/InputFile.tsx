import React, {ChangeEvent, useState} from 'react';
import s from "../../Form.module.scss";
import {button} from "../../../../style/style";

type PropsType = {
    title: string
    class: boolean
    error: any
    field: any
}

const InputFile = (props: PropsType) => {
    const [name, setName] = useState('Добавить')

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setName(e.target.files[0].name)
            let file = e.target.files[0];
            const base64 = await convertBase64(file)
            await props.field("file", base64 );
        }
    }
    const convertBase64 = (file: any) => {
        return new Promise(resolve => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
        })
    }


    return (
        <label className={props.class ? `${s.file} ${s.one}` : `${s.file} ${s.two}`}>
            <div className={s.file__title}>{props.title}</div>
            <input onChange={onChange} className={s.file__input} accept='image/jpeg, image/png' type="file"/>
            <span className={s.file__label}>{name}</span>
            {/*  {
                name !== 'Добавить' &&
                <button type={'button'} className={s.file__clear}>x</button>
            }*/}

        </label>
    );
};

export default InputFile;