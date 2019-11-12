import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux'
import { DetailNavOptions } from './NavOptions'
import { FooterButton } from '../../components'

function UserDetail() {
    const [follow, setFollow] = useState(false)
    const user = useSelector(state => state.user);

    return (
        <View style={styles.card}>
            <Image style={styles.userImage} source={{ uri: user.avatar }} />
            <View style={styles.cardFooter}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <Text style={styles.textToFollow}>Você e {user.first_name} ainda não são amigos.</Text>
                    <Text style={styles.subTextToFollow}>Envie uma solicitação de amizade para que possam compartilhar informações.</Text>

                </View>

            </View>
            {follow === false ? <FooterButton
                style={styles.followButton}
                textStyle={styles.followButtonText}
                onPress={() => setFollow(true)}
                title={'Enviar Solicitação de Amizade'}
            /> :
                <FooterButton
                    style={styles.followingButton}
                    textStyle={styles.followingButtonText}
                    onPress={() => Alert.alert(`A solicitação foi encaminhada, ${user.first_name} pode ou não aceitar seu pedido.`)}
                    title={'Solicitação Encaminhada!'}
                />}
        </View>
    );
}

UserDetail.navigationOptions = DetailNavOptions;

export default UserDetail;

const styles = StyleSheet.create({
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        flexDirection: 'column',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        flex: 1,
        marginVertical: 5,
        backgroundColor: "white",
        marginHorizontal: 5,
    },
    cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    userImage: {
        height: 130,
        width: 130,
        marginTop: 20,
        borderRadius: 100,
        alignSelf: 'center',
        borderColor: "#DCDCDC",
        borderWidth: 3,
    },
    name: {
        fontSize: 22,
        alignSelf: 'center',
        color: "#008dff",
        fontWeight: 'bold',
        padding: 5
    },
    email: {
        fontSize: 16,
        alignSelf: 'center',
        color: "#008dff",
        padding: 5
    },
    textToFollow: {
        fontSize: 16,
        textAlign: 'center',
        color: "#008dff",
        padding: 5,
        marginTop: 120
    },
    subTextToFollow: {
        fontSize: 16,
        textAlign: 'center',
        color: "#008dff",
        padding: 5,
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