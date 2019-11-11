import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import { DetailNavOptions } from './NavOptions'

function UserDetail() {
    const [errorMessage, setErrorMessage] = useState('')
    const [follow, setFollow] = useState(false)
    const user = useSelector(state => state.user);
    console.warn("toma carai", user)

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
                {follow === false ? <TouchableOpacity style={styles.followButton} onPress={() => setFollow(true)}>
                    <Text style={styles.followButtonText}>Enviar Solicitação de Amizade</Text>
                </TouchableOpacity> :
                    <TouchableOpacity style={styles.followingButton} onPress={() => this.clickEventListener(item)}>
                        <Text style={styles.followButtonText}>Solicitação Encaminhada!</Text>
                    </TouchableOpacity>}
            </View>
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

        marginVertical: 5,
        backgroundColor: "white",
        flexBasis: '98%',
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
        flex: 1,
        position: 'absolute',
        bottom: 0,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF"
    },
    followingButton: {
        marginTop: 10,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#EFEFEF",
        color: "#008dff",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    }
});     