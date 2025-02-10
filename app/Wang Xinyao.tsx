import React from 'react';
import { router } from 'expo-router';

import CategoryScreen from '@/components/CategoryScreen';
import getCategoryData from '@/utils/getCategoryData';

const WXY = () => {
    return (
        <CategoryScreen
            fetchCategoryData={() => getCategoryData('wxyCate')}
            onPressItem={(item) => router.push({ pathname: '/wxy', params: { itemid: item.id } })}
        />
    );
};

export default WXY;
