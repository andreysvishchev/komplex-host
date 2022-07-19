import React, {useState} from 'react';
import AddressForm from "../../../../forms/AddressForm";
import form from '../../../../forms/Form.module.scss'
import s from "./PartnerRegistration.module.scss";
import EntrepreneurInfoForm from "../../../../forms/EntrepreneurInfoForm";
import Radio from "../../../../forms/components/Radio/Radio";
import {button} from "../../../../../style/style";
import RequisitesForm from "../../../../forms/RequisitesForm";
import ContactsForm from "../../../../forms/ContactsForm";
import Button from "../../../../personal-account/components/button/Button";
import {useFormik} from "formik";


type PropsType = {
    leaveReg: () => void
    setHide: (hide: boolean) => void
}

const EntrepreneurRegistration = (props: PropsType) => {
    const [page, setPage] = useState(0)
    const coincidence = ['Да', 'Нет']
    const [value, onChangeOption] = useState(coincidence[0]);
    const stepHeadlines = ['Введите информацию об ИП', 'Введите адрес регистрации', 'Почтовый адрес совпадает с адресом регистрации?', 'Введите реквизиты', '']

    const nextPage = () => {
        setPage((currPage) => currPage + 1)
    }
    const prevPage = () => {
        setPage((currPage) => currPage - 1)
    }

    const formik = useFormik({
        initialValues: {
            coincidence: '',
        },
        onSubmit: values => {
            nextPage()
        },
    })


    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <EntrepreneurInfoForm leaveReg={props.setHide} nextPage={nextPage} registration={true}/>
            case 1:
                return <AddressForm prevPage={prevPage} registration={true} lastStep={false} nextPage={nextPage}/>
            case 2:
                return (<>
                    <form onSubmit={formik.handleSubmit} className={`${form.form} ${form.registration}`}>
                        <div className={value == 'Да' ? `${s.frame} ${s.not}` : s.frame}>
                            <Radio value={value} name={'coincidence'} options={coincidence}
                                   onChangeOption={onChangeOption}/>
                        </div>
                        {
                            value == 'Да' &&
                            <div className={form.form__buttons}>
                                <Button light={true} callBack={prevPage} type={"button"} title={'Назад'}/>
                                <Button title={'Далее'} type={'submit'}/>
                            </div>
                        }
                    </form>
                    {
                        value === 'Нет' &&
                        <AddressForm prevPage={prevPage} nextPage={nextPage} lastStep={false} registration={true}/>
                    }
                </>)
            case 3:
                return <RequisitesForm registration={true} prevPage={prevPage} nextPage={nextPage}/>
            case 4:
                return <ContactsForm registration={true} prevPage={prevPage} nextPage={nextPage}/>


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
                <div className={s.caption}>Индивидуальный предприниматель</div>
                {stepHeadlines[page] !== '' &&
                <div className={s.headline}>{stepHeadlines[page]}</div>}
                {PageDisplay()}

            </div>
        </div>
    );
};

export default EntrepreneurRegistration;