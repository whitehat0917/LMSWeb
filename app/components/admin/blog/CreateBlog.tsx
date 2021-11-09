import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { layoutContext } from '@layout/admin/Layout';
import {
  Button,
  createMuiTheme,
  Grid,
  MenuItem,
  MuiThemeProvider,
  Paper,
  Typography,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import MUIRichTextEditor from 'mui-rte';
import Link from 'next/link';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import { useStyles } from './ui';
import { useDropzone } from 'react-dropzone';
import restClient from '@lms-api/RestClient';

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

const status = ['Draft', 'Published', 'Archived'];
export default function CreateBlogPost() {
  const classes = useStyles();
  const {
    setHeader,
    setIsVisibleFreeTrial,
    setHeaderContent,
  } = React.useContext(layoutContext);
  React.useEffect(() => {
    setHeader('Create Blog Post');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <Link href={`/admin/blog`} passHref>
        <Typography className={classes.backLink}>Go Back To Blogs</Typography>
      </Link>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, []);
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
    <Grid container>
      <Paper className={classes.createBlogRoot}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInputOutline
                id="title"
                name="titel"
                label={<span>Title</span>}
                // defaultValue={selectedEvent?.name}
              ></TextInputOutline>
            </Grid>
            <Grid item xs={6}>
              <TextInputOutline
                id="category"
                label="Category"
                select
                value="select"
              >
                <MenuItem value="select">Select Category</MenuItem>
              </TextInputOutline>
            </Grid>
            <Grid item xs={6}>
              <TextInputOutline
                name="description"
                id="Description"
                label="Status"
                value="draft"
                select
                // defaultValue={selectedEvent?.description}
              >
                {status.map((status, index) => (
                  <MenuItem value={status} key={`statu-id-${index}`}>
                    {status}
                  </MenuItem>
                ))}
              </TextInputOutline>
            </Grid>
            <Grid item xs={12}>
              <label className={classes.label}>Cover Photo</label>
              <DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText={'Drag and drop an image'}
                onChange={handleFileUpload}
                onDrop={onDrop}
                //Icon={DropzoneIcon}
              ></DropzoneArea>
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
            <Button
              type="submit"
              className={classes.cardButton}
              style={{ marginTop: '10px' }}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
