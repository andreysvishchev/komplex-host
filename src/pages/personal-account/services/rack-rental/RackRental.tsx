import React, {useState} from 'react';
import RentBlock from "../../components/info-blocks/RentBlock";
import Notes from "../../components/notes/Notes";
import EquipBlock from "../../components/info-blocks/EquipBlock";
import ConfidantBlock from "../../components/info-blocks/ConfidantBlock";
import IpBlock from "../../components/info-blocks/IpBlock";
import ru from "date-fns/locale/ru";
import s from '../Services.module.scss'
import ReactDatePicker from "react-datepicker";

const RackRental = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={s.wrap}>
            <RentBlock/>
            <div className={s.row}>
                <ReactDatePicker
                    selected={startDate} onChange={(date: Date) => setStartDate(date)}
                    locale={ru}
                    inline
                />
                <Notes/>
            </div>
            <EquipBlock/>
            <ConfidantBlock/>
            <IpBlock/>
        </div>
    );
};

export default RackRental;