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
                try{
                    if(nameF !== '' && emailF !== '' && cpfF !== '' && passwordF !== ''){
                        const response = await api.post('/api/user', data)
                        console.log(response)
                        if(response.status === 200){
                            window.location.href='/users'
                        }
                    }
                    else {
                        alert('Por favor, preencha todos os campos')
                    }
                    //sucess
                }catch(error){
                    if(error.response.status === 401) {
                        alert('Falha na validação! Isso pode acontecer por 3 fatores: \n1- Verifique se o CPF possui apenas numeros com 11 dígitos. \n2- Verifique se a senha tem mais de 6 dígitos. \n3- Se o email não é um email válido.');
                    }
                    else if(error.response.status === 500){
                        alert('Usuário cadastrado já existe.');
                    }
                   
                }
            // else if(response.status === 500){
            //     alert('Usuário já cadastrado!')
            // }
            // else if(response.status === 401){
            //     alert('Falha na validação. Verifique se o cpf contém 11 dígitos e/ou a senha contém mais do que 6 dígitos')

            // }
        }

 
    

    return (
        <>
        <S.Head>
            <div>
                <img alt='logo' src='https://frexco.com.br/wp-content/uploads/2020/04/logo-frexco-slogan.png'/>
            </div>
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
                type='password'
                placeholder='password'
                value={passwordF}
                onChange={e => setPassword(e.target.value)}/>
                <S.Button
                type="button" onClick={handleSubmit}>Cadastrar</S.Button>
                <div>
                <hr class='solid'/>
                    <S.LinkHome to = '/users'>Lista de Usuários Cadastrados</S.LinkHome>
                </div>

            </S.Form>
        </S.MainBox>
        </>
    )
    
}

export default Home;