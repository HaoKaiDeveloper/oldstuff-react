import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { allProduct, } from '../data'
import { SIngleProduct_img, SIngleProduct_info, Slider_small } from '../component'


const SingleProducst = () => {
    const { id } = useParams()
    const findProduct = allProduct.find((item) => item.id === id)
    const { id: productId, name, price, category, category_c, image_medium, image_small } = findProduct

    useEffect(() => {
        document.title = 'OS | Product'
    })


    return <Wrapper className='singleProduct'>
        <SIngleProduct_img image_small={image_small} />
        <SIngleProduct_info {...findProduct} />
        <Slider_small />
    </Wrapper>
}

const Wrapper = styled.section`
width: 100%;
max-width: 1450px;
height: 100%;
min-height: 80vh;

display: grid;
grid-template-rows: 40rem 20rem;
grid-template-columns: 50% 30%;
justify-content: center;
align-content:center;
grid-row-gap: 6rem;
grid-column-gap: 2rem;
margin:2rem auto ;


.single_product{

    &-img{
        grid-column: 1/2;
        grid-row: 1/2;
       background-color: var(--grey-50);
    }

    &-info{
        grid-column:2/3;
        grid-row: 1/2;
    }

}


.slider_small{
    grid-column: 1/-1;
    grid-row: 2/3;
    background-color: var(--grey-50);
    
}

@media only screen and (max-width:850px){
grid-template-columns: 1fr;
grid-template-rows: max-content 30rem 20rem;
grid-row-gap: 2rem;
grid-column-gap:0;
justify-content: center;
align-content:center;

.single_product{

&-img{
    grid-column: 1/-1;
    grid-row: 1/2;
   background-color: var(--grey-50);
}

&-info{
    grid-column:1/-1;
    grid-row:2/3 ;
}

}


.slider_small{
    grid-column: 1/-1;
    grid-row: 3/4;
    background-color: var(--grey-50);
    
}
    
}

@media only screen and (max-width:750px){
margin-top: 7rem;
    
}


`


export default SingleProducst