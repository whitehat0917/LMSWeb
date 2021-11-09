import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { layoutContext } from '@layout/admin/Layout';
import { OrganizationFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { Button, InputAdornment, MenuItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Flags from 'country-flag-icons/react/3x2';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { ReactElement } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { lmsStyle } from 'styles/ui.variables';
import { useDropzone } from 'react-dropzone';
import restClient from '@lms-api/RestClient';
import Loader from '@element/Loader/Loader';
import { Organization as OrganizationDto } from 'api/models';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UploadIcon: ReactElement<any, string> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41.232"
      height="33.414"
      viewBox="0 0 41.232 33.414"
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: '.a{fill:#dce0e3;}',
          }}
        />
      </defs>
      <path
        className="a"
        d="M28.711,26.531c-1.794,0-3.6-.019-5.4,0a.692.692,0,0,1-.675-.675c.019-1.113.227-.675,1.349-.675,3.194,0,6.251.01,9.445,0,3.511-.01,6.148-3.245,6.072-6.746a5.719,5.719,0,0,0-4.048-5.4.9.9,0,0,1-.675-.675,6.4,6.4,0,0,0-7.421-5.4c-1.18.173-2.424-.045-3.373.675-.288.211-.56.288-.675,0-1.477-3.607-4.866-5.445-8.77-5.4a9.082,9.082,0,0,0-8.77,8.1,6.23,6.23,0,0,0,0,2.024c.058.317.269.588,0,.675A6.67,6.67,0,0,0,1.051,19.11a6.085,6.085,0,0,0,6.072,6.072c3.424.019,6.7.019,10.119,0a.6.6,0,0,1,.675.675c-.029.988.323.675-.675.675H7.8c-4.566,0-8.4-3.549-8.1-8.1a6.872,6.872,0,0,1,4.048-6.072c.278-.144.675-.348.675-.675A10.478,10.478,0,0,1,13.194.895,10.731,10.731,0,0,1,23.988,5.617c.259.4.224.182.675,0,4.71-1.88,10.135,1.16,11.469,6.072.077.3.387-.144.675,0,2.954,1.41,4.441,5,4.048,8.1a7.524,7.524,0,0,1-6.072,6.746,9.516,9.516,0,0,1-2.024,0C31.416,26.521,30.054,26.531,28.711,26.531Z"
        transform="translate(0.316 -0.734)"
      />
      <path
        className="a"
        d="M152.237,147.931c-1.6,1.612-3.245,3.207-4.722,4.722-.3.3-.368.336-.675,0-.758-.815-.777-.572,0-1.349,1.928-1.928,3.469-4.124,5.4-6.072.24-.24.387-.288.675,0,2.091,2.12,4.636,4.655,6.746,6.746.23.23.269-.221,0,0-.307.249-1,1.349-1.349,1.349s-.4-1.071-.675-1.349c-1.237-1.228-2.145-2.145-3.373-3.373l-.675-.675c-.134.182,0,.512,0,.675,0,5.237-.019,10.954,0,16.191,0,.432-.233.019-.675,0-1-.029-.675.313-.675-.675V148.606C152.218,148.472,152.237,148.257,152.237,147.931Z"
        transform="translate(-131.981 -131.579)"
      />
    </svg>
  );
};

