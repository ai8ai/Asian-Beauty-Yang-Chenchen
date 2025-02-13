import { Stack } from 'expo-router';

export default function DetailLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}

export const unstable_settings = {
    initialRouteName: 'index',
    drawer: {
        hide: true, // This hides all screens in `app/detail/` from the Drawer
    },
};

// 👇 This explicitly hides `detail/` from the drawer if it still shows
export const screenOptions = {
    drawerItemStyle: { display: 'none' },
};



// import { Stack } from 'expo-router';

// export default function DetailLayout() {
//     return <Stack screenOptions={{ headerShown: false }} />;
// }

// export const unstable_settings = {
//     initialRouteName: 'index',
//     drawer: {
//         hide: true, // This hides all screens in `app/detail/` from the Drawer
//     },
// };
