import React, {Component} from 'react';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import './LoginPhone.styl';
import {withRouter} from 'react-router-dom';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

class LoginPhone extends Component {
  state = {
    phone: '',
    code: '',
  };
  handlePhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  };
  handleCode = (event) => {
    this.setState({
      code: event.target.value
    })
  };
  goLogin = () => {
    if(!(/^1[34578]\d{9}$/.test(this.state.phone))) {
      alert('提示', '手机号格式不正确', [
        { text: '取消', onPress: () => {this.state.phone='';
            this.state.code='';}},
        { text: '确定', onPress: () => {this.state.phone='';
            this.state.code='';} },
      ]);
      return
    } else if(!/^\d{6}$/.test(this.state.code)) {
      alert('提示', '主人，验证码必须6位咯', [
        { text: '取消', onPress: () => {
            this.state.code='';}},
        { text: '确定', onPress: () => {
            this.state.code='';} },
      ]);
      return
    }else{
      this.props.history.replace('/home');
    }
  };

  render() {
    const {phone, code} = this.state;
    return (
      <div>
        <DetailHeader/>
        <div className="loginWrap">
          <div className="view">
            <div className="logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo"/>
            </div>
            <div className="userBox">
              <section className="login_message">
                <input type="text"  value={phone} onChange={this.handlePhone} placeholder='请输入手机号'/>
              </section>
              <section className="login_verification">
                <input type="text"  value={code} placeholder='请输入验证码' onChange={this.handleCode}/>
                <div className="getWrap">
                  <a className="getsmscode">获取验证码</a>
                </div>
              </section>
              <section className="login_hint">
                <span>遇到问题？</span>
                <span>使用密码验证登录</span>
              </section>
            </div>
            <div className="loginWarp" onClick={this.goLogin}>
              <div className="phoneLogin">
                <span>登录</span>
              </div>
              <div className="msgLogin" onClick={() => this.props.history.replace('/personal')}>
                <span>其他方式登录</span>
              </div>

            </div>
            <div className="register" onClick={() => this.props.history.replace('/personal')}>
              注册账号>>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginPhone);