import { Checkbox, FormLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// import { CourseOverviewInputs } from '../formTypes';
import { useStyles } from './ui';
import { authnState } from 'store';
import { NotificationFactory } from '@lms-api/factory';
import { useRecoilValue } from 'recoil';
import React, { useEffect, useState } from 'react';

const UserManagement = () => {
  const classes = useStyles();
  const [notification, setNotificationData] = useState([]);

  const authnInfo = useRecoilValue(authnState);

  useEffect(() => {
    const organizationId = authnInfo.userInfo?.organizationId;
    if (organizationId) {
      NotificationFactory.getByOrgId(organizationId).then((res) => {
        const data = res;
        setNotificationData(data);
      });
    }
  }, []);

  const onCheckboxChange = async (e, notificationId, name, id) => {
    await NotificationFactory.updateNotificationOption(
      notificationId,
      e.target.checked,
      name,
      id
    );
    const organizationId = authnInfo.userInfo?.organizationId;
    NotificationFactory.getByOrgId(organizationId).then((res) => {
      setNotificationData(res);
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        {notification.map((res) => {
          return (
            <>
              <Grid item xs={12} md={3}>
                <p className={classes.notify}>
                  <b>{res.name}</b>
                </p>
              </Grid>

              <Grid item xs={12} md={9}>
                <Grid
                  container
                  spacing={3}
                  style={{ borderBottom: '1px solid #E6EAF27B' }}
                >
                  {res.notifications.map((data) => {
                    return (
                      <>
                        <Grid item xs={12} md={7}>
                          <p className={classes.notify2}>{data.name}</p>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <div className={classes.checkbox}>
                            {data.options.map((dt) => {
                              return (
                                <>
                                  {' '}
                                  <Checkbox
                                    className={classes.cbox}
                                    color="primary"
                                    name="termsAccepted"
                                    id="termsAccepted"
                                    disabled={dt.active === null}
                                    checked={dt.active === true}
                                    onChange={(e) =>
                                      onCheckboxChange(
                                        e,
                                        dt.notificationMessageId,
                                        dt.name,
                                        dt.id
                                      )
                                    }
                                  />
                                  <br />
                                  <br />
                                  <FormLabel
                                    htmlFor="termsAccepted"
                                    className={classes.para}
                                  >
                                    {dt.name}
                                  </FormLabel>
                                  &nbsp; &nbsp;
                                </>
                              );
                            })}
                          </div>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
                <br />{' '}
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default UserManagement;
