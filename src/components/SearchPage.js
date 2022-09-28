import React from 'react'
import {Link} from "react-router-dom"
import Search from './Search'

import SearchPageHeader,{SearchPageOptions, Options, SearchPageOption}from "./styles/Search_Pages.styled"


import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import googlelogo from "../assets/googlelogo.png"

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <SearchPageHeader>
        <Link to="/">
          <img src={googlelogo} alt="google_logo" />
        
        </Link>
        <div className='searchPage_headerBody'>
        <Search hide/>
        <SearchPageOptions>
          <Options>
            <SearchPageOption>
            <SearchIcon/><Link to="/all">All</Link>
            </SearchPageOption>
            <SearchPageOption>
            <FeedIcon/><Link to="/all">News</Link>
            </SearchPageOption>
            <SearchPageOption>
            <ImageIcon/><Link to="/all">Images</Link>
            </SearchPageOption>
            <SearchPageOption>
            <LocalOfferIcon/><Link to="/all">Shooping</Link>
            </SearchPageOption>
            <SearchPageOption>
            <RoomIcon/><Link to="/all">Maps</Link>
            </SearchPageOption>
            <SearchPageOption>
            <MoreVertIcon/><Link to="/all">Maps</Link>
            </SearchPageOption>

          </Options>
          <Options right>
            <div className='searchPage_option'>
              <Link to="/settings">Settings</Link>
            </div>
            <div className='searchPage_option'>
            <Link to="/tools">Tools</Link>

            </div>

          </Options>
        </SearchPageOptions>
        </div>

      </SearchPageHeader>
    </div>
  )
}

export default SearchPage