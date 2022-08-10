import React, {useState} from 'react';
import MailAddressForm from "../../../../forms/MailAddressForm";
import form from "../../../../forms/Form.module.scss";
import s from "./PartnerRegistration.module.scss";
import Radio from "../../../../components/radio/Radio";
import RequisitesForm from "../../../../forms/RequisitesForm";
import ContactsForm from "../../../../forms/ContactsForm";
import CompanyInfoForm from "../../../../forms/CompanyInfoForm";
import {useFormik} from "formik";
import Button from "../../../../components/button/Button";
import BusinessAddressForm from "../../../../forms/BusinessAddressForm";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../../../../store/store";
import {nextPage, prevPage} from "../../../../../reducers/registrationReducer";
import DirectorInfoForm from "../../../../forms/DirectorInfoForm";

type PropsType = {
    leaveReg: () => void
    setHide: (hide: boolean) => void
}
const CompanyRegistration = (props: PropsType) => {
    const coincidence = ['Да', 'Нет']
    const [value, onChangeOption] = useState(coincidence[0]);
    const stepHeadlines = ['Введите информацию об организации', 'Введите информацию о руководителе', 'Введите юридический адрес', 'Почтовый адрес совпадает с юридическим?', 'Введите реквизиты', '']
    const dispatch = useDispatch<AppDispatchType>()
    const page = useAppSelector(state => state.registration.step)
    const nextPageHandler = () => {
        dispatch(nextPage())
    }
    const prevPageHandler = () => {
        dispatch(prevPage())
    }

    const formik = useFormik({
        initialValues: {
            coincidence: '',
        },
        onSubmit: values => {
            nextPageHandler()
        },
    })


    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <CompanyInfoForm
                    leaveReg={props.leaveReg}
                    nextPage={nextPageHandler}
                    registration={true}/>
            case 1:
                return <DirectorInfoForm
                    prevPage={prevPageHandler}
                    nextPage={nextPageHandler}/>
            case 2:
                return <MailAddressForm
                    prevPage={prevPageHandler}
                    registration={true}
                    lastStep={false}
                    nextPage={nextPageHandler}/>
            case 3:
                return (<>
                    <form onSubmit={formik.handleSubmit}
                          className={`${form.form} ${form.registration}`}>
                        <div className={value == 'Да' ? `${s.frame} ${s.not}` : s.frame}>
                            <Radio value={value}
                                   name={'coincidence'}
                                   options={coincidence}
                                   onChangeOption={onChangeOption}/>
                        </div>
                        {
                            value == 'Да' &&
                            <div className={form.form__buttons}>
                                <Button light={true} callBack={prevPageHandler}
                                        type={"button"} title={'Назад'}/>
                                <Button title={'Далее'} type={'submit'}/>
                            </div>
                        }
                    </form>
                    {
                        value === 'Нет' &&
                        <BusinessAddressForm
                            prevPage={prevPageHandler}
                            registration={true}
                            nextPage={nextPageHandler}/>
                    }
                </>)
            case 4:
                return <RequisitesForm
                    registration={true}
                    prevPage={prevPageHandler}
                    nextPage={nextPageHandler}/>
            case 5:
                return <ContactsForm
                    registration={true}
                    prevPage={prevPageHandler}/>


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
                <div className={s.caption}>Юридическое лицо</div>
                {stepHeadlines[page] !== '' &&
                <div className={s.headline}>{stepHeadlines[page]}</div>}
                {PageDisplay()}

            </div>
        </div>
    );
};

export default CompanyRegistration;