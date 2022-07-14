import React, {useState} from 'react';
import s from './Pagination.module.scss'

type PropsType = {
    itemsAmount: number
    setItemsPerPage: (itemsPerPage: number) => void
    setCurrentPage: (currentPage: number)=> void
    currentPage: number
    maxPage: number
    nextPage: () => void
    prevPage: () => void
    firstIndex: number
    lastIndex: number
}

const Pagination = ({itemsAmount, currentPage, maxPage, nextPage, prevPage, setItemsPerPage, setCurrentPage,  firstIndex, lastIndex}: PropsType) => {
    const [show, setShow] = useState(false)

    const showAllItems = () => {
        setShow(!show)
        if (show) {
            setCurrentPage(1)
            setItemsPerPage(4)
        } else {
            setItemsPerPage(10)
        }
    }

    return (
        <div className={s.pagination}>
            <button onClick={showAllItems}
                    className={s.pagination__toggle}>{show ? 'Скрыть' : 'Показать всё'}</button>
            {show && <div className={s.pagination__block}>
                <div className={s.pagination__amount}>
                    <span>{firstIndex + 1}</span> - <span>{lastIndex > itemsAmount ? itemsAmount : lastIndex}</span>, всего <span>{itemsAmount}</span>
                </div>
                <div className={s.pagination__buttons}>
                    <span>{currentPage}</span> из <span>{maxPage}</span>
                    <button onClick={prevPage} disabled={currentPage === 1} className={`${s.pagination__btn} ${s.prev}`}/>
                    <button onClick={nextPage} disabled={currentPage === maxPage} className={`${s.pagination__btn} ${s.next}`}/>
                </div>
            </div>}
        </div>
    );
};

export default Pagination;