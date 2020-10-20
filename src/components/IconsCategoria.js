import React from 'react';
import {Image} from 'react-native';

export default({img}) => {
    return(
        <Image 
            source={img} style={{width:35, height:40}}
        />
    );

}