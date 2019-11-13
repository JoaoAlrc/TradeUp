import styled from 'styled-components';

// Container and ContainerButton

const ScrollContainer = styled.ScrollView.attrs({
    contentContainerStyle: props => {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008dff'
        }
    }
})``

const Container = styled.View`
flex: 2;
alignItems: center;
justifyContent: center;
backgroundColor: #008dff;
`;

const ListItemContainerTexts = styled.View`
flex: 1;
flexDirection: column;
marginLeft: 12px;
justifyContent: center;
`;

const CardContainer = styled.View`
shadowColor: #00000021;
flexDirection: column;
elevation: 12;
flex: 1;
marginVertical: 7;
backgroundColor: #fff;
marginHorizontal: 7;
padding: 20px
`;

const CardTextsContainer = styled.View`
paddingVertical: 30px;
paddingHorizontal: 16px;
`;

// Images and logo

const Logo = styled.Image`
height: ${props => props.logoHeight};
marginTop: ${props => props.logoMgTop ? "100px" : "0"};
marginBottom: ${props => props.logoMgBtm};
`;

const AvatarList = styled.Image`
height: 70px;
width: 70px;
borderRadius: 5px;
`;

const AvatarDetails = styled.Image`
height: 135px;
width: 135px;
marginTop: 0px;
borderRadius: 100px;
alignSelf: center;
borderColor: #008dff;
borderWidth: 3px;
`;

// Inputs and button
const Input = styled.TextInput.attrs({
    placeholderTextColor: "#fff"
})`
paddingHorizontal: 20px;
paddingVertical: 15px;
borderRadius: 25px;
backgroundColor: #008dff;
alignSelf: stretch;
marginBottom: 15px;
marginHorizontal: 20px;
fontSize: 16px;
color: rgb(255,255,255);
elevation: 5;
shadowColor: black;
shadowOpacity: 0.3;
`;

const Button = styled.TouchableHighlight`
height: 50px;
paddingHorizontal: 20px;
paddingVertical: 15px;
borderRadius: 25px;
backgroundColor: #008dff;
border: 0.8px solid #ededed;
alignSelf: stretch;
marginTop: 10px;
marginBottom: 15px;
marginHorizontal: 20px;
display: flex;
justifyContent: center;
`;

const ButtonBottom = styled.TouchableHighlight`
height: 50px;
borderRadius: 25px;
backgroundColor: #008dff;
border: 0.8px solid #ededed;
position: absolute;
bottom: 20px;
left: 20px;
right: 20px;
display: flex;
justifyContent: center;
`;

const SignUpLink = styled.TouchableHighlight`
marginTop: 20px;
`;

// Texts

const ErrorMessage = styled.Text`
textAlign: center;
color: #fff;
fontSize: 16px;
marginBottom: 15px;
marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
color: #FFF;
fontWeight: bold;
fontSize: 16px;
textAlign: center;
`;

const TitleUsersList = styled.Text`
color: #008dff;
marginLeft: 26px;
marginTop: 10px;
marginBottom: 10px;
fontWeight: bold;
fontSize: 28px;
`;

const NameListText = styled.Text`
fontSize: 18px;
color: #008dff;
`;

const EmailListText = styled.Text`
fontSize: 14px;
fontStyle: italic;
color: #008dff;
`;

const CardName = styled.Text`
fontSize: 26px;
alignSelf: center;
color: #008dff;
fontWeight: bold;
padding: 5px;
`;

const CardEmail = styled.Text`
fontSize: 20px;
alignSelf: center;
color: #008dff;
padding: 5px;
`;

const CardTexts = styled.Text`
fontSize: 16px;
textAlign: center;
color: #008dff;
marginTop: auto;
marginBottom: auto; 
`;

const SignUpLinkText = styled.Text`
color: #fff;
fontWeight: bold;
fontSize: 16px;
textAlign: center;
paddingBottom: 80px;
`;

export { ScrollContainer, Container, ListItemContainerTexts, CardContainer, CardTextsContainer, CardName, CardEmail, CardTexts, NameListText, EmailListText, AvatarList, AvatarDetails, Logo, Input, ErrorMessage, TitleUsersList, Button, ButtonBottom, ButtonText, SignUpLink, SignUpLinkText };
