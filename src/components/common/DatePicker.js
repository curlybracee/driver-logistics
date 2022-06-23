import { Grid, makeStyles, TextField } from '@material-ui/core'
import moment from 'moment'
import React from 'react'

const useStyles = makeStyles({
    main: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px important',
        margin: 5
    }

})
const DATE_FORMAT = 'MM-DD-YYYY'

const DatePicker = ({ onChange }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.main}>
            <Grid item xs={6} className={classes.main}>
                <label style={{ marginRight: 10 }}>Start date</label>
                <TextField
                    id="startDate"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        style: { fontSize: '14px' }

                    }}
                    onChange={(val) => {
                        onChange((prev) => ({
                            ...prev,
                            FromDate: moment(val.target.value, 'YYYY-MM-DD').format(DATE_FORMAT)
                        }))
                    }}
                />
            </Grid>
            <Grid item xs={6} className={classes.main}>
                <label style={{ marginRight: 10 }}>End date</label>
                <TextField
                    id="endDate"
                    type="date"
                    onChange={(val) => {
                        onChange((prev) => ({
                            ...prev,
                            ToDate: moment(val.target.value, 'YYYY-MM-DD').format(DATE_FORMAT)
                        }))
                    }}
                    inputProps={{
                        style: { fontSize: '14px' }

                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default DatePicker