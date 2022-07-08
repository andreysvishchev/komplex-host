import React, {useState} from 'react';
import RentBlock from "../../components/info-blocks/RentBlock";
import s from './AllServices.module.scss'

const AllServices = () => {
    let [active, setActive] = useState<boolean>(true)

    return (
        <div className={s.wrap}>
            {active ?
                <>
                    <h5 className={s.caption}>У Вас нет подключенных услуг.</h5>
                    <h5 className={s.caption}>Вы можете подключить:</h5>
                    <div className={s.items}>
                        <div className={`${s.item} ${s.place}`}>
                            <div className={`${s.icon} ${s.place}`}/>
                            <div className={s.info}>
                                <h5 className={s.headline}>Аренда места</h5>
                                <button className={`${s.button} ${s.place}`}>Подключить</button>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.rack}`}>
                            <div className={`${s.icon} ${s.rack}`}/>
                            <div className={s.info}>
                                <h5 className={s.headline}>Аренда стойки</h5>
                                <button className={`${s.button} ${s.rack}`}>Подключить</button>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.server}`}>
                            <div className={`${s.icon} ${s.server}`}/>
                            <div className={s.info}>
                                <h5 className={s.headline}>Аренда сервера</h5>
                                <button className={`${s.button} ${s.server}`}>Подключить</button>
                            </div>
                        </div>
                    </div>
                </>
                : <RentBlock/>
            }


        </div>
    );
};

export default AllServices;