import React, {useState} from 'react';
import s from '../PersonalAccount.module.scss'
import UnionTable from "../services/assets/tables/UnionTable";
import Button from "../../components/button/Button";
import PayModal from "../../modals/PayModal";
import Tooltip from "../../components/tooltip/Tooltip";

const Union = () => {
    const [open, setOpen] = useState(false)
    const openModal = () => {
        setOpen(true)
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
                <UnionTable/>
            </div>
            <PayModal open={open} setOpen={setOpen}/>
        </>

    );
};

export default Union;