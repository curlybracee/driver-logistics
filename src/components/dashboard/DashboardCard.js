import { Card, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
    root: {
        height: 300,
        width: '100%'
    },
    mainDash: {
        marginTop: 75,
        height: 100,

        display: 'flex',
        flexDirection: 'column'
    },
    mainCounter: {
        flex: 1,
        textAlign: 'center'
    },
    countContainer: {
        width: '100%',
        display: 'flex'
    },
    count: {
        width: '50%',
        height: 30,
        textAlign: 'center'
        // borderRight: '1px solid black'
    }
})
const DashboardCard = ({ data = {} }) => {
    const { mainCount = 5, delayed = 2, color = 'red', onTime = 3, type = 'delivered' } = data
    const classes = useStyles()
    return (
        <Grid item xs={12} md={3}>

            <Card className={classes.root}>
                <div className={classes.mainDash} style={{ borderLeft: `10px solid ${color}`, }}>
                    <div className={classes.mainCounter}>
                        <h1>{mainCount}</h1>
                        <span>{type}</span>

                    </div>
                    <div className={classes.countContainer}>
                        <div className={classes.count}>
                            <div>{delayed}</div>
                            <span>delayed</span>
                        </div>

                        <div className={classes.count}>
                            <div>{onTime}</div>
                            <span>on-time</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>

            </Card>
        </Grid >
    )
}

export default DashboardCard