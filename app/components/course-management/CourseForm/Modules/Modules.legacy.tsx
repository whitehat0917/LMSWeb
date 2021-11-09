// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Loader from '@element/Loader/Loader';
// import RetryMessage from '@element/RetryMessage/RetryMessage';
// import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
// import { CourseFactory, ModuleFactory, TopicFactory } from '@lms-api/factory';
// import {
//   Module as ModuleDto,
//   Topic as TopicDto,
//   Course as CourseDto,
// } from '@lms-api/models';
// import restClient from '@lms-api/RestClient';
// import queryKeys from '@lms-api/queryKeys';
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Box,
//   Button,
//   ClickAwayListener,
//   DialogActions,
//   DialogContent,
//   IconButton,
//   TextField,
// } from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import Typography from '@material-ui/core/Typography';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import ArrowBack from '@material-ui/icons/ArrowBack';
// import CloseIcon from '@material-ui/icons/Close';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import styles from '@module/course-management/CourseForm/Course.module.scss';
// import { GlobalUrls } from '@util/app-utils';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import React, { useCallback, useState } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { authnState } from 'store';
// import { courseFormDataState } from 'store/course';
// import { lmsStyle } from 'styles/ui.variables';
// import { ModulesFormInputs } from '../formTypes';
// import LessonsList from '../Lessonslist/Lessonslist';
// import NewLesson from '../NewLesson/NewLesson';
// import SelectLessonType from '../SelectLessonType/SelectLessonType';
// import { useStyles } from './ui';

// const DialogTitle = (props) => {
//   const { children, classes, onClose, ...other } = props;
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

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// type ModuleFormInput = {
//   name: string;
//   description: string;
//   id?: number;
//   editingName?: boolean;
// };

// const initialModuleData = {
//   name: '',
//   description: '',
// };

// const ModulesLegacy = (props) => {
//   const classes = useStyles();
//   const router = useRouter();
//   // const [lessions, setLessions] = useState([]);
//   const [moduleData, setModuleData] = useState<ModuleFormInput>({
//     ...initialModuleData,
//   });
//   const authnInfo = useRecoilValue(authnState);
//   const [courseFormData, setCourseFormData] = useRecoilState(
//     courseFormDataState
//   );
//   const queryKey = queryKeys.getCourseByOrgIdAndId(
//     authnInfo.userInfo?.organizationId,
//     courseFormData.id
//   );
//   const courseQuery = useQuery(queryKey, () =>
//     CourseFactory.get(authnInfo.userInfo?.organizationId, courseFormData.id)
//   );

//   const [dialogVisible, setDialogVisible] = useState<boolean>(false);

//   const queryClient = useQueryClient();

//   const createModulesMutation = useMutation(ModuleFactory.create, {
//     onMutate: async (newModule) => {
//       // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
//       await queryClient.cancelQueries(queryKey);

//       // Snapshot the previous value
//       const previousCourse = queryClient.getQueryData(queryKey);

//       // Optimistically update to the new value
//       queryClient.setQueryData(queryKey, (old: CourseDto) => ({
//         ...old,
//         modules: [...old.modules, newModule],
//       }));

//       // Return a context object with the snapshotted value
//       return { previousCourse };
//     },
//     // If the mutation fails, use the context returned from onMutate to roll back
//     onError: (err, newModule, context: any) => {
//       queryClient.setQueryData(queryKey, context.previousCourse);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKey);
//     },
//   });
//   const deleteModulesMutation = useMutation(ModuleFactory.del, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKey);
//     },
//   });
//   const updateModulesMutation = useMutation(
//     ({ id, ...updateData }: ModuleDto) => ModuleFactory.update(id, updateData),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(queryKey);
//       },
//     }
//   );
//   const deleteLessonMutation = useMutation(TopicFactory.del, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(queryKey);
//     },
//   });

//   const [addingLesson, setAddingLesson] = useState<boolean>(false);

//   const { register, handleSubmit, formState, reset, setValue, control, trigger, getValues, ...formMethods } = useForm<{
//     name: string;
//     description: string;
//   }>();

