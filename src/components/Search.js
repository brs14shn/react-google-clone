import React from 'react'
//* icons
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Search = () => {

  const [input,setInput]=React.useState("")


  return (
    <form>
      <div>
        <SearchIcon/>
        <input 
        type="text" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <KeyboardVoiceIcon/>
      </div>
      <Stack spacing={2} direction="row">
      <Button type="submit" variant="outlined">Google Search</Button>
      <Button variant="outlined">I am feeling lucky</Button>
    </Stack>

    </form>
  )
}

export default Search