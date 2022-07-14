import React from 'react';
import ConfidantTable from "../tables/ConfidantTable";
import s from "./InfoBlock.module.scss";
import Search from "../search/Search";
import ConfidantMenu from "../contextMenu/ConfidantMenu";
import {useDispatch} from "react-redux";
import {deleteAllConfidant} from "../../../../reducers/confidantReducer";
import Tooltip from "../tooltip/Tooltip";


const ConfidantBlock = () => {


    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Доверенное лицо</div>
                    <Tooltip/>
                    <Search/>
                </div>
                <ConfidantMenu/>
            </div>
            <ConfidantTable/>
        </div>
    );
};

export default ConfidantBlock;