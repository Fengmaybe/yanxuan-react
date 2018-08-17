import React, {Component} from 'react';
import {connect} from 'react-redux';
import BScroll from 'better-scroll';
import {getDetailAsync} from '../../redux/actions';
import './DetailEssayScrollX.styl';

class DetailEssayScrollX extends Component {
  componentDidMount() {
    this.props.getDetailAsync();

  }
  componentDidUpdate(){
    new BScroll('.detail_essay_scrollX_wrap',{
      click:true,
      scrollX:true
    })
  }

  render() {
    const {column} = this.props.detail;
    if(!column) return (<div className='detail_essay_scrollX_wrap'></div>);
    return (
      <div>
        <div className="detail_essay_scrollX_wrap">
          <div className="scroll-wrap">
            {
              column.map((item,index)=>{
                return (
                  <div className="scroll-item" key={index}>
                    <div className="imgContainer">
                      <img src={item.picUrl} alt="essay"/>
                    </div>
                    <div className="rbGradient">
                      <div className="topNum">{item.articleCount}</div>
                    </div>
                    <div className="title">{item.title}</div>
                  </div>
                  )
              })
            }
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
)(DetailEssayScrollX);