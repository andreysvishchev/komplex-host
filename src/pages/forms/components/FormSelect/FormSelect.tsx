import React from 'react';
import s from "../../Form.module.scss";
import Select from "react-select";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import Scrollbars from "react-custom-scrollbars";

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
