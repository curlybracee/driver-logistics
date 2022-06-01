import React, { useEffect, useState } from 'react'
import AnimatedNumber from "animated-number-react";
import { useSelector } from 'react-redux';
import * as _ from 'lodash';

const formatToNum = (val) => {
    let string = val?.toString();
    if (string.includes('M')) {
        return string.replace('M', '000000')
    }
    if (string.includes('K')) {
        return string.replace('K', '000')
    }
    else return string
}
const Counter = (props) => {
    const { inViewport, forwardedRef } = props;
    console.log({ inViewport });
    const [port, setPort] = useState(inViewport)
    const { data: statistics = [] } = useSelector(state => state.userLog.statistics)
    console.log('statistics.statis_reg_user', statistics);
    useEffect(() => {
        setPort(inViewport)
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
    return (statistics.length) && (
        <section >
            <div className="counter_sec" ref={forwardedRef}>
                <div className="container counter_sec_">

                    {statistics?.map((item, index) =>
                        <div className="counder_box col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="funfact text-center">
                                {/* <i className="pe-7s-smile mt-5 text-white"></i> */}
                                <h2 data-animation-duration="5" data-value="1M" className="animate-number counter_number">
                                    <AnimatedNumber
                                        value={formatToNum(item.st_count)}
                                        duration={1000}
                                        formatValue={convertToInternationalCurrencySystem}
                                    />
                                </h2>

                                <h4 className="counter_title">{item.title}</h4>
                            </div>
                        </div>
                    )
                    }

                </div>
            </div>

        </section>
    )
}

export default Counter
