import React from "react"
import { StyleSheet } from 'react-native'
import {
    Container,
    ItensContainer,
    Instruction,
    Main,
    TextPhoneNunber,
    Button,
    PropsFooter
} from "./Styles"

import { Header } from "../../components/Header/Index"
import { InfoClient } from "../../components/InfoClient/Index"
import { ButtonGeneric } from "../../components/ButtonGeneric/Index"
import { Footer } from "../../components/Footer/Index"

export function Signup() {

    let title = "Enter your \n phone number"

    return(
        <Container>

            <ItensContainer>

                <Header 
                    name="arrow-left"
                    title={title}
                />

                <Instruction>
                    We need your phone number so we can connect
                    you with other users. Dont´t worry, only users
                    chosen by you will have acess to it
                </Instruction>

                
                <Main>
                    <TextPhoneNunber> Phone number </TextPhoneNunber>
                    <InfoClient/>

                    <Button>
                        <ButtonGeneric name="Next"></ButtonGeneric>
                    </Button>
                </Main>

            </ItensContainer>

                <PropsFooter>
                    <Footer 
                        titleAccount="Already have an account?"
                        titleFree="Sign in"
                    />
                </PropsFooter>

        </Container>
    )
}