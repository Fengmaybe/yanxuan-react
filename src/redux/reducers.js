//包含多个用于生成新的store的reducers函数的模块

import {combineReducers} from 'redux';

import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_DETAIL,
  RECEIVE_NAV,
  RECEIVE_HOME
} from './action-types';
/*const initState = {
  //mock数据data(tab选项)
  data:[],
  //banner数据
  banner:[],
  //home页数据
  home:{},
  //detail页数据
  detail:{},
  //分类页nav数据
  nav:{},
};*/

const initData = [];
//触发data的reducers函数
const data = (state = initData, action) => {
  switch (action.type) {
    case RECEIVE_DATA :
      return action.data;
    default :
      return state;
  }
};


const initBanner = [];
//触发banner的reducers函数
const banner = (state = initBanner, action) => {
  switch (action.type) {
    case RECEIVE_BANNER :
      return action.data;
    default :
      return state;
  }
};

const initHome = {};
//触发home的reducers函数
const home = (state = initHome, action) => {
  switch (action.type) {
    case RECEIVE_HOME :
      return action.data;
    default :
      return state;
  }
};

const initDetail = {};
//触发detail的reducers函数
const detail = (state = initDetail, action) => {
  switch (action.type) {
    case RECEIVE_DETAIL :
      return action.data;
    default :
      return state;
  }
};

const initNav = {};
//触发nav的reducers函数
const nav = (state = initNav, action) => {
  switch (action.type) {
    case RECEIVE_NAV :
      return action.data;
    default :
      return state;
  }
};


//统一暴露出去,合并多个reducer函数
export default combineReducers({
  data,
  banner,
  home,
  detail,
  nav,
})