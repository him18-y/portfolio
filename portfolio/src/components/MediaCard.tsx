import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import Modal from 'react-modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from 'react-slick';

// モーダルが開いたときにスクロールを無効化するために、アプリ全体のルート要素を設定
Modal.setAppElement('#root');

interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  modaltitle: string;
  modaltext: string;
  mvs: string[];
}

// モーダルのスタイルを設定
const customStyles = {
  content: {
    position: 'absolute' as const, // 型アサーションを追加
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginTop: '2%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw', // 画面の幅の80%を使用
    height: '70vh', // 画面の高さの70%を使用
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'white',
    overflowY: 'auto' as const, // overflowYにも型アサーションを追加
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

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
    objectFit: 'cover' as const, // 画像をスライド領域にフィット
    maxHeight: '670px', // 最大高さを設定
  },
};

const MediaCard: React.FC<MediaCardProps> = ({
  image,
  title,
  description,
  modaltitle,
  modaltext,
  mvs,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ImageList = mvs.map((mv, index) => (
    <div key={index}>
      <img
        src={mv}
        className="SlideImage"
        alt={`Slide ${index + 1}`}
        style={styles.slideImage}
      />
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

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleOpen}>詳細</Button>
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          style={customStyles} // スタイルを適用
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <IconButton
                onClick={handleClose}
                color="primary"
                style={{ position: 'absolute', right: '10px', top: '10px' }}
              >
                <CancelIcon />
              </IconButton>
              <Typography variant="h6" component="h2">
                {modaltitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 4,
                  fontWeight: 50,
                  color: '#000000',
                  textDecoration: 'none',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {modaltext}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{ mt: { xs: 4, md: 8 } }} // xsでは上部マージンを追加
            >
              <SimpleSlider />
            </Grid>
          </Grid>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
