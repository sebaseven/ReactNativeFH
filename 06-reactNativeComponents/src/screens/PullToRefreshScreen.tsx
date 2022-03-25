import React from 'react'
import { RefreshControl, ScrollView, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()
     const {top} = useSafeAreaInsets();
    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
            setData('Terminamos!!!!')
        }, 3000)
    }
    return (
        <ScrollView
        style={{
            marginTop: refreshing ? top : 0,
        }}
        refreshControl={
            <RefreshControl
             refreshing={refreshing}
             onRefresh={onRefresh}
            //  Android
             progressViewOffset={10}
             progressBackgroundColor="#5856d6"
             colors={
                 ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
             }
             // IOS
             style={{ backgroundColor: '#5856d6' }}
             tintColor='white'
            />
        }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />
              {
                  data && <HeaderTitle title={data} />
              }
            </View>
        </ScrollView>

    )
}
