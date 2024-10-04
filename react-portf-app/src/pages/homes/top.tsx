import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MV from '../../assets/images/mv.jpg';
import MV1 from '../../assets/images/mv1.jpg';
import MV2 from '../../assets/images/mv2.jpg';
import MV3 from '../../assets/images/mv3.jpg';
import MV4 from '../../assets/images/mv4.jpg';
import MV5 from '../../assets/images/mv5.jpg';
import SkillList from '../../components/SkillList';
import ProductionList from '../../components/ProductionList';
import ProfileList from '../../components/ProfileList';
import ContactForm from '../../components/ContactForm';
import About from '../../components/About';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = {
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: { xs: '100px 0', md: '200px 0' }, // レスポンシブ対応のマージン
  },
  slideImage: {
    width: '100%',
    height: 'auto', // 高さを自動調整
    objectFit: 'cover'as const, // 画像をスライド領域にフィット
    maxHeight: '670px', // 最大高さを設定
  },
};

const mvs = [MV, MV1, MV2, MV3, MV4, MV5];

const ImageList = mvs.map((mv, index) => (
  <div key={index}>
    <img src={mv} className="SlideImage" alt={`Slide ${index + 1}`} style={styles.slideImage} />
  </div>
));

const SimpleSlider = () => {
  const settings = {
    size: 'cover',
    maxWidthXs: '100%',
    centerMode: true,
    centerPadding: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    slidesToShow: 1, // 1フレームで表示するスライド数
    slidesToScroll: 1, // 一度にスライドする数
    dots: true, // 下部のドット表示
    arrows: false, // 左右の矢印を非表示
    adaptiveHeight: true, // 内部コンテンツに合わせてスライドの高さを自動調整
    infinite: true, // スライドを繰り返す
    speed: 1000, // スライドアニメーションのスピード(ミリ秒)
    autoplay: true, // 自動再生
    pauseOnHover: false, // マウスカーソルをスライドにのせた時に再生を止めない
    autoplaySpeed: 5000, // 自動再生で切り替わる間隔(ミリ秒)
  };

  return <Slider {...settings}>{ImageList}</Slider>;
};

const Top: React.FC = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" id="s_top">
            <SimpleSlider />
          </Box>
        </Grid>
      </Grid>

      <Box id="s_about" sx={styles.boxContainer}>
        <Container maxWidth="md">
          <About />
        </Container>
      </Box>

      <Box id="s_profile" sx={styles.boxContainer}>
        <Container maxWidth="md">
          <ProfileList />
        </Container>
      </Box>

      <Box id="s_skill" sx={styles.boxContainer}>
        <Container maxWidth="md">
          <SkillList />
        </Container>
      </Box>

      <Box id="s_production" sx={styles.boxContainer}>
        <Container maxWidth="md">
          <ProductionList />
        </Container>
      </Box>

      <Box id="s_contact" sx={styles.boxContainer}>
        <Container maxWidth="md">
          <ContactForm />
        </Container>
      </Box>
    </>
  );
};

export default Top;
