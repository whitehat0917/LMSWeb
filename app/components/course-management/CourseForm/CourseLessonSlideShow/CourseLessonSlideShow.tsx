import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, TextField, Typography } from '@material-ui/core';
import { useStyles } from './ui';
import Grid from '@material-ui/core/Grid';
import { lessonTopicState } from 'store/course';
import { useRecoilState } from 'recoil';
import { useFormContext } from 'react-hook-form';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
// const DialogTitle = (props) => {
//   const { children, classes, onClose, ...other } = props;
//   console.log(onClose, 'onClose');
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// };
const initSlides = [
  {
    image:
      'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/a/6a9be53c21f6c7c7f48da3d5629100209594130ff83d151e20ef508ba4fb57ba/tree-with-roots-slide1.png',
    data: '',
  },
  {
    image:
      'https://www.presentationgo.com/wp-content/uploads/2016/03/Hand-Tree-PowerPoint-Diagram.png',
    data: '',
  },
  {
    image:
      'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/a/6a9be53c21f6c7c7f48da3d5629100209594130ff83d151e20ef508ba4fb57ba/tree-with-roots-slide1.png',
    data: '',
  },
  {
    image:
      'https://www.presentationgo.com/wp-content/uploads/2016/03/Hand-Tree-PowerPoint-Diagram.png',
    data: '',
  },
  {
    image:
      'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/a/6a9be53c21f6c7c7f48da3d5629100209594130ff83d151e20ef508ba4fb57ba/tree-with-roots-slide1.png',
    data: '',
  },
  {
    image:
      'https://www.presentationgo.com/wp-content/uploads/2016/03/Hand-Tree-PowerPoint-Diagram.png',
    data: '',
  },
  {
    image:
      'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/a/6a9be53c21f6c7c7f48da3d5629100209594130ff83d151e20ef508ba4fb57ba/tree-with-roots-slide1.png',
    data: '',
  },
  {
    image:
      'https://www.presentationgo.com/wp-content/uploads/2016/03/Hand-Tree-PowerPoint-Diagram.png',
    data: '',
  },
  {
    image:
      'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/a/6a9be53c21f6c7c7f48da3d5629100209594130ff83d151e20ef508ba4fb57ba/tree-with-roots-slide1.png',
    data: '',
  },
];

const CourseLessonSlideShow = (props) => {
  const classes = useStyles();
  const [topicFormData] = useRecoilState(
    lessonTopicState
  );
  const [showSlides, setShowSlides] = useState(false);
  const { register, formState, trigger, getValues, setValue } = useFormContext();
  const [slides, setSlides] = useState(topicFormData.content ? JSON.parse(topicFormData.content) : initSlides);

  
  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
  }, [topicFormData]);

  const handleDelete = (index) => {
    const tempFiles = [...slides];
    tempFiles.splice(index, 1);
    setSlides(tempFiles);
  };

  const onSubmit = async () => {
    const values = getValues();

    console.log('-props-', props, values);

    const valid = await trigger(['name']);
    if (valid) {
      const values = getValues();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          content: JSON.stringify(slides),
        });
      } else {
        props.onAddLesson({
          name: values.name,
          content: JSON.stringify(slides),
        });
      }
    }
  };
  return (
    <>
      <Box className={classes.boxcolor}>
        <div className="lms-input">
          <label>Lesson Title</label>
          <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
          {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
        </div>
      </Box>
      {!showSlides ? (
        <Box className={classes.container}>
          <Box className={classes.box1}>
            <Box className="" style={{ marginTop: '-55px' }}>
              <Box className={classes.item1} mb={2.5}>
                <img
                  src="/images/presentation.svg"
                  width="125px"
                  height="145px"
                  alt="presentation"
                ></img>
              </Box>

              <Box className={classes.item1}>
                <Button
                  onClick={() => {
                    setShowSlides(!showSlides);
                  }}
                  className={classes.coloredButton}
                  variant="contained"
                >
                  Upload a presentation
                </Button>
              </Box>
              <Box className={classes.item1}>
                <Button className={classes.coloredButton1} variant="contained">
                  Link from Google Slides
                </Button>
              </Box>
              <Box className={classes.item1}>
                <Button className={classes.coloredButton2} variant="contained">
                  Import from Canva
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box padding={2}>
          <Grid className="slides-heading" spacing={3}>
            Slides
          </Grid>
          <Divider className="mt-mb" />
          <Grid container spacing={3}>
            {slides.map((item, index) => (
              <>
                <Grid item className="slide-card" xs={12} sm={6} md={4}>
                  <img
                    className={'slide-card-image'}
                    alt="complex"
                    src={item.image}
                  />
                  <div className={'silde-footer'}>
                    <span>0{index}</span>
                    <span className={'btn-delete'} onClick={() => handleDelete(index)}>Delete</span>
                  </div>
                </Grid>
              </>
            ))}
          </Grid>
          <Grid container className={classes.mt}>
            <Button
              variant="contained"
              className={classes.coloredButton}
              onClick={onSubmit}
            >
              {topicFormData?.id ? 'Update Lesson' : 'Add Lesson'}
              <span style={{ marginTop: '7px' }}> </span>
            </Button>
            <Button
              variant="contained"
              className={classes.coloredButton1}
              onClick={props.onCancel}
            >
              Cancel
            </Button>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default CourseLessonSlideShow;
