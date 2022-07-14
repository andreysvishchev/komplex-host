import React from 'react';
import s from "./InfoBlock.module.scss";
import Search from "../search/Search";
import EquipTable from "../tables/EquipTable";
import EquipModal from "../../../modals/EquipModal";
import Tooltip from "../tooltip/Tooltip";


const EquipBlock = () => {

    return (
        <div className={s.wrap}>
            <div className={s.top}>
<div className={s.col}>
    <h4 className={s.caption}>Оборудование</h4>
    <Tooltip/>

    <Search/>
</div>

            </div>
            <EquipTable/>
        </div>
    );
};

export default EquipBlock;