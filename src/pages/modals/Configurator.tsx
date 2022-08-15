import React, {useState} from 'react';
import s from './Modal.module.scss'
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import Input from "../components/Input/Input";
import FormSelect from "../components/form-select/FormSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType, useAppSelector} from "../../store/store";
import {ConfiguratorType} from "../../reducers/rentBlockReducer";
import {openConfigurator, openNoticeModal} from "../../reducers/modalReducer";
import Button from "../components/button/Button";


type PropsType = {

}

const style = {
    width: '100%'
}

const Configurator = (props: PropsType) => {
    const configurator = useSelector<AppStateType, ConfiguratorType>(state => state.rent.configurator)
    const open  = useAppSelector(state => state.modal.configurator)
    const dispatch = useDispatch<AppDispatchType>()

    const handleClose = () => dispatch(openConfigurator(false))

    const saveConfiguration = () => {
        dispatch(openConfigurator(false))
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Запрос на изменение услуги Аренда места отправлен'
        }))
    }

    return (
        <div className={s.configurator}>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={modal}>
                    <button onClick={handleClose} className={s.close}/>
                    <div className={s.caption}>Конфигуратор</div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <Input caption={configurator.typeEquip.caption}
                                   value={configurator.typeEquip.title}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div
                                className={s.configurator__price}>{configurator.typeEquip.price}</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <Input caption={configurator.amountUnit.caption}
                                   value={configurator.amountUnit.amount}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div
                                className={s.configurator__price}>{configurator.amountUnit.price} ₽
                            </div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.power.caption}
                                        options={configurator.power.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.sockets.caption}
                                        options={configurator.sockets.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.ports.caption}
                                        options={configurator.ports.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.amountIP.caption}
                                        options={configurator.amountIP.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__col}>
                            <FormSelect caption={configurator.speed.caption}
                                        options={configurator.speed.list}/>
                        </div>
                        <div className={s.configurator__col}>
                            <div className={s.configurator__caption}>Цена</div>
                            <div className={s.configurator__price}>1 000 ₽</div>
                        </div>
                    </div>
                    <div className={s.configurator__row}>
                        <div className={s.configurator__subtitle}>Итого:</div>
                        <div className={s.configurator__sum}>7 000 ₽</div>

                    </div>
                    <div className={s.row}>
                        <Button style={style} callBack={handleClose} type={'button'}
                                title={'Отмена'} light={true}/>
                        <Button callBack={saveConfiguration} type={'button'}
                                title={'Отправить запрос'}/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Configurator;