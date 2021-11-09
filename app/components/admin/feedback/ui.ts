import { createStyles, makeStyles } from "@material-ui/core";
import { lmsStyle } from "styles/ui.variables";

export const useStyles = makeStyles((theme) =>
    createStyles({
        searchBar: {
            position: 'relative',
            marginInline: '10px',
            width: '100%',
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
        archivedButton: {
            margin: '5px',
            background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
            border: `1px solid ${lmsStyle['base-gray-300']}`,
            boxShadow: '0px 3px 3px #00000007',
            borderRadius: '4px',
            font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
            color: `${lmsStyle['color-white']}`,
            textAlign: 'left',
            letterSpacing: '0px',
            textTransform: 'none',
            padding: '10px 27px',
            '&:hover': {
                backgroundColor: lmsStyle['button-bg-color'],
                color: lmsStyle['color-white'],
            },
        },
    }))