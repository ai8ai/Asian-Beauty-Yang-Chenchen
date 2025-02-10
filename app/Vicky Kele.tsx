// app/Cat1.tsx
import React from 'react';
import { router } from 'expo-router';
import CategoryScreen from '@/components/CategoryScreen';
import getCategoryData from '@/utils/getCategoryData';

const KELE = () => {
    return (
        <CategoryScreen
            title="Category 1"
            fetchCategoryData={() => getCategoryData('keleCat')}
            onPressItem={(item) => router.push({ pathname: '/detail/kele', params: { itemid: item.id } })}
        />
    );
};

export default KELE;
