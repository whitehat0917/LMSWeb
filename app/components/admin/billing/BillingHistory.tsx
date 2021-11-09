import * as React from 'react';
import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

const useStyles = makeStyles(() =>
  createStyles({
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: 'none',
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
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `white`,
      textAlign: 'left',
      letterSpacing: '0px',
      textTransform: 'none',
      padding: '10px 20px',
    },
    paginationContent: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    pagination: {
      marginTop: '20px',
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: `1px solid ${lmsStyle['base-gray-100']}`,
      borderRadius: '5px',
    },
    paginationButton: {
      color: lmsStyle['base-gray-500'],
      font: `normal normal bold 11px/17px ${lmsStyle['base-font']}`,
      textTransform: 'capitalize',
      padding: '9px 25px',
    },
    tableBody: {
      padding: '10px 10px 0',
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    },
    tableRow: {
      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
    },
    imageCell: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);

const header = [
  'Invoice Number',
  'Date',
  'Amount Charged',
  'Payment Method',
  '',
];

const BillingHistory = () => {
  const classes = useStyles();
  const billings = [
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
    {
      invoiceNumber: '56415456',
      date: '23/05/2020',
      amount: '59 USD',
      paymentMethod: 'Master Card (Ending 2526)',
    },
  ];
  return (
    <TableContainer
      component={Paper}
      className={classes.tableBody}
      elevation={0}
    >
      <Table>
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
          {billings.map((billing, index) => (
            <TableRow key={`table-row-${index}`} className={classes.tableRow}>
              <TableCell className={`${classes.tableName} `}>
                {billing.invoiceNumber}
              </TableCell>
              <TableCell className={classes.tableData}>
                {billing.date}
              </TableCell>
              <TableCell className={classes.tableData}>
                {billing.amount}
              </TableCell>
              <TableCell className={`${classes.tableData}`}>
                <div className={classes.imageCell}>
                  <img
                    src="/images/mastercard.svg"
                    style={{ marginRight: '10px' }}
                  />
                  <span>{billing.paymentMethod}</span>
                </div>
              </TableCell>
              <TableCell className={classes.tableData} align="center">
                <Button
                  className={classes.tableButton}
                  startIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.38"
                      height="10.38"
                      viewBox="0 0 10.38 10.38"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{ __html: '.a{fill:#fff;}' }}
                        />
                      </defs>
                      <g transform="translate(-19 -19)">
                        <path
                          className="a"
                          d="M24.19,19a5.189,5.189,0,1,0,3.67,1.52A5.192,5.192,0,0,0,24.19,19Zm0,9.375a4.186,4.186,0,1,1,2.959-1.226A4.183,4.183,0,0,1,24.19,28.375Z"
                        />
                        <path
                          className="a"
                          d="M38.648,38.308V35h-1v3.308l-1.172-1.172-.71.71,2.029,2.029a.5.5,0,0,0,.71,0l2.029-2.029-.71-.71Z"
                          transform="translate(-13.956 -13.321)"
                        />
                      </g>
                    </svg>
                  }
                >
                  Download Invoice
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillingHistory;
