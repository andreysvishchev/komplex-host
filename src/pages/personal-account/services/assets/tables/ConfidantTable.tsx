import React, {useState} from 'react';
import s from './Table.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../../store/store";
import {
    ascNameSort,
    ConfidantType,
    descNameSort
} from "../../../../../reducers/confidantReducer";
import Pagination from "../../../../components/pagination/Pagination";
import ConfidantItem from "./ConfidantItem";

type PropsType = {
    data: ConfidantType[]
    currentPage: number
    itemsAmount: number
    maxPage: number
    nextPage: () => void
    prevPage: () => void
    setCurrentPage: (currentPage: number) => void
    setItemsPerPage: (itemsPerPage: number) => void
    lastIndex: number
    firsIndex: number
    tableStatus: string
}

const ConfidantTable = ({data, nextPage, prevPage, lastIndex, maxPage, currentPage, setItemsPerPage, firsIndex, itemsAmount, setCurrentPage, tableStatus}: PropsType) => {
    const [sort, changeSort] = useState<'desc' | 'asc'>('desc')
    const dispatch = useDispatch<AppDispatchType>()
    const [show, setShow] = useState(false)

    const sortByName = () => {
        if (sort === "asc") {
            dispatch(ascNameSort())
            changeSort('desc')
        } else if (sort === "desc") {
            dispatch(descNameSort())
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
                    <div onClick={sortByName}
                         className={sort === 'desc' ? `${s.caption} ${s.sort} ${s.desc}` : `${s.caption} ${s.sort}`}>ФИО
                    </div>
                    <div className={s.caption}>Серия и номер паспорта</div>
                    <div className={s.caption}>Телефон</div>
                </div>
                {data.length !== 0 ?
                    data.map(el => {
                        return (
                            <ConfidantItem key={el.id} tel={el.tel} id={el.id}
                                           passport={el.passport} name={el.name}/>
                        )
                    })
                    : <div className={s.empty}>{tableStatus}</div>
                }
            </div>
            <Pagination currentPage={currentPage}
                        itemsAmount={itemsAmount}
                        show={show}
                        showPagination={showPagination}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        lastIndex={lastIndex}
                        firstIndex={firsIndex}
            />
        </div>
    );
}

export default ConfidantTable;