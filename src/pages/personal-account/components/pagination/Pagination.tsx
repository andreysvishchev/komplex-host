import React from 'react';
import s from './Pagination.module.scss'

type PropsType = {
    itemsAmount: number
    currentPage: number
    maxPage: number
    nextPage: () => void
    prevPage: () => void
    firstIndex: number
    lastIndex: number
    showPagination: ()=> void
    show: boolean
}

const Pagination = ({itemsAmount, currentPage, maxPage, nextPage, prevPage, show,  firstIndex, lastIndex, showPagination}: PropsType) => {

    return (
        <div className={s.pagination}>
            <button onClick={showPagination}
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