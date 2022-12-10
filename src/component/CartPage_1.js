import React from 'react'
import { CartCard } from '../component'
import styled from 'styled-components'


const CartPage_1 = ({ cartItems, total, setPage }) => {
    return <Wrapper className='cart_page-1 page'>
        <div className='card_container'>
            {
                cartItems.map((item) => {
                    return <CartCard {...item} key={item.id} />
                })
            }
        </div>
        <div className='cart_total'>
            <p>總金額 : <span>{total}</span></p>
            <button type='button'
                className='next_btn cart_btn'
                onClick={() => setPage('next')}
            >下一步<span> &rarr;</span></button>
        </div>
    </Wrapper>
}


const Wrapper = styled.div`


.card_container{
    display: grid;
    grid-template-columns: repeat(2,minmax(17rem,40rem));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    justify-content: space-evenly;
    margin-bottom: 3rem;

        @media only screen and (max-width:1300px) {
        grid-template-columns: repeat(2,minmax(17rem,30rem));
        }
        @media only screen and (max-width:1000px) {
        grid-template-columns: repeat(1,minmax(17rem,30rem));
        grid-row-gap: 4rem;
        }
}


.cart_total{
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 1rem;
    margin-right: 3rem;

    p{
        font-size: 2rem;
        color: var(--primary-800);
    }


    
@media only screen and (max-width:400px) {
    align-self: center;
    margin-right: 0;
    align-items: center;
    p{
        font-size: 1.5rem;
        color: var(--primary-800);
    }
   
    }

}


`



export default CartPage_1