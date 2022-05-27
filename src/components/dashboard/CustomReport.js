import { Grid, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchOrders } from '../../redux/action'
import TableView from './TableView'
const useStyles = makeStyles({
    root: {
        minHeight: 300,
        height: '100%',
        fontSize: '16px !important',
        width: '100%'
    },
})

const CustomReport = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOrders({
            PageIndex: 0,
            PageSize: 10,
            UserId: 3,
            Clientpntr: 1,
            Status: 'Delivered',
            KeyWord: '',
            LRSort: '',
            LRDateSort: '',
            Pagination: true
        }))
    }, [])
    return (
        <Grid item xs={12} className={classes.root}>
            <TableView />
        </Grid>
    )
}

export default CustomReport