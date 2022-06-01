import { template } from '@babel/core';
import clsx from 'clsx';
import moment from 'moment';
import React, { useState } from 'react'
import { Modal, } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { USER_BASE_API } from '../../assets/constants';
import { delivery_van } from '../../assets/user/img/'
const TYPE = {
    intransit: "IN TRANSIT",
    delivered: "DELIVERED"
}
const DetailsPage = () => {
    const { id, type } = useParams()
    const [tableDataTracking, setTableDataTracking] = useState([])
    console.log({ id });
    React.useEffect(() => {
        if (id) {
            var form_data = new FormData();
            form_data.append("OrderNo", id);
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
        }
    }, [])
    const status = [
        { name: 'Order placed', key: 'orderPlaced' },
        { name: 'Dispatched', key: 'dispatched' },
        { name: 'In Transit', key: 'intransit' },
        { name: 'Out For Delivery', key: 'outForDelivery' },
        { name: 'Delivered', key: 'delivered' }
    ]
    let flag = status.findIndex((item) => item.key === type)
    return (
        <>

            <div class="clearfix"></div>
            <section class="main_contents">
                <div dialogClassName="modal-dialog modal-xl clsmodal1">
                    <Modal.Header>
                        <Modal.Title>   <h3 class="modal-title" id="staticBackdropLabel">Order Details</h3></Modal.Title>
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
                                        <input type="text" value={TYPE[type]} class="form-control" />
                                    </div>
                                </li>
                            </ul>
                            <div class="tracking_block mt-3  ">
                                <div class="p-5">
                                    <div class="row">
                                        <div class="col-lg-12 hh-grayBox pt45 pb20">
                                            <div class="d-lg-flex justify-content-between">


                                                {status?.map((item, index, { length }) => {

                                                    return (
                                                        <>
                                                            <div class={clsx('order-tracking', 'c1', type === template.key && 'intransit', flag >= index && 'completed')}>
                                                                {flag === index && <span class="deli_van stop"> <img src={delivery_van} alt="" /></span>}
                                                                {<span class="is-complete"></span>}
                                                                <p>{item.name}<br />
                                                                    {/* <span>{item.Com_WMasName}</span><br />
                                                                        <span>{item.LRTL_timestamp}</span> */}
                                                                </p>
                                                            </div>
                                                        </>)


                                                }
                                                )
                                                }


                                                {/* 
                                                <div class="order-tracking">
                                                    <span class="is-complete"></span>
                                                    <p>DELIVERED999<br /><span>{tableDataTracking[0]?.ConsgneM_name}</span></p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {
                                    tableDataTracking?.map(loc => {
                                        const { LRTL_timestamp, Com_WMasName, ConsgneM_name, LRTL_id, LRTL_remarks } = loc
                                        const date = moment(LRTL_timestamp, 'DD-MM-YYYY hh:mm A').format('DD MMM')
                                        const time = moment(LRTL_timestamp, 'DD-MM-YYYY hh:mm A').format('hh:mm A')
                                        return (
                                            <div key={LRTL_id} className='orderTrack'>
                                                <div className='orderDate'>
                                                    {date}
                                                </div>
                                                <div className='orderTimeLine order-tracking c1'>
                                                    {<span class="is-complete"></span>}

                                                </div>
                                                <div className='orderLocation'>
                                                    <span className='orderBold'>
                                                        Location :
                                                    </span>{Com_WMasName}
                                                </div>
                                                <div className='orderTime'>
                                                    <span className='orderBold'>
                                                        Time :
                                                    </span>
                                                    {time}
                                                </div>
                                                <div className='orderRemarks'>
                                                    <span className='orderBold'>
                                                        Remarks :
                                                    </span>
                                                    {LRTL_remarks}
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </section >
        </>
    )
}

export default DetailsPage