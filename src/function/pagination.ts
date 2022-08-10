import {useState} from "react";


export const Pagination = (data: any[], itemsPage: number) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(itemsPage)
    const itemsAmount = data.length
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    data = data.slice(firstItemIndex, lastItemIndex)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)
    return {
        data,
        prevPage,
        nextPage,
        itemsAmount,
        maxPage,
        lastItemIndex,
        firstItemIndex,
        setCurrentPage,
        currentPage,
        setItemsPerPage
    }
}