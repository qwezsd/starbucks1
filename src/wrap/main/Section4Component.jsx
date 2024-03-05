import React from 'react';
import './sass/section4.scss'


export default function Section4Component () {

    const col1 = React.useRef();
    const col2 = React.useRef();

    React.useEffect(()=>{

        window.addEventListener('scroll', function(){
            if(col1.current && col2.current){
                if(window.scrollY>100){
                    col1.current.style.animation ='aniSection4Col1on 2s ease-in';
                    col2.current.style.animation ='aniSection4Col2on 2s ease-in';
                }
            }
        })
    })
    return (
        <div id='section4'>
            <div className="container">
                <div className="content">
                    <div ref={col1} className="col1">
                        <div className="img-box">
                            <img src="./img/starbucks/section4/2024_newYear_promotion.png" alt="" />
                        </div>
                    </div>
                    <div ref={col2} className="col2">
                        <div className="text-box">
                            <img src="./img/starbucks/section4/2024_newYear_promotion_txt.png" alt="" />
                        </div>
                        <div className="btn-box">
                            <button>자세히 보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
