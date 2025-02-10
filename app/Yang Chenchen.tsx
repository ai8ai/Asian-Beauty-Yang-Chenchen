import React from 'react';
import { router } from 'expo-router';

import CategoryScreen from '@/components/CategoryScreen';
import getCategoryData from '@/utils/getCategoryData';

const YCC = () => {
    return (
        <CategoryScreen
            fetchCategoryData={() => getCategoryData('yccCate')}
            onPressItem={(item) => router.push({ pathname: '/detail/ycc', params: { itemid: item.id } })}
        />
    );
};

export default YCC;
