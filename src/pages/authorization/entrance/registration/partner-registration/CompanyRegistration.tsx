import React, {useState} from 'react';
import EntrepreneurInfoForm from "../../../../forms/EntrepreneurInfoForm";
import AddressForm from "../../../../forms/AddressForm";
import form from "../../../../forms/Form.module.scss";
import s from "./PartnerRegistration.module.scss";
import Radio from "../../../../forms/components/Radio/Radio";
import {button} from "../../../../../style/style";
import RequisitesForm from "../../../../forms/RequisitesForm";
import ContactsForm from "../../../../forms/ContactsForm";
import CompanyInfoForm from "../../../../forms/CompanyInfoForm";

type PropsType = {
    leaveReg: () => void
}
const CompanyRegistration = (props: PropsType) => {

    const [page, setPage] = useState(0)
    const coincidence = ['Да', 'Нет']
    const [value, onChangeOption] = useState(coincidence[0]);
    const stepHeadlines = ['Введите информацию об организации', 'Введите юридический адрес', 'Почтовый адрес совпадает с юридическим?', 'Введите реквизиты', '']

    const nextPage = () => {
        setPage((currPage) => currPage + 1)
    }
    const prevPage = () => {
        setPage((currPage) => currPage - 1)
    }


    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <CompanyInfoForm leaveReg={props.leaveReg} nextPage={nextPage} registration={true}/>
            case 1:
                return <AddressForm prevPage={prevPage} registration={true} lastStep={false} nextPage={nextPage}/>
            case 2:
                return (<>
                    <form className={`${form.form} ${form.registration}`}>
                        <div className={value == 'Да' ? `${s.frame} ${s.not}` : s.frame}>
                            <Radio value={value} name={'coincidence'} options={coincidence}
                                   onChangeOption={onChangeOption}/>
                        </div>
                        {
                            value == 'Да' &&
                            <div className={form.form__buttons}>
                                <button onClick={prevPage} type={'button'}
                                        className={`${form.button} ${form.light}`}>Назад
                                </button>
                                <button type={'button'} onClick={nextPage} className={form.button}>Далее</button>
                            </div>
                        }
                    </form>
                    {
                        value === 'Нет' &&
                        <AddressForm prevPage={prevPage} lastStep={false} registration={true}/>
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
                                     className={i == page ? `${s.active} ${s.progress__item}` : i < page ? `${s.completed} ${s.progress__item}` : s.progress__item}></div>
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