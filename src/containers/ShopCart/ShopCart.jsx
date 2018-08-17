import React,{Component} from 'react';
import FooterNav from '../../components/FooterNav/FooterNav';
import './ShopCart.styl';
import {withRouter} from 'react-router-dom';

class ShopCart extends Component {
  goLogin = () => {
    this.props.history.replace('/personal');
  };
  render(){
    return (
      <div>
        <div className="wrap">
          <div className="header">
            <span className="shopCart">购物车</span>
            <span className="coupon">领券</span>
          </div>
          <div className="titleThree">
            <div className="m-servicePolicy">
              <div className="item">
                <div className="servicePolicy"></div>
                <span>30天无忧退货</span>
              </div>
              <div className="item">
                <div className="servicePolicy"></div>
                <span>48小时快速退款</span>
              </div>
              <div className="item">
                <div className="servicePolicy"></div>
                <span>满88元免邮费</span>
              </div>
            </div>
            <div className="m-defaultPage">
              <div className="container">
                <div className="img"></div>
                <div className="txt">
                  <div className="noCart-login">
                    <div className="noCart-title">去添加点什么吧</div>
                    <div className="noCart-btn" onClick={this.goLogin}>登录</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <FooterNav />
      </div>
    )
  }
}

export default withRouter(ShopCart);