import {
  Button,
  createStyles,
  makeStyles,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { lmsStyle } from 'styles/ui.variables';
import EditDiscountModal from './EditDiscountModal';

const useStyles = makeStyles((theme) =>
  createStyles({
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: `3px solid ${lmsStyle['base-gray-200']}`,
    },
    tableName: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal 600 12px/15px ${lmsStyle['base-font']}`,
    },
    tableData: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
    },
    tableButton: {
      margin: '5px',
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['color-white']}`,
      textTransform: 'none',
      padding: '10px 20px',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: `${lmsStyle['color-white']}`,
      },
      whiteSpace: 'nowrap',
    },
    copyButton: {
      padding: '10px 30px',
      background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
      '&:hover': {
        background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
      },
    },
    editButton: {
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
    },
    tableRow: {
      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
    },
    codeStyle: {
      padding: '5px 10px',
      paddingRight: '0',
      background: `${lmsStyle['base-gray-200']} 0% 0% no-repeat padding-box`,
      borderRadius: `3px 0px 0px 3px`,
    },
    copyCode: {
      cursor: 'pointer',
      marginLeft: '10px',
      padding: '5px 10px',
      background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
      borderRadius: '0px 3px 3px 0px',
    },
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down('xs')]: {
        width: '75%',
        transform: `translate(-50%, -35%)`,
      },
    },
    removeWhiteSpace: {
      whiteSpace: 'nowrap',
    },
    overFlow: {
      overflow: 'scroll',
    },
  })
);

const header = ['Name', 'Code', 'Amount', 'Status', 'Claims', 'Course', ''];
const discountDetails = [
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
  {
    name: 'Black Friday',
    code: 'BLACKFRIDAY',
    amount: '50%',
    status: 'Active',
    claims: '4686',
    course: 'Odio lobortis',
  },
];

export default function DiscountTable() {
  // const userQuery = useQuery(queryKeys.getUserInfo(), () =>
  //   UserInfoFactory.getAll()
  // );
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  // if (userQuery.isLoading) {
  //   return <Loader />;
  // }
  // const users = userQuery.data;

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table style={{ boxShadow: 'none' }}>
          <TableHead>
            <TableRow>
              {header.map((header, index) => (
                <TableCell
                  className={classes.tableHeader}
                  align="left"
                  key={`header-${index}`}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {discountDetails.map((discount, index) => (
              <TableRow key={`table-row-${index}`} className={classes.tableRow}>
                <TableCell className={`${classes.tableName} `}>
                  {discount.name}
                </TableCell>
                <TableCell
                  className={`${classes.tableData} ${classes.removeWhiteSpace}`}
                >
                  <CopyToClipboard text={discount.code}>
                    <span className={classes.codeStyle}>
                      {discount.code}
                      <b className={classes.copyCode}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9.602}
                          height={9.602}
                          viewBox="0 0 9.602 9.602"
                        >
                          <path
                            d="M8.492 0a1.111 1.111 0 011.109 1.109v6.182A1.111 1.111 0 018.492 8.4H6.961v.091a1.11 1.11 0 01-1.108 1.11H1.109A1.11 1.11 0 010 8.492V2.31A1.11 1.11 0 011.109 1.2h1.532v-.091A1.111 1.111 0 013.753 0zM1.109 8.881h4.744a.39.39 0 00.389-.389V2.31a.39.39 0 00-.389-.389H1.109a.39.39 0 00-.389.389v6.182a.39.39 0 00.389.389zm7.772-1.59V1.109A.39.39 0 008.492.72H3.753a.39.39 0 00-.389.389V1.2h2.489a1.11 1.11 0 011.109 1.109v5.372h1.531a.39.39 0 00.389-.389zM4.921 3.36a.36.36 0 110 .72H2.04a.36.36 0 110-.72zm0 1.68a.36.36 0 110 .72H2.04a.36.36 0 110-.72zm-.96 1.68a.36.36 0 010 .72H2.04a.36.36 0 110-.72z"
                            fill="#fff"
                          />
                        </svg>
                      </b>
                    </span>
                  </CopyToClipboard>
                </TableCell>
                <TableCell className={classes.tableData}>
                  {discount.amount}
                </TableCell>
                <TableCell className={classes.tableData}>
                  {discount.status}
                </TableCell>
                <TableCell className={classes.tableData}>
                  {discount.claims}
                </TableCell>
                <TableCell className={classes.tableData}>
                  {discount.course}
                </TableCell>

                <TableCell className={classes.tableData} align="center">
                  <Button
                    // href={`mailto:${user.email}}`}
                    className={`${classes.tableButton} ${classes.copyButton}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9.602}
                      height={9.602}
                      viewBox="0 0 9.602 9.602"
                    >
                      <path
                        d="M8.492 0a1.111 1.111 0 011.109 1.109v6.182A1.111 1.111 0 018.492 8.4H6.961v.091a1.11 1.11 0 01-1.108 1.11H1.109A1.11 1.11 0 010 8.492V2.31A1.11 1.11 0 011.109 1.2h1.532v-.091A1.111 1.111 0 013.753 0zM1.109 8.881h4.744a.39.39 0 00.389-.389V2.31a.39.39 0 00-.389-.389H1.109a.39.39 0 00-.389.389v6.182a.39.39 0 00.389.389zm7.772-1.59V1.109A.39.39 0 008.492.72H3.753a.39.39 0 00-.389.389V1.2h2.489a1.11 1.11 0 011.109 1.109v5.372h1.531a.39.39 0 00.389-.389zM4.921 3.36a.36.36 0 110 .72H2.04a.36.36 0 110-.72zm0 1.68a.36.36 0 110 .72H2.04a.36.36 0 110-.72zm-.96 1.68a.36.36 0 010 .72H2.04a.36.36 0 110-.72z"
                        fill="#fff"
                      />
                    </svg>
                    <span style={{ marginLeft: '5px' }}>Copy Link</span>
                  </Button>
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className={`${classes.tableButton} ${classes.editButton}`}
                  >
                    Edit Code
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose} className={classes.overFlow}>
        <div className={classes.inviteModal}>
          <EditDiscountModal onClose={handleClose} />
        </div>
      </Modal>
    </>
  );
}
