import React from 'react';
import s from './InfoBlock.module.scss'
import IpTable from "../tables/IpTable";
import Tooltip from "../tooltip/Tooltip";


const IpBlock = () => {
    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <h4 className={s.caption}>IP-адреса</h4>
                    <Tooltip/>
                </div>

            </div>
            <IpTable/>


        </div>
    );
};

export default IpBlock;