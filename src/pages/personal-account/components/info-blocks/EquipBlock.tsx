import React from 'react';
import s from "./InfoBlock.module.scss";
import Search from "../search/Search";
import EquipTable from "../tables/EquipTable";
import EquipModal from "../../../modals/EquipModal";


const EquipBlock = () => {

    return (
        <div className={s.wrap}>
            <div className={`${s.grid} ${s.top}`}>
                <div className={s.col}>
                    <h4 className={s.caption}>Оборудование</h4>
                    <a href="#" className={s.link}>?</a>
                </div>
                <Search/>
            </div>
            <EquipTable/>
            <button className={s.show}>Развернуть все оборудование</button>
        </div>
    );
};

export default EquipBlock;