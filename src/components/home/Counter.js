import React, { useEffect } from 'react'
import AnimatedNumber from "animated-number-react";
import { useState } from 'react';
const Counter = (props) => {
    const { inViewport, forwardedRef } = props;
    console.log({ inViewport });
    const [state, setState] = useState({
        registerd: 0,
        daily: 0,
        monthly: 0,
        happy: 0,
        pincode: 0,
    })
    useEffect(() => {
        if (inViewport) {
            setState({
                registerd: 1000000,
                daily: 100000,
                monthly: 20000000,
                happy: 700,
                pincode: 7000,
            })
        }
        // else {
        //     setState({
        //         registerd: 0,
        //         daily: 0,
        //         monthly: 0,
        //         happy: 0,
        //         pincode: 0,
        //     })
        // }
    }, [inViewport])
    function convertToInternationalCurrencySystem(labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9

            ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(0) + "B"
            // Six Zeroes for Millions 
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(0) + "M"
                // Three Zeroes for Thousands
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + "K"

                    : Math.abs(Number(labelValue));

    }
    const formatValue = (val) => convertToInternationalCurrencySystem(val)
    return (
        <section >
            <div className="counter_sec" ref={forwardedRef}>
                <div className="container counter_sec_">
                    <div className="counder_box col-md-2 col-xs-12">
                        <div className="funfact text-center">
                            <i className="pe-7s-smile mt-5 text-white"></i>
                            <h2 data-animation-duration="5" data-value="1M" className="animate-number counter_number">
                                <AnimatedNumber
                                    value={state.registerd}
                                    duration={1000}
                                    formatValue={formatValue}
                                />
                            </h2>

                            <h4 className="counter_title">Registered Users</h4>
                        </div>
                    </div>
                    <div className="counder_box col-md-2 col-xs-12">
                        <div className="funfact text-center">
                            <i className="pe-7s-rocket mt-5 text-white"></i>
                            <h2 data-animation-duration="2000" data-value="100K" className="animate-number counter_number">
                                <AnimatedNumber
                                    value={state.daily}
                                    duration={1000}
                                    formatValue={formatValue}
                                />
                            </h2>
                            <h4 className="counter_title">Daily Active Users</h4>
                        </div>
                    </div>
                    <div className="counder_box col-md-2 col-xs-12">
                        <div className="funfact text-center">
                            <i className="pe-7s-add-user mt-5 text-white"></i>
                            <h2 data-animation-duration="2000" data-value="20M" className="animate-number counter_number">
                                <AnimatedNumber
                                    value={state.monthly}
                                    duration={1000}
                                    formatValue={formatValue}
                                />
                            </h2>
                            <h4 className="counter_title">Monthly Deliveries</h4>
                        </div>
                    </div>
                    <div className="counder_box col-md-2 col-xs-12">
                        <div className="funfact text-center">
                            <i className="pe-7s-global mt-5 text-white"></i>
                            <h2 data-animation-duration="2000" data-value="700" className="animate-number counter_number">
                                <AnimatedNumber
                                    value={state.happy}
                                    duration={1000}
                                    formatValue={val => val.toFixed(0)}
                                />
                            </h2>
                            <h4 className="counter_title">Happy Clients</h4>
                        </div>
                    </div>
                    <div className="counder_box col-md-2 col-xs-12">
                        <div className="funfact text-center">
                            <i className="pe-7s-global mt-5 text-white"></i>
                            <h2 data-animation-duration="2000" data-value="7000" className="animate-number counter_number">
                                <AnimatedNumber
                                    value={state.pincode}
                                    duration={1000}
                                    formatValue={(val) => val.toFixed(0)}
                                />
                            </h2>
                            <h4 className="counter_title">Pincodes</h4>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Counter
