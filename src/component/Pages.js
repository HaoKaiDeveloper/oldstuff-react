import React from 'react'
import styled from 'styled-components'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { changeActivePage } from '../features/productSlice'

const Pages = ({ numOfPages, activePage }) => {
    const dispatch = useDispatch()

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1
    })

    const nextPage = () => {
        let page
        if (activePage >= numOfPages) {
            return
        } else {
            page = activePage + 1
            dispatch(changeActivePage(page))
        }


    }

    const prevPage = () => {
        let page
        if (activePage <= 1) {
            return
        } else {
            page = activePage - 1
            dispatch(changeActivePage(page))
        }
    }

    if (numOfPages < 2) {
        return
    }

    return <Wrapper className='pages_btn-container'>
        <button type='button' className='prev_btn' onClick={prevPage}><BsChevronCompactLeft /></button>
        {pages.map((pageNum) => {
            return <button type='button' className={activePage === pageNum ? 'page_btn active' : 'page_btn'} key={pageNum} onClick={() => dispatch(changeActivePage(pageNum))}>
                {pageNum}
            </button>
        })}
        <button type='button' className='next_btn' onClick={nextPage}><BsChevronCompactRight /></button>

    </Wrapper>
}

const Wrapper = styled.div`
display: flex;
align-items:center;
gap: 1rem;


button{
    font-size: 2rem;
    /* font-weight: 600; */
    padding: 0.4rem 1rem;
    border: none;
    border-radius: 3px;
    background-color: transparent;
    color: var(--secondary-700);
    cursor: pointer;

    &:active{
        background-color: var(--secondary-700);
        color: #fff;
    }
}

.active{
    background-color: var(--secondary-700);
    color: #fff;
}

.prev_btn,.next_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--secondary-700);
}


`


export default Pages