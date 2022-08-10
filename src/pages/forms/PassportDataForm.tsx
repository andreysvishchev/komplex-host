import React, {ChangeEvent} from 'react';
import s from "./Form.module.scss";
import Input from "../components/Input/Input";
import {useFormik} from "formik";
import Button from "../components/button/Button";
import Textarea from "../components/textarea/Textarea";
import {useDispatch} from "react-redux";
import * as faceapi from "face-api.js";
import maskSrc from '../../img/mask.png'
import errorSrc from '../../img/error.jpg'
import {useAppSelector} from "../../store/store";
import {addPrivateData, RegistrationDataType} from "../../reducers/registrationReducer";


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
    place_issue?: string
    date_issue?: string
    inn?: string
    scan_main?: string
    scan_reg?: string
}

const PassportDataForm = (props: PropsType) => {
    const dispatch = useDispatch();
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)

    const formik = useFormik({
        initialValues: {
            series: data.series,
            number: data.number,
            place_issue: data.place_issue,
            date_issue: data.date_issue,
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
            if (!values.place_issue) {
                errors.place_issue = 'Поле обязательно для заполнения';
            }
            if (!values.date_issue) {
                errors.date_issue = 'Поле обязательно для заполнения';
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
            // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
            //console.log(decodeURIComponent(escape(window.atob(valueStr))))
            props.nextPage()
        },
    })

    faceapi.nets.tinyFaceDetector.loadFromUri('./models')

    async function changeMainScan(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length) {
            props.setFileName(e.target.files[0].name)
            let imgFile = e.target.files[0];
            const base64 = await convertBase64(imgFile)
            const img = await faceapi.bufferToImage(imgFile)
            const displaySize = {width: img.width, height: img.height}
            const canvas = document.getElementById('scan_main') as HTMLCanvasElement;
            faceapi.matchDimensions(canvas, displaySize)
            const options = new faceapi.TinyFaceDetectorOptions({inputSize: 512})
            const detections = await faceapi.detectAllFaces(img, options)
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            const ctx = await canvas.getContext('2d')
            const image = new Image();
            if (typeof base64 === "string") {
                image.src = base64
            }
            ctx!.drawImage(image, 0, 0)
            if (detections.length !== 0) {
                const x = detections[0].box.x
                const y = detections[0].box.y
                const boxWidth = detections[0].box.width
                const boxHeight = detections[0].box.height
                faceapi.draw.drawDetections(canvas, resizedDetections)
                ctx!.fillStyle = 'white'
                ctx!.fillRect(x - 5, y - 30, boxWidth + 10, boxHeight + 35);
                const mask = new Image();
                mask.src = `${maskSrc}`
                mask.onload = () => {
                    for (let w = 0; w < canvas.width; w += mask.width) {
                        for (let h = 0; h < canvas.height; h += mask.height) {
                            ctx!.drawImage(mask, w, h);
                        }
                    }
                }
            } else {
                const error = new Image()
                error.src = `${errorSrc}`
                error.onload = () => {
                    ctx!.drawImage(error, 0, 0, image.naturalWidth, image.naturalHeight);
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
            const canvas = document.getElementById('scan_reg') as HTMLCanvasElement;
            const ctx = await canvas.getContext('2d')
            const image = new Image();
            if (typeof base64 === "string") {
                image.src = base64
            }
            const mask = new Image();
            mask.src = `${maskSrc}`
            image.onload = () => {
                canvas.width = image.width
                canvas.height = image.height
                ctx!.drawImage(image, 0, 0, image.width, image.height)
            }
            mask.onload = () => {
                for (let w = 0; w < canvas.width; w += mask.width) {
                    for (let h = 0; h < canvas.height; h += mask.height) {
                        ctx!.drawImage(mask, w, h);
                    }
                }
            }
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
                <Input
                    caption={'Серия'}
                    placeholder={'_ _ _ _'}
                    {...formik.getFieldProps('series')}
                    error={formik.errors.series && formik.touched.series}
                    errorText={formik.errors.series}/>
                <Input
                    caption={'Номер'}
                    placeholder={'_ _ _ _ _ _'}
                    {...formik.getFieldProps('number')}
                    error={formik.errors.number && formik.touched.number}
                    errorText={formik.errors.number}/>
            </div>
            <Textarea
                placeholder={'Введите кем выдан паспорт'}
                caption={'Кем выдан'}
                error={formik.errors.place_issue && formik.touched.place_issue}
                errorText={formik.errors.place_issue}
                {...formik.getFieldProps('place_issue')}
            />
            <Input
                caption={'Дата выдачи'}
                placeholder={'ДД.ММ.ГГГГ'}
                {...formik.getFieldProps('date_issue')}
                error={formik.errors.date_issue && formik.touched.date_issue}
                errorText={formik.errors.date_issue}/>
            <Input
                caption={'ИНН'}
                placeholder={'Номер ИНН'}
                {...formik.getFieldProps('inn')}
                error={formik.errors.inn && formik.touched.inn}
                errorText={formik.errors.inn}
            />
            <div className={s.form__caption}>Скан паспорта</div>
            <div className={s.form__scan}>
                <label className={`${s.file} ${s.one}`}>
                    <div className={s.file__title}>Скан разворота</div>
                    <input onChange={changeMainScan} className={s.file__input}
                           accept='image/jpeg, image/png'
                           type="file"/>
                    <span className={s.file__label}>{props.fileName}</span>
                </label>
                {formik.errors.scan_main && formik.touched.scan_main &&
                <div className={s.input__error}>{formik.errors.scan_main}</div>}
                <canvas style={{display: "none"}} id={'scan_main'}/>
            </div>
            <div className={s.form__scan}>
                <label className={`${s.file} ${s.two}`}>
                    <div className={s.file__title}>Скан прописки</div>
                    <input onChange={changeRegistrationScan} className={s.file__input}
                           accept='image/jpeg, image/png'
                           type="file"/>
                    <span className={s.file__label}>{props.fileNameTwo}</span>
                </label>
                {formik.errors.scan_reg && formik.touched.scan_reg &&
                <div className={s.input__error}>{formik.errors.scan_reg}</div>}
                <canvas style={{display: "none"}} id={'scan_reg'}/>
            </div>
            <div className={s.form__buttons}>
                <Button light={true} callBack={props.prevPage} type={"button"}
                        title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
        </form>
    );
};

export default PassportDataForm;