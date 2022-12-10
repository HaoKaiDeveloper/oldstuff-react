import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const CartPage_2 = ({ cartItems, total, setPage }) => {
    const [client, setClient] = useState({
        name: '',
        phone: '',
        address: '',
        credit: '',
    })
    const [warning, setWarning] = useState(false)
    const { name, phone, address, credit } = client
    const handelChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setClient({ ...client, [name]: value })
    }
    const handleSubmit = () => {
        const { name, phone, address, credit } = client
        if (!name || !phone || !address || !credit) {
            setWarning(true)
            return
        }
        setPage('submit', client)
    }


    return <Wrapper className='cart_page-2 page'>
        <form className='client_info'>
            <div className='name input_container'>
                <label>
                    姓名 :
                </label>
                <input type='text'
                    autoComplete='off'
                    name='name'
                    value={name}
                    onChange={handelChange}
                    placeholder={warning ? '請填寫完整資訊' : ''}
                />
            </div>
            <div className='phone input_container'>
                <label>
                    聯絡電話 :
                </label>
                <input type='text'
                    autoComplete='off'
                    name='phone'
                    value={phone}
                    onChange={handelChange}
                    placeholder={warning ? '請填寫正確資訊' : ''}


                />

            </div>
            <div className='address input_container'>
                <label>
                    收貨地址 :
                </label>
                <input type='text'
                    autoComplete='off'
                    name='address'
                    value={address}
                    onChange={handelChange}
                    placeholder={warning ? '請填寫正確資訊' : ''}
                />

            </div>
            <div className='address input_container'>
                <label>
                    信用卡號 :
                </label>
                <input type='text'
                    autoComplete='off'
                    name='credit'
                    value={credit}
                    onChange={handelChange}
                    placeholder={warning ? '請填寫正確資訊' : ''}


                />
            </div>
        </form>

        <div className='cart_list'>
            <div className='title'>
                <p>名稱</p>
                <p className='amount'>件數</p>
                <p>價格*數量</p>
            </div>
            {
                cartItems.map((item, index) => {
                    const { name, price, amount } = item
                    return <div className='list' key={index}>
                        <p >{name}</p>
                        <p className='amount'>{amount}</p>
                        <p>{price * amount}</p>
                    </div>
                })
            }

            <hr></hr>
            <p className='total'>總金額 NT.<span>{total}</span></p>

        </div>

        <div className='btn_container'>
            <button type='button'
                className='prev_btn cart_btn'
                onClick={() => setPage('prev')}
            ><span> &larr;</span>上一步</button>
            <button type='submit'
                className='next_btn cart_btn'
                onClick={handleSubmit}
            >確認送出<span> &rarr;</span></button>
        </div>
    </Wrapper>


}

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,minmax(17rem,30rem));
grid-template-rows: min-content min-content;
justify-content: space-evenly;
grid-row-gap: 2rem;


.client_info{
    grid-column: 1/2;
    grid-row: 1/2;

    width:100%;
    max-width: 45rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-color: var(--grey-50);
    
    .input_container{
        width: 100%;

    }

    label{
        display: block;
        font-size: 1.5rem;
        letter-spacing:.2rem;
        color: var(--primary-800);
        margin-bottom:.5rem;
        font-weight: 600;
    }
    input{
        width: 100%;
        font-size: 1.5rem;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-bottom: .7px solid var(--dark-green);
        background-color: transparent;

    }
}

.cart_list{
    grid-column: 2/3;
    grid-row: 1/2;

    width: 100%;
    max-width:35rem;

    padding: 2rem;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .7rem;
        p{
            width: 30%;
            font-size: 1.3rem;
        }
    }
    .list{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        
        p{
            font-size: 1.3rem;
            width:30%;
            margin-bottom: 1rem;
            color: var(--grey-400);
        }
    }

    .total{
        margin-top: 1rem;
        text-align: right;
        color: var(--grey-500);
        font-size: 1.5rem;

    }

}

.btn_container{
    grid-column: 2/3;
    grid-row: 2/3;
    justify-self: end;

    display: flex;
    align-items: center;
    gap: 2rem;
}

@media only screen and (max-width:1200px) {
    grid-template-columns: repeat(2,minmax(17rem,30rem));
    }

@media only screen and (max-width:1100px) {

    grid-template-columns: 1fr;
    grid-template-rows: repeat(2,1fr) min-content;
    align-content:center ;
    .client_info{
        grid-column: 1/2;
        grid-row: 1/2;
    }

    .cart_list{
        grid-column: 1/2;
        grid-row: 2/3;
    }

    .btn_container{
        grid-column: 1/2;
        grid-row: 3/4;
    }


} 

@media only screen and (max-width:500px) {

grid-template-columns: 1fr;
grid-template-rows: repeat(2,1fr) min-content;
align-content:center ;
justify-items: center;
.client_info{
    grid-column: 1/2;
    grid-row: 1/2;
}

.cart_list{
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 0;


    .amount{
        display: none;
    }
}

.btn_container{
   
    flex-direction: column;
    align-items: flex-start ;
}


} 

`
export default CartPage_2