import React from 'react'
import styled from 'styled-components'
import { BsFacebook, BsInstagram, BsTwitter, BsFillTelephoneFill, BsFillPinMapFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'

const Footer = () => {
    return <Wrapper className='footer'>
        <p className='info'><BsFillTelephoneFill className='icon' /> : 02-45678456</p>
        <p className='info'><AiTwotoneMail className='icon' /> : old_stuff_andco@gmail.com</p>
        <p className='info'><BsFillPinMapFill className='icon' /> :  110台北市信義區松壽路11號(2F)</p>
        <div className='social'>
            <a href='https://www.facebook.com/'><BsFacebook className='icon' /></a>
            <a href='https://twitter.com/'><BsTwitter className='icon' /></a>
            <a href='https://www.instagram.com/'><BsInstagram className='icon' /></a>
        </div>
    </Wrapper>
}


const Wrapper = styled.footer`
width: 100vw;
background-color: var(--primary-900);
padding: 1rem 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;



p,a{
    font-size: 1.3rem;
    color: var(--secondary-700);
    word-break: break-all;
}
p{
    max-width: 30rem;
}
.icon{
    font-size: 1.8rem; 
}

.social{
    display: flex;
    align-items: center;
    gap: 2rem;
}


@media only screen and (max-width:450px) {
padding: 1rem;
.icon{
    font-size: 1.3rem; 
}
}
`


export default Footer