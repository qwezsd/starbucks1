import React from 'react';
import './sass/section6.scss'

export default function Section5Component () {

    const txtBox1 = React.useRef();
    const txtBox2 = React.useRef();
    const btnBox = React.useRef();

    React.useEffect(()=>{
        window.addEventListener('scroll', function(){
            console.log(window.scrollY)
            if (window.scrollY>1386){
                txtBox1.current.style.animation = 'anisection7Col1on 2s ease-out'
                txtBox2.current.style.animation = 'anisection7Col1on 2.5s ease-in-out'
                btnBox.current.style.animation = 'aniBtnOn 2s ease-in-out'
            } else {

                txtBox1.current.style.animation = 'anisection7Col1off 2s ease-in-out forwards'
                txtBox2.current.style.animation = 'anisection7Col1off 2s ease-in-out forwards'
            }
        })
    })
    return (
        <div id='section6'>
            <div className="container">
                <div className="content">
                    <div  className="col1">
                        <div  className="txt-box">
                            <img ref={txtBox1} className='big-img' src="./img/starbucks/section6/fav_prod_txt01.png" alt="" />
                            <img ref={txtBox2} className='small-img' src="./img/starbucks/section6/fav_prod_txt02.png" alt="" />
                        </div>
                        <div ref={btnBox} className="btn-box">
                            <button>자세히 보기</button>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="img-box">
                            <img src="./img/starbucks/section6/2024_3_cherry_blossom_pick_img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

