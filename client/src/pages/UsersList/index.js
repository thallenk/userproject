import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from './../services/api'
    //const history = useHistory();
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        })

    export default function DenseTable() {
    const classes = useStyles();

    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function loadUsers(){
            const response = await api.get('/api/user')
            setUsers(response.data)     

        }
        loadUsers()
    },[])
    
        return(
        <>
        <S.Title>
            <div className='img'>
                <img alt='logo' src='https://frexco.com.br/wp-content/uploads/2020/04/logo-frexco-slogan.png'/>
            </div>
            <h1 align="center">Listagem de Usuários</h1>
        </S.Title>

        <S.Box>
            <TableContainer>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="center">CPF</TableCell>
                    <TableCell align="center">Data de Cadastro</TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                {users.map((row) => (
                    <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="center">{row.cpf}</TableCell>
                    <TableCell align="center">{row.createdAt.substring(10, 0)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <S.LinkHome to = '/'>Cadastrar novo usuário</S.LinkHome>
        </S.Box>
        </>
    )
}