import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
    allProduct,
} from '../data'

const Slider_small = () => {
    const [index, setIndex] = useState(0)
    let cardsPerPage = 4
    let pages = Math.ceil(allProduct.length / cardsPerPage)
    let cardSlider = Array.from({ length: pages }, (_, index) => {
        const start = index * cardsPerPage
        return allProduct.slice(start, start + cardsPerPage)
    })
    if (window.innerWidth < 800) {
        cardsPerPage = 3
    }
    if (window.innerWidth < 600) {
        cardsPerPage = 2
    }
    if (window.innerWidth < 400) {
        cardsPerPage = 1
    }
    pages = Math.ceil(allProduct.length / cardsPerPage)
    cardSlider = Array.from({ length: pages }, (_, index) => {
        const start = index * cardsPerPage
        return allProduct.slice(start, start + cardsPerPage)
    })


    useEffect(() => {
        let lastIndex = cardSlider.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }

        let cardSlide = setTimeout(() => {
            setIndex(index + 1)
        }, 3000)

        return () => { clearTimeout(cardSlide) }

    }, [index, cardSlider])

    return <Wrapper className='slider_small'>
        {
            cardSlider.map((items, pageIndex) => {
                let position = 'nextSlide'
                if (pageIndex === index) {
                    position = 'activeSlide'
                }
                if (pageIndex === index - 1 || (index === 0 && pageIndex === cardSlider.length - 1)) {
                    position = 'lastSlide';
                }
                return <div key={pageIndex} className={`${position} cards-container`}>
                    {
                        items.map((card, index) => {
                            return <div key={index} className="card">
                                <NavLink to={`/singleProduct/${card.id}`} >
                                    <img src={card.image_small[1]} alt={card.name} />
                                </NavLink>
                            </div >
                        })
                    }
                </div>
            })
        }

    </Wrapper>

}


const Wrapper = styled.div`

width: 100%;
position: relative; 
overflow: hidden;

.cards-container{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(10rem,15rem));
    grid-template-rows: 1fr;
    justify-content: space-evenly;
    align-items: center;
    transition: all .8s ease;   
     
}
.cards-container.activeSlide{
    transform: translateX(0);
    opacity: 1;
}

.cards-container.nextSlide{
    transform: translateX(100%);
    opacity: 0;
}

.cards-container.lastSlide{
    transform: translateX(-100%);
    opacity: 0;
}


.card{
    max-width: 15rem;
    height: 17rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0.4);
    }

}

`

export default Slider_small