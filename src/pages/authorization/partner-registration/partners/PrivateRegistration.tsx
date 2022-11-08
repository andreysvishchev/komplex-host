import React, {useState} from 'react';
import s from '../PartnerRegistration.module.scss'
import PersonalInfoForm from "../../../../components/forms/PersonalInfoForm";
import PassportDataForm from "../../../../components/forms/PassportDataForm";
import MailAddressForm from "../../../../components/forms/MailAddressForm";
import {useDispatch} from "react-redux";
import {nextPage, prevPage} from "../../../../store/registrationReducer";
import {AppDispatchType, useAppSelector} from "../../../../store/store";

type PropsType = {
    leaveReg: () => void
    setHide: (hide: boolean) => void
}

const PrivateRegistration = (props: PropsType) => {
    const stepHeadlines = ['Введите информацию о себе', 'Введите паспортные данные', 'Введите адрес регистрации']
    const [fileName, setFileName] = useState('Добавить')
    const [fileNameTwo, setFileNameTwo] = useState('Добавить')
    const dispatch = useDispatch<AppDispatchType>()
    const page = useAppSelector(state => state.registration.step)
    const nextPageHandler = () => {
        dispatch(nextPage())
    }
    const prevPageHandler = () => {
        dispatch(prevPage())
    }
    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <PersonalInfoForm
                    leaveReg={props.setHide}
                    nextPage={nextPageHandler}
                    registration={true}/>
            case 1:
                return <PassportDataForm
                    fileName={fileName}
                    fileNameTwo={fileNameTwo}
                    setFileName={setFileName}
                    setFileNameTwo={setFileNameTwo}
                    nextPage={nextPageHandler}
                    prevPage={prevPageHandler}
                    registration={true}/>
            case 2:
                return <MailAddressForm
                    prevPage={prevPageHandler}
                    registration={true}
                    lastStep={true}/>
        }
    }

    return (
        <div className={s.wrap}>
            <div className={s.steps}>
                <div className={s.progress}>
                    {
                        stepHeadlines.map((el, i) => {
                            return (
                                <div key={i}
                                     className={i == page ? `${s.active} ${s.progress__item}` : i < page ? `${s.completed} ${s.progress__item}` : s.progress__item}/>
                            )
                        })
                    }
                </div>
                <div className={s.caption}>Физическое лицо</div>
                <div className={s.headline}>{stepHeadlines[page]}</div>
                {PageDisplay()}

            </div>
        </div>
    );
};

export default PrivateRegistration;