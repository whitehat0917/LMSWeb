import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createMuiTheme,
  createStyles,
  Grid,
  makeStyles,
  MuiThemeProvider,
  Paper,
} from '@material-ui/core';
import styles from './featuresRequest.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import MUIRichTextEditor from 'mui-rte';
import { DropzoneArea } from 'material-ui-dropzone';
import { useDropzone } from 'react-dropzone';
import restClient from '@lms-api/RestClient';

const useStyle = makeStyles(() =>
  createStyles({
    subText: {
      fontSize: '11px',
      color: lmsStyle['base-gray-500'],
      font: `normal normal 300 10px/12px ${lmsStyle['base-font']}`,
    },
    titleText: {
      width: '200px',
      fontSize: '15px',
      fontWeight: 'bold',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    browseFileButton: {
      marginTop: '20px',
      padding: '9px 0',
      background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'capitalize',
      '&:hover': {
        background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    textAreaMessage: {
      marginTop: '20px',
    },
    inviteButton: {
      padding: '10px 30px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'none',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    richTextEditorLabel: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
  })
);
const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
        boxShadow: `0px 3px 3px #00000008`,
        border: `1px solid ${lmsStyle['base-gray-300']}`,
        borderRadius: '5px',
        height: '217px',
      },
      container: {
        margin: '0',
      },
      placeHolder: {
        padding: '7px 17px',
        font: `normal normal normal 13px/20px Source Sans Pro`,
        color: '#4D4F5C',
        opacity: '0.2',
      },
      toolbar: {
        padding: '7px 17px',
        background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
        borderBottom: `1px solid ${lmsStyle['base-gray-300']}`,
        borderRadius: '5px 5px 0px 0px',
      },
      editor: {
        padding: '7px 17px',
        font: `normal normal normal 13px/20px Source Sans Pro`,
        color: '#4D4F5C',
      },
    },
  },
});
export default function RequestNewFeature({ handleModelClose }) {
  const classes = useStyle();
  const save = (data) => {
    console.log(data);
  };

  const [image, setImage] = React.useState(null);

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length) {
        const file = acceptedFiles[0];
        console.log(file, 'uploading image file');

        const formData = new FormData();
        formData.append(
          'files',
          file,
          new Date().getTime() + '.' + file.name.split('.')[1]
        );
        restClient
          .commonPost(
            'Storage/Upload?containerName=assets&folderName=course',
            formData
          )
          .then((res) => {
            setImage(res.data[0]);
          });
      }
      console.log('image are', image);
    },
    [image]
  );

  const { open: handleFileUpload } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          <div className={styles.header}>
            <h1 className={styles.inviteNewUserText}>Request a Feature</h1>
            <div className="close" onClick={handleModelClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9.558}
                height={9.557}
                viewBox="0 0 9.558 9.557"
              >
                <path
                  d="M9.381 8.532a.6.6 0 11-.848.848L4.779 5.619 1.025 9.38a.6.6 0 11-.848-.848l3.761-3.754L.177 1.023a.6.6 0 11.848-.848l3.754 3.761L8.533.175a.6.6 0 01.848.848L5.619 4.777z"
                  fill="#7d8793"
                />
              </svg>
            </div>
          </div>
          <Grid container className={styles.modalContent} spacing={2}>
            <Grid item xs={12}>
              <TextInputOutline
                id="email"
                label="Request Title"
              ></TextInputOutline>
            </Grid>
            <Grid item xs={12}>
              <MuiThemeProvider theme={defaultTheme}>
                <span className={classes.richTextEditorLabel}>
                  Request Description
                </span>
                <MUIRichTextEditor
                  label="Explain your request"
                  onSave={save}
                  inlineToolbar={true}
                />
              </MuiThemeProvider>
            </Grid>
            <Grid item xs={12}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText={'Drag and drop an image'}
                onChange={handleFileUpload}
                onDrop={onDrop}
                //Icon={DropzoneIcon}
              ></DropzoneArea>
            </Grid>
            <Grid item>
              <Button
                // onClick="router.push('/admin/featuresRequest')}
                className={classes.inviteButton}
              >
                Submit Your Request
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
