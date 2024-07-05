import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface MediaCardProps {
  image: string;
  title: string;
  description: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ image, title, description }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{
                            fontWeight: 70,
                            letterSpacing: '.1rem',
                            color: '#000000',
                            textDecoration: 'none',
                            }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{
                            fontWeight: 30,
                            letterSpacing: '.1rem',
                            color: '#000000',
                            textDecoration: 'none',
                            }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          詳細
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;