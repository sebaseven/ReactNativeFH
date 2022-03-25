import React from 'react'
import { SectionList, View, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const SectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1, }}>

            <SectionList
                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{
                        marginBottom:70
                    }}>
                        <HeaderTitle title={`Total de Casas: ${casas.length}`} />
                    </View>
                )
                }
                sections={casas}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled={true}
                renderSectionHeader={({ section }) =>
                    <View style={{
                        backgroundColor: 'white',
                    }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                }
                renderSectionFooter={({ section }) => (<HeaderTitle title={`Total: ${section.data.length}`} />)}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}