import {createStore,applyMiddleware} from 'redux';
//应用异步中间件
import thunk from 'redux-thunk';
//可用插件工具查看状态
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers';
//将状态传递到各个路由组件中
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));