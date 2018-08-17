import React,{Component} from 'react';
import FooterNav from '../../components/FooterNav/FooterNav';
import CategoryRight from '../../components/CategoryRight/CategoryRight';
import {getNavAsync} from "../../redux/actions";
import {connect} from "react-redux";
import './Category.styl';
class Category extends Component {
  state = {
    InitIndex:3
  };
  componentDidMount(){
    this.props.getNavAsync();
  }
  changeActive = (index) => {
    this.setState({
      InitIndex:index
    })
  };
  render(){
    const {nav} = this.props;
    const {InitIndex} = this.state;
    if(!nav) return(<div></div>);
    return (
      <div>
        <div>
          <div className="homeHeader">
            <div className="hd_Wrap">
              <div className="search">
                <div className="sContent">
                  <i className="iconfont icon-xingtaiduICON_sousuo--"></i>
                  <span>搜索商品, 共9981款好物</span>
                </div>
              </div>
            </div>
          </div>
          <div className="leftWrap">
            <div className="leftList">
              <div className="leftNav">
                {
                  !nav.categoryL1List?null:nav.categoryL1List.map((item,index)=>{
                    return (
                      <div key={index}
                  className={index===InitIndex ? 'active item' : 'item'}
                  onClick={()=>this.changeActive(index)}>{item.name}</div>
                    )
                  })
                }
            </div>
          </div>
        </div>
          <CategoryRight currentIndex={InitIndex} data={!nav.categoryL1List?[]:nav.categoryL1List}/>
        </div>
        <FooterNav />
      </div>
    )
  }
}

export default connect(
  //这里调用的是reducers的数据
  state => ({nav: state.nav}),
  {getNavAsync}
)(Category);