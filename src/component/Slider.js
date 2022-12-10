import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'
import { sliderImgs } from '../data'

const Slider = () => {
    const [index, setIndex] = useState(0)


    useEffect(() => {
        const lastIndex = sliderImgs.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, sliderImgs])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => {
            clearInterval(slider)
        }
    }, [index])


    return <Wrapper className='slider'>
        <button className='prev_btn' onClick={() => setIndex(index - 1)}><BsChevronCompactLeft /></button>
        <div className='image_container'>
            {
                sliderImgs.map((img, imgIndex) => {
                    let position = 'nextSlider'

                    if (imgIndex === index) {
                        position = 'activeSlider'
                    }
                    if (imgIndex === index - 1 || (index === 0 && imgIndex === sliderImgs.length - 1)) {
                        position = 'lastSlider'
                    }

                    return <img src={img} alt='sliderImg'
                        className={`${position} sliderImg img-${imgIndex}`}
                        key={imgIndex} />
                })
            }

        </div>
        <button className='next_btn' onClick={() => setIndex(index + 1)}><BsChevronCompactRight /></button>
    </Wrapper>
}

const Wrapper = styled.section`

position: relative;

.image_container{
    width: 100%;
    height: 100%;
    display: flex;
    transition: all .5s ease;
    position: relative;
    overflow: hidden;
}

.sliderImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    transition: all .3s ease;
}

.sliderImg.activeSlider{
    opacity: 1;
    transform: translateX(0);
}

.sliderImg.nextSlider{
    opacity:0 ;
    transform: translateX(100%);
}

.sliderImg.lastSlider{
    opacity:0 ;
    transform: translateX(-100%);
}




.img-1{
    object-position: 0 70%;
}
.img-2{
    object-position: 0 20%;
}
.img-3{
    object-position: 0 55%;
}

button{
    width: 5rem;
    height: 50%;
    font-size: 5rem;
    color: #fff;
    background-color: rgba(238, 238, 238, 0.4);
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
}
.prev_btn{
    left: 0;
}

.next_btn{
    right: 0;
}


`

export default Slider