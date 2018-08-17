import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './DetailHeader.styl';

class DetailHeader extends Component {

  render() {
    return (
      <div className="detail_header">
        <div className="bar">
          <span className="homeIcon" onClick={()=>this.props.history.replace('/home')}></span>
          <span className="logo"></span>
          <div className="right">
            <span className="search" onClick={()=>this.props.history.replace('/category')}></span>
            <span className="shopCart" onClick={()=>this.props.history.replace('/shopcart')}></span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(DetailHeader);