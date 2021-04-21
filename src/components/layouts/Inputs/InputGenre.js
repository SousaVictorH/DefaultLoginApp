import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import globalStyles from '../../styles/globalStyles';
import Option from '../Option';

import ShowMessageError from '../Inputs/components/ShowMessageError';

const GenreInput = ({
    label,
    errors,
    setFieldValue,
    value
}) => {
    const [options, setOptions] = useState([
        { text: 'Homem Cis', selected: false },
        { text: 'Mulher Cis', selected: false },
        { text: 'Homem Trans', selected: false },
        { text: 'Mulher Trans', selected: false },
    ]);

    function handleSelected(index) {
        let newOptions = options.map(item => {
          return { ...item, selected: false };
        });

        let selected = newOptions[index];
        newOptions[index] = { ...selected, selected: true };
    
        setOptions(newOptions);
        setFieldValue('genre', selected.text);
    }

    return(
        <View style={styles.genre}>
            <Text style={globalStyles.inputLabel}>{label}</Text>

            <View style={styles.options}>

                {options.map((o, index) => (
                    <TouchableWithoutFeedback
                    style={styles.flex1}
                    key={o.text}
                    onPress={() => handleSelected(index)}>
                        <Option
                            label={o.text}
                            error={errors.genre}
                            selected={o.selected || o.text === value}
                        />
                    </TouchableWithoutFeedback>
                ))}

            </View>

            <ShowMessageError error={errors?.genre} />
        </View>
    );
};

export default GenreInput;

const styles = StyleSheet.create({
    options: {
      marginTop: 20,
    },
    marginBottom: {
      height: 40,
    },
    genre: {
      marginVertical: 20,
    },
});
