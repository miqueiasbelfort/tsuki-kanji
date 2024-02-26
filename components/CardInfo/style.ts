import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
`;
export const Content = styled.View`
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    padding-bottom: 20px;
    padding-top: 0;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Header = styled.View`
    align-items: flex-end;
    padding: 10px;
`;
export const Body = styled.View`
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-size: 50px;
    text-align: center;
`;
export const Kanji = styled.Text`
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    color: #2C2A4A;
    margin-bottom: 10px;
`;
export const Span = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;
export const ExText = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
`;