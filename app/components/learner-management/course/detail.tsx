import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Player } from 'video-react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Select from '@element/SortSelect/Select';
import ReportCourses from '@module/learner-management/reports/ReportCourses';
import Review from './courseReview';
import PurchaseModal from './purchaseModal';
import { carouselData, CourseInfo } from '../../../data/mock';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyle = makeStyles(() => ({
  cardRoot: {
    padding: '5px',
    height: '100%',
    marginBottom: '60px',
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: '16px',
    },
  },
  contentRoot: {
    width: '100%',
    paddingLeft: '15px',
  },
  pinbtn: {
    color: 'var(--base-primary)',
    fontSize: '10px',
    marginLeft: '10px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  textBold: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
    lineHeight: '16px',
  },
  primaryText: {
    fontSize: '10px',
    color: 'var(--color-primary-dark)',
    lineHeight: '16px',
  },
  objective: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
    paddingLeft: '14px',
    lineHeight: '20px',
  },
  chip: {
    fontSize: '11px',
    marginRight: '8px',
    color: 'var(--base-primary)',
    borderColor: 'var(--base-primary)',
  },
  avatar: {
    '& > *': {
      width: '35px',
      height: '35px',
      border: '0',
      zIndex: '1 !important',
    },
  },
  button: {
    backgroundColor: 'var(--base-primary)',
    fontSize: '13px',
    color: 'white',
    padding: '0 30px',
    marginLeft: '30px',
  },
  contentImage: {
    width: '15px',
    marginRight: '10px',
  },
}));

const StyledRating = withStyles({
  iconFilled: {
    color: 'var(--color-primary-dark)',
  },
  iconEmpty: {
    color: 'var(--color-primary-dark)',
  },
})(Rating);

