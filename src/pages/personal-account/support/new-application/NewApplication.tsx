import React from 'react';
import s from '../Support.module.scss'
import Input from "../../../components/Input/Input";
import Textarea from "../../../components/textarea/Textarea";
import ChatFile from "../assets/chat-file/ChatFile";
import Button from "../../../components/button/Button";

const NewApplication = () => {
    const styleTextArea = {

    }

    return (
        <div className={s.new}>
            <div className={s.new__head}>
                <div className={s.new__title}>Заявка №1</div>
                <span className={`${s.application__status} ${s.open} ${s.position}`}>Открыта</span>
            </div>
            <form className={s.new__form}>
                <div className={s.new__wrap}>
                    <Input caption={'Название заявки'}
                           placeholder={'Введите название заявки'}/>
                    <div className={s.new__textarea}>
                        <Textarea style={styleTextArea} caption={'Описание'}
                                  placeholder={'Опишите заявку'}/>
                    </div>
                    <ChatFile title={true}/>
                </div>
                <div className={s.new__button}>
                    <Button title={'Отправить'} type={'submit'}/>
                </div>

            </form>
        </div>
    );
};

export default NewApplication;