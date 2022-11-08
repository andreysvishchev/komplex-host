import React, {useState} from 'react';
import s from '../Table.module.scss';
import EquipItem from "./EquipItem";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../../../../store/store";
import {
    ascEquipSort,
    descEquipSort, EquipType
} from "../../../../../../store/equipReducer";
import Pagination from "../../../../../../components/pagination/Pagination";

type PropsType = {
    data: EquipType[]
    currentPage: number
    itemsAmount: number
    maxPage: number
    nextPage: () => void
    prevPage: () => void
    setCurrentPage: (currentPage: number) => void
    setItemsPerPage: (itemsPerPage: number) => void
    lastIndex: number
    firstIndex: number
    tableStatus: string
}
const EquipTable:React.FC<PropsType> = ({data, nextPage, prevPage, lastIndex, maxPage, currentPage, setItemsPerPage, firstIndex, itemsAmount, setCurrentPage, tableStatus}) => {
    const dispatch = useDispatch<AppDispatchType>()

    const [sort, changeSort] = useState<'desc' | 'asc'>('desc')
    const [show, setShow] = useState(false)

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
                    : <div className={s.empty}>{tableStatus}</div>
                }
            </div>
            <Pagination currentPage={currentPage}
                        show={show}
                        itemsAmount={itemsAmount}
                        showPagination={showPagination}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        firstIndex={firstIndex}
                        lastIndex={lastIndex}
            />
        </>

    );
};

export default EquipTable;