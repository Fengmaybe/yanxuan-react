import React,{Component} from 'react';
import {getDetailAsync} from "../../redux/actions";
import {connect} from "react-redux";
import './DetailQuarterTen.styl';
import BScroll from 'better-scroll';
class DetailQuarterTen extends Component {
  componentDidUpdate(){
    new BScroll('.Wrap',{
      click:true,
      scrollX:true
    })
  }

  render(){
    const {tenfifteen} = this.props.detail;
    if(!tenfifteen) return (<div className='wrap'></div>);
    return (
      <div>
        <div className="QuarterTen">
          <div className="title">十点一刻</div>
          <div className="Wrap">
            <div className="scrollWrap">
              {
                tenfifteen.map((item,index)=>{
                  return (
                    <div className="scroll-item" key={index}>
                  <div className="line-title">
                    <span className="inner1">- 今日话题 -</span>
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                  <div className="joinInfo">
                    <div className="inner">
                      <div className="avatars">
                        {
                          item.participantAvatar.map((avatarItem,index)=>{
                            return (
                              <div className="avatar" key={index}>
                            <img src={avatarItem} alt=""/>
                          </div>
                            )
                          })
                        }
                        {/*三点头像*/}
                      <div className="avatar1">
                        <div className="doc"></div>
                        <div className="doc"></div>
                        <div className="doc"></div>
                      </div>
                    </div>
                    <div className="join">
                      <span>{item.participantNum}</span>
                      <span>人参与话题</span>
                    </div>
                  </div>
                </div>
                </div>
                  )
                })
              }
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
)(DetailQuarterTen);