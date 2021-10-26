import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";

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

export const EnterWithFacebook = styled.TouchableOpacity`
    width: 100%;
    padding: 13px;
    align-items: center;
    margin-top: 20px;
    border: 1px solid #cccc;
    border-radius: 7px;
`;

export const TextEnter = styled.Text`
    color: #437BFF;
`;

export const Form = styled.View`
    width: 100%;
    height: 330px;
    justify-content: space-around;
    margin-top: 25px;
`;

export const FullNameInput = styled.View`
    
`;

export const Text = styled.Text`
    
`;

export const Input = styled.TextInput`
    width: 100%;
    padding: 10px;
    align-items: center;
    border: 1px solid #cccc;
    border-radius: 7px;
`;

export const EmailInput = styled.View`
    
`; 

export const PhoneNumberConfim = styled.View`
    width: 100%;
`;
export const NumberUser = styled.Text`
    margin-top: 5px;
    font-size: ${RFValue(17)}px;
    font-weight: bold;
`;

export const TextFooter = styled.Text`
    width: 100%;
    margin-top: 60px;
    text-align: center;
`;