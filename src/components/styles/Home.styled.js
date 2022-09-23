import styled from "styled-components";


const HomeContainer=styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`;

export default HomeContainer;


export const HeaderContainer=styled.div`
display: flex;
justify-content: space-between;
padding: 20px 30px;
align-items: center;

`

export const Header=styled.div`
display: flex;
align-items: center;
p{
    margin-right: 20px;
    font-size: 15px;
}
.icons{
    margin-left:20px
}
`

export const BodyContainer=styled.div`
display: flex; 
flex-direction: column;
margin-top:10%;
flex:1;

img{
    object-fit: contain;
    height: 100px;
    
}

`
