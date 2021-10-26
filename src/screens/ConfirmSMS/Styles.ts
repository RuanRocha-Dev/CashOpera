import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.View`
    width: 90%;
    justify-content: center;
    align-items: flex-start;
`;

export const Instruction = styled.Text`
    margin-top: ${RFValue(20)}px;
`;

export const Confirmation = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
`;

export const NUmbersConfirmation = styled.TextInput`
    width: 23%;
    height: 100%;
    border: 1px solid #cccc;
`;

export const TextPin = styled.Text`
    margin-top: 10px;
`;

export const Button = styled.View`
    width: 100%;
    margin-top: 40px;
`;