import React from 'react';
import s from "./InfoBlock.module.scss";
import IpTable from "../tables/IpTable";
import RentMenu from "../../../../components/contextMenu/rentMenu";

type PropsType = {
    archive?: boolean

}

const ServerBlock = (props: PropsType) => {

    const callBack = () => {

    }

    return (
        <div className={s.wrap}>
            <div className={s.server__row}>
                {!props.archive && <div className={s.server__icon}/>}
                <div className={`${s.top} ${s.block}`}>
                    <div className={s.col}>
                        <h4 className={s.caption}>D-01</h4><span
                        className={s.number}>253/893.156</span>
                    </div>
                    {!props.archive &&
                    <div className={`${s.button} ${s.server__btn}`}>Консоль
                        управления</div>}
                </div>
                <div className={s.server__menu}>
                    {!props.archive && <RentMenu/>}
                </div>
            </div>
            <div className={s.specification}>
                <div className={s.specification__item}>
                    <h6 className={s.specification__caption}>CPU</h6>
                    <h4 className={s.specification__name}>Intel Xeon E3-1220</h4>
                </div>
                <div className={s.specification__item}>
                    <h6 className={s.specification__caption}>RAM</h6>
                    <h4 className={s.specification__name}>16 GB</h4>
                </div>
                <div className={s.specification__item}>
                    <h6 className={s.specification__caption}>HDD</h6>
                    <h4 className={s.specification__name}>2 x 1000 GB</h4>
                </div>
                <div className={s.specification__item}>
                    <h6 className={s.specification__caption}>IPMI</h6>
                    <h4 className={s.specification__name}>Да</h4>
                </div>
                <div className={`${s.specification__item} ${s.speed}`}>
                    <h6 className={s.specification__caption}>Скорость</h6>
                    <h4 className={s.specification__name}>100 MB/C</h4>
                </div>
            </div>
            <div className={s.server__row}>
                <IpTable/>
                <div className={s.server__col}>
                    <div className={`${s.specification__item} ${s.ip}`}>
                        <h6 className={s.specification__caption}>Количество
                            IP-адресов</h6>
                        <h4 className={s.specification__name}>4</h4>
                    </div>
                </div>
            </div>
            <div
                className={!props.archive ? `${s.bot} ${s.server}` : `${s.bot} ${s.server} ${s.archive}`}>
                <div className={s.data}>
                    <span className={s.data__caption}>Дата подключения</span>
                    <strong className={s.data__num}>21.05.201</strong>
                </div>
                {!props.archive
                    ? <div className={s.price}>
                        <span className={s.price__caption}>Итого:</span>
                        <strong className={s.price__sum}>3 300 ₽</strong>
                    </div>
                    : <>
                        <div className={s.slash}>|</div>
                        <div className={`${s.data} ${s.off}`}>
                            <span className={s.data__caption}>Дата подключения:</span>
                            <strong className={s.data__num}>21.05.2017</strong>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default ServerBlock;