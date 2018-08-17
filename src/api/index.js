/*与后台交互模块*/
import ajax from './ajax'

//获取data的tab-->[]
export const reqData = () => ajax('/data');
//获取banner-->[]
export const reqBanner = () => ajax('/banner');
//获取home-->{}
export const reqHome = () => ajax('/home');
//获取home-->{}
export const reqDetail = () => ajax('/detail');
//获取home-->{}
export const reqNav = () => ajax('/nav');
