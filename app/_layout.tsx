// root  _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    const hiddenScreens = ["detail", "profile" , "(stacks)"];

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer screenOptions={({ route }) => ({
                    drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
                })}>
                    <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'Asian Beauty',drawerItemStyle: { display: "none" }, headerShown: true}} />
                    <Drawer.Screen name="about" options={{ drawerLabel: 'HomeD', title: 'DAsian Beauty', drawerItemStyle: { display: "none" }, headerShown: true}} />
                    <Drawer.Screen name="(stacks)" options={{ drawerLabel: 'HofmeD', title: 'HS', drawerItemStyle: { display: "none" }, headerShown: true}} />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}
