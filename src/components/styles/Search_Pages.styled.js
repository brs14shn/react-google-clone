import styled from "styled-components";


const SearchPageHeader=styled.div`
display: flex;
position: sticky;
top:0;
z-index: 100;
background-color: white;
align-items: flex-start;
padding: 30px;
border-bottom: 1px solid lightgray;
img{
    height: 50px;
    margin-right: 50px;
}

`

export default SearchPageHeader;


export const SearchPageOptions = styled.div`
display: flex;
align-items: center;
color:gray;
margin-top: 30px;
a{
    text-decoration: none;
    color:gray;
    margin-left:5px
}

`


export const Options = styled.div`
margin-left: ${props => props.right ? "80px" : "0px"};
display:flex;
align-items: center;

`

export const SearchPageOption=styled.div`
display: flex;
align-items: center;
margin-right: 20px;


`


