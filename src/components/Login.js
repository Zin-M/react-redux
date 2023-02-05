import React, { useRef } from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import { Button } from '../styles/Shares'
import { useLoginContext } from '../store/LoginContentApi'
import { useNavigate } from 'react-router-dom'

const Section = styled.section`
     margin:0 auto;
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     background-color:${(props) => props.theme.colors.primary};
     width:500px;
     padding:50px 20px;
     margin-top:40px;
`

const Input = styled.input`
   display:block;
   margin:5px auto;
   width:250px;
   padding:10px 20px;
   margin-bottom:10px;
   border:none;
   &:focus{
    outline:0.5px solid #ddd;
   }
`

const H1_STYLE = styled.h1`
  color:#ff8800;
  margin-bottom:20px;
`

export default function Login() {
    const navigate = useNavigate();
    const { setLoggedIn } = useLoginContext()
    const phoneRef = useRef();
    const passwordRef = useRef();
    const login = (e) => {
        e.preventDefault()
        let user = {
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        }
        phoneRef.current.value = '';
        passwordRef.current.value = '';
        setLoggedIn(true)
        navigate('/home')
    }
    return (
        <>
            <Nav />
            <Section>
                <H1_STYLE>Login to view home</H1_STYLE>
                <form onSubmit={login}>
                    <Input type="tel" name="phone" placeholder='phone' ref={phoneRef} />
                    <Input type="password" name="password" placeholder='password' ref={passwordRef} />
                    <Button type="submit">Login</Button>
                </form>
            </Section>
        </>
    )
}
