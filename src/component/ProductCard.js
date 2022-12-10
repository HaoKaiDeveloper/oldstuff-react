import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { cartItemsChange, countTotal } from '../features/cartSlice'
import AddToCart from './AddtoCartFun'

const ProductCard = ({ _id, id, name, price, category, category_c, image_medium, image_small }) => {
    const dispatch = useDispatch()
    const handelAdd = (product) => {
        AddToCart(product)
        dispatch(cartItemsChange())
        dispatch(countTotal())
    }
    const amount = 1



    return <Wrapper className='product_card'>
        <NavLink to={`/singleProduct/${id}`}>
            <img src={image_small[2]} alt='card_img' className={`product_card-img product_card-img-${id}`} />
        </NavLink>

        <div className='product_card-btns'>
            <NavLink to={`/singleProduct/${id}`} className='search_btn'><AiOutlineSearch /></NavLink>
            <button type='button' className='cart_btn'
                onClick={() => handelAdd({ name, amount, price, category, id })}
            ><AiOutlineShoppingCart /></button>
        </div>
        <div className='product_card-info'>
            <p className='product_card-name'>{name}</p>
            <p className='product_card-price'>NT.{price}</p>
        </div>
    </Wrapper>

}

const Wrapper = styled.div`

width: 17rem;
height: 22rem;
position: relative;
overflow: hidden;

.product_card{

    &-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: 1;
        cursor: pointer;

        &-telephone_A{
            object-position: 5%;
        }
    }   

    &-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        padding: 1rem 2rem;
        background-color: #fff;
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 2;
    }

    &-name,&-category{
        white-space: nowrap;
    }


    &-btns{
        display: flex;
        align-items: center;
        gap: 2rem;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        transition: all .5s ease;
        z-index: 2;
        opacity: 0;
        visibility: none;

        .search_btn,.cart_btn{
            background-color: var(--secondary-700);
            font-size: 2.5rem;
            color: #fff;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            border: none;
            display:flex ;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
   
}


&:hover{
    .product_card-img{
        filter: blur(3px);
    }
    .product_card-btns{
        opacity: 1;
        visibility: visible;
    }
}

@media only screen and (max-width:450px){
     width:80%;
     min-width: 17rem;
     height: 24rem;        
 }
`

export default ProductCard