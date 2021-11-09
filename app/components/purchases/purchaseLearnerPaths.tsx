import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
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
});

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row" className={classes.title} align="left">
          {row.name}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.date}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.difficulty}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.completion}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {row.price}
        </TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.visitBtn}
            onClick={() => setOpen(!open)}
          >
            View
          </Button>
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
    'Become a Video Editor in 3 hours',
    '08/04/2021',
    'Intermediate',
    '80%',
    '$100',
  ),
  createData(
    'How to Create Your Online Course',
    '09/06/2021',
    'Beginner',
    '70%',
    '$20',
  ),
  createData(
    'Online Professionals Forex Trading',
    '09/05/2021',
    'Novice',
    '0%',
    '$150',
  ),
  createData(
    'Earn Revenue from Your Local Content',
    '08/08/2021',
    'Beginner',
    '0%',
    '$30',
  ),
  createData(
    'Turn your Idea into Million Dollar Idea',
    '08/01/2021',
    'Beginner',
    '5%',
    'Free',
  ),
];

function createData(
  name: string,
  date: string,
  difficulty: string,
  completion: string,
  price: string,
) {
  return {
    name,
    date,
    difficulty,
    completion,
    price,
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

export default function PurchaseLearnerPaths() {
  const classes = useStyle();
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerTitle} align="left">Name</TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Purchase Date
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Course Difficulty
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Completion
              </TableCell>
              <TableCell className={classes.headerTitle} align="left">
                Price
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
