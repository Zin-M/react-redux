import React from 'react'
import Nav from './Nav'
import flutterImg from '../images/Flutter.png'
import javaImg from '../images/Java.png'
import nodeImg from '../images/NodeJs.png'
import styled from 'styled-components';
import { Button } from '../styles/Shares'

const FlexDiv = styled.div`
     display:flex;
     background-color:${(props) => props.theme.colors.primary};
     align-items:center;
     padding:20px;
`

const Flex = styled.div`
      display:flex;
      flex:1;
      flex-direction:column;
      padding:20px;
      align-items:center;
`



export default function Home() {
    return (
        <>
            <Nav />
            <FlexDiv>
                <Flex>
                    <h1>Brighter Myanmar</h1>
                    <h4 style={{ marginTop: "5px" }}>Professional Computer Programming Class</h4>
                    <Button>Download Apk</Button>
                </Flex>
                <Flex>
                    <img src={flutterImg} alt="flutter-ads" width="80%" />
                </Flex>
            </FlexDiv>
            <FlexDiv>
                <Flex>
                    <img src={javaImg} alt="java-ads" width="80%" />
                </Flex>
                <Flex>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas explicabo ipsum dolores harum cum minus maxime fuga
                        libero, labore, corrupti officia sed cupiditate, architecto
                        deserunt illum! Quo voluptatem corrupti sit.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                    </p>
                </Flex>
            </FlexDiv>
            <FlexDiv>
                <Flex>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptas explicabo ipsum dolores harum cum minus maxime fuga
                        libero, labore, corrupti officia sed cupiditate, architecto
                        deserunt illum! Quo voluptatem corrupti sit.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                    </p>
                </Flex>
                <Flex>
                    <img src={nodeImg} alt="node-ads" width="80%" />
                </Flex>
            </FlexDiv>
        </>
    )
}
