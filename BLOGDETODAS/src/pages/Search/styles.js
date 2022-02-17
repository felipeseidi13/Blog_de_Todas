import styled from 'styled-components/native';

export const Container = styled.View`
padding-top: 15px;
flex:1;
background-color: #EEE;
`;

export const AreaInput = styled.View`
flex-direction: row;
margin: 10px;
background-color: #FFF;
align-items: center;
padding: 5px 10px;
border-radius: 5px;
`;

export const Input = styled.TextInput`
width: 90%;
background-color: #FFF;
height: 40px;
padding-left: 8px;
font-size: 17px;
color: #000000;
`;

export const List = styled.FlatList`
flex:1;
`;