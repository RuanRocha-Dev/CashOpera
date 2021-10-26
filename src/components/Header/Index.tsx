import React from "react";
import {
    Container,
    Icone,
    Text
} from "./Styles";

interface Props {
    name: string;
    title: string;
}

export function Header({name, title} : Props) {

    return(
        <Container>
            <Icone name={name}/>
            <Text> {title} </Text>
        </Container>
    )
}