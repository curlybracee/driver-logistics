import React, { useEffect, useState } from 'react'
import TabPanel1 from './TabPanel1';
import TabPanel2 from './TabPanel2';
import TabPanel3 from './TabPanel3';
import TabPanel4 from './TabPanel4';
import Fade from 'react-reveal/Fade';

function HeaderTabList(props) {
    const [visibleState, SetVisibleState] = useState('first');
    const [isMobile, setIsMobile] = useState(true)
    const [isLoader, SetIsLoader] = useState(false);
    const ShowState = () => {
        switch (visibleState) {
            case 'first':
                return <TabPanel1 loader={isLoader} />
            case 'second':
                return <TabPanel2 loader={isLoader} />
            case 'third':
                return <TabPanel3 loader={isLoader} />
            case 'fourth':
                return <TabPanel4 />
            default:
                break;
        }
    }
    const TabOnClick = (value) => {
        SetVisibleState(value)
        SetIsLoader(true)
    }
    useEffect(() => {
        if (window.screen.width > 758) {
            setIsMobile(false)
        }
        else {
            setIsMobile(true)
        }
    }, [window.screen])

    return (
        !isMobile ?
            <div id="skltbsResponsive" className="skltbs" style={{padding:'0px'}}>

                <ul role="tablist" className="skltbs-tab-group">
                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'first' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('first')}  >WAREHOUSE MANAGEMENT</button>
                    </li>

                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'second' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('second')} >FLEET & TRANSPORTATION</button>
                    </li>
                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'third' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('third')} >3PL CONSULTATION</button>
                    </li>
                    <li role="presentation" className="skltbs-tab-item">
                        <button style={{paddingBottom:'45px'}} role="tab" className={visibleState === 'fourth' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('fourth')} >DIGITISATION & BUSINESS <br /> INTELLIGENCE</button>
                    </li>
                </ul>
                <div className="skltbs-panel-group">
                    <Fade bottom >
                        {
                            ShowState()
                        }
                    </Fade>
                </div>
            </div>
            :

            <div id="skltbsResponsive" className="skltbs">

                <ul role="tablist" className="skltbs-tab-group">
                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'first' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('first')}  >WAREHOUSE MANAGEMENT</button>
                    </li>
                    {
                        visibleState === 'first' ?
                            <div className="skltbs-panel-group">

                                <Fade bottom >
                                    {
                                        ShowState()
                                    }
                                </Fade>
                            </div>
                            : ''
                    }
                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'second' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('second')} >FLEET & TRANSPORTATION</button>
                    </li>
                    {
                        visibleState === 'second' ?
                            <div className="skltbs-panel-group">
                                <Fade bottom >
                                    {
                                        ShowState()
                                    }
                                </Fade>
                            </div>
                            : ''
                    }
                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'third' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('third')} >3PL CONSULTATION</button>
                    </li>
                    {
                        visibleState === 'third' ?
                            <div className="skltbs-panel-group">
                                <Fade bottom >
                                    {
                                        ShowState()
                                    }
                                </Fade>
                            </div>
                            : ''
                    }
                    <li role="presentation" className="skltbs-tab-item">
                        <button role="tab" className={visibleState === 'fourth' ? 'skltbs-tab-OnClicked' : 'skltbs-tab'} onClick={() => TabOnClick('fourth')} >DIGITISATION & BUSINESS <br /> INTELLIGENCE</button>
                    </li>
                    {
                        visibleState === 'fourth' ?
                            <div className="skltbs-panel-group">
                                <Fade bottom >
                                    {
                                        ShowState()
                                    }
                                </Fade>
                            </div>
                            : ''
                    }
                </ul>

            </div>

    )
}

export default HeaderTabList
