import React from 'react';
import s from '../PersonalAccount.module.scss'
import UnionTable from "../components/tables/UnionTable";
import Button from "../components/button/Button";
import {AppDispatchType, useAppSelector} from "../../../store/store";
import PayModal from "../../modals/PayModal";
import {useDispatch} from "react-redux";
import {togglePayModal} from "../../../reducers/modalReducer";

const Union = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const openPayModal = () => dispatch(togglePayModal(true))
    return (
        <>
            <div className={s.wrap}>
                <div className={s.top}>
                    <div className={s.col}>
                        <div className={s.caption}>Все платежи</div>
                        <button className={s.tooltip}>?</button>
                    </div>
                    <Button callBack={openPayModal} type={'button'} title={'Сформировать акт сверки'}/>
                </div>
                <UnionTable/>
            </div>
            <PayModal/>
        </>

    );
};

export default Union;