const useStyles = makeStyles(() => ({
  standardbtn: {
    background: `${lmsStyle['base-tertiary-light']} 0% 0% no-repeat padding-box`,
    borderRadius: '3px',
    marginTop: '20px',
    opacity: '1px',
    textTransform: 'capitalize',
    color: lmsStyle['base-tertiary'],
    border: 'none',
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
  },

  domainText: {
    marginRight: '-13px',
    backgroundColor: lmsStyle['base-gray-300'],
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
    padding: '10px 22px',
  },
  inputAndorsment1: {
    marginLeft: '20px',
    background: lmsStyle['color-white'],
  },
  phoneno: {
    '& > div': {
      paddingLeft: '0px',
    },
    '&   input': {
      color: lmsStyle['base-secondary'],
    },
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },

  box: {
    width: '100%',
    height: '100%',
    padding: '40px',
    borderLeft: `2px solid ${lmsStyle['base-gray-200']}`,
  },

  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },

  avtar: {
    color: 'transparent',
    width: 'auto',
    height: 'auto',
    objectFit: 'none',
    textAlign: 'center',
    textIndent: '10000px',
  },

  pname: {
    font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  menuItem: {
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  cardActionButton: {
    margin: '30px 8px',
    padding: '10px 30px',
    font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
    color: lmsStyle['color-white'],
  },
  companyLogoText: {
    color: lmsStyle['base-gray-500'],
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    fontSize: 11,
    fontWeight: 'bold',
  },
  companyLogoImg: {
    width: '100%',
  },

  logoContent: {
    padding: '20px',
    background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
    boxShadow: `0px 3px 3px #00000007`,
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '4px',
  },
  dropZoneBox: {
    border: `2px dashed #DCE0E380`,
    minHeight: '122px',
    marginTop: '25px',
  },
  dropZoneTextContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: '100%',
  },
  dropZoneText: {
    font: `normal normal normal 10px/12px ${lmsStyle['base-font']}`,
    color: '#555A6B',
  },
}));
const SettingsPage = ({ id }) => {
  const classes = useStyles();
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);
  React.useEffect(() => {
    setHeader('Business Settings');
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);

  const organizationQuery = queryKeys.getOrganizationInfoById(id);
  const organizationData = useQuery(organizationQuery, () =>
    OrganizationFactory.get(id)
  );
  const organization = organizationData.data;
  console.log('organization data', organization);
  const [image, setImage] = React.useState(null);

  const queryClient = useQueryClient();
  const updateOrganizationMutation = useMutation(
    ({ ...updataData }: OrganizationDto) =>
      OrganizationFactory.update(id, updataData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(organizationQuery);
      },
    }
  );
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
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
  }, []);

  const { open: handleFileUpload } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });

  // console.log('organizationData is', organizationData.name);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('submt ', event);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = new FormData(event.target);
    const data: any = Object.fromEntries(formData);
    console.log(image);
    updateOrganizationMutation.mutate({
      id: id,
      name: data.name,
      description: data.description || '',
      phoneNumber: data.phoneNumber,
    });
  }

  if (organizationData.isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Paper className={classes.box} elevation={0}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9} xl={9} lg={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextInputOutline
                    name="name"
                    classes={{
                      root: classes.phoneno,
                    }}
                    label="Company Name"
                    size="small"
                    defaultValue={organization?.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="phonenumber"
                    label="Business Phone Number"
                    classes={{
                      root: classes.phoneno,
                    }}
                    size="small"
                    defaultValue={organization?.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="email"
                    classes={{
                      root: classes.phoneno,
                    }}
                    label="Business Email Address"
                    size="small"
                    // defaultValue={organization.email}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{ marginTop: '30px' }}
                >
                  <TextInputOutline
                    name="subdomain"
                    label="Your Subdomain"
                    size="small"
                    classes={{
                      root: classes.phoneno,
                    }}
                    // defaultValue={organization.subDomain}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <b style={{ marginRight: '20px', display: 'flex' }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14.001}
                              height={14.001}
                              viewBox="0 0 14.001 14.001"
                            >
                              <path
                                d="M6.967 13.999a7 7 0 117.031-6.965 7 7 0 01-7.031 6.965zM6.098 8.07l-1-1.019a.605.605 0 10-.859.851l1.43 1.446a.6.6 0 00.855 0l3.442-3.409a.605.605 0 10-.851-.859z"
                                fill="#29ac79"
                              />
                            </svg>
                          </b>
                          <span className={classes.domainText}>
                            .learnorteach.com
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '30px' }}>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="address1"
                    label="Company Address"
                    classes={{
                      root: classes.phoneno,
                    }}
                    size="small"
                    // defaultValue={organization.address1}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="address2"
                    label=" "
                    // defaultValue={organization.address2}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="city"
                    // defaultValue={organization.city}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="zipCode"
                    label=""
                    // defaultValue={organization.zipCode}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="country"
                    id="select"
                    classes={{
                      root: classes.phoneno,
                    }}
                    label=""
                    // defaultValue={organization.country}
                    select
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          classes={{
                            root: classes.inputAndorsment1,
                          }}
                        >
                          <Flags.US
                            title="United States"
                            width="20px"
                            height="20px"
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem
                      value="United States"
                      classes={{ root: classes.menuItem }}
                    >
                      United States
                    </MenuItem>
                  </TextInputOutline>
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '30px' }}>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    select
                    name="size"
                    label="Company Size"
                    classes={{
                      root: classes.phoneno,
                    }}
                    size="small"
                    // defaultValue={organization.name}
                  >
                    <MenuItem
                      value="Large Enterprise"
                      classes={{ root: classes.menuItem }}
                    >
                      Large Enterprise
                    </MenuItem>
                  </TextInputOutline>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} xl={3} lg={3}>
              <label className={classes.companyLogoText}>Company logo</label>
              <Grid className={classes.logoContent}>
                <img
                  src="/images/avatar.png"
                  className={classes.companyLogoImg}
                />

                <DropzoneArea
                  acceptedFiles={['image/*']}
                  Icon={UploadIcon}
                  dropzoneText={'Drag and drop an image'}
                  onChange={handleFileUpload}
                  onDrop={onDrop}
                  classes={{
                    root: classes.dropZoneBox,
                    textContainer: classes.dropZoneTextContainer,
                    text: classes.dropZoneText,
                  }}
                ></DropzoneArea>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              className={classes.cardActionButton}
              style={{ backgroundColor: lmsStyle['base-primary'] }}
            >
              Save Changes
            </Button>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default SettingsPage;
