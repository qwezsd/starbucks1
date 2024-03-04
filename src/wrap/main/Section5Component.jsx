import React from 'react';
import './sass/section5.scss'

export default function Section5Component () {

    const col2 = React.useRef();
    React.useEffect(()=>{
        window.addEventListener('scroll', function(){
            console.log(window.scrollY)
            if (window.scrollY>580){
                col2.current.style.animation = 'aniSection5Col2on 2s ease-in-out'
            }
        })
    })
    return (
        <div id='section5'>
            <div className="main-img">
                <img src="./img/starbucks/secction5/240219_pc_reserve_coffee_bg.png" alt="" />
                <div className="container">
                    <div className="content">
                        <div className="col1">
                            <div className="txt-box">
                                <img src="./img/starbucks/section5/240219_pc_reserve_logo.png" alt="" />
                            </div>
                            <div className="btn-box">
                                <button>자세히 보기</button>
                            </div>
                        </div>
                        <div ref={col2} className="col2">
                            <div className="img-box">
                                {/* <img src="./img/starbucks/section5/230811_pc_reserve_coffee_bg.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

