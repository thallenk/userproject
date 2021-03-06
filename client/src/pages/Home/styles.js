import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Head = styled.h1`
text-align: center;
color: #89bd23;
`

export const MainBox = styled.div`
background-color: #89bd23;
display:flex;
//flex-wrap: wrap;
flex-direction: column;
@media(min-width:860px){
    width:270px;
    height: 270px;
    display:flex;
    //flex-wrap: wrap;
    flex-direction: column;
    margin-left:40%;
}
`
export const Form = styled.form`
margin-bottom:0;
text-align: center;
margin-top: 10%;

hr.solid{
    border: 1px solid white;
    margin-bottom:13px;
}
.label{
    color: white;
    margin-left: 5px;
    margin-right: 5px;
    font-weight:900;
}
.labelcpf{
    color: white;
    margin-left: 5px;
    margin-right: 14px;
    font-weight:900;
}
    
@media(min-width:860){
    margin-bottom:10%;
} 
   
`
export const Input = styled.input`
    margin-right:15px;
    margin-bottom: 5px;
    background-color: white;
    border: 1px solid white;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 50px;
    //margin: .5rem;
    margin-right: 0;
    //para tirar o negrito do input quando clica nele, é o mesmo que dizer input.focus:
    &:focus,
    &active{
        outline: none;
        box-shadow: none;
    }
    @media(min-width:860){
            margin-left:40%;
        }
`
export const Button = styled.button`
    border: 1px solid white;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 50px;
    margin: .5rem;
    margin-right: 0;
    margin-top:10px;
    margin-bottom:30px;
    color: gray;
    font-weight: 800;
    //para tirar o negrito do input quando clica nele, é o mesmo que dizer input.focus:
    &:focus,
    &active{
        outline: none;
        box-shadow: none;
    }
`
export const LinkHome = styled(Link)`
    color:gray;
    margin-left: 100px;
    background-color: white;
    border: 1px solid white;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 50px;
    margin: .5rem;
    margin-right: 0;
    text-decoration: none;
    font-weight: 800;
    //para tirar o negrito do input quando clica nele, é o mesmo que dizer input.focus:
    &:focus,
    &active{
        outline: none;
        box-shadow: none;
    }
`