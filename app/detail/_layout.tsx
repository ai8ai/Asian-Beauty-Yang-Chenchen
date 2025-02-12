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
