import codeImg from './images/captcha.svg';
import React, {Component} from 'react';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import './LoginEmail.styl';
import {withRouter} from 'react-router-dom';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

class LoginEmail extends Component {

  state = {
    captcha: '',
    email: '',
    pwd:'',
    showPwd:false,

  };
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  };
  handleCaptcha = (event) => {
    this.setState({
      captcha:event.target.value
    })
  };
  handlePwd = (event) => {
    this.setState({
      pwd:event.target.value
    })
  };
  changeShowPwd = () => {
    this.setState({
      showPwd:!this.state.showPwd
    })
  };
  goLogin =  () => {
    const {email,pwd,showPwd,captcha} = this.state;
    if(!email) {
      alert('邮箱错误提示', '主人，邮箱不能为空咯', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {} },
      ]);
      return
    } else if(!pwd) {
      alert('密码错误提示', '主人，密码不能为空咯', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {} },
      ]);
      return
    }else if(!captcha) {
      alert('验证码错误提示', '主人，验证码不能为空咯', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {} },
      ]);
      return
    }else if(captcha.toLowerCase() !== 'wk3v') {
      alert('验证码错误提示', '主人，验证码不正确耶', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {}},
      ]);
      return
    }else{
      this.props.history.replace('/home');
    }
  };

  render() {
    const {email,pwd,captcha,showPwd} = this.state;
    return (
      <div>
        <DetailHeader/>
        <div className="loginWrap">
          <div className="view">
            <div className="logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo"/>
            </div>
            <div className="userBox">
              <section>
                <section className="login_message">
                  <input type="text" placeholder="请输入邮箱地址" value={email} onChange={this.handleEmail}/>
                </section>
                <section className="login_verification">
                  {
                    !showPwd ?
                      <input type="password"  placeholder="密码" value={pwd} onChange={this.handlePwd}/>
                     :
                    <input type="text"  placeholder="密码" value={pwd} onChange={this.handlePwd}/>

                  }
                  <div className={showPwd ? 'switch_button on' : 'switch_button off'}  onClick={this.changeShowPwd}>
                  <div className={showPwd ? 'switch_circle right' : 'switch_circle'}></div>
                  <span className="switch_text">{showPwd ? 'abc' : '...'}</span>
                  </div>

                </section>
                <section className="login_message">
                  <input type="text" placeholder="验证码" value={captcha} onChange={this.handleCaptcha}/>
                  <img className="get_verification" src={codeImg} alt="captcha"
                       style={{width: 150, marginTop: 5, right: 20}}/>
                </section>
                <section className="login_hint">
                  <span>遇到问题？</span>
                  <span>使用密码验证登录</span>
                </section>
              </section>
            </div>
            <div className="loginWarp">
              <div className="phoneLogin" onClick={this.goLogin}>
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

export default withRouter(LoginEmail);