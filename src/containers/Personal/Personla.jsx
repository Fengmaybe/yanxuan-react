import React, {Component} from 'react';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import {withRouter} from 'react-router-dom';
import './Personal.styl';

class Personla extends Component {
  render() {
    return (
      <div>
        <div className="MainWrap">
          <DetailHeader/>
          <div className="logo">
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <div className="loginWarp">
            <div className="phoneLogin" onClick={()=>this.props.history.replace('/loginphone')}>
              <i className="phoneIcon"></i>
              <span>手机帐号登录</span>
            </div>
            <div className="msgLogin" onClick={()=>this.props.history.replace('/loginemail')}>
              <i className="msgIcon"></i>
              <span>邮箱帐号登录</span>
            </div>

          </div>
          <div className="register" onClick={()=>this.props.history.replace('/personal')}>
            手机号快捷注册>>
          </div>
          <div className="contact">
            <div className="contactWrap">
      <span className="wechat">
        <i className="iconfont icon-changyonglogo28"></i>
        微信</span>
              <span className="line">|</span>
              <span className="qq">
        <i className="iconfont icon-qq"></i>
        QQ</span>
              <span className="line">|</span>
              <span className="weibo">
        <i className="iconfont icon-weibo"></i>
        微博</span>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default withRouter(Personla);