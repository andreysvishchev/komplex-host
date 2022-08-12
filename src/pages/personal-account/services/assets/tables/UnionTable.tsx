import React, {useState} from 'react';
import s from "./Table.module.scss";
import Pagination from "../../../../components/pagination/Pagination";
import {UnionType} from "../../../../../reducers/unionReducer";

type PropsType = {
    data: UnionType[]
    currentPage: number
    itemsAmount: number
    maxPage: number
    nextPage: () => void
    prevPage: () => void
    lastIndex: number
    firsIndex: number
}

const UnionTable: React.FC<PropsType> = (
    {
        data, nextPage, prevPage,
        lastIndex, maxPage, currentPage,
        firsIndex, itemsAmount
    }
) => {

    const [show, setShow] = useState(false)
    const showPagination = () => setShow(!show)


    return (
        <>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.union}`}>
                    <h6 className={s.caption}>Наименование документа</h6>
                    <h6 className={s.caption}>Сумма</h6>
                    <h6 className={s.caption}>Дата</h6>
                </div>
                {data.length !== 0 ?
                    data.map(el => {
                        return (
                            <div className={`${s.row} ${s.union}`} key={el.id}>
                                <div className={s.col}>{el.check}</div>
                                <div className={s.col}>{el.sum}</div>
                                <div className={s.col}>{el.date}</div>
                                <div className={s.col}>
                                    {el.download &&
                                    <a href="/" className={s.download} download/>}
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
                        lastIndex={lastIndex}
                        firstIndex={firsIndex}
                        showPagination={showPagination}
                        show={show}
            />

        </>

    );
};

export default UnionTable;