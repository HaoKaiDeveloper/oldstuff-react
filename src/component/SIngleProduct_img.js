import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SIngleProduct_img = ({ image_small }) => {
    const [activeImg, setActiveImg] = useState(image_small[0])


    useEffect(() => {
        setActiveImg(image_small[0])
    }, [image_small])

    return <Wrapper className='single_product-img'>
        <div className='img-container'>

            <div className='side-img-container'>
                {image_small.map((item, index) => {
                    if (index > 3) return
                    return <div className={activeImg === item ? 'side-img active' : 'side-img'} key={index}>
                        <img src={item} alt='sideImg'
                            onClick={() => setActiveImg(item)} />
                    </div>
                })}

            </div>

            <div className='img img-active'><img src={activeImg} alt='active-img' /></div>
        </div>

    </Wrapper>
}

const Wrapper = styled.div`

display: flex;
align-items: center;
justify-content: center;

.img-container{
    width: 70%;
    min-width: 40rem;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: var(--grey-50);

    
}


img{
        width: 100%;
        height: 100%;
        object-fit: cover;
   }


.side-img-container{
    width: 10rem;
    height: 32rem;
}

.side-img{
    width: 10rem;
    height: calc(29rem/4);
    background-color: var(--grey-50);
    opacity:.8;
    border-radius: 3px;
    overflow: hidden;
    :not(:last-child){
        margin-bottom: 1rem;
    }
}

.active{
    opacity: 1;
    border: 2px solid var(--secondary-700);
}



.img-active{
    width: 40rem;
    height: 32rem;
    background-color: var(--grey-50);
    border-radius: 3px;
    overflow: hidden;
    box-shadow:var( --shadow-1)
}



@media only screen and (max-width:500px){
 .img-container{
    width: 100%;
    min-width: 0;
    height: 90%;
    flex-direction: column;    
}


img{
        width: 100%;
        height: 100%;
        object-fit: cover;
   }


.side-img-container{
    width: 100%;
    height:auto ;
    display: flex;
    justify-content: center;
    gap: 1rem;
    order: 1;
    padding: 0 1rem;
}

.side-img{
    width: calc(90%/4);
    height: auto;
    max-height: 7rem;
}



.active{
    opacity: 1;
    border: 2px solid var(--secondary-700);
}



.img-active{
    width: 90%;
    height: 20rem;
    background-color: var(--grey-50);
    border-radius: 3px;
    overflow: hidden;
    box-shadow:var( --shadow-1)
}
    
}

@media only screen and (max-width:300px){
 .img-container{
    width: 100%;
    min-width: 0;
    height: 90%;
    flex-direction: column;    
    align-items: center;
}


img{
        width: 100%;
        height: 100%;
        object-fit: cover;
   }


.side-img-container{
    width: 90%;
    height:10rem;
    display: flex;
    justify-content: center;
    gap: .5rem;
    order: 1;
    padding: 0 1rem;
}

.side-img{
    width: calc(90%/4);
    height: auto;
    max-height: 7rem;
}



.active{
    opacity: 1;
    border: 2px solid var(--secondary-700);
}



.img-active{
    width: 80%;
    height: 15rem;
    background-color: var(--grey-50);
    border-radius: 3px;
    overflow: hidden;
    box-shadow:var( --shadow-1)
}
    
}


`



export default SIngleProduct_img