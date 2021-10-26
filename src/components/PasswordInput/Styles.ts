import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";

export const PasswordInput = styled.View`

`;

export const Text = styled.Text`
    
`;

export const InputArea = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    border: 1px solid #cccc;
    border-radius: 7px;
`;

export const InputPassword = styled.TextInput`
    width: 90%;
`;

export const Icone = styled(Icon)`
    font-size: ${RFValue(25)}px;
    color: #437BFF;
`;