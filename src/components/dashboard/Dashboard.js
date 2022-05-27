import { AppBar, Card, Grid, IconButton, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDashboard, fetchOrders } from '../../redux/action'
import DashboardCard from './DashboardCard'
import { Link } from 'react-router-dom'
import { DeliveredIcon, LogisticIcon, ReturnIcon, TransitIcon } from '../../assets/images/dashboard'
import CustomReport from './CustomReport'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appbar: {
        width: '100%',
        height: 60,
        display: 'flex'
    },
    dashboardContainer: {
        display: 'flex',
        minHeight: '60vh',
        width: '100%',
        flexDirection: 'column'
    },
    dashboardNav: {
        width: 100,
        minHeight: '60vh',
    },
    dashboardView: {
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%'
    },
    navLink: {
        padding: 15,
        fontSize: 14,
        textTransform: 'Capitalize',
        color: 'black'

    },
    iconButton: {
        margin: 5,
        '&:hover': {
            background: 'silver'
        }
    },
    icon: {
        width: 60,
        height: 50,
        margin: 5
    }
}));
const Dashboard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(1);
    const { orders: { data = [] }, auth: { data: authData = [] } } = useSelector(state => state.userLog)

    useEffect(() => {

        // dispatch(fetchOrderDetails({
        //     OrderNo: 'WPCOC30538'
        // }))
        dispatch(fetchDashboard({
            Userid: 3,
            Clientpntr: 1
        }))
    }, [])

    const handleClick = (c) => {
        setOpen(c)
    }
    return (
        <div className={classes.root}>
            <Card className={classes.dashboardNav}>
                <div className={classes.iconButton} onClick={() => handleClick(1)}><img className={classes.icon} src={LogisticIcon} alt='' /></div>
                <div className={classes.iconButton} onClick={() => handleClick(2)}><img className={classes.icon} src={TransitIcon} alt='' /></div>
                <div className={classes.iconButton} onClick={() => handleClick(3)}><img className={classes.icon} src={DeliveredIcon} alt='' /></div>
                <div className={classes.iconButton} onClick={() => handleClick(4)}><img className={classes.icon} src={ReturnIcon} alt='' /></div>
            </Card>
            <div className={classes.dashboardContainer}>
                <Card className={classes.appbar}>
                    <Link to='dashboard' onClick={() => handleClick(1)} className={classes.navLink}>
                        Dashboard
                    </Link>
                    <Link to='dashboard' onClick={() => handleClick(5)} className={classes.navLink}>
                        custom report
                    </Link>
                    {/* <Link className={classes.navLink}>
                        help
                    </Link>
                    <Link className={classes.navLink}>
                        tutorials
                    </Link> */}
                </Card>
                <Grid item xs={12} className={classes.dashboardView}>
                    {open === 1 && <>
                        <DashboardCard />
                        <DashboardCard />
                        <DashboardCard />
                    </>}
                    {open === 5 && <>
                        <CustomReport />
                    </>}
                </Grid>

            </div>
        </div >
    )
}

export default Dashboard