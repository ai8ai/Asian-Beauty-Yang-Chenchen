// (stacks)/_layout.tsx
import React, {useEffect} from "react";
import { Stack, useNavigation, useLocalSearchParams } from "expo-router";

const StacksLayout = () => {
    const { catId, catTitle } = useLocalSearchParams();  // Get the itemid from route params
    const navigation = useNavigation();

    useEffect(() => {
        // Update the header title dynamically
        if (catId) {
            navigation.setOptions({
                headerTitle: catTitle,  // Dynamically set the headerTitle to itemid
            });
        }
    }, [catId, navigation]);

    return (
        <Stack>
            <Stack.Screen name="cat2img" options={{ headerTitle: 'HomeD', title: 'DDD', headerShown: false }} />
            <Stack.Screen name="CatScreen" options={{ headerTitle: 'Home22D', title: 'DAsian2 Beauty', headerShown: false }} />
        </Stack>
    );
};

export default StacksLayout;


