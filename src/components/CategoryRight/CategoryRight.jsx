import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CategoryRight.styl';

class CategoryRight extends Component {
  static propTypes = {
    currentIndex: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
  };

  render() {
    const {data, currentIndex} = this.props;
    if (!data || data.length === 0) return (<div></div>);
    return (
      <div>
        <div className="wrap">
          <div className="poster">
            <img src={data[currentIndex].bannerUrl} alt="poster"/>
          </div>
          <div className="categoryList">
            <div className="title">
              <span>{data[currentIndex].name}分类</span>
            </div>
            <div className="list">
              {
                !data[currentIndex].subCateList ? null : data[currentIndex].subCateList.map((subItem, subIndex) => {
                  return (
                    <div className="cateItem" key={subIndex}>
                      <div className="itemDiv">
                        <img src={subItem.wapBannerUrl} alt="item"/>
                        <div className="name">{subItem.name}</div>
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

export default CategoryRight;