import React from 'react';
import './sass/section8.scss'


export default function Section4Component () {

    const col1 = React.useRef();
    const mainTxt = React.useRef();
    const subTxt = React.useRef();
    const btn = React.useRef();

    React.useEffect(()=>{

        window.addEventListener('scroll', function(){
            console.log(window.scrollY)
            if(window.scrollY>2000){
                col1.current.style.animation = 'aniSection8Col1on 1s ease-in-out'
                mainTxt.current.style.animation = 'aniSection4Col2on 2s ease-in-out'
                subTxt.current.style.animation = 'aniSection4Col2on 2.5s ease-in-out'
                btn.current.style.animation = 'aniSection4Col2on 3s ease-in-out'
                
            }
        })
    })
    return (
        <div id='section8'>
            <div className="container">
                <div className="content">
                    <div ref={col1} className="col1">
                        <div className="img-box">
                            <img className='reserve' src="./img/starbucks/section8/221212_main_story_1.png" alt="" />
                            <img className='driveThru' src="./img/starbucks/section8/221212_main_story_2.png" alt="" />
                            <img className='coffeeBean' src="./img/starbucks/section8/store_exp_img03.png" alt="" />
                            <img className='house' src="./img/starbucks/section8/store_exp_img04.png" alt="" />
                        </div>
                    </div>
                    <div className="col2">
                        <div className="text-box">
                            <img ref={mainTxt} className='mainTxt' src="./img/starbucks/section8/221212_pc_main_story_txt_1.png" alt="" />
                            <img ref={subTxt} className='subTxt' src="./img/starbucks/section8/221212_pc_main_story_txt_2.png" alt="" />
                        </div>
                        <div ref={btn} className="btn-box">
                            <button>매장 찾기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
