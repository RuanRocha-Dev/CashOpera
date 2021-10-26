import React from "react"
import {
    Container,
    Main,
    EnterWithFacebook,
    TextEnter,
    Form,
    FullNameInput,
    Text,
    Input,
    EmailInput,
    PhoneNumberConfim,
    NumberUser,
    TextFooter
} from "./Styles"


import { Header } from "../../components/Header/Index"
import { ButtonGeneric } from "../../components/ButtonGeneric/Index"
import { PassworInput } from "../../components/PasswordInput/Index"

export function RegistrationScreen() {

    return(
        <Container>
            <Main>

                <Header
                    name="arrow-left"
                    title="Complete registration"
                />

                <EnterWithFacebook>
                    <TextEnter> Complete using facebook </TextEnter>
                </EnterWithFacebook>

                <Form>
                    <FullNameInput>
                        <Text> Full name </Text>
                        <Input/>
                    </FullNameInput>
                    
                    <EmailInput>
                        <Text> E-mail </Text>
                        <Input/>
                    </EmailInput>

                    <PassworInput/>
                </Form>

                <PhoneNumberConfim>
                    <Text> Phone number </Text>
                    <NumberUser> 48 988100342 </NumberUser>
                </PhoneNumberConfim>

                <TextFooter> By clicking sign up you agree to our T&C </TextFooter>
                <ButtonGeneric name="Sign up"/>

            </Main>
        </Container>
    )
}