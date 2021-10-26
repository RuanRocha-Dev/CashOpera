import React from "react"
import { 
    Container,
    ArrowModal,
    CountryInput,
    Icone,
    PhoneNumberInput
} from "./Styles"

interface Props {
    name: string
}

export function InfoClient() {

    return(
        <Container>
            <ArrowModal>
                <CountryInput/> 
                <Icone name="arrow-down"/> 
            </ArrowModal>
            <PhoneNumberInput/>
        </Container>
    )
}