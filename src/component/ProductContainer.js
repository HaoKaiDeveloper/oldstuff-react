import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/productSlice'
import { ProductCard, Pages, IsLoading } from '../component'

const ProductContainer = () => {
    const { isLoading, allProduct, numOfPages, activePage, category, search, totalProduct, sort } = useSelector((store) => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [activePage, category, search, sort])

    if (isLoading) {
        return <IsLoading />
    }

    return <Wrapper className='product_page-productContainer'>
        <p className='numOfProduct'>
            <span>{totalProduct}</span>
            件商品
        </p>
        <div className='card_container'>
            {
                allProduct.map((item) => {
                    return <ProductCard {...item} key={item.id} />
                })
            }
        </div>
        <div className='pages'>
            <Pages numOfPages={numOfPages} activePage={activePage} />
        </div>
    </Wrapper>

}


const Wrapper = styled.section`
display: grid;
grid-template-rows: min-content max-content min-content;
grid-row-gap: 2rem;
padding: 2rem 0;

.numOfProduct{
    grid-row: 1/2;
    justify-self: start;
    margin-left: 4.5rem;
    color: var(--dark-green);
    font-size: 2rem;
    font-weight: 600;
}
.card_container{
    grid-row: 2/3;

     display:grid;
     grid-template-columns: repeat(auto-fit,minmax(17rem,1fr));
     grid-row-gap:1.5rem;
     justify-content: center;
     justify-items: center;
   
     @media only screen and (min-width:1400px){
     grid-template-columns: repeat(4,minmax(17rem,1fr));
     grid-row-gap:3rem;

       
     @media only screen and (max-width:450px){
     grid-template-columns: 1fr;
     grid-row-gap:3rem;        
     }
        
     }
   
   
}

.pages{
    grid-row: 3/4;
    justify-self: center;

}

     

`



export default ProductContainer