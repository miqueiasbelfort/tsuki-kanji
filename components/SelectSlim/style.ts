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
    flex: .52;
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
    gap: 20px;
    margin: 0 10px;
`;
export const ModalItem = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`;
export const ColorIconc = styled.View.attrs({})<{backgroundColor: string}>`
    width: 20px;
    height: 20px;
    border-radius: 2px 10px 10px 2px;
    background-color: ${(props) => props.backgroundColor || 'blue'};
`;
export const ModalItemText = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;
export const ButtonOk = styled.TouchableOpacity`
    padding: 5px 10px;
    width: 70px;
    align-items: center;
    justify-content: center;
    background-color: #DABFFF;
    border-radius: 5px;
`;
export const ButtonOkText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
`;