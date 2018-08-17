//包含所有action creator模块

//引入发送ajaxAPI的请求函数
import {
  reqHome,
  reqDetail,
  reqBanner,
  reqNav,
  reqData
} from '../api';

//引入常量
import {
  RECEIVE_HOME,
  RECEIVE_NAV,
  RECEIVE_DETAIL,
  RECEIVE_BANNER,
  RECEIVE_DATA
} from './action-types';


/*-----------同步的actions-------------*/
//data的同步
export const receiveData = (data) => ({type: RECEIVE_DATA, data:data});
//home的同步
export const receiveHome = (home) => ({type: RECEIVE_HOME, data: home});
//nav的同步
export const receiveNav = (nav) => ({type: RECEIVE_NAV, data: nav});
//detail的同步
export const receiveDetail = (detail) => ({type: RECEIVE_DETAIL, data: detail});
//banner的同步
export const receiveBanner = (banner) => ({type: RECEIVE_BANNER, data: banner});

/*-----------异步的actions-------------*/
//异步获取data的数据
export const getDataAsync = () => {
  return async dispatch => {
    const result = await reqData();
      if (result.code === 0) {
      //获取data数据成功,分发一个同步action
      dispatch(receiveData(result.data));
    } else {
      console.log('获取data数据失败');
    }
  }
};

//异步获取Home的数据
export const getHomeAsync = () => {
  return async dispatch => {
    const result = await reqHome();
    if (result.code === 0) {
      //获取home数据成功,分发一个同步action
      dispatch(receiveHome(result.home));
    } else {
      console.log('获取home数据失败');
    }
  }
};

//异步获取focusList的数据[首页轮播]
export const getBannerAsync = () => {
  return async dispatch => {
    const result = await reqBanner();
    if (result.code === 0) {
      //获取home数据成功,分发一个同步action
      dispatch(receiveBanner(result.focusList));
    } else {
      console.log('获取focusList数据失败');
    }
  }
};

//异步获取nav的数据
export const getNavAsync = () => {
  return async dispatch => {
    const result = await reqNav();
    if (result.code === 0) {
      //获取home数据成功,分发一个同步action
      dispatch(receiveNav(result.nav));
    } else {
      console.log('获取nav数据失败');
    }
  }
};

//异步获取Detail的数据
export const getDetailAsync = () => {
  return async dispatch => {
    const result = await reqDetail();
    if (result.code === 0) {
      //获取home数据成功,分发一个同步action
      dispatch(receiveDetail(result.detail));
    } else {
      console.log('获取detail数据失败');
    }
  }
};
