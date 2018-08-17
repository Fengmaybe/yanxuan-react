//底部导航UI组件--需要使用数据，引入withRouter

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './FooterNav.styl';

class FooterNav extends Component {
  //本地管理的状态
  state = {
    navInfos: [
      {title: '首页', to: '/home', className: 'icon-shouye'},
      {title: '识物', to: '/detail', className: 'icon-fangkuaidagou-weixuanzhong'},
      {title: '分类', to: '/category', className: 'icon-chouti'},
      {title: '购物车', to: '/shopcart', className: 'icon-gouwuche'},
      {title: '个人', to: '/personal', className: 'icon-renwu'}
    ]
  };
/*onClick={this.props.history.replace(item.to)}*/
  render() {
    const {navInfos} = this.state;
    return (
      <div>
        <div className="FooterContainer">
          <div className="Footer">
            {
              navInfos.map((item,index) => (
                <div key={index} onClick={() => this.props.history.replace(item.to)}
                     className = {this.props.location.pathname === item.to ? 'active FooterItem' : "FooterItem"}>
                  <span className = {item.className ? `iconfont ${item.className}` : 'iconfont'}></span>
                  <span className="title">{item.title}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FooterNav);//让非路由组件可以访问到路由组件的API,从react-route-DOM中