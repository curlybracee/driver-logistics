import {  Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDashboard } from '../../../redux/action'
import DashboardCard from './DashboardCard'
// import { DeliveredIcon, LogisticIcon, ReturnIcon, TransitIcon } from '../../assets/images/dashboard'

const useStyles = makeStyles(() => ({
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
    const dispatch = useDispatch()
    const [Userid, setUserId] = useState(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const initialValue = user.Userid;
        return initialValue;
    });
    const [Clientpntr, setClientpntr] = useState(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const initialValue = user.Clientpntr;
        return initialValue;
    });

    const { dashboard: { data = [] } } = useSelector(state => state.userLog)
    console.debug({ data })
    useEffect(() => {

        // dispatch(fetchOrderDetails({
        //     OrderNo: 'WPCOC30538'
        // // }))
        dispatch(fetchDashboard({
            Userid,
            Clientpntr
        }))
    }, [])

    return (
        <>
            <div class="clearfix"></div>
            <div className={'main_contents'}>
                <div className={classes.dashboardContainer}>
                    <Grid item xs={12} className={classes.dashboardView}>

                        <DashboardCard data={{ mainCount: data[0]?.Delivered, delayed: 0, color: 'green', onTime: data[0]?.Delivered, type: 'Delivered' }} />

                        <DashboardCard data={{ mainCount: data[0]?.Intransist, delayed: 0, color: 'blue', onTime: data[0]?.Intransist, type: 'Intransit' }} />

                        <DashboardCard data={{ mainCount: data[0]?.Returned, delayed: 0, color: 'red', onTime: data[0]?.Returned, type: 'Returned' }} />


                    </Grid>

                </div>
            </div >
        </>
    )
}

export default Dashboard