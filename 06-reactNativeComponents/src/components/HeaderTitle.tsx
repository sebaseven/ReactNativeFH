import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    title: string;
    color?: string;
}
export const HeaderTitle = ({title,color="black"}:Props) => {
  const {top} = useSafeAreaInsets()

  return (
    <View style={{marginTop: top + 20,marginBottom:20}}>
        <Text style={{
            ...styles.title,
            color
        }
          }>
          {title}
        </Text>
      </View>
  )
}

