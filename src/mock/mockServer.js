/*
使用mockjs提供mock数据接口
 */

import Mock from 'mockjs';

//tab导航 居家-配件-服装
import data from './data';
import data_nav from './data_nav';
import fenlei_data from './fenlei_data';
import home_data from './home_data';
import shiwu_data from './shiwu_data';

// 返回data的接口(包括了tab项的数据)--->返回[]
Mock.mock('/data', {code:0, data: data});

//返回首页特定轮播图片的接口--->返回[]
Mock.mock('/banner', {code:0, focusList: home_data.focusList});

//返回home页数据的接口(home_imgListScroll)(home中的cartLIst数据有goodThings组件的好物)--->返回{}
Mock.mock('/home', {code:0, home: home_data});

//返回detail页数据的接口(轮播图数据)--->返回{}
Mock.mock('/detail', {code:0, detail: shiwu_data});

//返回分类页nav数据--->返回{}
Mock.mock('/nav', {code:0, nav: data_nav});
