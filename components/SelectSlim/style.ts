import styled from "styled-components/native";

export const Select = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;
export const Text = styled.Text`
    font-size: 15px;
`;

export const ModalScreen = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
`;
export const ModalScreenView = styled.View`
    flex: .5;
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
`;
export const ModalHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    margin-bottom: 20px;
`;
export const ModalTitle = styled.Text`
    font-size: 20px;
`;
export const ModalBtnExit = styled.TouchableOpacity`
`;
export const ModalContainerScroll = styled.ScrollView`
    padding: 10px 15px;
`;
export const ModalContents = styled.View`

`;
export const ModalItem = styled.TouchableOpacity``;
export const ModalItemText = styled.Text``;