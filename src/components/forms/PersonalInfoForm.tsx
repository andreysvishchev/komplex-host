import React from 'react';
import s from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../button/Button";
import {useDispatch} from "react-redux";
import {
   addPrivateData,
   choicePartner,
   RegistrationDataType
} from "../../store/registrationReducer";
import {useFormik} from "formik";
import {AppDispatchType, useAppSelector} from "../../store/store";
import DatePickerField from "../date-picker/DatePickerField";


type PropsType = {
   nextPage: () => void
   registration: boolean
   leaveReg: (hide: boolean) => void
}

type FormikErrorType = {
   last_name?: string
   first_name?: string
   parent?: string
   date_birth?: string | null
   email?: string
   phone?: string
}

const PersonalInfoForm = (props: PropsType) => {
   const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
   const dispatch = useDispatch<AppDispatchType>()
   const leaveReg = () => {
      dispatch(choicePartner(null))
      props.leaveReg(false)
   }
   const formik = useFormik({
      initialValues: {
         last_name: data.last_name,
         first_name: data.first_name,
         parent: data.parent,
         date_birth: data.date_birth,
         phone: data.phone,
         email: data.email,
         partner: '1'
      },
      validate: (values) => {
         const errors: FormikErrorType = {};
         if (!values.first_name) {
            errors.first_name = 'Поле обязательно для заполнения';
         }
         if (!values.last_name) {
            errors.last_name = 'Поле обязательно для заполнения';
         }
         if (!values.parent) {
            errors.parent = 'Поле обязательно для заполнения';
         }
         if (!values.date_birth) {
            errors.date_birth = 'Поле обязательно для заполнения';
         }
         if (!values.phone) {
            errors.phone = 'Поле обязательно для заполнения';
         }
         if (!values.email) {
            errors.email = 'Поле обязательно для заполнения';
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email указан некорректно';
         }
         return errors;
      },
      onSubmit: values => {
         const newData = {
            first_name: values.first_name,
            last_name: values.last_name,
            parent: values.parent,
            phone: values.phone,
            email: values.email,
            date_birth: values.date_birth!.toLocaleDateString('ru')
         }
         dispatch(addPrivateData(Object.assign(data, newData)))
         console.log(data)
         // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
         //console.log(decodeURIComponent(escape(window.atob(valueStr))))
         props.nextPage()
      },
   })

   return (
      <form onSubmit={formik.handleSubmit}
            className={props.registration ? `${s.registration} ${s.form}` : s.form}>
         <input disabled={true}
                className={s.hidden} {...formik.getFieldProps('partner')} />
         <Input
            caption={'Фамилия'}
            placeholder={'Введите фамилию'}
            {...formik.getFieldProps('last_name')}
            error={formik.errors.last_name && formik.touched.last_name}
            errorText={formik.errors.last_name}
         />
         <Input
            caption={'Имя'}
            placeholder={'Введите имя'}
            {...formik.getFieldProps('first_name')}
            error={formik.errors.first_name && formik.touched.first_name}
            errorText={formik.errors.first_name}
         />
         <Input
            caption={'Отчество'}
            placeholder={'Введите отчество'}
            {...formik.getFieldProps('parent')}
            error={formik.errors.parent && formik.touched.parent}
            errorText={formik.errors.parent}
         />
         <div className={s.form__date}>
            <div className={s.form__caption}>Дата рождения</div>
            <DatePickerField id='date_birth'
                             onChange={formik.setFieldValue}
                             value={formik.values.date_birth}
                             error={formik.errors.date_birth && formik.touched.date_birth}
                             errorText={formik.errors.date_birth}
                             name='date_birth'/>
         </div>
         <Input
            caption={'Номер телефона'}
            placeholder={'Введите телефон'}
            {...formik.getFieldProps('phone')}
            error={formik.errors.phone && formik.touched.phone}
            errorText={formik.errors.phone}
         />
         <Input
            caption={'Электронная почта'}
            errorText={formik.errors.email}
            error={formik.errors.email &&
               formik.touched.email}
            {...formik.getFieldProps('email')}
            placeholder={'Введите e-mail'}/>
         <div className={s.form__buttons}>
            <Button light={true} callBack={leaveReg} type={"button"} title={'Назад'}/>
            <Button title={'Далее'} type={'submit'}/>
         </div>
      </form>
   );
};

export default PersonalInfoForm;