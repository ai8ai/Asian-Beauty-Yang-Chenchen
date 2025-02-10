// _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    // const hiddenScreens = ["category/[id]", "settings", "D5_Rate5Star"];

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer />
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}
