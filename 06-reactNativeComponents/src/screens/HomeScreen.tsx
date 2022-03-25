import React from "react"
import { View, FlatList } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from "../components/ItemSeparator";
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1,...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu"/>}
        ItemSeparatorComponent={() => <ItemSeparator/>}
      />
      {/* <Icon
        name="star-outline"
        size={100
        color="black"
      /> */}
    </View>
  )
}
