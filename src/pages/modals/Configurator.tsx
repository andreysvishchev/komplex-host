import React, {useState} from 'react';
import s from './Modal.module.scss'
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import FormInput from "../forms/components/FormInput/FormInput";
import FormSelect from "../forms/components/FormSelect/FormSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {ConfiguratorType} from "../../reducers/rentBlockReducer";
import {openModalAC} from "../../reducers/modal-reducer";


type PropsType = {
    open: boolean
    setOpen: (open: boolean) => void
}

const Configurator = (props: PropsType) => {
    const handleClose = () => props.setOpen(false)
    const configurator = useSelector<AppStateType, ConfiguratorType>(state => state.rent.configurator)
    const dispatch = useDispatch()
    const saveConfiguration = ()=> {
        props.setOpen(false)
        dispatch(openModalAC(true, true,'Запрос на изменение услуги Аренда места отправлен'))
    }


    return (
        <div className={s.configurator}>
            <Modal
                open={props.open}
                onClose={handleClose}>
                <Box sx={modal}>
                    <button onClick={handleClose} className={s.close}/>
                    <div className={s.caption}>Конфигуратор</div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormInput caption={configurator.typeEquip.caption} value={configurator.typeEquip.title}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>{configurator.typeEquip.price}</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormInput caption={configurator.amountUnit.caption}
                                       value={configurator.amountUnit.amount}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>{configurator.amountUnit.price} ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.power.caption} options={configurator.power.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.sockets.caption} options={configurator.sockets.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.ports.caption} options={configurator.ports.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.amountIP.caption} options={configurator.amountIP.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.speed.caption} options={configurator.speed.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__sumtitle}>Итого:</div>
                        <div className={s.configurator__sum}>7 000 ₽</div>

                    </div>
                    <div className={s.row}>
                        <button onClick={handleClose} className={s.cancel}>Отмена</button>
                        <button onClick={saveConfiguration}  className={s.save}>Отправить запрос
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Configurator;