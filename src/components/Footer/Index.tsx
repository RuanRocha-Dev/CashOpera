import React from "react"
import { 
    Container, 
    TextGeneric,
    ButtonFooter
} from "./Styles"

interface Props {
    titleAccount: string
    titleFree: string
}

export function Footer({titleAccount, titleFree} : Props) {

    return(
        <Container>
            <ButtonFooter>
                <TextGeneric style={{color: "#000"}}> {titleAccount} </TextGeneric>
            </ButtonFooter>
            <ButtonFooter>
                <TextGeneric> {titleFree} </TextGeneric>
            </ButtonFooter>
        </Container>
    )
}