import React, {useState} from 'react';
import s from "./Table.module.scss";
import {useAppSelector} from "../../../../store/store";
import Pagination from "../pagination/Pagination";

const UnionTable = () => {

    let table = useAppSelector(state => state.union)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(20)
    const itemsAmount = table.length
    const maxPage = Math.ceil(table.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    table = table.slice(firstItemIndex, lastItemIndex)
    const [show, setShow] = useState(false)

    const showPagination = () => setShow(!show)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
        <>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.union}`}>
                    <h6 className={s.caption}>Наименование документа</h6>
                    <h6 className={s.caption}>Сумма</h6>
                    <h6 className={s.caption}>Дата</h6>
                </div>
                {table.length !== 0 ?
                    table.map(el => {
                        return (
                            <div className={`${s.row} ${s.union}`} key={el.id}>
                                <div className={s.col}>{el.check}</div>
                                <div className={s.col}>{el.sum}</div>
                                <div className={s.col}>{el.date}</div>
                                <div className={s.col}>
                                    {el.download && <a href="/" className={s.download} download/>}
                                </div>
                            </div>
                        )
                    })
                    : <div className={s.empty}>В таблице пока нет записей</div>
                }
            </div>
            <Pagination currentPage={currentPage}
                        itemsAmount={itemsAmount}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        lastIndex={lastItemIndex}
                        firstIndex={firstItemIndex}
                        showPagination={showPagination}
                        show={show}
            />

        </>

    );
};

export default UnionTable;