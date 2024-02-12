import React from 'react';
import './sass/section7.scss'

export default function Section5Component () {

    const col2 = React.useRef();
    React.useEffect(()=>{
        window.addEventListener('scroll', function(){
            console.log(window.scrollY)
            if (window.scrollY>1600){
                col2.current.style.animation = 'aniCol2On 2s ease-in-out'
            }
        })
    })
    return (
        <div id='section7'>
            <div className="container">
                <div className="content">
                    <div className="col1">
                        <div className="txt-box">
                            <img src="./img/starbucks/section7/reserve_text_pc.png" alt="" />
                        </div>
                        <div className="btn-box">
                            <button>자세히 보기</button>
                        </div>
                    </div>
                    <div ref={col2} className="col2">
                        <div className="img-box">
                            <img src="./img/starbucks/section7/reserve_visual_pc.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

