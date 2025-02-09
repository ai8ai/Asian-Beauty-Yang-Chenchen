// _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    // const hiddenScreens = ["category/[id]", "settings", "D5_Rate5Star"];

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer />
        </GestureHandlerRootView>
    );
}

            {/* screenOptions={({ route }) => ({
                drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
            })}>

                <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'overview', }} />
                <Drawer.Screen name="profile" options={{ drawerLabel: 'Profile', title: 'profile1', }} />
            </Drawer> */}