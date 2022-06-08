import { Card, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    mainDash: {
        height: 200,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    main: {
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

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
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        // borderRight: '1px solid black'
    },
    gutter: {
        width: 2,
        height: 60,
        border: '1px solid black'
    }
})
const DashboardCard = ({ data = {} }) => {
    console.log({ datasss: data })
    const { mainCount = 0, delayed = 0, color = 'red', onTime = 0, type = 'delivered' } = data
    const classes = useStyles()
    return (
        <Grid item xs={12} md={3} style={{ marginBottom: '30px' }}>

            <Card className={classes.root}>
                <div className={classes.mainDash} style={{ borderLeft: `10px solid ${color}`, }}>
                    <div className={classes.main}>

                        <div className={classes.mainCounter}>
                            <h1 style={{ fontWeight: 'bold', fontSize: '2em' }}>{mainCount}</h1>
                            <span style={{ fontSize: '1em', letterSpacing: 1.07, color }}>{type}</span>

                        </div>
                        <div className={classes.countContainer}>
                            <div className={classes.count}>
                                <div>{delayed}</div>
                                <span style={{ fontSize: '0.8em', letterSpacing: 1.07, color }}>Delayed</span>
                            </div>
                            <div className={classes.gutter}></div>
                            <div className={classes.count}>
                                <div>{onTime}</div>
                                <span style={{ fontSize: '0.8em', letterSpacing: 1.07, color }}>On-time</span>
                            </div>
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