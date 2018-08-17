import React, {Component} from 'react';

import DetailHeader from '../../components/DetailHeader/DetailHeader';
import FooterNav from '../../components/FooterNav/FooterNav';
import DetailSwiper from '../../components/DetailSwiper/DetailSwiper';
import DetailEssayScrollX  from '../../components/DetailEssayScrollX/DetailEssayScrollX';
import DetailRecommend  from '../../components/DetailRecommend/DetailRecommend';
import DetailLook  from '../../components/DetailLook/DetailLook';
import DetailQuarterTen  from '../../components/DetailQuarterTen/DetailQuarterTen';
import DetailFindMore  from '../../components/DetailFindMore/DetailFindMore';
import GoTop from '../../components/goTop/goTop';

class Detail extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="detail_main_wrap">
            <DetailHeader />
            <DetailSwiper />
            <DetailEssayScrollX />
            <DetailRecommend />
            <DetailLook />
            <DetailQuarterTen />
            <DetailFindMore />
            <GoTop />
          </div>
          <FooterNav/>
        </div>
      </div>

    )
  }
}

export default Detail;