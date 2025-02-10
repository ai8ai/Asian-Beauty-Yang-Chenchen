// app/Cat1.tsx
import React from 'react';
import { router } from 'expo-router';
import CategoryScreen from '@/components/CategoryScreen';
import getCategoryData from '@/utils/getCategoryData';

const YCC = () => {
    return (
        <CategoryScreen
            title="Category YCC"
            fetchCategoryData={() => getCategoryData('cat1')}
            onPressItem={(item) => router.push({ pathname: '/profile', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
