import React from 'react';
import styles from './User.module.scss';
import { makeStyles } from '@material-ui/core';
// import { extratoLista } from './mock';
import { lmsStyle } from 'styles/ui.variables';

const useStyles = makeStyles(() => ({
  List: {
    fontWeight: 'bold',
    fontSize: '12px',
    marginRight: '20px',
    textAlign: 'left',
    height: '52px',
    color: lmsStyle['base-secondary'],
  },
  coloredButton: {
    backgroundColor: lmsStyle['base-gray-500'],
    color: 'white',
    width: '200px',
    height: '36px',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
  },
}));

// const [detailUser, setDetailUser] = useState(false);

// function Avatar() {
//   const url = 'https://www.google.com.br/google.jpg';
//   const alt = 'avatar';
//   return (
//     <div className={styles.avatar}>
//         <img src={url} alt={alt} />
//     </div>
//   );
// }

const UserListHeader = () => {
  return (
    <tr>
      <th className={styles.th}>Avatar</th>
      <th className={styles.th}>Name</th>
      <th className={styles.th}>Email Address</th>
      <th className={styles.th}>User Role</th>
      <th className={styles.th}>User Status</th>
      <th></th>
    </tr>
  );
};
const extratoLista = {
  updates: [
    {
      url: '/images/users-images/jose.jpg',
      name: 'Jose Wallace',
      emailAddress: 'richard.alvarado@mail.com',
      role: 'Learner',
      status: 'Active',
    },
  ],
};

const UserListData = () => {
  const classes = useStyles();
  return (
    <>
      {extratoLista.updates.map((item) => (
        <tr key={item.emailAddress} className={styles.tr}>
          <td className={styles.td}>
            <div className={styles.avatar}>
              <img src={item.url}></img>
            </div>
          </td>
          <td className={classes.List}>{item.name}</td>
          <td className={styles.td}>{item.emailAddress}</td>
          <td className={styles.td}>{item.role}</td>
          <td className={styles.td}>{item.status}</td>
          <td className={styles.td}>
            <div className={styles.divButton}>
              <button className={styles.button}>
                <img className={styles.img} src="/images/np_message.svg"></img>
                <span>Message</span>
              </button>
              <button className={styles.button}>
                <span>Email</span>
              </button>
              <button className={styles.button}>
                <span>
                  {/* <BrowserRouter>
                    <Link></Link>
                  </BrowserRouter> */}
                  View or Edit Details
                </span>
              </button>
            </div>
          </td>
        </tr>
      ))}
      ;
    </>
  );
};

const UserList = () => {
  return (
    <>
      <table className={styles.table}>
        <UserListHeader />
        <UserListData />
      </table>
      {/* { setDetailUser && < UserDashboard />} */}
    </>
  );
};

export default UserList;
