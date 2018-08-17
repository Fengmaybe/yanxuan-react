import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDetailAsync} from '../../redux/actions';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './DetailSwiper.styl'

class DetailSwiper extends Component {
componentDidMount(){
  this.props.getDetailAsync();
}
componentDidUpdate(){
  new Swiper('.swiper-container', {
    effect: "slide",
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1.15,
    centeredSlides: true,
    onInit: function (swiper) {
      swiper.slides[2].className = 'swiper-slide swiper-slide-active'
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      //type: 'bullets',
      //type: 'fraction',
      //type : 'progressbar',
      //type : 'custom',
    },
  })
}
  render() {
    const {banner} = this.props.detail;
    console.log(banner);
    return (
      <div>
        {
          !banner ? null : (<div className="swiper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  banner.map((item,index)=>{
                    return (
                      <div className="swiper-slide" key={index}>
                        <img src={item.picUrl}/>
                        <div className="content">
                          <div className="subTitle">{item.subTitle}</div>
                          <div className="title">{item.title}</div>
                          <div className="desc">{item.desc}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>)
        }
      </div>


  )
  }
}

export default connect(
  //这里调用的是reducers的数据
  state => ({detail: state.detail}),
  {getDetailAsync}
)(DetailSwiper);