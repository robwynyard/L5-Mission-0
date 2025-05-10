import * as React from 'react';
import Styles from './CardSection.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const cards = [
  {
    title: 'Branding Power',
    image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Consistent branding increases revenue by up to 23%. Learn how color, tone, and story shape your brand.',
    button: 'Learn More',
  },
  {
    title: 'SEO Insights',
    image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Discover how search engine optimization can drive long-term traffic, customer trust and drive sales.',
    button: 'Explore',
  },
  {
    title: 'Social Reach',
    image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Engage your audience across platforms and turn followers into loyal customers with the right strategy.',
    button: 'Get Tips',
  },
];

export default function CardSection() {
  return (
    <div className={Styles.CardContainer}>
      {cards.map((card, index) => (
        <div key={index} className={Styles.CardWrapper}>
          <Card sx={{ maxWidth: 395, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {card.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {card.button}
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
