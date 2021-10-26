import React from "react";
import {
    Container,
    Main,
    TextGeneric,
    TextPhoneNunber,
    AreaPassword
} from "./Styles";

import { Header } from "../../components/Header/Index";
import { InfoClient } from "../../components/InfoClient/Index";
import { PassworInput } from "../../components/PasswordInput/Index";
import { ButtonGeneric } from "../../components/ButtonGeneric/Index";
import { Footer } from "../../components/Footer/Index";

let title = "Welcome \n to Cash Opera"

export function Home(): JSX.Element {

    return(
        <Container>
            
            <Header 
                name="arrow-left" 
                title={title}
            />

            <Main>
                <TextPhoneNunber> Phone number </TextPhoneNunber>

                <InfoClient/>

                <AreaPassword>
                    <PassworInput/>
                </AreaPassword>

                <ButtonGeneric name="Sign In"/>

                <TextGeneric> Forgot your password? </TextGeneric>  
            </Main>

            <Footer
                titleAccount="Don´t have an account yet?"
                titleFree="Sign up for free"
            />

        </Container>

    )
}