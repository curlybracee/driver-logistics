import React from 'react';
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Spinner } from 'react-bootstrap';
import { USER_BASE_API } from "../../assets/constants";
import * as XLSX from 'xlsx';
import DatePicker from '../common/DatePicker';

const theme = createTheme({
    overrides: {
        MuiButtonBase: {
            root: {
                fontSize: '16px !important'
            }
        }
    }
});

const Returned = () => {
    // const { data = [] } = useSelector(state => state.userLog.search_data)
    const [searchText, setSearchText] = useState("");
    const [sortLR, setSortLR] = useState("")
    const [sortLRDate, setSortLRDate] = useState("")

    const [date, setDate] = useState({ FromDate: '', ToDate: '' })
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);


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

    const [tableData, setTableData] = useState([])

    const [page, setPage] = useState(1)
    //  const [open, setOpen] = useState(false)
    const [page_index, setPageIndex] = useState()
    const [last_page, setLastPage] = useState()


    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        var Keyword = "", LRSort = "", LRDateSort = "";;
        if (searchText.length > 0) {
            Keyword = searchText;
        }

        LRSort = sortLR;

        if (sortLRDate == "") {
            LRDateSort = "Desc";
        }
        else {
            LRDateSort = sortLRDate;
        }

        var form_data = new FormData();
        var PageSize = 10;
        var PageIndex = (page - 1) * PageSize;
        form_data.append("PageIndex", PageIndex);
        form_data.append("PageSize", PageSize);
        form_data.append("Userid", Userid);
        form_data.append("Clientpntr", Clientpntr);
        form_data.append("Status", "Returned");
        form_data.append("Keyword", Keyword);
        form_data.append("LRSort", LRSort);
        form_data.append("LRDateSort", LRDateSort);
        form_data.append("Pagination", "true");
        form_data.append("FromDate", date.FromDate);
        form_data.append("ToDate", date.ToDate);
        console.log([...form_data]);
        fetch(USER_BASE_API + "/get-orders", {
            method: 'POST',
            body: form_data
        })
            .then((data) => data.json())
            .then((data) => {
                setTableData(data.Data)
                setLoading(false);

                var total_page = "";
                if (data.Data) {
                    var ResultCount = data.Data[0].ResultCount;
                    total_page = Math.ceil(ResultCount / PageSize);
                }
                setLastPage(total_page)
                setPageIndex(PageIndex);
                // console.log(PageIndex);
            })
    }, [sortLR, sortLRDate, searchText, page, date])
    //  const [search, setSearch] = useState("");
    //  const handleSearchChange = (props) => {
    //    setSearch(props.target.value);
    //    console.log(props.target.value);
    //  };

    const handleSearchClick = (e) => {
        e.preventDefault()
        // dispatch(updateSearch(searchText))
        var text = document.getElementById("txt_search").value;
        // console.log("Clicked "+ text);
        setSearchText(text);
        setPage(1);
    }

    const handleSortLR = (props) => {
        var val = props.target.value;
        setSortLR(val)
        setPage(1);
        // console.log(sortlr+"^^^^^^^^^^^^^^^^^^^^^");
    }

    const handleSortLRDate = (props) => {
        var val = props.target.value;
        setSortLRDate(val)
        setPage(1);
        // console.log(sortlr+"^^^^^^^^^^^^^^^^^^^^^");
    }

    const handleDownload = () => {

        var Keyword = "", LRSort = "", LRDateSort = "";;
        if (searchText.length > 0) {
            Keyword = searchText;
        }

        LRSort = sortLR;

        if (sortLRDate == "") {
            LRDateSort = "Desc";
        }
        else {
            LRDateSort = sortLRDate;
        }


        var form_data = new FormData();
        var PageSize = 10;
        var PageIndex = (page - 1) * PageSize;
        form_data.append("PageIndex", PageIndex);
        form_data.append("PageSize", PageSize);
        form_data.append("Userid", Userid);
        form_data.append("Clientpntr", Clientpntr);
        form_data.append("Status", "Returned");
        form_data.append("Keyword", Keyword);
        form_data.append("LRSort", LRSort);
        form_data.append("LRDateSort", LRDateSort);
        form_data.append("Pagination", "false");

        // console.log([...form_data]);
        fetch(USER_BASE_API + "/get-orders", {
            method: 'POST',
            body: form_data
        })
            .then((data) => data.json())
            .then((data) => {

                const newData = data.Data.map(({ LRTL_timestamp, ResultCount, ...rest }) => rest)
                //   console.log(JSON.stringify(newData)+"&&&&&&&&&&&&&&&&&&&&")
                const worksheet = XLSX.utils.json_to_sheet(newData);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                XLSX.writeFile(workbook, "In-Transit.xlsx");

            })
    }
    console.debug({ date })
    return (
        <>

            <div class="clearfix"></div>
            <section class="main_contents">
                <div class="table_body shadow   mb-5 bg-body rounded">
                    <h3 class="title">Track Orders</h3>
                    <ul class="cls_secondhead" style={{ paddingTop: "10px" }}>
                        <li>
                            <form class="seach_col">
                                <div class="search_wrap">
                                    <input type="text" id="txt_search" placeholder="Search transactions, Invoices or Help" />
                                </div>
                                <DatePicker onChange={setDate} />
                                <button onClick={handleSearchClick}><i class="fa fa-search"></i></button>
                            </form>
                        </li>
                        <li><Button variant="success " onClick={handleDownload} className="btn cls_downloadxl"> <i className='fa fa-download '></i> Download Excel</Button></li>
                    </ul>
                    <div class="table-responsive">
                        <table class="table table-bordered table_pt">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">LR NO
                                        <select onChange={handleSortLR} className='cls_sort'>
                                            <option value="">Sort</option>
                                            <option value="Asc">Asc</option>
                                            <option value="Desc">Desc</option>
                                        </select>
                                    </th>
                                    <th scope="col">LR DATE & TIME
                                        <select onChange={handleSortLRDate} className='cls_sort'>
                                            <option value="">Sort</option>
                                            <option value="Asc">Asc</option>
                                            <option value="Desc">Desc</option>
                                        </select>
                                    </th>
                                    <th scope="col"> CONSIGNEE</th>
                                    {/* <th scope="col">DESTINATION</th>
                                      <th scope="col">VEHICLE NO</th> */}
                                    <th scope="col">STATUS</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData?.map((item, index) =>
                                    <tr>
                                        <th scope="row" class="align-middle">{page_index + index + 1}</th>
                                        <th scope="row" class="align-middle">{item.LRTL_orderlrnumber}</th>
                                        <td class="align-middle">{item.LRDate}</td>
                                        <td class="align-middle">{item.ConsgneM_name}</td>
                                        {/* <td class="align-middle"> DESTINATION </td>
                                      <td class="align-middle">  KL 01236</td> */}
                                        <td class="align-middle"> <span class="status"> IN-TRANSIT</span> </td>
                                        <td class="align-middle text-center"> <Link to={`/dashboard/returned/details/${item.LRTL_orderlrnumber}`} class="btn btn_comm"> Details</Link> </td>
                                    </tr>
                                )
                                    || <tr> <td scope="row" class="align-middle text-center" colspan="8">No Data Found...</td></tr>}
                            </tbody>
                        </table>
                        <div class="col-md-12" style={{ textAlign: 'center' }}>
                            {loading ? <Spinner animation="border" /> : ''}
                        </div>


                        <div class="col-md-12" style={{ margin: '20px', textAlign: 'center' }}>
                            {last_page &&
                                <ThemeProvider theme={theme}>
                                    <Pagination
                                        style={{ margin: '0px auto', width: 'fit-content', fontSize: '18px' }}
                                        count={last_page}
                                        color="primary"
                                        page={page}
                                        size="large"
                                        shape='rounded'
                                        onChange={(e, v) => setPage(v)} />
                                </ThemeProvider>
                            }
                        </div>
                    </div>
                </div>

            </section>



        </>


    )
}
export default Returned
