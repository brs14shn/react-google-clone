import styled from "styled-components";


const SearchInput=styled.div`
display: flex;
align-items: center;
border: 1px solid lightgray;
height: 30px;
width:500px;
padding:10px 15px;
margin:0px auto;
margin-top:40px;
border-radius: 999px;
input{
    flex: 1;
    padding: 8px 13px;
    font-size: medium;
    border:0;
    outline: 0;
    
}
.searchicon{
    color:gray
}


`

export default SearchInput


export const SearchButton=styled.div`
display: flex;
justify-content: center;
margin-top:1.2rem;
button{
    margin:5px;
    background: #f8f8f8 !important;
    border:1px solid white;
    text-transform: inherit;
    &:hover{
        margin:5px;
        background: #f8f8f8 !important;
        border:1px solid #c6c6c6;
        color:#000;

    }
}
`