//   React.useEffect(() => {
//     getModules();
//   }, []);

//   const getModules = async (): Promise<[]> => {
//     const res = await restClient.get(
//       `module/${authnInfo.userInfo?.organizationId}/${authnInfo.userInfo?.id}`
//     );
//     return res.data;
//   };

//   React.useEffect(() => {
//     console.log(moduleData, "--")
//     // setValue('name', moduleData.name);
//   }, [moduleData]);

//   const showDialog = () => setDialogVisible(true);
//   const hideDialog = () => setDialogVisible(false);

//   const onNext = (formData: ModulesFormInputs) => {
//     console.log(formData, 'formData');
//     setCourseFormData((prev) => ({
//       ...prev,
//       ...formData,
//     }));
//     props.handleNext();
//   };

//   const onCreateOrUpdateModule = async () => {
//     const valid = await trigger(['name', 'description']);
//     console.log(getValues());
//     if (valid) {
//       console.log('----------');
//       const values = getValues();
//       if (!moduleData.id) {
//         // Create module
//         await createModulesMutation.mutateAsync({
//           name: values.name,
//           description: values.description,
//           courseId: courseFormData.id,
//         });
//         // for API
//         const DataForModule = {
//           name: values.name,
//           description: values.description,
//           courseId: courseFormData.id,
//         };
//         console.log(JSON.stringify(DataForModule));
//         // setAddingLesson(true);
//       } else {
//         // Edit module
//         updateModulesMutation.mutate({
//           id: moduleData.id,
//           name: values.name,
//           description: values.description,
//         });
//       }
//       hideDialog();
//     }
//   };

//   const onDeleteModule = (moduleId: number) => {
//     deleteModulesMutation.mutate(moduleId);
//   };

//   const onEditModule = (moduleId) => {
//     const module = courseQuery.data?.modules?.find((dt) => dt.id === moduleId);
//     setModuleData({
//       name: module.name,
//       description: module.description,
//       id: module.id,
//     });
//     showDialog();
//   };

//   const onEditModuleName = (moduleId) => {
//     const module = courseQuery.data?.modules?.find((dt) => dt.id === moduleId);
//     setModuleData({
//       name: module.name,
//       description: module.description,
//       id: module.id,
//       editingName: true,
//     });
//   };

//   const onUpdateModuleName = async (moduleId: number) => {
//     const valid = await trigger('name');
//     const values = getValues();
//     if (valid && values.name !== moduleData.name) {
//       updateModulesMutation.mutate({
//         id: moduleId,
//         name: values.name,
//       });
//     }
//     setModuleData({ ...initialModuleData });
//   };

//   const onCreateLesson = (moduleId: number) => {
//     setCourseFormData((prev) => ({
//       ...prev,
//       lesson: {
//         moduleId,
//       },
//     }));
//     setAddingLesson(true);
//   };

//   const onAddNewLesson = (name, contentType) => {
//     setCourseFormData((prev) => ({
//       ...prev,
//       lesson: {
//         ...prev.lesson,
//         name,
//         contentType,
//         description: '',
//       },
//     }));
//     router.push(`${GlobalUrls.ADMIN}/courses/addLesson`);
//   };

//   const onDeleteLesson = (lessonId: number) => {
//     deleteLessonMutation.mutate(lessonId);
//   };

//   const onEditLesson = (moduleId: number, lesson: TopicDto) => {
//     setCourseFormData((prev) => ({
//       ...prev,
//       lesson: {
//         id: lesson.id,
//         name: lesson.name,
//         contentType: lesson.contentType,
//         description: lesson.description,
//         videoUrl: lesson.videoUrl,
//         moduleId,
//       },
//     }));

//     router.push(`${GlobalUrls.ADMIN}/courses/addLesson`);
//   };

//   const onAddNewModule = () => {
//     setModuleData({ ...initialModuleData });
//     showDialog();
//   };

