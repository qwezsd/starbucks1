import React from 'react';
import './sass/section1.scss'


export default function Section1Component () {

    return (
        <div id='section1'>
            {/* <div className="empty-box"></div> */}
            <div className="wrap">
            <div className="container">
                <div className="title">
                    <ul>
                        <li>
                            <div className="img-box">
                                <img src="./img/starbucks/section1/2024_newYear_top_logo.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <div className="button-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div>    
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className="gap">
                        <ul>
                            <li>
                                <img src="./img/starbucks/section1/2024_newyear_top_drink1.png" alt="" />
                            </li>
                            <li>
                                <img src="./img/starbucks/section1/2024_newyear_top_drink2.png" alt="" />
                            </li>
                            <li>
                                <img src="./img/starbucks/section1/2024_newyear_top_drink3.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

