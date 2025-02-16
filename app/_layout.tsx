// _layout.tsx
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    const hiddenScreens = ["detail", "profile", "detail/ycc"];

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
                    {/* <Drawer.Screen name="yiren/yangchenchen" options={{ drawerLabel: 'Yome Yang Chenchen', title: 'Yome Sugar Yang Chenchen', }} />
                    <Drawer.Screen name="yiren/sunyunzhu" options={{ drawerLabel: 'Son Yoon Joo', title: 'Asian Beauty: Son Yoon Joo', }} />
                    <Drawer.Screen name="yiren/wangxinyao" options={{ drawerLabel: 'Yanni Wang Xinyao', title: 'Asian Beauty: Yanni Wang Xinyao', }} />
                    <Drawer.Screen name="yiren/kele" options={{ drawerLabel: 'Vicky Kele', title: 'Asian Beauty: Vicky Kele', }} />
                    <Drawer.Screen name="yiren/xulizhi" options={{ drawerLabel: 'Booty Xu Lizhi', title: 'Asian Beauty: Booty Xu Lizhi', }} />
                    <Drawer.Screen name="yiren/others" options={{ drawerLabel: 'and More ...', title: 'Asian Beauty: More', }} />
                    <Drawer.Screen name="yiren/anran" options={{ drawerLabel: 'and More ...', title: 'Asian Beauty: More', drawerItemStyle: { display: "none" }}} />
                    <Drawer.Screen name="yiren/chengchengcheng" options={{ drawerLabel: 'and More ...', title: 'Asian Beauty: More', drawerItemStyle: { display: "none" }}} />
                    <Drawer.Screen name="yiren/duxiaoyu" options={{ drawerLabel: 'and More ...', title: 'Asian Beauty: More', drawerItemStyle: { display: "none" }}} />
                    <Drawer.Screen name="yiren/linxinglan" options={{ drawerLabel: 'and More ...', title: 'Asian Beauty: More', drawerItemStyle: { display: "none" }}} /> */}
                </Drawer>
            </GestureHandlerRootView>
            <StatusBar style="light" translucent />
        </>
    );
}