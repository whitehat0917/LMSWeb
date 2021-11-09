import { createStyles, makeStyles } from "@material-ui/core";
import { lmsStyle } from "styles/ui.variables";

export const useStyles = makeStyles((theme) =>
    createStyles({
        searchBar: {
            position: 'relative',
            width: '100%',
            [theme.breakpoints.down('xs')]: {
                marginBottom: '10px'
            }
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        backLink: {
            color: lmsStyle["base-secondary"],
            font: `normal normal 600 10px/15px ${lmsStyle["base-font"]}`,
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        //Table
        tableHeader: {
            font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
            color: `${lmsStyle['base-gray-500']}`,
            borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
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
            background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
            border: `1px solid ${lmsStyle['base-gray-300']}`,
            boxShadow: '0px 3px 3px #00000007',
            borderRadius: '4px',
            font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
            color: `${lmsStyle['color-white']}`,
            textAlign: 'left',
            letterSpacing: '0px',
            textTransform: 'none',
            padding: '10px 20px',
            '&:hover': {
                backgroundColor: lmsStyle['button-bg-color'],
                color: lmsStyle['color-white'],
            },
            whiteSpace: 'nowrap'
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
        battleboardButton: {
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
            whiteSpace: 'nowrap'
        },
    }))