import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import AddToCart from './AddtoCartFun'
import { cartItemsChange, countTotal } from '../features/cartSlice'


const SIngleProduct_info = ({ id, name, price, category, category_c }) => {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        setAmount(1)
    }, [id])

    const increaseAmount = () => {
        setAmount((prevAmount) => {
            return prevAmount + 1
        })
    }

    const decreaseAmount = () => {
        if (amount <= 1) {
            setAmount(1)
        } else {
            setAmount((prevAmount) => {
                return prevAmount - 1
            })
        }
    }

    const handelAdd = (product) => {
        AddToCart(product)
        dispatch(cartItemsChange())
        dispatch(countTotal())
    }

    return (
        <Wrapper className='single_product-info'>
            <div className='info-text'>
                <p className='name'>{name}</p>
                <p className='category'>類別: <span>{category_c} / {category}</span></p>
                <p className='article'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                <p className='price'>NT.<span>{price}</span></p>
            </div>
            <div className='info-form'>
                <div>
                    <label>
                        數量
                    </label>
                    <div className='info-amount'>
                        <button type='button' onClick={increaseAmount}><AiOutlinePlus /></button>
                        <input type='text' autoComplete='off' disabled='disable' value={amount} />
                        <button type='button' onClick={decreaseAmount}><AiOutlineMinus /></button>
                    </div>
                </div>
                <button type='button'
                    className='addToCart_btn'
                    onClick={() => handelAdd({ name, amount, price, category, id })} >加入購物車</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
padding: 3rem 2rem;
gap: 1rem;



.info-text{
   
    font-weight: 700;
    color: var(--dark-green);
    .name{
        font-size: 3rem;
        color: var(--secondary-700);
        margin-bottom: 2rem;
        letter-spacing: .5rem;
    }
    .category{
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .article{
        letter-spacing: .2rem;
        margin-bottom: 1.5rem;
        font-weight: 400;
    }

    .price{
        font-size:2.5rem;
        font-weight: 400;
        color: var(--secondary-700);
    }
    
}


.info-form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
   
    label{
        display: block;
        font-size: 1.8rem;
        /* font-weight: 700; */
        color: var(--dark-green);
        margin-bottom: .8rem;
    }
    
    .info-amount{
        display: flex;
        align-items: center;
        gap: 1rem;
        /* margin-bottom: 2rem; */
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border-radius: 3px;
            border: 1px solid var(--secondary-700);
            width: 3rem;
            height: 3rem;
            font-size: 2rem;
            color:  var(--secondary-700);
            cursor: pointer;
        }
        input{
            padding: .5rem;
            font-size: 1.8rem;
            max-width: 10rem;
            color: var(--dark-green);
            background-color: transparent;
            border:none ;
            border-bottom:  1px solid var(--grey-200);
            outline:none;

            &:active,&:focus{
            outline:none;
                
            }
        }
    }

    .addToCart_btn{
     
        font-size: 1.5rem;
        border-radius: 3px;
        border:1.5px solid var(--dark-green);
        padding: .7rem 1rem;
        margin-left:1rem ;
        background-color: var(--dark-green);
        color: #fff;
        cursor: pointer;
        animation:addToCart 1.5s linear infinite ;

        &:active{
            font-weight: 700;
        }
    }

    @keyframes addToCart {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.1);

        }
        100%{
            transform: scale(1);
        }
    }
}


@media only screen and (max-width:850px){
padding:3rem 5rem ;
}

@media only screen and (max-width:500px){
    gap: .5rem;

    .info-text{
   

   .name{
       font-size: 2.5rem;
       margin-bottom: 1rem;
     
   }
   .category{
       font-size: 1.2rem;
       margin-bottom: 1rem;
   }

   .article{
       margin-bottom: 1rem;
   }

   .price{
       font-size:2rem;
   }
   
}


.info-form{

    gap: 1.2rem;
   
    label{
        display: block;
        font-size: 1.8rem;
        margin-bottom: .8rem;
    }
    
    .info-amount{
        display: flex;
        align-items: center;
        gap: 1rem;
        button{
        
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.5rem;
        }
        input{
            padding: .5rem;
            font-size: 1.2rem;
        }
    }

    .addToCart_btn{
        font-size: 1rem;
        padding: .5rem 1rem;
        margin-left:1rem ;
    }    
}



}
@media only screen and (max-width:300px){
    gap: .5rem;
    
    padding: 3rem 1rem;

}



`

export default SIngleProduct_info