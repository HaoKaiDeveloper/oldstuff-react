
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { countTotal } from '../features/cartSlice'
import { CartPage_1, CartPage_2, } from '../component'

const CartPage = () => {
    const { cartItems, total } = useSelector((store) => store.cart)
    const [nextPage, setNextPage] = useState(0)
    const [acitivePage, setAtivePage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'OS | Cart'
    })


    const setPage = (action, clientInfo) => {
        if (action === 'next') {
            setAtivePage(2)
            setNextPage(prevTranslate => {
                return prevTranslate - 50
            })

        }
        if (action === 'prev') {
            setAtivePage(1)
            setNextPage(prevTranslate => {
                return prevTranslate + 50
            })

        }
    }


    useEffect(() => {
        dispatch(countTotal())
    }, [cartItems])

    useEffect(() => {
        const page2Height = document.querySelector('.cart_page-2')
        const totalHehght = document.querySelector('article')


        if (acitivePage === 1) {
            totalHehght.style.height = '100%'
        }
        if (acitivePage === 2) {
            totalHehght.style.height = `${page2Height.offsetHeight}px`
        }

        window.addEventListener('resize', (e) => {
            if (acitivePage === 1) {
                totalHehght.style.height = '100%'
            }
            if (acitivePage === 2) {
                totalHehght.style.height = `${page2Height.offsetHeight}px`
            }
        })

    }, [acitivePage, window.innerWidth])


    return (
        <Wrapper>
            <div className='pages_container'>
                <h2 className='my_cart'>我的購物車</h2>
                <article style={{ transform: `translateX(${nextPage}%)` }}>
                    {cartItems.length === 0 ? <div className='empty'>
                        <h3>繼續購物!</h3>
                        <NavLink to='/allProducts' className='products-link'>再去逛逛!</NavLink>
                    </div> : <>
                        <CartPage_1 cartItems={cartItems} total={total} setPage={setPage} />
                        <CartPage_2 cartItems={cartItems} total={total} setPage={setPage} />
                    </>}
                </article>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
width: 100%;
max-width: 1450px;
height: 100%;
min-height: 60rem;
padding: 2rem;



display: flex;
align-items: center;
justify-content:center ;
margin: 0 auto;



.my_cart{
    margin: 2rem;
    color: var(--primary-800);
}

.pages_container{
width: 70%;
height: 100%;

overflow: hidden;
background-color: var(--grey-50);
@media only screen and (max-width:600px) {
   width: 90%;
    }
}
article{
    width: 200%;
    height: 100%;
    display: flex;
    align-items: center;
    transition: all .8s ease;
}

.empty{
    width: 50%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: -2rem;
    h3{
        color: var(--primary-800);
        letter-spacing: .2rem;
    }

    .products-link{
        font-size: 1.5rem;
        text-decoration: none;
        padding: .7rem 1.5rem;
        background-color: var(--secondary-700);
        color: #fff;
        font-weight: 600;
        border-radius: 6px;
        transition: all .5s ease;
        &:hover{
            transform: translateX(1rem);
        }
    }
}
.page{
    width: 50%;
    height: 100%;
    padding: 4rem 3rem;

}

.cart_page-1{
    background-color: var(--grey-50);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.cart_btn{
        padding:1rem 5rem;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: .2rem;
        background-color: var(--grey-700);
        color:var(--grey-50) ;
        border: none;
        border-radius: 3px;
        cursor: pointer;
          white-space: nowrap;

        span{
            display: inline-block;
            font-size: 2rem;
            transition: all .4s ease;
        }
        
        &:hover span{
            transform: translateX(2rem);
        }
        
    }
.prev_btn{

    white-space: nowrap;

    &:hover span{
            transform: translateX(-2rem);
        }

}

@media only screen and (max-width:750px){
  margin: 7rem auto 2rem auto;
 }

@media only screen and (max-width:500px){
padding: 0rem;

article{
    align-items: flex-start;
}

    .cart_btn,.prev_btn{
        padding:1rem 3.5rem;
    }
    
}







`

export default CartPage