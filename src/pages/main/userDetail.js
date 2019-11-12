import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux'
import { AvatarDetails, CardContainer, CardTextsContainer, CardName, CardEmail, CardTexts, ButtonBottom, ButtonText, DetailNavOptions } from '../../components'

function UserDetail() {
    const [follow, setFollow] = useState(false)
    const user = useSelector(state => state.user);

    return (
        <CardContainer style={styles.card}>
            <AvatarDetails style={styles.userImage} source={{ uri: user.avatar }} />
            <CardTextsContainer>
                <CardName>{user.first_name} {user.last_name}</CardName>
                <CardEmail>{user.email}</CardEmail>
                <CardTexts style={{ marginTop: 80 }}>Você e {user.first_name} ainda não são amigos.</CardTexts>
                <CardTexts>Envie uma solicitação de amizade para que possam compartilhar informações.</CardTexts>
            </CardTextsContainer>
            {!follow ? <ButtonBottom style={styles.followButton} onPress={() => setFollow(true)}><ButtonText style={styles.followButtonText}>Enviar Solicitação de Amizade</ButtonText></ButtonBottom> :
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
    followButton: {
        backgroundColor: "#00BFFF"
    },
    followButtonText: {
        color: "#FFFFFF",
    },
    followingButton: {
        backgroundColor: "#EFEFEF",
    },
    followingButtonText: {
        color: "#008dff",
    }
});     