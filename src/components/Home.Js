//* rafce

import React from 'react'

//* icons
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//*img
import googlelogo from "../assets/googlelogo.png"

//*stlyed
import HomeContainer,{HeaderContainer,Header,BodyContainer} from "./styles/Home.styled"
import Search from './Search';

//?👆 Dahili bir resim eklemek için import gereklidir

const Home = () => {
  return (
    <HomeContainer>
        <HeaderContainer>
            <Header>
                <p>About</p>
                <p>Store</p>

            </Header>
            <Header>
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon className="icons" />
                <AccountCircleIcon className="icons"/>
            </Header>
        </HeaderContainer>
        <BodyContainer>
            <img src={googlelogo} alt="google_logo" />
            <div>
                <Search/>
            </div>
        </BodyContainer>
    </HomeContainer>
  )
}

export default Home