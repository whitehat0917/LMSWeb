import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import { Link } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowUpButton from '@module/learner-management/reports/components/arrowUpBtn';
import ArrowRightButton from '@module/learner-management/reports/components/arrowRightBtn';
import { lmsStyle } from 'styles/ui.variables';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  title: {
    fontSize: '12px',
    color: lmsStyle['base-secondary'],
    fontWeight: 'bolder',
  },
  cell: {
    fontSize: '10px',
    color: lmsStyle['base-secondary'],
  },
  headerTitle: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
    fontWeight: 'bolder',
  },
  subRow: {
    paddingTop: '30px',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '4px 0px 0px 4px',
    backgroundColor: lmsStyle['base-gray-100'],
  },
  subTblResult: {
    fontWeight: 600,
  },
});

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="left" component="th" scope="row" className={classes.title}>
          {row.courseName}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.dueDate}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.timeSpent}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.moduleCompleted}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.assessmentsCompleted}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowUpButton /> : <ArrowRightButton />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Box
                fontSize="10px"
                color={`${lmsStyle['base-secondary']}`}
                fontWeight="400"
                mt="-30px"
                mb="20px"
              >
                Course Under Learning Path 01
              </Box>
              <Table
                size="small"
                aria-label="purchases"
                className={classes.subRow}
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headerTitle} align="left">
                      Course Name
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="left">
                      Due Date
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="left">
                      Started On
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="left">
                      Completed On
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="left">
                      Time Spent
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="left" />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.collapse.map((historyRow, index) => (
                    <TableRow key={historyRow.moduleName}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.title}
                        align="left"
                      >
                        {historyRow.moduleName}
                      </TableCell>
                      <TableCell className={classes.cell} align="left">
                        {historyRow.dueDate}
                      </TableCell>
                      <TableCell className={classes.cell} align="left">
                        {historyRow.startedOn}
                      </TableCell>
                      <TableCell className={classes.cell} align="left">
                        {historyRow.completedOn}
                      </TableCell>
                      <TableCell className={classes.cell} align="left">
                        {historyRow.timeSpent}
                      </TableCell>
                      {index === row.collapse.length - 1 ? <TableCell className={classes.cell} align="center">
                        <Link
                          href="#"
                          underline="always"
                          color="inherit"
                          className={classes.subTblResult}
                        >
                          View Results
                        </Link>
                      </TableCell> : <TableCell className={classes.cell} align="left" />}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Become a Video Editor in 3 hours', '08/04/2021', '1h 20m', 3, 3),
  createData('How to Create Your Online Course', '09/06/2021', '30m', 2, 3),
  createData(
    'Online Professionals Forex Trading',
    '09/05/2021',
    '2h 40m',
    1,
    3,
  ),
  createData(
    'Earn Revenue from Your Local Content',
    '08/08/2021',
    '7h 20m',
    2,
    3,
  ),
  createData(
    'Turn Your Idea into Million Dollar Idea',
    '08/01/2021',
    '20h 1m',
    2,
    3,
  ),
  createData('Introduction to Nuclear Physics', '08/03/2021', '2h', 0, 3),
  createData(
    'Optimising Your Profile Settings on Facebook',
    '08/08/2021',
    '15m',
    0,
    3,
  ),
];

function createData(
  courseName: string,
  dueDate: string,
  timeSpent: string,
  moduleCompleted: number,
  assessmentsCompleted: number,
) {
  return {
    courseName,
    dueDate,
    timeSpent,
    moduleCompleted,
    assessmentsCompleted,
    collapse: [
      {
        moduleName: 'Introduction to the Course',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
      {
        moduleName: 'Let`s get to Know You',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
      {
        moduleName: 'Getting Started With your Garden',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
      {
        moduleName: 'How Well Do You Know Your Garden',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
      {
        moduleName: 'Select the Plants That Suit Your Garden',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
      {
        moduleName: 'How Well Do You Know Your Plants',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
      {
        moduleName: 'How to Maintain Your Plants',
        dueDate: '06/03/2021',
        startedOn: '06/03/2021',
        completedOn: '06/03/2021',
        timeSpent: '30m',
      },
    ],
  };
}

const useStyle = makeStyles({
  headerTitle: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
    fontWeight: 'bolder',
  },
});

export default function LearningPathTbl() {
  const classes = useStyle();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerTitle} align="left">
              Learning Path Name
            </TableCell>
            <TableCell className={classes.headerTitle} align="left">
              Due Date
            </TableCell>
            <TableCell className={classes.headerTitle} align="left">
              Time Spent
            </TableCell>
            <TableCell className={classes.headerTitle} align="left">
              Courses Completed
            </TableCell>
            <TableCell className={classes.headerTitle} align="left">
              Assesments Completed
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.courseName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
