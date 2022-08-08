import React, {useState} from 'react';
import ConfidantTable from "../tables/ConfidantTable";
import s from "./InfoBlock.module.scss";
import Search from "../../../../components/search/Search";
import ConfidantMenu from "../../../../components/contextMenu/ConfidantMenu";
import Tooltip from "../../../../components/tooltip/Tooltip";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../store/store";
import {ConfidantType} from "../../../../../reducers/confidantReducer";


const ConfidantBlock = () => {
    let data = useSelector<AppStateType, ConfidantType[]>(state => state.confidant)
    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const itemsAmount = data.length
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    data = data.slice(firstItemIndex, lastItemIndex)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)
    //search
    const [value, setValue] = useState('')
    data = data.filter(el => {
        return el.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Доверенное лицо</div>
                    <Tooltip/>
                    <Search value={value} setValue={setValue}/>
                </div>
                <ConfidantMenu/>
            </div>
            <ConfidantTable
                data={data}
                lastIndex={lastItemIndex}
                firsIndex={firstItemIndex}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
                itemsAmount={itemsAmount}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    );
};

export default ConfidantBlock;