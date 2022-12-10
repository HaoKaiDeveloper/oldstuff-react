import styled from 'styled-components'



const Wrapper = styled.nav`
width: 100%;
height: 5rem;
background-color:var(--primary-900);
display: flex;

align-items: center;
justify-content: space-between;
padding: 0 3rem;
z-index: 999;

.togglebox{
  width: 3rem;
  height: 5rem;
  cursor:pointer;
  display: none;
}
.toggle{
  border: none;
  width: 2rem;
  height: 1px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  margin-top: 2.5rem;
  &::before,
  &::after{
    content: "";
    width: 2rem;
    height: 1px;
    background-color: #fff;
    position: absolute;

  }

   &::before{
    top:.8rem;
  }

  &::after{
    top:-.8rem;
  }



  
}

.nav__links{
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.nav__link{
list-style: none;
}

.nav__title{
    font-size: 1.6rem;
    color:var(--grey-100);
    text-decoration: none;
}

.nav__icon{
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  color:var(--grey-100);
  line-height: 3rem;
  text-align: center;
  position: relative;

  &::before{
    content: attr(data-num);
    width: 1.5rem;
    height: 1.5rem;
    padding: .5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: .2rem;
    border-radius: 50%;
    background-color: var(--light-red);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right:-1.5rem;
    bottom:-1rem ;
  }
}

.logo{
    width: 4.5rem;
    height: 4.5rem;
}


@media only screen and (max-width:750px){
  position: fixed;
  border-bottom: .5px solid var(--grey-200);
  top: 0;
  .togglebox{
  display: block
  }

  .toggle{
    transition: all .5s ease;
  }

  .toggle.show{
  transform: rotate(45deg);
    &::before{
      display: none;
    }

        
    &::after{
      transform:rotate(-90deg);
      left: 0;
      top: 0;

    }

}

  .nav__links{
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   background-color:var(--primary-900);
   position: fixed;
   top:5rem;
   left: 50%;
   transform: translate(-50%,0rem);
   padding: 0 10rem;
   height: 0;
   overflow: hidden;
   transition: all 0.4s cubic-bezier(.94,.02,.78,.93);

  .nav__link{
  display: block;
  width: 100%;
  border-bottom: .5px solid var(--grey-200);
  opacity: 0;
  transition:all .8s ease;

  }

  .nav__title{
  display: block;
  padding: 1.2rem 0;
  font-size: 1.6rem;

  &:active,
  &:focus{
    background-color: transparent;
    color: var(--grey-50);
    font-weight: 600;
  }
  }

   
}

.nav__links.show{
  height: 100vh;
  .nav__link{
  opacity: 1;
  display: block;
  }
}

.nav__icon{
  font-size: 2.1rem;
}

}

@media only screen and (max-width:600px){
  .nav__links{
   padding: 0 5rem;}
   
}

@media only screen and (max-width:300px){
  .nav__links{
   padding: 0 2rem;}
   
}
`

export default Wrapper