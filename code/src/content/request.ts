export const fetchHZSMapData = async () => {
    try {
        const response = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/330100.json');
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('获取中国地图数据失败:', error);
        return null;
    }
}

export const fetchHZJSapData = async () => {
    try {
        const response = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json');
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('获取中国地图数据失败:', error);
        return null;
    }
}

