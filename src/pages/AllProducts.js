import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar, ProductContainer, Slider } from '../component'

const AllProducts = () => {
  const { isLoading } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'OS | Products'
  })

  return <Wrapper>
    <Slider />
    <Sidebar />
    <ProductContainer />
  </Wrapper>
}

const Wrapper = styled.section`
width: 100%;
max-width: 1450px;
height: 100%;
min-height: 80vh;


display: grid;
grid-template-rows: 20rem max-content;
grid-template-columns: 1fr max-content minmax(min-content,60vw)  1fr;
grid-row-gap: 2rem;
grid-column-gap: 2rem;
margin:2rem auto ;

.product_page{
  
    &-sidebar{
      grid-row: 2/3;
      grid-column: 2/3;
      background-color: var(--grey-50);
    }

    &-productContainer{
      grid-row: 2/3;
      grid-column: 3/4;
    }
    
}
.slider{
      grid-row: 1/2;
      grid-column: 2/4;
      background-color: var(--grey-50);
}


.isLoading{
  grid-row: 2/3;
  grid-column: 3/4;
  justify-self: center;
  margin-top: 2rem;
}


@media only screen and (max-width:950px){
     display: grid;
     grid-template-rows: minmax(20rem,13vw) min-content min-content;
     grid-template-columns: 1fr  80vw  1fr;

    .product_page{
    &-sidebar{
      grid-row:2/3;
      grid-column: 2/3;
      background-color: var(--grey-50);
    }

    &-productContainer{
      grid-row: 3/4;
      grid-column: 2/3;
      background-color: var(--grey-50);

    }
    
}

.slider{
      grid-row: 1/2;
      grid-column: 2/3;
      background-color: var(--grey-50);

}

.isLoading{
  grid-row: 3/4;
  grid-column: 2/3;
  justify-self: center;
  margin-top: 2rem;
}


 }

@media only screen and (max-width:750px){
  margin: 7rem auto 2rem auto;
 }

`




export default AllProducts