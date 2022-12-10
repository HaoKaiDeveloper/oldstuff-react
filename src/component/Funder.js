import React from 'react'
import styled from 'styled-components'
import {
    background,
} from '../data'
import { AiOutlineGlobal, AiOutlineInbox, AiOutlineClockCircle } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'

const Funder = () => {
    const { store_sm, town_me, person } = background

    return (
        <Wrapper className='funder' backgroundImg={background}>
            <div className='funder__info'>
                <div className='funder__info-about'>
                    <div>
                        <img src={person} alt='funder-header' className='funder__info-img' />
                        <div className='funder__info-name'>
                            <span className='name_e'>Kevin Entwhistle</span>
                            <span className='name_c'>凱文·恩特維斯</span>
                        </div>
                        <p className='funder__info-text'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>

                    </div>

                </div>
            </div>
            <div className='funder__warranty'>
                <div>
                    <AiOutlineGlobal className='icon' />
                    <p>全球皆有宅配</p>
                </div>
                <div>
                    <AiOutlineInbox className='icon' />
                    <p>宅配具防護包裝</p>
                </div>
                <div>
                    <AiOutlineClockCircle className='icon' />
                    <p>最快時間出貨</p>
                </div>

                <div>
                    <BsCardChecklist className='icon' />
                    <p>購買商品皆附出廠證明及保證書</p>
                </div>
            </div>
        </Wrapper >
    )
}

const Wrapper = styled.section`


display: grid;
grid-template-columns:  75% 25%;
grid-template-rows: 1fr;
justify-content: space-between;


.funder__info{
    grid-column: 1/2;
    background-image:linear-gradient(rgba(7, 44, 80,0),rgba(7, 44, 80,0.7)),url( ${props => props.backgroundImg.town_me});
    background-size: cover;
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &-about{
        width: 80%;
        max-height: 50rem;
        background-image: linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8));
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

       
    }

    &-img{
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        object-position: 0 15%;
        border-radius: 50%;
        filter: brightness(1.5);
        float: left;
        -Webkit-shape-outside: circle();
        shape-outside: circle();
        margin-right: 2rem;

    }

    &-name{
        font-size: 2rem;
        font-weight: 500;
        color: var(--grey-600);
        letter-spacing: .2rem;
        margin-bottom: .8rem;
        span{
            display: block;
            
        }
        .name_c{
            font-size: 1rem;
            font-weight: 600;
            color: var(--secondary-600);
        }
    }

    &-text{
        text-align: justify;
    }

    
    @media screen and (max-width:1100px) {
            padding: 3rem;      
     }


    @media only screen and (max-width:500px){
         
        display: flex;
        flex-direction: column;

    &-name{
        font-size: 1.5rem;
        font-weight: 600;
    }


     &-img{
         float: none;
        width: 7rem;
        height: 7rem;

    }

    &-text{
        text-align: left;
    }

               
    }

    
    @media only screen and (max-width:400px){
        padding: 1rem 0;

     &-about{
        padding: 1rem;

       
    }
 
    &-name{
         font-size: 1.5rem;
         font-weight: 600;
     }
 
 
    &-img{
          float: none;
         width: 7rem;
         height: 7rem;
 
     }
 
    &-text{
         text-align: left;
     }
 
                
     }
    
}



.funder__warranty{
    grid-column: 2/3;
    background-image: linear-gradient(rgba(47, 35, 15,0.9),rgba(47, 35, 15,0.9)),url(${props => props.backgroundImg.store_sm});
    background-size: cover;

    display: grid;
    grid-template-rows: repeat(4,minmax(min-content,1fr));
    grid-template-columns:auto-fit;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 2rem 0;

    div{
        text-align: center;
        .icon{
        width: 4.5rem;
        height: 4.5rem;
        margin-bottom: 1rem;
        color: var(--secondary-600);
     }

        p{
            font-size: 1.5rem;
            color: var(--grey-100);
            max-width: 15rem;

        }
    }



}



@media screen and (max-width:750px) {
    grid-template-columns:  1fr;
    grid-template-rows:min-content minmax(20rem,1fr);

    .funder__info{
    grid-column: 1/-1;
    grid-row: 1/2;
    width: 100%;
    }

    .funder__warranty{
        grid-column: 1/-1;
        grid-row: 2/-1;
        display: grid;
        grid-template-columns:1fr 1fr;
        grid-column-gap: 1rem;
        grid-template-rows: 1fr 1fr ; 
        align-items: start;

        div{
        .icon{
        width: 3rem;
        height: 3rem;
       
         }

        p{
            font-size: 1.2rem;
          

        }
    }
        
    }
            
 }

 
 @media only screen and (max-width:350px) {

    .funder__warranty{
    
        display: grid;
        grid-template-columns:1fr ;
        grid-template-rows: repeat(4,1fr) ; 

        
    }
        
}


`

export default Funder
