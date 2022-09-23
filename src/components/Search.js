import React from 'react'
//* icons
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SearchInput,{SearchButton} from "./styles/Search.styled"
const Search = () => {

  const [input,setInput]=React.useState("")
  console.log(input);


  return (
    <form>
      <SearchInput>
        <SearchIcon className="searchicon"/>
        <input 
        type="text" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <KeyboardVoiceIcon/>
      </SearchInput>
      <SearchButton spacing={2} direction="row">
      <Button type="submit" variant="outlined">Google Search</Button>
      <Button variant="outlined">I am feeling lucky</Button>
    </SearchButton>

    </form>
  )
}

export default Search