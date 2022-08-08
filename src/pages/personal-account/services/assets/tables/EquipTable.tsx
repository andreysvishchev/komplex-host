import React, {useEffect, useState} from 'react';
import s from './Table.module.scss';
import EquipItem from "./EquipItem";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../../store/store";
import {
    ascEquipSort,
    descEquipSort,
    EquipType
} from "../../../../../reducers/equipReducer";
import Pagination from "../../../../components/pagination/Pagination";


const EquipTable = () => {

    useEffect(() => {
        // dispatch(fetchEquips())
    }, [])

    let data = useSelector<AppStateType, EquipType[]>(state => state.equips)
    const dispatch = useDispatch<AppDispatchType>()
    const [sort, changeSort] = useState<'desc' | 'asc'>('desc')
    const [show, setShow] = useState(false)
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
            dispatch(ascEquipSort())
            changeSort('desc')
        } else if (sort === "desc") {
            dispatch(descEquipSort())
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
        <>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.equip}`}>
                    <div onClick={sortByName}
                         className={sort === 'desc' ? `${s.caption} ${s.sort} ${s.desc}` : `${s.caption} ${s.sort}`}>
                        Наименование оборудования
                    </div>
                    <div className={s.caption}>Серийный номер</div>
                    <div className={s.caption}>Комментарий</div>
                </div>
                {data.length !== 0 ?
                    data.map(el => {
                        return (
                            <EquipItem
                                key={el.id}
                                id={el.id}
                                comment={el.comment}
                                name={el.name}
                                serialNumber={el.number}
                            />
                        )
                    })
                    : <div className={s.empty}>В таблице пока нет записей</div>
                }
            </div>
            <Pagination currentPage={currentPage}
                        show={show}
                        itemsAmount={itemsAmount}
                        showPagination={showPagination}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        firstIndex={firstItemIndex}
                        lastIndex={lastItemIndex}
            />
        </>

    );
};

export default EquipTable;