import React from 'react';
import { logo_admin } from '../../assets/user/img/'
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

import { ReactPaginate } from 'react-paginate'
import { createTheme, Dialog, ThemeProvider } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Spinner } from 'react-bootstrap';
import { USER_BASE_API } from "../../assets/constants";
import * as XLSX from 'xlsx';

const theme = createTheme({
   overrides: {
      MuiButtonBase: {
         root: {
            fontSize: '16px !important'
         }
      }
   }
});

const Delivered = (props) => {
   // const { data = [] } = useSelector(state => state.userLog.search_data)
   const [searchText, setSearchText] = useState("");
   const [sortLR, setSortLR] = useState("")
   const [sortLRDate, setSortLRDate] = useState("")

   const [tableDataTracking, setTableDataTracking] = useState([])

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handleShow = (OrderNo) => {

      var form_data = new FormData();
      form_data.append("OrderNo", OrderNo);
      fetch(USER_BASE_API + "/get-order-details", {
         method: 'POST',
         body: form_data
      })
         .then((data) => data.json())
         .then((data) => {
            setTableDataTracking(data.Data)
            // console.log(tableDataTracking)

            // console.log(tableDataTracking[0].LRTL_whmcode)
         })

      //  console.log(OrderNo);
      setShow(true);
   }

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
      form_data.append("Status", "Delivered");
      form_data.append("Keyword", Keyword);
      form_data.append("LRSort", LRSort);
      form_data.append("LRDateSort", LRDateSort);
      form_data.append("Pagination", "true");

      // console.log([...form_data]);
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
   }, [sortLR, sortLRDate, searchText, page])

   const handleSearchClick = () => {
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
      form_data.append("Status", "Delivered");
      form_data.append("Keyword", Keyword);
      form_data.append("LRSort", LRSort);
      form_data.append("LRDateSort", LRDateSort);
      form_data.append("Pagination", "false");

      console.log([...form_data]);
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
            XLSX.writeFile(workbook, "Delivered.xlsx");

         })
   }

   return (
      <>
         <div class="clearfix"></div>
         <section class="main_contents">
            <div class="table_body shadow   mb-5 bg-body rounded">
               <h3 class="title">Track Orders</h3>
               <ul class="cls_secondhead" style={{ paddingTop: "10px" }}>
                  <li>
                     <div class="seach_col">
                        <div class="search_wrap">
                           <input type="text" id="txt_search" placeholder="Search transactions, Invoices or Help" />
                        </div>
                        <button onClick={handleSearchClick}><i class="fa fa-search"></i></button>
                     </div>
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
                              <td class="align-middle"> <span class="status"> DELIVERED</span> </td>
                              <td class="align-middle text-center"> <Link to={`/dashboard/delivered/details/${item.LRTL_orderlrnumber}`} class="btn btn_comm"> Details</Link> </td>
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

         <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog modal-xl clsmodal1">
            <Modal.Header closeButton>
               <Modal.Title>   <h5 class="modal-title" id="staticBackdropLabel">Order Details</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div class="modal-body">
                  <ul class="d-lg-flex track_dtls_input_row">
                     <li>
                        <div class="form-group">
                           <label for="" class="mb-2">CONSIGNEE</label>
                           <input type="text" value={tableDataTracking[0]?.ConsgneM_name} class="form-control" placeholder="" />
                        </div>
                     </li>
                     <li>
                        <div class="form-group">
                           <label for="" class="mb-2">LR NUMBER</label>
                           <input type="text" value={tableDataTracking[0]?.LRTL_orderlrnumber} class="form-control" placeholder="" />
                        </div>
                     </li>
                     <li>
                        <div class="form-group">
                           <label for="" class="mb-2">STATUS</label>
                           <input type="text" value="DELIVERED" class="form-control" />
                        </div>
                     </li>
                  </ul>
                  <div class="tracking_block mt-3  ">
                     <div class="p-5">
                        <div class="row">
                           <div class="col-lg-12 hh-grayBox pt45 pb20">
                              <div class="d-lg-flex justify-content-between">


                                 {tableDataTracking?.map((item, index) => {

                                    if (item.LRTL_remarks == "DELIVERED") {
                                       return (
                                          <>
                                             <div class="order-tracking completed">
                                                <span class="is-complete"></span>
                                                <p>{item.LRTL_remarks}<br />
                                                   <span>{item.ConsgneM_name}</span><br />
                                                   <span>{item.LRTL_timestamp}</span></p>
                                             </div>
                                          </>)
                                    }
                                    else {
                                       return (
                                          <>
                                             <div class="order-tracking completed">
                                                <span class="is-complete"></span>
                                                <p>{item.LRTL_remarks}<br />
                                                   <span>{item.Com_WMasName}</span><br />
                                                   <span>{item.LRTL_timestamp}</span></p>
                                             </div>
                                          </>)
                                    }
                                 }
                                    //   <div class="order-tracking completed">
                                    //      <span class="is-complete"></span>
                                    //      <p>In-Transit<br/><span>Tue, June 25</span></p>
                                    //   </div>
                                    //   <div class="order-tracking">
                                    //      <span class="is-complete"></span>
                                    //      <p>Delivered<br/><span>Fri, June 28</span></p>
                                    //   </div>
                                    //   </div>
                                 )
                                 }
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Modal.Body>
         </Modal>

      </>


   )
}

