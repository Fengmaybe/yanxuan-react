import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getHomeAsync} from "../../redux/actions";
import './HomeGoodThings.styl';
class HomeGoodThings extends Component {
  render(){
    const {home} = this.props;
    return (
     <div>
       {
         !home.cateList ? null : home.cateList.map((item,index)=>{
           return (
             <div className="home-goodThingsCategory1" key={index}>
               <div className="home-goodThingsTitle">
                 <h3 className="title">{item.name}好物</h3>
                 <div className="home-goodThings">
                   {
                     !item.itemList ? null : item.itemList.map((good, indexGood)=>{
                       return (
                         <div className="goodThingsWrap"  key={indexGood}>
                       <img src={good.listPicUrl} alt="goodItem"/>
                         <div className="desc">{good.simpleDesc}</div>
                         <div className="name">{good.name}</div>
                         <span className="price">￥{good.couponPrice}</span>
                           {
                             !good.promTag ? null : <p className="promTag">{good.promTag}</p>
                           }
                       </div>
                       )
                     })
                   }
                 </div>
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
  state => ({home: state.home}),
  {getHomeAsync}
)(HomeGoodThings);