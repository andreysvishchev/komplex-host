import React, {useState} from 'react';
import s from "./InfoBlock.module.scss";
import Search from "../../../../components/search/Search";
import EquipTable from "../tables/EquipTable";
import Tooltip from "../../../../components/tooltip/Tooltip";


const EquipBlock = () => {
    const[value, setValue] = useState('')
    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <h4 className={s.caption}>Оборудование</h4>
                    <Tooltip/>
                    <Search value={value} setValue={setValue}/>
                </div>
            </div>
            <EquipTable/>
        </div>
    );
};

export default EquipBlock;