import React from 'react'

function HeaderTabList() {
    return (
        <ul role="tablist" class="skltbs-tab-group">
            <li role="presentation" class="skltbs-tab-item">
                <a role="tab" class="skltbs-tab" href="#skltbsResponsive1">WAREHOUSE MANAGEMENT</a>
            </li>
            <li role="presentation" class="skltbs-tab-item">
                <a role="tab" class="skltbs-tab" href="#skltbsResponsive2">FLEET & TRANSPORTATION</a>
            </li>
            <li role="presentation" class="skltbs-tab-item">
                <a role="tab" class="skltbs-tab" href="#skltbsResponsive3">3PL CONSULTATION</a>
            </li>
            <li role="presentation" class="skltbs-tab-item">
                <a role="tab" class="skltbs-tab lasttab_padding" href="#skltbsResponsive4">DIGITISATION & BUSINESS <br /> INTELLIGENCE</a>
            </li>
        </ul>
    )
}

export default HeaderTabList
