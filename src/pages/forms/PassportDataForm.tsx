import React, {ChangeEvent} from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import {useFormik} from "formik";
import Button from "../personal-account/components/button/Button";
import Textarea from "./components/Textarea/Textarea";
import {useDispatch} from "react-redux";
import * as faceapi from "face-api.js";
import maskSrc from '../../img/mask.png'
import {useAppSelector} from "../../store/store";
import {addPrivateData} from "../../reducers/registrationReducer";


type PropsType = {
    prevPage: () => void
    nextPage: () => void
    registration: boolean

    fileName: string
    fileNameTwo: string
    setFileName: (name: string) => void
    setFileNameTwo: (name: string) => void
}

type FormikErrorType = {
    series?: string
    number?: string
    placeOfIssue?: string
    dateOfIssue?: string
    inn?: string
    scan_main?: string
    scan_reg?: string
}

const PassportDataForm = (props: PropsType) => {


    const dispatch = useDispatch();
    const data = useAppSelector(state => state.registration.privateData)

    const formik = useFormik({
        initialValues: {
            series: data.series,
            number: data.number,
            placeOfIssue: data.placeOfIssue,
            dateOfIssue: data.dateOfIssue,
            inn: data.inn,
            scan_main: data.scan_main,
            scan_reg: data.scan_reg
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.series) {
                errors.series = 'Поле обязательно для заполнения';
            }
            if (!values.number) {
                errors.number = 'Поле обязательно для заполнения';
            }
            if (!values.placeOfIssue) {
                errors.placeOfIssue = 'Поле обязательно для заполнения';
            }
            if (!values.dateOfIssue) {
                errors.dateOfIssue = 'Поле обязательно для заполнения';
            }
            if (!values.inn) {
                errors.inn = 'Поле обязательно для заполнения';
            }
            if (!values.scan_main) {
                errors.scan_main = 'Прикрпеите скан пасспорта';
            }
            if (!values.scan_reg) {
                errors.scan_reg = 'Прикрпеите скан пасспорта';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addPrivateData(Object.assign(data, values)))
            console.log(data)
            props.nextPage()
            /*  let valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(values))))*/
            /* console.log(valueStr)
             console.log(decodeURIComponent(escape(window.atob(valueStr))))
             console.log(values)*/


        },
    })


    faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models')

    async function changeMainScan(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length) {
            props.setFileName(e.target.files[0].name)
            let imgFile = e.target.files[0];
            const base64 = await convertBase64(imgFile)
            const img = await faceapi.bufferToImage(imgFile)
            const displaySize = {width: img.width, height: img.height}
            const canvas = document.getElementById('canvas') as HTMLCanvasElement;
            faceapi.matchDimensions(canvas, displaySize)
            const options = new faceapi.TinyFaceDetectorOptions({inputSize: 512})
            const detections = await faceapi.detectAllFaces(img, options)
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            const ctx = await canvas.getContext('2d')

            if (ctx) {
                const image = new Image();
                const mask = new Image();
                const x = detections[0].box.x
                const y = detections[0].box.y
                const boxWidth = detections[0].box.width
                const boxHeight = detections[0].box.height
                if (typeof base64 === "string") {
                    image.src = base64
                }
                mask.src = `${maskSrc}`
                ctx.drawImage(image, 0, 0)
                mask.onload = () => {
                    for (let w = 0; w < canvas.width; w += mask.width) {
                        for (let h = 0; h < canvas.height; h += mask.height) {
                            ctx!.drawImage(mask, w, h);
                        }
                    }
                    faceapi.draw.drawDetections(canvas, resizedDetections)
                    ctx.fillStyle = 'white'
                    ctx.fillRect(x - 5, y - 5, boxWidth + 10, boxHeight + 10);
                }
            }
            const result = canvas.toDataURL()
            await formik.setFieldValue("scan_main", result);
        }
    }

    const changeRegistrationScan = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.setFileNameTwo(e.target.files[0].name)
            let file = e.target.files[0];
            const base64 = await convertBase64(file)
            await formik.setFieldValue("scan_reg", base64);
        }
    }

    const convertBase64 = (file: any) => {
        return new Promise(resolve => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
        })
    }

    return (
        <form onSubmit={formik.handleSubmit}
              className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <div className={s.form__row}>
                <FormInput
                    maxLength={4}
                    caption={'Серия'}
                    placeholder={'_ _ _ _'}
                    {...formik.getFieldProps('series')}
                    error={formik.errors.series && formik.touched.series}
                    errorText={formik.errors.series}/>
                <FormInput
                    caption={'Номер'}
                    placeholder={'_ _ _ _ _ _'}
                    maxLength={6}
                    {...formik.getFieldProps('number')}
                    error={formik.errors.number && formik.touched.number}
                    errorText={formik.errors.number}/>
            </div>
            <Textarea
                placeholder={'Введите кем выдан паспорт'}
                caption={'Кем выдан'}
                error={formik.errors.placeOfIssue && formik.touched.placeOfIssue}
                errorText={formik.errors.placeOfIssue}
                {...formik.getFieldProps('placeOfIssue')}
            />
            <FormInput
                caption={'Дата выдачи'}
                placeholder={'ДД.ММ.ГГГГ'}
                {...formik.getFieldProps('dateOfIssue')}
                error={formik.errors.dateOfIssue && formik.touched.dateOfIssue}
                errorText={formik.errors.dateOfIssue}/>
            <FormInput
                caption={'ИНН'}
                placeholder={'Номер ИНН'}
                maxLength={12}
                {...formik.getFieldProps('inn')}
                error={formik.errors.inn && formik.touched.inn}
                errorText={formik.errors.inn}
            />
            <div className={s.form__caption}>Скан паспорта</div>
            <div className={s.form__scan}>
                <label className={`${s.file} ${s.one}`}>
                    <div className={s.file__title}>Скан разворота</div>
                    <input onChange={changeMainScan} className={s.file__input} accept='image/jpeg, image/png'
                           type="file"/>
                    <span className={s.file__label}>{props.fileName}</span>
                </label>
                {formik.errors.scan_main && formik.touched.scan_main &&
                <div className={s.input__error}>{formik.errors.scan_main}</div>}
                <canvas style={{display: "none"}} id={'canvas'}/>
            </div>
            <div className={s.form__scan}>
                <label className={`${s.file} ${s.two}`}>
                    <div className={s.file__title}>Скан прописки</div>
                    <input onChange={changeRegistrationScan} className={s.file__input} accept='image/jpeg, image/png'
                           type="file"/>
                    <span className={s.file__label}>{props.fileNameTwo}</span>
                </label>
                {formik.errors.scan_reg && formik.touched.scan_reg &&
                <div className={s.input__error}>{formik.errors.scan_reg}</div>}
            </div>

            <div className={s.form__buttons}>
                <Button light={true} callBack={props.prevPage} type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
            {/*    <EditorModal/>*/}
        </form>
    );
};

export default PassportDataForm;