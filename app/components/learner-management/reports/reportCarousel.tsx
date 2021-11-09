import Carousel from 'react-multi-carousel';
import { Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/styles';
import styles from '@module/learner-management/reports/dashboard.module.scss';
import { lmsStyle } from 'styles/ui.variables';

const responsive = {
  superDesktop: {
    breakpoint: { max: 3000, min: 1660 },
    items: 5,
    paritialVisibilityGutter: 80,
  },
  largeDesktop: {
    breakpoint: { max: 1660, min: 1280 },
    items: 4,
    paritialVisibilityGutter: 70,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
  cardItem: {
    padding: '20px 0 20px 20px',
  },
  gradientPart: {
    position: 'absolute',
    borderRadius: '6px',
    top: '20px',
    right: '8px',
    height: '89%',
    width: '200px',
    background: 'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)',
  },
});

const ReportCarousel = ({ deviceType, data }) => {
  const classes = useStyles();
  return (
    <Box
      position="relative"
    >
      <Carousel
        deviceType={deviceType}
        itemClass={styles.cardItem}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {data.map((item, key) => {
          return (
            <Card key={key} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Box
                    fontSize="14px"
                    fontWeight="600"
                    color={lmsStyle['base-secondary']}
                  >
                    {item.title}
                  </Box>
                  <Box
                    fontSize="10px"
                    fontWeight="400"
                    color={lmsStyle['base-gray-500']}
                    pt="12px"
                  >
                    {item.description}
                  </Box>
                  <Box
                    fontSize="10px"
                    fontWeight="500"
                    color={lmsStyle['base-primary']}
                    pt="12px"
                  >
                    {item.result}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Carousel>
      <div className={classes.gradientPart} />
    </Box>
  );
};

export default ReportCarousel;
