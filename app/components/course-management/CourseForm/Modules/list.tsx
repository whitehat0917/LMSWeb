/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from '@module/course-management/CourseForm/Course.module.scss';
import React, { } from 'react';
import { useStyles } from './ui';
import TopicView from './topic';
import { Module } from '@lms-api/models';
import { ModuleFactory } from '@lms-api/factory';
import { courseFormState } from 'store/course';
import { useRecoilState } from 'recoil';


const ModuleList = ({ modules, openDialog, selectModule }) => {
  const classes = useStyles();
  const [courseFormData, setCourseFormData] = useRecoilState(
    courseFormState
  );

  const onAddNewModule = () => {
    openDialog(true);
  }

  if (modules.length === 0) {
    return (<Box height="100%" className={classes.lessonParentdiv}>
      <div className={styles.imgAddLesson}>
        <img src="/images/list.svg" />
      </div>

      <Button
        variant="contained"
        className={classes.coloredButton}
        onClick={onAddNewModule}
      >
        Create a Module
            </Button>
    </Box>);
  }

  const onEditModule = (item: Module) => {
    selectModule(item);
    openDialog(true);
  }
  
  
  const onDeleteModule = async (id: string) => {
    try {

      await ModuleFactory.del(id);

      const modules = courseFormData.modules.filter(x => x.id !== id);
      setCourseFormData({ ...courseFormData, modules });

    } catch (error) {
      console.log(error);

    }

  }

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        height="100%"
      >
        {modules.map((md, mIdx) => (
          <Accordion key={mIdx}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.expandicon} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accorsummary}
            >
              <Box>
                <Box>
                  <Typography className={classes.heading}>
                    <span className={classes.spn}>{`Module #${mIdx + 1
                      }`}</span>
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Box mr={2}>
                      <Typography className={classes.heading}>
                        {md.name}
                      </Typography>
                    </Box>

                  {/* {!editing && (
                          <IconButton
                            color="primary"
                            size="small"
                            aria-label="edit"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditModuleName(md.id);
                            }}
                          >
                            <EditOutlinedIcon />
                          </IconButton>
                        )} */}
                </Box>
              </Box>

              <div className={classes.btn1}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteModule(md.id);
                  }}
                  className={classes.deleteButton}
                >
                  Delete
                      </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEditModule(md);
                  }}
                  className={classes.editButton}
                >
                  Edit
                      </Button>
              </div>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'grid', height: 'auto' }}>
              <Typography
                style={{ marginTop: '0px', overflow: 'hidden' }}
              >
                <TopicView moduleId={md.id} topics={md.topics || []} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

        <Button
          variant="contained"
          className={classes.addmodule}
          onClick={onAddNewModule}
        >
          Add New Module
            </Button>
      </Box>
    </React.Fragment>
  );
};

export default ModuleList;
