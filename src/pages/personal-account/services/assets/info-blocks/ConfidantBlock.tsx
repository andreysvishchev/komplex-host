import React, {useEffect, useState} from 'react';
import ConfidantTable from "../tables/ConfidantTable";
import s from "./InfoBlock.module.scss";
import Search from "../../../../components/search/Search";
import ConfidantMenu from "../../../../components/contextMenu/ConfidantMenu";
import Tooltip from "../../../../components/tooltip/Tooltip";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../../store/store";
import {ConfidantType} from "../../../../../reducers/confidantReducer";
import {Pagination} from "../../../../../function/pagination";


const ConfidantBlock = () => {

    let data = useSelector<AppStateType, ConfidantType[]>(state => state.confidant)
    let tableStatus = 'В таблице пока нет записей'
    const dispatch = useDispatch<AppDispatchType>()

    const [value, setValue] = useState('')
    data = data.filter(el => {
        if (el.name.toLowerCase().includes(value.toLowerCase())) {
            return el.name.toLowerCase().includes(value.toLowerCase())
        } else {
            tableStatus = 'Поиск не дал результатов'
        }
    })

    const {
        data: newData,
        prevPage,
        nextPage,
        itemsAmount,
        maxPage,
        lastItemIndex,
        firstItemIndex,
        setCurrentPage,
        currentPage,
        setItemsPerPage
    } = Pagination(data, 4)


    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Доверенное лицо</div>
                    <Tooltip/>
                    <Search value={value} setValue={setValue}
                            prevPage={setCurrentPage}/>
                </div>
                <ConfidantMenu/>
            </div>
            <ConfidantTable
                tableStatus={tableStatus}
                data={newData}
                lastIndex={lastItemIndex}
                firsIndex={firstItemIndex}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
                itemsAmount={itemsAmount}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    );
};

export default ConfidantBlock;