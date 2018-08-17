import React,{Component} from 'react';
import './DetailLook.styl'

class DetailLook extends Component {
  render(){
    return (
      <div>
        <div className="look_wrap">
          <div className="title">严选LOOK</div>
          <div className="img">
            <img src="//yanxuan.nosdn.127.net/8e1f8b6e0c7a06c863935613ae090e9d.jpg?imageView&quality=75" alt=""/>
          </div>
          <div className="comment">
            <div className="comment_top">
              <img src="//nos.netease.com/mail-online/609c440bf0d6a8c5a14d3af15a2bd8e4/mail180x180.jpg?imageView&quality=75&thumbnail=48y48" alt="" className="avatar"/>
                <span className="niackname">Fengmaybe520</span>
            </div>
            <div className="comment_bottom">
              <p>美美哒，主子很满意，不时啃一啃，解决喵与花不可兼得的困扰，喵喵~</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailLook;