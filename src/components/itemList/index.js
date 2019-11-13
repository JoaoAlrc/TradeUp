import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NameListText, EmailListText, AvatarList, ListItemContainerTexts } from '../'

const ItemList = (props) => {

    const onPressItem = () => {
        props.onPress && props.onPress(props.data.id)
    }

    return (
        <TouchableOpacity onPress={onPressItem} style={styles.container}>
            <AvatarList source={{ uri: props.data.avatar }} />
            <ListItemContainerTexts>
                <NameListText>
                    {props.data.first_name}
                </NameListText>
                <EmailListText>
                    {props.data.email}
                </EmailListText>
            </ListItemContainerTexts>
            <Icon name="chevron-right" style={{ alignSelf: 'center' }} size={20} color="#008dff" />
        </TouchableOpacity>
    );
}

export default ItemList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3
    }
});