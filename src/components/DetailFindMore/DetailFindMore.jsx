import React,{Component} from 'react';
import {getDetailAsync} from "../../redux/actions";
import {connect} from "react-redux";
import './DetailFindMore.styl';
class DetailFindMore extends Component {
  render(){
    const {findMore} = this.props.detail;
    if(!findMore) return(<div></div>);
    return (
      <div className="FindMore">
        <div className="more">
          <div className="title">更多精彩</div>
        </div>
        {
          findMore.map((item,index)=>{
            return (
              <div className="wrap" key={index}>
                <div className="box">
                  <div className="imgBox">
                    <img src={item.itemPicUrl} alt="photo"/>
                  </div>
                  <div className="text">{item.title}</div>
                </div>
              </div>
            )
          })
        }
  </div>
    )
  }
}

export default connect(
  //这里调用的是reducers的数据
  state => ({detail: state.detail}),
  {getDetailAsync}
)(DetailFindMore);