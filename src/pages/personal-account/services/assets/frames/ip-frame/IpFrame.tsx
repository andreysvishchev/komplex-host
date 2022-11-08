import React from 'react';
import s from '../Frames.module.scss'
import IpTable from "../../tables/ip-table/IpTable";
import Tooltip from "../../../../../../components/tooltip/Tooltip";


const IpFrame = () => {
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

export default IpFrame;