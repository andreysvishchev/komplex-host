import React, {useMemo, useState} from 'react';
import s from './Table.module.scss';
import TableMenu from "../contextMenu/TableMenu";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import {ConfidantType, deleteConfidantAC} from "../../../../reducers/confidantReducer";
import {EquipType} from "../../../../reducers/equipReducer";
import Pagination from "../pagination/Pagination";


const ConfidantTable = React.memo(() => {

    const state = useSelector<AppStateType, ConfidantType[]>(state => state.confidant)

    const [items, setItems] = useState<ConfidantType[]>(state)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const itemsAmount = items.length
    const maxPage = Math.ceil(items.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    let slicedPages = items.slice(firstItemIndex, lastItemIndex)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
        <div>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.confidant}`}>
                    <h6 className={`${s.caption} ${s.confidant}`}>Серия и номер паспорта</h6>
                    <h6 className={`${s.caption} ${s.confidant}`}>ФИО</h6>
                    <h6 className={`${s.caption} ${s.confidant}`}>Телефон</h6>
                </div>
                {state.length !== 0 ?
                    state.map(el => {
                        return (
                            <div className={`${s.row} ${s.confidant}`} key={el.id}>
                                <div className={s.col}>{el.passport}</div>
                                <div className={s.col}>{el.name}</div>
                                <div className={s.col}>{el.tel}</div>
                                <TableMenu id={el.id} name={el.name} passport={el.passport} tel={el.tel}/>
                            </div>
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
            />
        </div>
    );
})

export default ConfidantTable;