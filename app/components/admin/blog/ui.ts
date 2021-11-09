import { createStyles, makeStyles } from "@material-ui/core";
import { lmsStyle } from "styles/ui.variables";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '20px',
            background: `${lmsStyle["color-white"]} 0% 0% no-repeat padding-box`,
            boxShadow: `0px 3px 6px ${lmsStyle["box-shadow"]}`,
            borderRadius: '5px',
        },
        headerContent: {
            display: 'flex',
        },
        createBlog: {
            marginRight: '20px',
            padding: '10px 27px',
            background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
            boxShadow: `0px 3px 3px #00000007`,
            borderRadius: '4px',
            font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
            color: lmsStyle['color-white'],
            '&:hover': {
                background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
                color: lmsStyle['color-white'],
            },
            whiteSpace: 'nowrap',
            [theme.breakpoints.down('sm')]: {
                marginRight: '10px',
                padding: '10px 20px'
            }
        },
        blogCategories: {
            padding: '10px 27px',
            background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
            boxShadow: `0px 3px 3px #00000007`,
            borderRadius: `4px`,
            font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
            color: lmsStyle['color-white'],
            '&:hover': {
                background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
                color: lmsStyle['color-white'],
            },
            whiteSpace: 'nowrap',
            [theme.breakpoints.down('sm')]: {
                padding: '10px 20px'
            }
        },
        sortMenu: {
            color: lmsStyle["base-secondary"],
            font: ` normal normal 600 10px/ 12px ${lmsStyle["base-font"]}`
        },
        card: {
            marginTop: '20px',
            border: `1px solid ${lmsStyle["base-gray-300"]}`,
            background: `${lmsStyle["color-white"]} 0% 0% no-repeat padding-box`,
            boxShadow: `0px 3px 3px #00000008`
        },
        cardContent: {
            display: 'flex',
            alignItems: 'center',
        },
        cardImage: {
            width: '160px',
            height: '120px'
        },
        textContent: {
            padding: '0 24px',
            [theme.breakpoints.down('md')]: {
                padding: '0'
            }
        },
        title: {
            color: lmsStyle["base-secondary"],
            font: `normal normal 600 13px/16px ${lmsStyle["base-font"]}`,
            paddingBottom: '10px'
        },
        description: {
            font: ` normal normal normal 10px/15px ${lmsStyle["base-font"]}`,
            color: lmsStyle["base-gray-500"],
        },
        rightContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            textAlign: 'end',
            paddingLeft: '10px',
            [theme.breakpoints.down('sm')]: {
                paddinLeft: '0',
                paddingTop: '10px',
            }
        },
        cardText: {
            font: `normal normal normal 9px/11px ${lmsStyle["base-font"]}`,
            color: lmsStyle["base-gray-500"]
        },
        archiveText: {
            font: `normal normal 600 10px/15px ${lmsStyle["base-font"]}`,
            color: lmsStyle["base-secondary"],
            textDecoration: 'underline'
        },
        createBlogRoot: {
            width: '100%',
            padding: '25px',
            boxShadow: `0px 3px 6px ${lmsStyle["box-shadow"]}`,
            borderRadius: '5px'
        },
        cardButton: {
            padding: '10px 30px',
            background: `${lmsStyle["base-primary"]} 0% 0% no-repeat padding-box`,
            boxShadow: ` 0px 3px 3px #00000007`,
            borderRadius: '4px',
            font: `normal normal 600 13px/16px ${lmsStyle["base-font"]}`,
            color: lmsStyle["color-white"],
            '&:hover': {
                background: `${lmsStyle["base-primary"]} 0% 0% no-repeat padding-box`,
                color: lmsStyle["color-white"],
            },
            [theme.breakpoints.down('md')]: {
                marginRight: '0 !important'
            }
        },
        paginationContent: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
        },
        pagination: {
            marginTop: '20px',
            background: `${lmsStyle["color-white"]} 0% 0% no-repeat padding-box`,
            border: `1px solid ${lmsStyle['base-gray-100']}`,
            borderRadius: '5px',
        },
        paginationButton: {
            color: lmsStyle['base-gray-500'],
            font: `normal normal bold 11px/17px ${lmsStyle['base-font']}`,
            textTransform: 'capitalize',
            padding: '9px 25px',
        },
        backLink: {
            cursor: 'pointer',
            textDecoration: 'underline',
            font: `normal normal 600 10px/15px ${lmsStyle["base-font"]}`,
            color: lmsStyle["base-secondary"],
        },
        label: {
            font: ` normal normal 600 10px/12px ${lmsStyle["base-font"]}`,
            color: lmsStyle["base-gray-500"]
        },
        richTextEditorLabel: {
            font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
            color: lmsStyle['base-gray-500'],
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
        searchBar: {
            position: 'relative',
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                marginTop: '10px'
            }
        },
        inviteNewUser: {
            background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
            textTransform: 'none',
            borderRadius: '4px',
            boxShadow: '0px 3px 3px #00000007',
            font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
            color: lmsStyle['color-white'],
            padding: '10px 40px',
            height: 38,
            whiteSpace: 'nowrap',
            '&:hover': {
                backgroundColor: lmsStyle['button-bg-color'],
                color: lmsStyle['color-white'],
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
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
            whiteSpace: 'nowrap',
        },
        tableBody: {
            padding: '10px 10px 0',
            boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
        },
        tableRow: {
            borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
        },
        editModal: {
            outline: 'none',
            position: 'absolute',
            boxShadow: '0px 3px 6px #00000005',
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
            [theme.breakpoints.down('sm')]: {
                width: '75%',
            },

        },
        mobileView: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        createEventSvg: {
            width: '15px',
            height: '15px',
            marginRight: '10px',
            [theme.breakpoints.down('sm')]: {
                marginRight: '0',
            },
        },
    }))