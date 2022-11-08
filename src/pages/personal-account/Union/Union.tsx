import React from 'react';
import s from '../PersonalAccount.module.scss'
import UnionTable from "../services/assets/tables/union-table/UnionTable";
import Button from "../../../components/button/Button";
import PayModal from "../../../components/modals/PayModal";
import Tooltip from "../../../components/tooltip/Tooltip";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../../store/store";
import {openPayModal} from "../../../store/modalReducer";
import {Pagination} from "../../../function/pagination";

const Union = () => {
    const dispatch = useDispatch<AppDispatchType>()
    let data = useAppSelector(state => state.union)
    const {
        data: newData,
        prevPage,
        nextPage,
        itemsAmount,
        maxPage,
        lastItemIndex,
        firstItemIndex,
        currentPage,
    } = Pagination(data, 20)

    const openModal = () => {
        dispatch(openPayModal(true))
    }

    return (
        <>
            <div className={s.wrap}>
                <div className={s.top}>
                    <div className={s.col}>
                        <div className={s.caption}>Все платежи</div>
                        <Tooltip/>
                    </div>
                    <Button callBack={openModal} type={'button'}
                            title={'Сформировать акт сверки'}/>
                </div>
                <UnionTable
                    data={newData}
                    lastIndex={lastItemIndex}
                    firsIndex={firstItemIndex}
                    currentPage={currentPage}
                    maxPage={maxPage}
                    itemsAmount={itemsAmount}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>
            <PayModal/>
        </>

    );
};

export default Union;