//   const getModulesList = useCallback(() => {
//     if (courseQuery.isLoading) {
//       return <Loader />;
//     }
//     if (courseQuery.isError) {
//       return (
//         <RetryMessage
//           message="Failed to load modules"
//           onRetry={() => courseQuery.refetch()}
//         />
//       );
//     }

//     return (
//       <React.Fragment>
//         {courseQuery.data?.modules?.length <= 0 ? (
//           <Box height="100%" className={classes.lessonParentdiv}>
//             <div className={styles.imgAddLesson}>
//               <img src="/images/list.svg" />
//             </div>

//             <Button
//               variant="contained"
//               className={classes.coloredButton}
//               onClick={onAddNewModule}
//             >
//               Create a Module
//             </Button>
//           </Box>
//         ) : (
//           <Box
//             display="flex"
//             flexDirection="column"
//             justifyContent="space-between"
//             height="100%"
//           >
//             <Box>
//               {courseQuery?.data?.modules?.map((md, mIdx) => (
//                 <Accordion key={mIdx}>
//                   <AccordionSummary
//                     expandIcon={
//                       <ExpandMoreIcon className={classes.expandicon} />
//                     }
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                     className={classes.accorsummary}
//                   >
//                     <Box>
//                       <Box>
//                         <Typography className={classes.heading}>
//                           <span className={classes.spn}>{`Module #${
//                             mIdx + 1
//                           }`}</span>
//                         </Typography>
//                       </Box>
//                       <Box display="flex" alignItems="center">
//                         {!moduleData.editingName ? (
//                           <Box mr={2}>
//                             <Typography className={classes.heading}>
//                               {md.name}
//                             </Typography>
//                           </Box>
//                         ) : (
//                           <ClickAwayListener
//                             mouseEvent="onMouseDown"
//                             touchEvent="onTouchStart"
//                             onClickAway={(e) => {
//                               e.stopPropagation();
//                               onUpdateModuleName(md.id);
//                             }}
//                           >
//                             <Box>
//                               <TextInputOutline
//                                 onClick={(e) => e.stopPropagation()}
//                                 onFocus={(e) => e.stopPropagation()}
//                                 name="name"
//                                 defaultValue={md.name}
//                                 style={{ backgroundColor: 'white' }}
//                                 {...register('name', {
//                                   required: 'This field is required.',
//                                 })}
//                                 // error={!!formState.errors.name?.message}
//                                 // helperText={formState.errors.name?.message}
//                               />
//                             </Box>
//                           </ClickAwayListener>
//                         )}

//                         {!moduleData.editingName && (
//                           <IconButton
//                             color="primary"
//                             size="small"
//                             aria-label="edit"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               onEditModuleName(md.id);
//                             }}
//                           >
//                             <EditOutlinedIcon />
//                           </IconButton>
//                         )}
//                       </Box>
//                     </Box>

//                     <div className={classes.btn1}>
//                       <Button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           onDeleteModule(md.id);
//                         }}
//                         className={classes.deleteButton}
//                       >
//                         Delete
//                       </Button>
//                       <Button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           onEditModule(md.id);
//                         }}
//                         className={classes.editButton}
//                       >
//                         Edit
//                       </Button>
//                     </div>
//                   </AccordionSummary>
//                   <AccordionDetails style={{ display: 'grid', height: 'auto' }}>
//                     <Typography
//                       style={{ marginTop: '0px', overflow: 'hidden' }}
//                     >
//                       <div>
//                         {md.topic?.length > 0 ? (
//                           <React.Fragment>
//                             {md.topic.map((dt, lessonIdx) => (
//                               <>
//                                 <LessonsList
//                                   lessonNumber={
//                                     lessonIdx + 1 < 10
//                                       ? `0${lessonIdx + 1}`
//                                       : lessonIdx + 1
//                                   }
//                                   key={lessonIdx}
//                                   onDeleteLesson={() => onDeleteLesson(dt.id)}
//                                   onEditLesson={() => onEditLesson(md.id, dt)}
//                                   {...dt}
//                                 />
//                                 <br />
//                               </>
//                             ))}
//                             <Box display="flex" justifyContent="flex-end">
//                               <Button
//                                 variant="contained"
//                                 className={classes.addmodule}
//                                 onClick={() => onCreateLesson(md.id)}
//                               >
//                                 Add Another Lesson
//                               </Button>
//                             </Box>
//                           </React.Fragment>
//                         ) : (
//                           <NewLesson
//                             onCreateLesson={() => onCreateLesson(md.id)}
//                           />
//                         )}
//                       </div>
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               ))}

