import React from 'react'
import logoImage from '../images/brighter_myanmar_logo.png';
import styled from 'styled-components';
import { useLoginContext } from '../store/LoginContentApi';
import { useNavigate } from 'react-router-dom';

const FlexDiv = styled.div`
     display:flex;
     background-color:${(props) => props.theme.colors.primary};
     align-items:center;
     padding:20px;
     height:40px;
     border-bottom:0.3px solid rgba(0,0,0,0.2)

`

const RightDiv = styled.div`
    flex:1;
`

const LeftDiv = styled.div`
    display:flex;
    align-items:center;
`

const UlDiv = styled.ul`
     display:flex;
     justify-content:flex-end;
`
const H1_STYLE = {
    marginLeft: "10px",
    color: "#ff8800"
}

const ATag_STYLE = {
    color: "hotpink",
}


const LiStyle = styled.li`
    margin:0 5px;
    &:after{
        content:"";
        display:block;
        height:4px;
        background-color:hotpink;
        margin-top:3px;
        transform:scaleX(0);
        transition:400ms;

    }

    &:hover{
        &:after{
            transform:scaleX(1)
        }
    }
`


export default function Nav() {
    const { loggedIn, setLoggedIn } = useLoginContext();
    const navigate = useNavigate();
    const logout = (e) => {
        setLoggedIn(false)
        navigate('/')
    }


    return (
        <FlexDiv>
            <LeftDiv>
                <img src={logoImage} width="50px" height="50px" alt="logo" />
                <strong style={H1_STYLE}>Brighter Myanmar</strong>
            </LeftDiv>
            <RightDiv>
                <UlDiv>
                    <LiStyle><a href='#' style={ATag_STYLE}>Download</a></LiStyle>
                    <LiStyle><a href='#' style={ATag_STYLE} onClick={logout}>{loggedIn ? "Log Out" : "Login in"}</a></LiStyle>
                </UlDiv>
            </RightDiv>
        </FlexDiv>
    )
}
