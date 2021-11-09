import { LearningPathFactory } from '@lms-api/factory';
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
// import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import { PaginationItem } from '@material-ui/lab';
import Pagination from '@material-ui/lab/Pagination';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import * as React from 'react';
import '../../../styles/ui.variables';
import { lmsStyle } from '../../../styles/ui.variables';
import Switch from '@material-ui/core/Switch';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import moment from 'moment';

const useStyles = makeStyles(() =>
  createStyles({
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: 'none',
    },
    inviteNewUser: {
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      width: 143,
      height: 26,
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 10px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
    },
    tableName: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal normal 10px/15px  ${lmsStyle['base-font']}`,
    },
    tableName1: {
      color: `${lmsStyle['base-secondary']}`,
      font: `font: normal normal 10px/15px  ${lmsStyle['base-font']}`,
    },
    tableData: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
    },
    tableButton: {
      margin: '5px',
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-secondary']}`,
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
  })
);

const header = [
  'Learning Path Name',
  'Date Created',
  'Created by',
  'Students Enrolled',
  'Active Status',
  '',
];

export default function UserTable({ organizationId, ...props }) {
  const classes = useStyles();
  const router = useRouter();
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [learningPathData, setLearningPathData] = React.useState([]);
  const [
    searchedLearningPathData,
    setLearningPathDataSearchResult,
  ] = React.useState([]);

  //TODO (IMP): change orgId
  React.useEffect(() => {
    // const organizationId = authnInfo.userInfo?.organizationId;
    // organizationId
    getLearnData(organizationId);
    // props.showToaster("Learning Path Vestibulum maecenas nisl was successfully created");
  }, []);

  React.useEffect(() => {
    let tempData = learningPathData;
    tempData = tempData.filter((data) => {
      const name = data.name.toLowerCase();
      const search = props.search.toLowerCase();
      if (name.includes(search)) {
        return true;
      } else {
        return false;
      }
    });
    setLearningPathDataSearchResult(tempData);
  }, [props.search]);

  const getLearnData = async (orgId: string) => {
    const learnData = await LearningPathFactory.getAll(orgId);
    if (learnData && learnData.length) {
      setTotalPageCount(learnData.length);
    }
    setLearningPathData(learnData);
  };

  const setTotalPageCount = (listLength) => {
    let pageCount = Math.floor(Number(listLength) / PAGINATION_LIMIT);
    if (pageCount > 0) {
      pageCount = pageCount + 1;
    }
    setTotalPages(pageCount);
  };

  const handlePaginationChange = (evt, page) => {
    setActivePage(Number(page));
    paginationChange(page);
  };

  const handlePaginationClick = (evt) => {
    if (evt.target.innerText == 'Previous') {
      setActivePage(activePage - 1);
      paginationChange(activePage - 1);
    }
    if (evt.target.innerText == 'Next') {
      setActivePage(activePage + 1);
      paginationChange(activePage + 1);
    }
  };

  const paginationChange = (pageNumber) => {
    const nextSkip = pageNumber * PAGINATION_LIMIT;
    setListStart(nextSkip - PAGINATION_LIMIT);
    setListEnd(nextSkip - 1);
  };

  const statusToggleClick = async (data, e) => {
    const newStatus = e.target.value == 'true' ? false : true;
    const id = data.id;

    data.active = newStatus;
    data.status = newStatus;
    delete data.id;
    delete data.publishDate;
    delete data.updatedBy;
    delete data.updatedAt;
    delete data.courses;

    await LearningPathFactory.update(id, data);
    getLearnData(organizationId);

    if (newStatus == true) {
      props.showToaster(`Learning Path ${data.name} was activeed successfully`);
    } else {
      props.showToaster(
        `Learning Path ${data.name} was de-activeed successfully`
      );
    }
  };

  const getList = () => {
    const listData = props.search ? searchedLearningPathData : learningPathData;
    return listData
      .filter((res, idx) => listStart <= idx && idx <= listEnd)
      .map((data, index) => (
        <TableRow key={`table-row-${index}`} className={classes.tableRow}>
          <TableCell className={`${classes.tableName1} `}>
            {data.name}
          </TableCell>
          <TableCell className={`${classes.tableName} `}>
            {data.createdAt ? moment(data.createdAt).format('DD/MM/YYYY') : '-'}
          </TableCell>
          <TableCell className={classes.tableData}>{data.createdBy}</TableCell>
          <TableCell className={classes.tableData}>
            {/* {data.StudentsEnrolled} */}0
          </TableCell>
          <TableCell className={classes.tableData}>
            {/* <ToggleOnIcon onClick={() => statusToggleClick(data)} /> */}
            <Switch
              checked={data.active == true}
              value={data.active == true}
              onChange={(e) => statusToggleClick(data, e)}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </TableCell>
          <TableCell className={classes.tableData} align="center">
            <Button
              className={classes.inviteNewUser}
              onClick={() => {
                router.push(`${GlobalUrls.ADMIN}/createLearning/${data.id}`);
              }}
            >
              Learning Path Details
            </Button>
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <>
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
            {learningPathData.length > 0 ? getList() : null}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPages > 0 && (
        <div className={classes.paginationContent}>
          <Pagination
            count={totalPages}
            page={activePage}
            onClick={handlePaginationClick}
            onChange={handlePaginationChange}
            hideNextButton={activePage == totalPages}
            hidePrevButton={activePage == 1}
            variant="text"
            shape="rounded"
            color="primary"
            className={classes.pagination}
            renderItem={(item) => {
              if (item.type === 'previous' || item.type === 'next') {
                return (
                  <Button className={classes.paginationButton}>
                    {item.type}
                  </Button>
                );
              }

              return <PaginationItem {...item} />;
            }}
          ></Pagination>
        </div>
      )}
    </>
  );
}
