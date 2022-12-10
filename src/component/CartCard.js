import React from 'react'
import styled from 'styled-components'
import { allProduct } from '../data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { cartItemsChange, countTotal } from '../features/cartSlice'


const changeAmount = (id, action) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const newCart = cart.map((item) => {
        if (item.id === id) {

            if (action === 'plus') {
                item.amount++
                return item
            }
            if (action === 'minus') {
                if (item.amount <= 1) {
                    return item
                }
                item.amount--
                return item
            }
        } else {
            return item
        }
    })
    console.log(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
}

const removeItem = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const newCart = cart.filter((item) => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(newCart))
}

const CartCard = ({ name, amount, price, id, category }) => {
    const dispatch = useDispatch()
    const card_Product = allProduct.find(item => item.id === id)
    const { image_small } = card_Product

    const handleChangeAmount = (id, action) => {
        changeAmount(id, action)
        dispatch(cartItemsChange())
    }
    const handleRemove = (id) => {
        removeItem(id)
        dispatch(cartItemsChange())

    }
    return <Wrapper>
        <div className='product_img'>
            <p>{name}</p>
            <img src={image_small[0]} alt='productIng' />
        </div>
        <div className='product_info'>
            <p className='product_category'>編號 :{id}</p>
            <div className='amount_contorl'>
                <button type='button'
                    className='product_btn plus_btn'
                    onClick={() => handleChangeAmount(id, 'plus')}><AiOutlinePlus /></button>
                <p className='amount_input'>{amount}</p>
                <button type='button'
                    className='product_btn minus_btn'
                    onClick={() => handleChangeAmount(id, 'minus')} > <AiOutlineMinus /></button>
            </div>
            <p className='product_count-total'>NT.<span>{price}</span> X <span>{amount}</span></p>
            <p className='product_total'>NT.<span>{price * amount}</span></p>
            <button type='button'
                className='product_btn remove_btn'
                onClick={() => handleRemove(id)}
            >刪除</button>
        </div>
    </Wrapper >
}

const Wrapper = styled.div`
display: flex;
align-items: flex-start;


.product_img{
    width: 70%;
    height: 100%;
    max-height: 18rem;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 3px;
    }
    p{
        font-size: 1.4rem;
        color: var(--secondary-700);
    }
}

button{
    cursor: pointer;
}

.product_info{
    width: 40%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-left: 1rem;
    
    p{
        font-size: 1.3rem;
        color: var(--primary-900);
    }
    .amount_contorl{
        display: flex;
        align-items: center;
        gap: 2rem;
        margin:1rem 0;
        button{
            border: none;
            font-size: 2rem;
            background-color: transparent;
            color: var(--secondary-700);
        }

        p{
            font-size: 1.8rem;
        }
    }

    .product_total{
        background-color: var( --secondary-100);
        border-radius: 1px;
        padding: .5rem 1rem;
    }
    .remove_btn{
        align-self: flex-start;
        font-size: 1.4rem;
        border: none;
        background-color: transparent;
        color:var(--dark-red) ;
        letter-spacing: .2rem;
    }


    @media only screen and (max-width:1300px) {
        gap: .5rem;

        .amount_contorl{
         gap: 1.5rem;
         margin:.5rem 0;
    }
   
    }
}

@media only screen and (max-width:450px) {
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    .product_img{
        width: 100%;

        p{
        font-size: 1.4rem;
        color: var(--secondary-700);
        font-weight: 600;
    }
    }
    .product_info{
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0;
        margin-left: 0;
        padding: 1rem;

        p{
            font-size: 1rem;
        }
        .amount_contor{
        }
        .product_total{
            width: 50%;
        }
        .product_count-total{
            width: 50%;
        }
    }
    }

 @media only screen and (max-width:400px) {
    flex-direction: column;
    align-items: center;
    gap: .1rem;
  
    .product_info{
        flex-direction: column;
        width: 100%;
       gap: .8rem;

        p{
            font-size: 1rem;
        }
        .amount_contor{
            width: 100%;
        }
        .product_total{
            width: 100%;
            padding: .5rem .3rem;

        }
        .product_count-total{
            width: 100%;
        }
    }

    }
`

export default CartCard