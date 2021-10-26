import React from "react"
import { ButtonGeneric } from "../../components/ButtonGeneric/Index"
import { Header } from "../../components/Header/Index"
import {
    Container,
    Main,
    Instruction,
    Confirmation,
    NUmbersConfirmation,
    TextPin,
    Button
} from "./Styles"

export function ConfirmSMS() {

    return(

        <Container>
            <Main>

                <Header
                    name="arrow-left"
                    title="Enter PIN code"
                />

                <Instruction>
                    We´ve sent a PIN code to 12345678, {"\n"}
                    to verify your phone number
                </Instruction>

                <Confirmation>
                    <NUmbersConfirmation> </NUmbersConfirmation>
                    <NUmbersConfirmation> </NUmbersConfirmation>
                    <NUmbersConfirmation> </NUmbersConfirmation>
                    <NUmbersConfirmation> </NUmbersConfirmation>
                </Confirmation>
                <TextPin> PIN code </TextPin>

                <Button>
                    <ButtonGeneric
                        name="Next"
                    />
                </Button>

            </Main>
        </Container>
    )
}