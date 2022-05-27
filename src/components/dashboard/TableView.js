import * as React from 'react';
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';
import { SearchOutlined } from '@mui/icons-material';
const useStyles = makeStyles({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10
    },
    search: {
        width: 300,
        borderRadius: 10,
        border: '1px solid black'
    }
})
const columns = [
    {
        name: 'id',
        label: '#',
        width: 50,
    },
    {
        name: 'LRTL_orderlrnumber',
        label: 'LR No',
        width: 150,
        // editable: true,
    },
    {
        name: 'LRDate',
        label: 'LR Date & Time',
        width: 150,
    },
    {
        name: 'ConsgneM_name',
        label: 'consignee',
        width: 110,
    },
    {
        name: 'LRTL_remarks',
        label: 'status',
        width: 160,
        // valueGetter: (params) =>
        //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        //     }`,
    },

];


const options = {
    filterType: 'checkbox',
    download: false,
    print: false,
    search: false,
    filter: false,
    serverSide: true,
    viewColumns: false
};

export default function TableView() {
    const classes = useStyles()
    let { orders: { data = [] }, auth: { data: authData = [] } } = useSelector(state => state.userLog)
    console.log({ data });
    data.forEach((o, i) => o.id = i + 1);
    return (
        <Grid item xs={12} style={{ width: '100%' }}>
            <Grid item xs={12} className={classes.toolBar}>
                <div className={classes.search}>
                    <input />
                    <SearchOutlined />
                </div>
                <div>download</div>
            </Grid>
            <MUIDataTable
                title={"track order"}
                data={data}
                columns={columns}
                options={options}
            />
        </Grid>
    );
}