const CourseDetail = () => {
  const classes = useStyle();
  const [showPin, setShowPin] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <Box
        fontSize="14px"
        color="var(--color-primary-dark)"
        fontWeight="600"
        mb="23px"
        display="flex"
        justifyContent="space-between"
      >
        <Typography className={classes.textBold}>Course</Typography>
        <Select
          name={'sort'}
          label={'Sort By'}
          data={[
            { value: 'new', label: 'Newest' },
            { value: 'recommend', label: 'Recommend' },
          ]}
        />
      </Box>
      <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContent}>
          <Box pb={2} color="var(--color-primary-dark)" display="flex">
            <Typography variant="h6" className={classes.textBold}>
              ADA Compliance for Employees
            </Typography>
            <Button
              className={classes.pinbtn}
              onClick={() => setShowPin(!showPin)}
            >
              {!showPin ? (
                <BookmarkBorderIcon viewBox="0 0 20 26" />
              ) : (
                <BookmarkIcon viewBox="0 0 20 26" />
              )}
              Add Course to Favourites
            </Button>
          </Box>
          <Grid container spacing={2} style={{ paddingBottom: '20px' }}>
            <Grid item md={6} xs={12}>
              <Player poster={CourseInfo.video.poster}>
                <source src={CourseInfo.video.src} />
              </Player>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography component="div">
                <Box
                  fontSize={10}
                  pb={3}
                  color={'var(--base-gray-500)'}
                  lineHeight={1.6}
                >
                  {CourseInfo.textDescription}
                </Box>
              </Typography>
              <Typography variant="h1" className={classes.text} component="div">
                <Box
                  fontSize={10}
                  fontWeight="fontWeightBold"
                  color={'var(--base-gray-500)'}
                  pb={2}
                >
                  COURSE OBJECTIVES
                </Box>
                <ul className={classes.objective}>
                  {CourseInfo.objectives.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={7} xs={12}>
              <Grid container spacing={2}>
                <Grid item md={5} xs={12}>
                  <Typography className={classes.text}>INSTRUCTOR</Typography>
                  <Box display="flex" mt={1}>
                    <Avatar
                      src={CourseInfo.instructor.avatar}
                      alt={CourseInfo.instructor.name}
                    />
                    <Typography component="div" className="vertical-flex">
                      <Box
                        fontSize={10}
                        fontWeight="bold"
                        color="var(--color-primary-dark)"
                        ml={0.5}
                      >
                        {CourseInfo.instructor.name}
                      </Box>
                      <Box
                        fontSize={10}
                        color="var(--color-primary-dark)"
                        ml={0.5}
                      >
                        {CourseInfo.instructor.role}
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                  <Typography className={classes.text}>
                    SKILLS COVERED
                  </Typography>
                  <Box display="flex" flexWrap="wrap" mt={1}>
                    {CourseInfo.instructor.skills.map((item, index) => (
                      <Chip
                        key={index}
                        variant="outlined"
                        size="small"
                        label={item}
                        className={classes.chip}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ paddingTop: '10px' }}>
                <Grid item md={4} xs={12}>
                  <Typography className={classes.text}>
                    Course Length
                  </Typography>
                  <Typography className={classes.text} component="div">
                    <Box color="var(--color-primary-dark)" fontWeight="bold">
                      {CourseInfo.instructor.courseLength}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Typography className={classes.text}>
                    DATE PUBLISHED
                  </Typography>
                  <Typography className={classes.text} component="div">
                    <Box color="var(--color-primary-dark)" fontWeight="bold">
                      {CourseInfo.instructor.publishedDate}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Typography className={classes.text}>
                    DATE PUBLISHED
                  </Typography>
                  <Typography className={classes.text} component="div">
                    <Box color="var(--color-primary-dark)" fontWeight="bold">
                      {CourseInfo.instructor.publishedDate}
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
              <Box display="flex" my={2}>
                <StyledRating
                  name="size-medium"
                  defaultValue={4}
                  readOnly
                  emptyIcon={<StarBorderIcon />}
                />
                <Typography component="div" className="vertical-flex">
                  <Box fontSize={12} color="var(--color-primary-dark)" ml={2}>
                    <strong>{CourseInfo.instructor.rating} Stars</strong> out of{' '}
                    {CourseInfo.instructor.reviewCount} reviews
                  </Box>
                </Typography>
              </Box>
              <Select
                name={'sort-review'}
                label={'Sort By'}
                data={[
                  { value: 'popular', label: 'Popularity' },
                  { value: 'recommend', label: 'Recommend' },
                ]}
              />
              <Review data={CourseInfo.reviews} />
            </Grid>
            <Grid item md={5} xs={12}>
              <Box display="flex" className={classes.cardRoot}>
                <Divider orientation="vertical" />
                <Box className={classes.contentRoot}>
                  <Box display="flex">
                    <AvatarGroup
                      max={6}
                      spacing={20}
                      className={classes.avatar}
                    >
                      {CourseInfo.learners.avatars.map((item, index) => (
                        <Avatar key={index} alt="learner" src={item} />
                      ))}
                    </AvatarGroup>
                    <Typography
                      className={classes.text + ' vertical-flex'}
                      component="div"
                    >
                      <Box ml={2}>
                        <u>{CourseInfo.learners.amount} learners</u>
                      </Box>
                    </Typography>
                  </Box>
                  <Box display="flex" my={3}>
                    <Typography component="div">
                      <Box className={classes.text}>COURSE PRICE</Box>
                      <Box
                        fontSize={18}
                        fontWeight="bold"
                        color="var(--color-primary-dark)"
                      >
                        {CourseInfo.detail.price}
                      </Box>
                    </Typography>
                    <Button
                      variant="contained"
                      className={classes.button}
                      onClick={handleModal}
                    >
                      Purchase and Enroll
                    </Button>
                  </Box>
                  <Box display="flex" mb={2}>
                    <Typography className={classes.text}>
                      COURSE CONTENT
                    </Typography>
                  </Box>
                  <Box className="fit-width">
                    {CourseInfo.content.map((item, index) => (
                      <Box key={index} mb={2}>
                        <Typography
                          className={classes.primaryText}
                          component="div"
                        >
                          <Box fontWeight="bold" mb={0.5}>
                            {item.title}
                          </Box>
                          <Box pl={1.5}>
                            {item.content.map((subitem, subindex) => (
                              <Box display="flex" key={subindex} my={2}>
                                <img
                                  src={subitem.img}
                                  alt="content icon"
                                  className={classes.contentImage}
                                />
                                {subitem.text}
                              </Box>
                            ))}
                          </Box>
                        </Typography>
                        {index !== CourseInfo.content.length - 1 && <Divider />}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Container>
            <ReportCourses
              title="Related Courses"
              data={carouselData}
              btnTitle=""
            />
          </Container>
          <Container>
            <ReportCourses
              title="Other Courses by Josh Wallace"
              data={carouselData}
              btnTitle=""
            />
          </Container>
        </CardContent>
      </Card>
      <PurchaseModal toggle={handleModal} open={openModal} />
    </>
  );
};

export default CourseDetail;
