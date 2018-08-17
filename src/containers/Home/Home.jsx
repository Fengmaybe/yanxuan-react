import React, {Component} from 'react';
import {connect} from 'react-redux';

import './home.styl';
import BScroll from 'better-scroll';
import Swiper from 'swiper';

import {getDataAsync, getBannerAsync, getHomeAsync} from '../../redux/actions';
import FooterNav from '../../components/FooterNav/FooterNav';
import HomeGoodThings from '../../components/HomeGoodThings/HomeGoodThings';

class Home extends Component {
  /*  static propTypes = {
      data: PropTypes.array.isRequired,
      getDataAsync: PropTypes.func.isRequired,
    };*/
  state = {
    tabIndex: 0,
    hour:'02',
    min:'23',
    sec:'08'
  };

  componentWillMount() {
    this.props.getDataAsync();
    this.props.getBannerAsync();
    this.props.getHomeAsync();
  }

//tab切换更新index
  selectIndex=(index)=> {
    this.setState({
      tabIndex: index,
    });
  }
  //倒计时方法
  _countTime = () => {
    //获取当前时间
    let date = new Date();
    let now = date.getTime();
    //设置截止时间
    let endDate = new Date("2018-10-10 23:23:23");
    let end = endDate.getTime();
    //时间差
    let leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    let d, h, m, s;
    if (leftTime >= 0) {
      d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      s = Math.floor(leftTime / 1000 % 60);
    }
    //更新本组件中的状态
    if (h < 10) {
      this.setState({
        hour:`0${h}`
      });
    } else {
      this.setState({
        hour:`${h}`
      });
    }
    if (m < 10) {
      this.setState({
        min:`0${m}`
      });
    } else {
      this.setState({
        min:`${m}`
      });
    }
    if (s < 10) {
      this.setState({
        sec:`0${s}`
      });
    } else {
      this.setState({
        sec:`${s}`
      });
    }
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(this._countTime, 1000);
  };


  componentDidMount() {

    new BScroll('.hdScorllTab', {
      click: true,
      scrollX: true
    });
    new BScroll('.home_imgWrap', {
      click: true,
      scrollX: true
    });
    //调用倒计时
    //this._countTime();
  }

  componentDidUpdate() {
    new Swiper('.swiper-container', {
      effect: "fade",
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        //type: 'bullets',
        //type: 'fraction',
        //type : 'progressbar',
        //type : 'custom',
      },
      autoplay: {
        autoplay: false,
        delay: 1000
      },
    });
  }


  render() {
    const {data, banner, home} = this.props;
    const {tabIndex,hour,min,sec} = this.state;
    return (
      <div>
        <div>
          <div id="scrollContainer">
            <div className="homeContainer">
              {/*home的头部*/}
              <div className="homeHeader">
                {/*<!--logo+搜索框-->*/}
                <div className="hd_Wrap">
                  <a className="logo"></a>
                  <div className="search">
                    <div className="sContent">
                      <i className="iconfont icon-xingtaiduICON_sousuo--"></i>
                      <span>搜索商品, 共9981款好物</span>
                    </div>
                  </div>
                </div>
                {/*<!--tab列表-->*/}
                <div className="hdScorllTab">
                  <div className="hdScorllItem" ref="hdScorllItem">
                    {

                      data.length === 0 ? null : data.map((item, index) => {
                        return (
                          <span onClick={() => this.selectIndex(index)} key={index}
                                className={index === tabIndex ? 'active' : null}>{item.name}</span>
                        )

                      })


                    }
                  </div>
                </div>
              </div>
              {/*home的轮播*/}
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {
                    banner.length === 0 ? null : banner.map((item, index) => {
                      return (
                        <div className="swiper-slide" key={index}>
                          <img src={item.picUrl}/>
                        </div>
                      )
                    })
                  }

                </div>
                <div className="swiper-pagination"></div>


              </div>
              {/*轮播图底下的玩意*/}
              <div className="tips">
                {
                  !(home.policyDescList) ? null : home.policyDescList.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <img src={item.icon}/>
                        <span>{item.desc}</span>
                      </div>
                    )
                  })
                }
              </div>
              {/*品牌购货商*/}
              <div className="home_brand">
                <div className="brand">
                  <div className="brand-Wrap">
                    <span>品牌制造商直供</span>
                    <i className="iconfont icon-yuanjiantou1"></i>
                  </div>
                </div>
                <div className="brand-itemWrap">
                  <div className="brand-item">
                    <h4>Nine West制造商</h4>
                    <div className="title">
                      536元起
                    </div>
                    <div className="goNew">上新</div>
                  </div>
                  <div className="brand-item">
                    <h4>RainBow箱</h4>
                    <div className="title">
                      699元起
                    </div>
                    <div className="goNew">上新</div>
                  </div>
                  <div className="brand-item">
                    <h4>海外制造商</h4>
                    <div className="title">
                      9.9元起
                    </div>
                    <div className="goNew">上新</div>
                  </div>
                  <div className="brand-item">
                    <h4>芙尔达品牌</h4>
                    <div className="title">
                      89.9元起
                    </div>

                  </div>
                </div>
              </div>
              {/*新品专栏*/}
              <div className="home-newItems">
                <header className="newItemsWrap">
                  <span>人气推荐·好物精选</span>
                  <div id="all">查看全部 ></div>
                </header>
              </div>
              {/*专题精选*/}
              <div className="home_topic">
                <div className="topicImg">
                  <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="专题精选"/>
                </div>
                <div className="topic_wrap">
                  <div className="topic_content">
                    <span>专题精选&nbsp;</span>
                    <i className="iconfont icon-yuanjiantou1"></i>
                  </div>
                </div>
              </div>
              {/*专题商品横滚*/}
              <div className="home_imgWrap">
                <div className="home_imgScroll">
                  {
                    !(home.topicList)  ? null : home.topicList.map((item, index) => {
                      return (
                        <div className="imgItem" key={index}>
                          <img src={item.scenePicUrl} alt="topicImgList"/>
                            <div className="content">
                              <h4>{item.title}</h4>
                              <span>{item.priceInfo}元起</span>
                            </div>
                            <div className="desc">
                              {item.subtitle}
                            </div>
                        </div>
                    )
                    })
                    }
                </div>
              </div>
              {/*定时器抢购*/}
              <div className="timerWrap">
                <div className="timerLeft">
                  <p className="title">严 选 限 时 购</p>
                  <div className="h_m_s">
                    <span className="hour">{hour}</span>
                    <span className="colon">:</span>
                    <span className="min">{min}</span>
                    <span className="colon">:</span>
                    <span className="sec">{sec}</span>
                  </div>
                  <p className="nextTimer">下一场 14:00 开始</p>
                </div>
                <div className="timerRight">
                  <img
                    src="http://yanxuan.nosdn.127.net/366713b30b7328ab978dc65b9551bd49.png?imageView&quality=85&thumbnail=330x330"
                    alt="限时抢购"/>
          <span className="price">
            <span className="priceFont"> &nbsp;￥36</span>
          </span>
                </div>
              </div>
              {/*列表商品*/}
              <HomeGoodThings/>

            </div>
          </div>
        </div>
        <FooterNav/>
      </div>
    )
  }
}

export default connect(
  //这里调用的是reducers的数据
  state => ({data: state.data, banner: state.banner, home: state.home}),
  {getDataAsync, getBannerAsync, getHomeAsync}
)(Home);