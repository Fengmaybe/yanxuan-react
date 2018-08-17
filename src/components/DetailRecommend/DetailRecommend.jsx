import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getDetailAsync} from '../../redux/actions';
import './DetailRecommend.styl';
class DetailRecommend extends Component {
  render(){
    const {detail} = this.props;
    if(!detail.recommendOne || !detail.recommendOne.subTitle ||　!detail.recommendTwo || !detail.recommendThree) return(<div></div>)
    return (
      <div>
        <div className="detail_recommend_wrap">
          {/*part1 图片*/}
          <div className="container">
            <div className="module-title">{detail.recommendOne.nickname}</div>
            <div className="m-mainPosItem">
              <div className="imgContainer">
                <div className="topicTag">
                  <div className="m-exploreTag">{detail.recommendOne.typeName}</div>
                </div>
              </div>
            </div>
          </div>
        {/*part2 文字信息*/}
          <div className="topicInfo">
            <div className="line1">
              <div className="title">{detail.recommendOne.title}</div>
              <div className="price">
                <div className="num">{detail.recommendOne.priceInfo}</div>
                <div className="unit">元起</div>
              </div>
            </div>
            <div className="line2">
              <div className="subTitle">{detail.recommendOne.subTitle}</div>
            </div>
          </div>
         {/*part 一个列表*/}
          <div className="m-minorPosItem">
            <div className="topicInfo">
              <div className="author-container">
                <div className="author">
                  <div className="avatar">
                    <img src={detail.recommendTwo.picUrl}/>
                  </div>
                  <div className="nickname">{detail.recommendTwo.nickname}</div>
                </div>
                <div className="line1">
                  <div className="title">{detail.recommendTwo.title}</div>
                </div>
                <div className="line2">
                  <div className="subTitle">{detail.recommendTwo.subTitle}</div>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img src={detail.recommendTwo.avatar} alt="头像"/>
                  <div className="topicTag">
                    <div className="m-exploreTag">{detail.recommendTwo.typeName}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*part 一个相同的列表*/}
          <div className="m-minorPosItem">
            <div className="topicInfo">
              <div className="author-container">
                <div className="author">
                  <div className="avatar">
                    <img src={detail.recommendThree.avatar}/>
                  </div>
                  <div className="nickname">{detail.recommendThree.nickname}</div>
                </div>
                <div className="line1">
                  <div className="title">{detail.recommendThree.title}</div>
                </div>
                <div className="line2">
                  <div className="subTitle">{detail.recommendThree.subTitle}</div>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img src={detail.recommendThree.picUrl} alt="xxx"/>
                  <div className="topicTag">
                    <div className="m-exploreTag">{detail.recommendThree.typeName}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  //这里调用的是reducers的数据
  state => ({detail: state.detail}),
  {getDetailAsync}
)(DetailRecommend);