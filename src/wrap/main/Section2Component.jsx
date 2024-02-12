import React from 'react';
import './sass/section2.scss'


export default function Section2Component ({슬라이드}) {
    const slideWrap = React.useRef();
    const textSlide = React.useRef();
    const [play, setPlay] = React.useState(true) // 트루면 타이머 진행, 펄스면 멈춤
    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);
    const [n, setN] = React.useState(0)
    const [state, setState] = React.useState({
        ispage1 : true,
        ispage2 : false,
        isplaySlide : false,
        isstopSlide : true,
        play : true,
        슬라이드: [],
        imagefile: true,
        isslide : false,
    })

    //메인 슬라이드 함수
    const mainSlide = () => {
        // console.log(cnt)
        slideWrap.current.style.transform = `translate(${-819*cnt}px)`
        slideWrap.current.style.transition = `all 0.3s ease-in-out`
        returnSlide();
    }
    //메인 슬라이드 실행
    React.useEffect(()=>{ //비동기 방식이 필요함, 비동기 1 2 3 순차적 promise 기법 
        if(toggle===0){//리턴이 아닌 상태에서 실행
            mainSlide(); 
        }
        else { //리턴이 발생할 때
            setToggle(0)// 0은 원상복귀 return에서 토글이 1이었으니 0으로 바꿔줌
            setTimeout(function(){//비동기식 : 맨 마지막 페이지에서 촤라락 맨 앞으로 가는 거 그냥 17 -> 1로 가게 해야 함 
                mainSlide(); 
            }, 100)// 리턴 한 다음에 한 템포 쉬고 진행해라
        }
    }, [cnt]); //cnt가 증가하고 나서 0.1초 있다가 메인슬라이드를 실행함 4초마다 넘어가는데 약간의 틈을 줌


    // 이전 버튼 슬라이드   
    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
        setState({
            ...state,
            ispage1 : !state.ispage1,
            ispage2 : !state.ispage2
        })
    }
    // 다음 버튼 슬라이드 
    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
        setState({
            ...state,
            ispage2 : !state.ispage2,
            ispage1 : !state.ispage1
        })
    }
    // 리턴 함수
    const returnSlide=()=>{
        if(cnt>3){
            setCnt(0)
            setToggle(1)
            slideWrap.current.style.trasnform = `trasnlate(${-820 * cnt}px)`
            slideWrap.current.style.transition = `none`
        }
        if(cnt<-1){
            setCnt(n-1)
            setToggle(1)
            slideWrap.current.style.trasnform = `trasnlate(${-820 * n}px)`
            slideWrap.current.style.transition = `none`
        }
    }
    //페이지 버튼
    const onClickpage1=(e)=>{
        e.preventDefault();
        slideWrap.current.style.transform = `translate(${-819*0}px)`
        setState({
            ...state,
            ispage1 : true,
            ispage2 : false
        })
    }

    const onClickpage2=(e)=>{
        e.preventDefault();
        slideWrap.current.style.transform = `translate(${-819*1}px)`
        setState({
            ...state,
            ispage2 : true,
            ispage1 : false
        })
    }
    
    
    const moveTime=()=>{
        console.log(cnt)
        if(cnt % 2 == 1){ //홀수 
            setState({
            ...state,
            ispage1 : true,
            ispage2 : false
            })
        }
        if(cnt%2 == 0){ //짝수
            setState({
            ...state,
            ispage2 : true,
            ispage1 : false,
            })
        }
    }
     //타이머 함수
    React.useEffect(()=>{
        let setId = 0;
        if (play === true){
            setId = setInterval(()=>{
                // setCnt(cnt=>cnt+1)
                moveTime();
            }, 3000);
            return () => clearInterval(setId)
            
        }
    })

    const onMouseEnterSlideWrap=()=>{
        setPlay(false)
     }
    const onMouseLeaveSlideWrap=()=>{
        setPlay(true)
     }

     //재생바 버튼
    const onClickplayoff =(e)=>{
        e.preventDefault();
        let imagefile = '';

        if (imagefile===true){
            setPlay(true)
        }
        else {
            setPlay(false)
        }
        setState({
            ...state,
            imagefile : !state.imagefile,
            setPlay : setPlay
        })
    }

    const onClickCol2Img1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isarrow : !state.isarrow,
            isslide : !state.isslide
        })
    }

   
    
    //공지사항 텍스트 슬라이드

    // 0. 슬라이드 너비 자동화 : 로딩시 자동으로 슬라이드 랩퍼박스 너비를 설정하라
    // React.useEffect(()=>{
    //     slideWrap.current.style.width = `${100 * state.슬라이드.length}%`;
    //     setN((state.슬라이드.length-2)); // 17개 이지만 번호는 0 ~ 16
    // },[state.슬라이드]); // 로딩시 실행 1회


    const txtSlide = () => {
        textSlide.current.style.transition = `all 0.4s ease-in-out`
        textSlide.current.style.transform = `translateY(${-24*cnt}px)`
        returnTxtSlide();
    }

    React.useEffect(()=>{ // 비동기처리
        if(toggle===0){ // 리턴이 아닌상태에서 실행
            txtSlide();
        }
        else{             
            setTimeout(function(){
                txtSlide();
            }, 100); 
            setToggle(0); 
        }
    },[cnt]);
    
    const returnTxtSlide=()=>{
        if(cnt>3){
            setCnt(0)
            setToggle(1)
            textSlide.current.style.transform = `translateY(${-24*-1}px)`
            textSlide.current.style.transition = `none`
        }
        if(cnt<-1){
            setCnt(0)
            setToggle(1)
            textSlide.current.style.transform = `translateY(${-24*n}px)`
            textSlide.current.style.transition = `none`
        }
    }


    React.useEffect(()=>{
        let setId = 0;
        
        if(play===true){
            setId = setInterval(()=>{
                setCnt( cnt => cnt + 1 ); // 1 2 3 .... 
            }, 3000); // 4초간격 자동 실행
            return () => clearInterval(setId);
        }
    })

    return (
        <div id='section2'>
        <div className="wrap">
            <div className="left-box"></div>
            <div className="right-box"></div>
            <div className="container">
                <div className="content">
                    <div className="gap">
                        <div className="col-box">
                            <div className="col1">
                                <div className="notice-icon">
                                    <a href="!#"><img src="./img/starbucks/section2/notice_ttl.png" alt="" /></a>
                                </div>
                                <div className="notice-text">
                                    <ul ref={textSlide}>
                                        <li><a href="!#"><h4>브런치 유어 웨이 별 적립 혜택 안내(업데이트)</h4></a></li>
                                        <li><a href="!#"><h4>시스템 개선 및 서비스 점검 안내</h4></a></li>
                                        <li><a href="!#"><h4>스타벅스 고객센터의 대표번호 운영시간 변경 안내</h4></a></li>
                                        <li><a href="!#"><h4>개인정보 처리방침 개정 안내</h4></a></li>
                                        <li><a href="!#"><h4>브런치 유어 웨이 별 적립 혜택 안내(업데이트)</h4></a></li>
                                        <li><a href="!#"><h4>시스템 개선 및 서비스 점검 안내</h4></a></li>
                                    </ul>
                                </div>
                                <div className="icon-box">
                                    <a href="!#"><h3>+</h3></a>
                                </div>
                            </div>
                            <div className="col2">
                                <a href="!#"><img src="./img/starbucks/section2/prom_ttl_b.png" alt="" /></a>
                                <a href="!#"onClick={onClickCol2Img1}><img  className={`${state.isarrow ? 'up' : ''}`} src="./img/starbucks/section2/btn_prom_down.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`slide-container ${state.isslide ? 'on' : 'off'}`}>
            <div className="slide-view">
                <ul ref={slideWrap} onMouseEnter={onMouseEnterSlideWrap} onMouseLeave={onMouseLeaveSlideWrap} className="slide-wrap">
                    <li className="slide slide2">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 안보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide1">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide2">
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                                    </div>
                                    <div className="btn-box">
                                        <a href="!#"><button>자세히 보기</button></a>
                                    </div> 
                                </div>
                    </li>
                    <li className="slide slide1">
                    <div className="col-gap">
                        <div className="img-box">
                            <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                        </div>
                        <div className="btn-box">
                            <a href="!#"><button>자세히 안 보기</button></a>
                        </div>    
                    </div>
                    </li>
                    <li className="slide slide2">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide1">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide2">
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                                    </div>
                                    <div className="btn-box">
                                        <a href="!#"><button>자세히 보기</button></a>
                                    </div> 
                                </div>
                    </li>
                    <li className="slide slide1">
                    <div className="col-gap">
                        <div className="img-box">
                            <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                        </div>
                        <div className="btn-box">
                            <a href="!#"><button>자세히 안 보기</button></a>
                        </div>    
                    </div>
                    </li>
                    <li className="slide slide2">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide1">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide2">
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                                    </div>
                                    <div className="btn-box">
                                        <a href="!#"><button>자세히 보기</button></a>
                                    </div> 
                                </div>
                    </li>
                    <li className="slide slide1">
                    <div className="col-gap">
                        <div className="img-box">
                            <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                        </div>
                        <div className="btn-box">
                            <a href="!#"><button>자세히 안 보기</button></a>
                        </div>    
                    </div>
                    </li>
                    <li className="slide slide2">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide1">
                        <div className="col-gap">
                            <div className="img-box">
                                <img src="./img/starbucks/section2/IRIoMO_20230828090417796.jpg" alt="" />
                            </div>
                            <div className="btn-box">
                                <a href="!#"><button>자세히 보기</button></a>
                            </div> 
                        </div>
                    </li>
                    <li className="slide slide2">
                                <div className="col-gap">
                                    <div className="img-box">
                                        <img src="./img/starbucks/section2/FbOy46_20230102123439782.jpg" alt="" />
                                    </div>
                                    <div className="btn-box">
                                        <a href="!#"><button>자세히 보기</button></a>
                                    </div> 
                                </div>
                    </li>

                </ul>
                <div className="arrow-img">
                    
                    <div className="play-img">
                        <a href="!#" onClick={onClickplayoff}><img src={`./img/starbucks/section2/main_prom_${state.imagefile ? 'stop.png' : 'play.png' }`} alt="" /></a>
                    </div>
                    <div className="page-count">
                        <a href="!#" onClick={onClickpage1}><img src={`./img/starbucks/section2/main_prom_${state.ispage1 ? 'on' : 'off'}.png`} alt="" /></a> 
                        <a href="!#" onClick={onClickpage2}><img src={`./img/starbucks/section2/main_prom_${state.ispage2 ? 'on' : 'off'}.png`} alt="" /></a>
                    </div>
                </div>
                <div className="arrow-box">
                    <a href="!#" onClick={onClickPrev} className='left-arrow-box'><img src="./img/starbucks/section2/arrow_left_on.png" alt="" /></a>
                    <a href="!#" onClick={onClickNext} className='right-arrow-box'><img src="./img/starbucks/section2/arrow_right_on.png" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    );
};