//               <Button
//                 variant="contained"
//                 className={classes.addmodule}
//                 onClick={onAddNewModule}
//               >
//                 Add Another Module
//               </Button>
//             </Box>
//             <div className="outsidebtn" style={{ paddingTop: '30px' }}>
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: lmsStyle['base-primary'],
//                   color: 'white',
//                   width: '119px',
//                   height: '36px',
//                   marginRight: '10px',
//                 }}
//                 type="submit"
//                 onClick={props.handleBack}
//               >
//                 <span style={{ marginTop: '7px' }}>
//                   <ArrowBack />
//                 </span>
//                 back
//               </Button>
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: lmsStyle['base-primary'],
//                   color: 'white',
//                   width: '119px',
//                   height: '36px',
//                 }}
//                 type="submit"
//                 onClick={props.handleNext}
//               >
//                 next
//                 <span style={{ marginTop: '7px' }}>
//                   <ArrowForwardIcon />
//                 </span>
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={props.handlePrev}
//                 style={{
//                   backgroundColor: lmsStyle['base-secondary'],
//                   color: 'white',
//                   marginLeft: '10px',
//                 }}
//                 className="btncancel"
//               >
//                 Cancel
//               </Button>
//             </div>
//           </Box>
//         )}
//       </React.Fragment>
//     );
//   }, [courseQuery]);

//   return (
//     <React.Fragment>
//       <FormProvider
//         {...{
//           register,
//           handleSubmit,
//           formState,
//           control,
//           trigger,
//           getValues,
//           setValue,
//           reset,
//           ...formMethods,
//         }}
//       >
//         <Box flexGrow={1} component="form" onSubmit={handleSubmit(onNext)}>
//           <React.Fragment>
//             {addingLesson ? (
//               <SelectLessonType onAddNewLesson={onAddNewLesson} />
//             ) : (
//               getModulesList()
//             )}
//           </React.Fragment>
//           <Dialog
//             className={classes.boxDialog}
//             onClose={hideDialog}
//             aria-labelledby="customized-dialog-title"
//             open={dialogVisible}
//           >
//             <DialogTitle
//               classes={classes}
//               onClose={hideDialog}
//               className={classes.title}
//             >
//               {moduleData.id ? 'Edit Module' : 'Create New Module'}
//             </DialogTitle>

//             <DialogContent>
//               <p className={classes.text}>Module Name</p>
//               <TextField
//                 placeholder="Give your screen a title"
//                 variant="outlined"
//                 size="small"
//                 className="width"
//                 name="name"
//                 {...register('name', { required: 'This field is required.' })}
//                 error={!!formState.errors.name?.message}
//                 helperText={formState.errors.name?.message}
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 defaultValue={moduleData.name}
//               />
//               <br />
//               <p className={classes.text}>Module Description</p>
//               <TextField
//                 variant="outlined"
//                 size="small"
//                 name="description"
//                 {...register('description', {
//                   required: 'This field is required.',
//                 })}
//                 error={!!formState.errors.description?.message}
//                 helperText={formState.errors.description?.message}
//                 className={classes.textfield}
//                 multiline={true}
//                 rows={6}
//               />
//             </DialogContent>
//             <DialogActions>
//               <Button
//                 autoFocus
//                 onClick={(e) => {
//                   e.preventDefault();
//                   onCreateOrUpdateModule();
//                 }}
//                 className={classes.coloredButton1}
//                 variant="outlined"
//               >
//                 {moduleData.id ? 'Update Module' : 'Create New Module'}
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Box>
//       </FormProvider>
//     </React.Fragment>
//   );
// };

// export default ModulesLegacy;
