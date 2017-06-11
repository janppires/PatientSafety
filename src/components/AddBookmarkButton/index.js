import React from 'react';
import { TouchableOpacity } from 'react-native';
import BookmarkIcon from '../../components/BookmarkIcon';
import styles from './styles';

const AddBookmarkButton = ({style, focused, ...props}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} {...props}>
            <BookmarkIcon style={styles.icon} focused={focused}/>
        </TouchableOpacity>
    )
}

export default AddBookmarkButton;

