import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Box = styled.div`
    background-color: #89bd23;
    padding-bottom: 1px;
    max-width: 1000px;
    margin-left: 12.5%;
    .title{
        font-weight:900;
        color:gray;
    }
`

export const LinkHome = styled(Link)`
    display: block;
    width: 200px;
    text-align: center;
    margin: 2rem auto;
    background-color: white;
    padding: 0.5rem 0;
    color: gray;
    text-decoration: none;
    font-weight:900;
    border-radius: 50px;
`


export const Title = styled.div`
    color: #89bd23;
    .img{
        margin-left:39%;
    }
`