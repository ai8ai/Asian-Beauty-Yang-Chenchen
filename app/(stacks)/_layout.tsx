import React, {useEffect} from "react";
import { Stack, useNavigation } from "expo-router";
import { router, useLocalSearchParams } from 'expo-router';

const StacksLayout = () => {
    const { itemid, itemtitle } = useLocalSearchParams();  // Get the itemid from route params
    const navigation = useNavigation();

    useEffect(() => {
        // Update the header title dynamically
        if (itemid) {
            navigation.setOptions({
                headerTitle: itemtitle,  // Dynamically set the headerTitle to itemid
            });
        }
    }, [itemid, navigation]);

    return (
        <Stack>
            <Stack.Screen name="cat2img" options={{ headerTitle: 'HomeD', title: 'DDD', headerShown: false }} />
            <Stack.Screen name="CatScreen" options={{ headerTitle: 'Home22D', title: 'DAsian2 Beauty', headerShown: false }} />
        </Stack>
    );
};

export default StacksLayout;


