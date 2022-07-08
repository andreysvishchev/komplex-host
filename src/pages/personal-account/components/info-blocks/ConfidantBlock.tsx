import React from 'react';
import ConfidantTable from "../tables/ConfidantTable";
import s from "./InfoBlock.module.scss";
import Search from "../search/Search";
import ConfidantMenu from "../contextMenu/ConfidantMenu";
import {useDispatch} from "react-redux";
import {deleteAllConfidant} from "../../../../reducers/confidantReducer";


const ConfidantBlock = () => {



    return (
        <div className={s.wrap}>
            <div className={`${s.top} ${s.grid}`}>
                <div className={s.col}>
                    <h4 className={s.caption}>Доверенное лицо</h4>
                    <a href="#" className={s.link}>?</a>
                </div>
                <Search/>
                <ConfidantMenu />
            </div>
            <ConfidantTable/>
            <button className={s.show}>Развернуть всех</button>
        </div>
    );
};

export default ConfidantBlock;