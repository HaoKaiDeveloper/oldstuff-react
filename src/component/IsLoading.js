import React from 'react'
import styled from 'styled-components'

const IsLoading = () => {
    return (
        <Wrapper className='isLoading'></Wrapper>
    )
}

const Wrapper = styled.div`
width:10rem;
height: 10rem;
background-color: transparent;
border: 2px solid var(--dark-green);
border-left: 2px solid var(--grey-200);
border-radius: 50%;
animation:loading .5s forwards infinite ;


@keyframes loading {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

`

export default IsLoading