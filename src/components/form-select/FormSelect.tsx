import React from 'react';
import s from "../forms/Form.module.scss";
import Select from "react-select";

type OptionType = {
    value: string
    label: string
}

type PropsType = {
    caption: string
    placeholder?: string
    options: OptionType[]
}

const FormSelect: React.FC<PropsType> = (props) => {
    const {
        caption,
        placeholder,
        options
    } = props


    return (
        <div className={s.select}>
            <div className={s.select__caption}>{caption}</div>
            <Select options={options}
                    defaultValue={options[0]}
                    isSearchable={false}
                    classNamePrefix='custom-select'
                    placeholder={''}/>
        </div>
    );
};

export default FormSelect;
