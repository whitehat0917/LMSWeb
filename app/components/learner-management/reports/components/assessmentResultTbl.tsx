import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Button, Link } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  visitBtn: {
    fontSize: '13px',
    backgroundColor: lmsStyle['base-secondary'],
  },
  subTblResult: {
    fontWeight: 600,
    fontSize: '10px',
    color: lmsStyle['base-secondary'],
  },
});

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row" className={classes.title} align="left">
          {row.assessmentName}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.completedOn}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.timeSpent}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.courseLearningPath}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          <Box display="flex" alignItems="center">
            <Box>
              {row.marks}%
            </Box>
            <Box ml="8px">
              {row.marks > 50 ? <img src="/images/emoji_smile.svg" alt="emoji" /> : (row.marks > 30 ? <img src="/images/emoji_normal.svg" alt="emoji" /> : <img src="/images/emoji_normal.svg" alt="emoji" />)}
            </Box>
          </Box>
        </TableCell>
        <TableCell align="left">
          {row.marks >= 50 ? <Link
            href="#"
            underline="always"
            color="inherit"
            className={classes.subTblResult}
          >
            View Results
          </Link> : <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.visitBtn}
          >
            Retake
          </Button>}

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
                    <TableCell className={classes.headerTitle}>
                      Module Name
                    </TableCell>
                    <TableCell className={classes.headerTitle}>
                      Due Date
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="right">
                      Started On
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="right">
                      Completed On
                    </TableCell>
                    <TableCell className={classes.headerTitle} align="right">
                      Time Spent
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.collapse.map((historyRow) => (
                    <TableRow key={historyRow.moduleName}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.title}
                      >
                        {historyRow.moduleName}
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {historyRow.dueDate}
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {historyRow.startedOn}
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {historyRow.completedOn}
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {historyRow.timeSpent}
                      </TableCell>
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
  createData(
    'SEO Expert - Final Test',
    '08/04/2021',
    '1h 20m',
    'Learning path 01',
    60,
  ),
  createData(
    'How to Manage a Business',
    '09/06/2021',
    '30m',
    'Turn Your Idea Into A Million Dollar Idea',
    20,
  ),
  createData(
    'How to Garden',
    '09/05/2021',
    '2h 40m',
    'Getting Started With Your Garden',
    20,
  ),
  createData(
    'Final Test - Forex Trading',
    '08/08/2021',
    '7h 20m',
    'Online Professinals Forex Trading',
    40,
  ),
  createData(
    'Idea Quiz - Final Exam',
    '08/01/2021',
    '20h 1m',
    'Introduction to Nuclear Physics',
    90,
  ),
  createData(
    'How to Monetize Content',
    '08/03/2021',
    '2h',
    'Earn Revenue from Your Local Content',
    10,
  ),
];

function createData(
  assessmentName: string,
  completedOn: string,
  timeSpent: string,
  courseLearningPath: string,
  marks: number,
) {
  return {
    assessmentName,
    completedOn,
    timeSpent,
    courseLearningPath,
    marks,
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

export default function AssessmentResultTbl() {
  const classes = useStyle();
  return (
    <>
      <Box
        fontSize="14px"
        fontWeight="600"
        color={`${lmsStyle['base-secondary']}`}
        mt="60px"
        mb="28px"
      >
        Results
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerTitle} align="left">
                Assessment Name
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Completed On
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Time Spent
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Course/Learning Path
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Marks
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.assessmentName} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
