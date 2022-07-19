import React from 'react';
import s from "../../Form.module.scss";

type PropsType = {
    value?: string | number
    onBlur?: (e: any) => void
    onChange?: (e: React.ChangeEvent<any>) => void
    name?: string
    caption: string
    placeholder: string
    error: any
    errorText?: string
}

const Textarea = (props: PropsType) => {
    return (
        <div className={s.textarea}>
            <div className={s.textarea__caption}>{props.caption}</div>
            <textarea
                className={props.error ? `${s.error} ${s.textarea__field}` : s.textarea__field }
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
                name={props.name}
            />
            {props.error &&
            <div className={s.textarea__error}>{props.errorText}</div>
            }
        </div>
    );
};

export default Textarea;