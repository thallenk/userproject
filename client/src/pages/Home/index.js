import React, {useState} from 'react'
import * as S from './styles'
import api from './../services/api'

function Home() {
    const [nameF, setName] = useState('')
    const [emailF, setEmail] = useState('')
    const [cpfF, setCpf] = useState('')
    const [passwordF, setPassword] = useState('')

 
    async function handleSubmit(){
        const data = {
            name: nameF, 
            email: emailF,
            cpf: cpfF, 
            password: passwordF}
        if(nameF !== '' && emailF !== '' && cpfF !== '' && passwordF !== ''){
            const response = await api.post('/api/user', data)

            if(response.status === 200){
                window.location.href='/users'
            }
            else{
                alert('Erro ao cadastrar usuário!')
            }
        }
        else {
            alert('Por favor, preencha todos os campos')
        }
 
    }

    return (
        <>
        <S.Head>
            Cadastro de Usuários
        </S.Head>
        <S.MainBox>
            <S.Form>
                <label className='label'>Nome</label>
                <S.Input name='Nome' 
                placeholder='Nome'
                value={nameF}
                onChange={e => setName(e.target.value)}/>
                <label className='label'>Email</label>
                <S.Input 
                name='Email' 
                placeholder='Email'
                type="email" 
                inputMode="email" 
                value={emailF}
                onChange={e => setEmail(e.target.value)}/>
                <label className='labelcpf'>CPF</label>
                <S.Input
                name='CPF' 
                placeholder='CPF'
                value={cpfF}
                onChange={e => setCpf(e.target.value)}/>
                <label className='label'>Senha</label>
                <S.Input
                name='password' 
                placeholder='password'
                value={passwordF}
                onChange={e => setPassword(e.target.value)}/>
                <S.Button
                type="button" onClick={handleSubmit}>Cadastrar</S.Button>
                <S.Button>Lista de Usuários Cadastrados</S.Button>
            </S.Form>
        </S.MainBox>
        </>
    )
    
}

export default Home;