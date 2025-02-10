// _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer>
                    <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'Asian Beauty', }} />
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}




























// export default function Layout() {
//     const hiddenScreens = ["about", "profile", "ycc"];

//     return (
//         <>
//             <GestureHandlerRootView style={{ flex: 1 }}>
//                 <Drawer screenOptions={({ route }) => ({
//                     drawerItemStyle: hiddenScreens.includes(route.name) ? { display: "none" } : {},
//                 })}>
//                     <Drawer.Screen name="index" options={{ drawerLabel: 'Home', title: 'Asian Beauty', }} />
//                 </Drawer>
//             </GestureHandlerRootView>
//             <StatusBar style="light" translucent />
//         </>
//     );
// }