// const Delivered = () => {

//    const { data = [] } = useSelector(state => state.userLog.search_data)

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [Userid, setUserId] = useState(() => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const initialValue = user.Userid;
//       return initialValue;
//     });

//     const [Clientpntr, setClientpntr] = useState(() => {
//         const user = JSON.parse(localStorage.getItem("user"));
//         const initialValue = user.Clientpntr;
//         return initialValue;
//       });

//     const [tableData, setTableData] = useState([])

//     useEffect(() => {

//       var Keyword="";
//       if(data.length>0){
//          Keyword=data;
//       console.log(data)
//       }
//       var form_data = new FormData();
//       form_data.append("Userid",Userid);
//       form_data.append("Clientpntr",Clientpntr);
//       form_data.append("Status","Delivered");
//       form_data.append("Keyword",Keyword);

//       fetch("https://localhost:44342/api/get-orders",{
//          method: 'POST',
//          body: form_data
//       })
//         .then((data ) => data.json())
//         .then((data) =>{
//          setTableData(data.Data)
//          //console.log(tableData)
//       })
//     }, [data])

//     return (
// <>
// <section class="col_dlp_transist clearfix" style={{float: "left", width: "100%"}}>
//                        <ul class="tab_clp">
//                           <li><Link to="/user">In-Transit </Link></li>
//                           <li><a class="active">Delivered</a></li>
//                        </ul>
//                     </section>
//                     <div class="clearfix"></div>
//                     <section class="main_contents">
//                        <div class="table_body shadow   mb-5 bg-body rounded">
//                           <h3 class="title">Track Orders</h3>
//                           <div class="table-responsive">
//                              <table class="table table-bordered table_pt">
//                                 <thead>
//                                    <tr>
//                                    <th scope="col">#</th>
//                                       <th scope="col">LR NO</th>
//                                       <th scope="col">LR DATE & TIME</th>
//                                       <th scope="col"> CONSIGNEE</th>
//                                       {/* <th scope="col">DESTINATION</th>
//                                       <th scope="col">VEHICLE NO</th> */}
//                                       <th scope="col">STATUS</th>
//                                       <th scope="col"></th>
//                                    </tr>
//                                 </thead>
//                                 <tbody>
//                                 {tableData?.map((item, index) =>
//                                    <tr>
//                                        <th scope="row" class="align-middle">{index+1}</th>
//                                       <th scope="row" class="align-middle">{item.LRTL_orderlrnumber}</th>
//                                       <td  class="align-middle">{item.LRTL_timestamp}</td>
//                                       <td class="align-middle">{item.ConsgneM_name}</td>
//                                       {/* <td class="align-middle"> DESTINATION </td>
//                                       <td class="align-middle">  KL 01236</td> */}
//                                       <td class="align-middle"> <span class="status"> DELIVERED</span> </td>
//                                       <td class="align-middle text-center"> <a onClick={handleShow} class="btn btn_comm"> Details</a> </td>
//                                    </tr>
//                                 )|| <tr> <td scope="row" class="align-middle text-center" colspan="8">No Data Found...</td></tr>
//                               }
//                                 </tbody>
//                              </table>
//                           </div>
//                        </div>
//                     </section>

//                     <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog modal-xl">
//         <Modal.Header closeButton>
//           <Modal.Title>   <h5 class="modal-title" id="staticBackdropLabel">Order Detailss</h5></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <div class="modal-body">
//                           <ul class="d-flex track_dtls_input_row">
//                              <li>
//                                 <div class="form-group">
//                                    <label for="" class="mb-2">LR NUMBER</label>
//                                    <input type="text" class="form-control" placeholder=""/>
//                                 </div>
//                              </li>
//                              <li>
//                                 <div class="form-group">
//                                    <label for="" class="mb-2">STATUS</label>
//                                    <input type="text" placeholder="IN TRANSIT" class="form-control"/>
//                                 </div>
//                              </li>
//                           </ul>
//                           <div class="tracking_block mt-3  ">
//                              <div class="p-5">
//                                 <div class="row">
//                                    <div class="col-lg-12 hh-grayBox pt45 pb20">
//                                       <div class="d-lg-flex justify-content-between">
//                                          <div class="order-tracking completed">
//                                             <span class="is-complete"></span>
//                                             <p>Picked<br/><span>Mon, June 24</span></p>
//                                          </div>
//                                          <div class="order-tracking completed">
//                                             <span class="is-complete"></span>
//                                             <p>In-Transit<br/><span>Tue, June 25</span></p>
//                                          </div>
//                                          <div class="order-tracking">
//                                             <span class="is-complete"></span>
//                                             <p>Delivered<br/><span>Fri, June 28</span></p>
//                                          </div>
//                                       </div>
//                                    </div>
//                                 </div>
//                              </div>
//                           </div>
//                        </div>
//         </Modal.Body>
//       </Modal>

// </>


//     )
// }
export default Delivered
