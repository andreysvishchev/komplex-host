import React, {useState} from 'react';
import RentPlaceFrame from "../assets/frames/rent-place-frame/RentPlaceFrame";
import NotesFrame from "../assets/frames/notes-frame/NotesFrame";
import EquipFrame from "../assets/frames/equip-frame/EquipFrame";
import ConfidantFrame from "../assets/frames/confidant-frame/ConfidantFrame";
import IpFrame from "../assets/frames/ip-frame/IpFrame";
import ru from "date-fns/locale/ru";
import s from '../Services.module.scss'
import ReactDatePicker from "react-datepicker";

const RackRental = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={s.wrap}>
            <RentPlaceFrame/>
            <div className={s.row}>
                <ReactDatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    locale={ru}
                    inline
                    calendarClassName="calendar-inline"
                />
                <NotesFrame/>
            </div>
            <EquipFrame/>
            <ConfidantFrame/>
            <IpFrame/>
        </div>
    );
};

export default RackRental;