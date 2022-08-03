import React, {useMemo, useState} from 'react';
import s from './Table.module.scss';
import TableMenu from "../contextMenu/TableMenu";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../store/store";
import {ascSort, ConfidantType, deleteConfidantAC, descSort} from "../../../../reducers/confidantReducer";
import {EquipType} from "../../../../reducers/equipReducer";
import Pagination from "../pagination/Pagination";
import ConfidantItem from "./ConfidantItem";


const ConfidantTable = () => {
    let data = useSelector<AppStateType, ConfidantType[]>(state => state.confidant)
    const [sort, changeSort] = useState<'desc' | 'asc'>('desc')
    const [show, setShow] = useState(false)
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
    const sortByName = () => {
        if (sort === "asc") {
            dispatch(ascSort())
            changeSort('desc')
        } else if (sort === "desc") {
            dispatch(descSort())
            changeSort('asc')
        }
    }
    const showPagination = () => {
        setShow(!show)
        if (show) {
            setCurrentPage(1)
            setItemsPerPage(4)
        } else {
            setItemsPerPage(10)
        }
    }


    return (
        <div>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.confidant}`}>
                    <div className={s.caption}>Серия и номер паспорта</div>
                    <div onClick={sortByName} className={`${s.caption} ${s.sort}`}>ФИО</div>
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
                        itemsAmount={itemsAmount}
                        show={show}
                        showPagination={showPagination}
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