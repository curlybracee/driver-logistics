import React from 'react';
import LoaderImage from '../assets/images/loading_logo.png';

const Loader = () => {
    return (
        <div class="preloader">
            <div class="loader-circle"></div>
            <div class="loader-line-mask">
                <div class="loader-line"></div>
            </div>
            <img src={LoaderImage} width="159" height="92" alt="" />
        </div>
    )
}
export default Loader

