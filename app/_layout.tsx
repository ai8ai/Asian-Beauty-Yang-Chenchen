// _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    const hiddenScreens = ["detail", "profile" ];

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer screenOptions={({ route }) => ({
                    drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
                })}>
                    <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'Asian Beauty', }} />
                    <Drawer.Screen name="cat2img" options={{ drawerLabel: 'HomeD', title: 'DAsian Beauty', drawerItemStyle: { display: "none" }}} />
                    <Drawer.Screen name="about" options={{ drawerLabel: 'HomeD', title: 'DAsian Beauty', drawerItemStyle: { display: "none" }}} />
                    <Drawer.Screen name="CatScreen" options={{ drawerLabel: 'HomeD', title: 'DAsian Beauty', drawerItemStyle: { display: "none" }}} />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}