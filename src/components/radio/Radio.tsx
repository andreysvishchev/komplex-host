import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Radio.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type PropsType = DefaultRadioPropsType & {
    options?: any[];
    onChangeOption?: (option: any) => void;
}


const Radio: React.FC<PropsType> =
    ({
         type, name, options,
         value, onChange, onChangeOption,
         ...restProps
     }) => {

        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e);
            onChangeOption && onChangeOption(e.currentTarget.value);
        };


        const mappedOptions: any[] = options
            ? options.map((o, i) => (
                <label className={s.radio} key={i}>
                    <input type={'radio'}
                           name={name}
                           checked={o === value}
                           value={o}
                           className={s.radio__input}
                           onChange={onChangeCallback}
                    />
                    <span className={o === value ? `${s.radio__icon} ${s.active}` : s.radio__icon}></span>
                    <div className={s.radio__title}>{o}</div>
                </label>
            ))
            : [];

        return <>{mappedOptions}</>

    };

export default Radio;