import React from 'react';
import ReactDatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import MaskedInput from 'react-text-mask'
import s from '../../modals/Modal.module.scss'

type PropsType = {
    onChange: any
    value: Date | null
    name: string
    id: string
    placeholder?: string
}

const DatepickerField = ({name, value, onChange, id, placeholder}: PropsType) => {

    return (
        <ReactDatePicker
            popperPlacement={"bottom-end"}
            popperModifiers={[
                {
                    name: "offset",
                    options: {
                        offset: [12, 10],
                    },
                },
                {
                    name: "preventOverflow",
                    options: {
                        rootBoundary: "viewport",
                        tether: false,
                        altAxis: true,
                    },
                },
            ]}
            dateFormat="dd.MM.yyyy"
            id={id}
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
            placeholderText={'ДД.ММ.ГГГГ'}
            locale={ru}
            calendarClassName="calendar"
            customInput={
                <MaskedInput
                    className='date-input'
                    mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
                />
            }
        />
    )
}


export default DatepickerField;


