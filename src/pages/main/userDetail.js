import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux'
import { DetailNavOptions } from '../../components/NavOptions'
import { FooterButton } from '../../components'
import { AvatarDetails, CardContainer, CardTextsContainer, CardName, CardEmail, CardTexts, ButtonBottom, ButtonText } from '../../components/styles'

function UserDetail() {
    const [follow, setFollow] = useState(false)
    const user = useSelector(state => state.user);

    return (
        <CardContainer style={styles.card}>
            <AvatarDetails style={styles.userImage} source={{ uri: user.avatar }} />
            <CardTextsContainer>
                <CardName>{user.first_name} {user.last_name}</CardName>
                <CardEmail>{user.email}</CardEmail>
                <CardTexts style={{ marginTop: 135 }}>Você e {user.first_name} ainda não são amigos.</CardTexts>
                <CardTexts>Envie uma solicitação de amizade para que possam compartilhar informações.</CardTexts>
            </CardTextsContainer>
            {follow === false ? <ButtonBottom style={styles.followButton} onPress={() => setFollow(true)}><ButtonText style={styles.followButtonText}>Enviar Solicitação de Amizade</ButtonText></ButtonBottom> :
                <ButtonBottom style={styles.followingButton}
                    onPress={() => Alert.alert(`A solicitação foi encaminhada, ${user.first_name} pode ou não aceitar seu pedido.`)}
                ><ButtonText style={styles.followingButtonText}>Solicitação Encaminhada!</ButtonText></ButtonBottom>
            }
        </CardContainer>
    );
}

UserDetail.navigationOptions = DetailNavOptions;

export default UserDetail;

const styles = StyleSheet.create({
    /******** card **************/
    card: {

    },
    followButton: {
        backgroundColor: "#00BFFF"
    },
    followingButton: {
        backgroundColor: "#EFEFEF",
    },
    followButtonText: {
        color: "#FFFFFF",
    },
    followingButtonText: {
        color: "#008dff",
    }
});     