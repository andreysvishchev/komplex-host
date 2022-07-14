import React, {useMemo, useState} from 'react';
import s from './Table.module.scss';
import TableMenu from "../contextMenu/TableMenu";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../store/store";
import {ConfidantType, deleteConfidantAC, sortByName} from "../../../../reducers/confidantReducer";
import {EquipType} from "../../../../reducers/equipReducer";
import Pagination from "../pagination/Pagination";
import ConfidantItem from "./ConfidantItem";


const ConfidantTable = () => {
    let data = useSelector<AppStateType, ConfidantType[]>(state => state.confidant)
    const dispatch = useDispatch<AppDispatchType>()
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const itemsAmount = data.length
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    data = data.slice(firstItemIndex, lastItemIndex)

    const nextPage = () => setCurrentPage(prev => prev + 1)

    const prevPage = () => setCurrentPage(prev => prev - 1)

    const sort = () => {
        dispatch(sortByName())
    }


    return (
        <div>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.confidant}`}>
                    <div className={s.caption}>Серия и номер паспорта</div>
                    <div onClick={sort} className={`${s.caption} ${s.sort}`}>ФИО</div>
                    <div className={s.caption}>Телефон</div>
                </div>
                {data.length !== 0 ?
                    data.map(el => {
                        return (
                            <ConfidantItem key={el.id} tel={el.tel} id={el.id} passport={el.passport} name={el.name}/>
                        )
                    })
                    : <div className={s.empty}>В таблице пока нет записей</div>
                }
            </div>
            <Pagination currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemsAmount={itemsAmount}
                        setItemsPerPage={setItemsPerPage}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        lastIndex={lastItemIndex}
                        firstIndex={firstItemIndex}
            />
        </div>
    );
}

export default ConfidantTable;