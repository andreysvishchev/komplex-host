import React from 'react';
import ReactDatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import s from '../../../modals/Modal.module.scss'

type PropsType = {
    onChange: any
    value: Date
    name: string
    id: string
}

const DatepickerField = ({name, value, onChange, id}: PropsType) => {

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
            locale={ru}
            calendarClassName="calendar"
            customInput={
                <input className={s.pay__input}/>
            }
        />
    )
}


export default DatepickerField;


