import React from 'react';
import './sass/sub1.scss'
import axios from 'axios';

export default function Sub1Component() {
    const textSlide = React.useRef();
    const slideBg1 = React.useRef();
    const slideBg2 = React.useRef();
    const [play, setPlay] = React.useState(true) // 트루면 타이머 진행, 펄스면 멈춤
    const [cnt, setCnt] = React.useState(0);
    const [page, setPage] = React.useState(0);
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
        isimgon1 : true,
        isimgon2 : false
    })


    
    //메인 슬라이드 함수
    const mainSlide1 = () => {
            // slideBg1.current.style.opacity = `1`
            // slideBg1.current.style.transition = 'all 1s ease-in-out'
            // slideBg2.current.style.transition = 'all 1s ease-in-out'
            // slideBg2.current.style.opacity = `0`
        returnSlide();
    }

    const mainSlide2 =()=>{
        // slideBg1.current.style.opacity = `0`
        // slideBg1.current.style.transition = 'all 1s ease-in-out'
        // slideBg2.current.style.transition = 'all 1s ease-in-out'
        // slideBg2.current.style.opacity = `1`
        returnSlide();
    }
    
    //메인 슬라이드 실행
    React.useEffect(()=>{ //비동기 방식이 필요함, 비동기 1 2 3 순차적 promise 기법 
        if(toggle===0){//리턴이 아닌 상태에서 실행
            mainSlide1(); 
        }
        else { //리턴이 발생할 때
            setToggle(0)// 0은 원상복귀 return에서 토글이 1이었으니 0으로 바꿔줌
            setTimeout(function(){//비동기식 : 맨 마지막 페이지에서 촤라락 맨 앞으로 가는 거 그냥 17 -> 1로 가게 해야 함 
                mainSlide2(); 
            }, 100)// 리턴 한 다음에 한 템포 쉬고 진행해라
        }
    }, [page]); //cnt가 증가하고 나서 0.1초 있다가 메인슬라이드를 실행함 4초마다 넘어가는데 약간의 틈을 줌

    // 타이머 
    React.useEffect(()=>{
        let setId = 0;
        
        if(play===true){
            setId = setInterval(()=>{
                setPage( page => page + 1 ); // 1 2 3 .... 
            }, 3000); // 4초간격 자동 실행
            return () => clearInterval(setId);
        }

    },[play]); // 로딩시


    // 이전 버튼 슬라이드   
    const onClickPrev=(e)=>{
        e.preventDefault();
        setPage(page-1);
        console.log(page)
        mainSlide2();
        setState({
            ...state,
            ispage1 : true,
            ispage2 : false,
            isimgon1 : true,
            isimgon2 : false 
        })
    }
    // 다음 버튼 슬라이드 
    const onClickNext=(e)=>{
        e.preventDefault();
        setPage(page+1);
        mainSlide1()
        setState({
            ...state,
            ispage2 : true,    
            ispage1 : false,
            isimgon1 : false,
            isimgon2 : true
        })
    }
    // // 리턴 함수
    const returnSlide=()=>{
        if(page>2){
            setPage(0)
            setToggle(1)
            // slideBg1.current.style.opacity = `1`
            // slideBg1.current.style.transition = 'all 1s ease-in-out'
            // slideBg2.current.style.transition = 'all 1s ease-in-out'
            // slideBg2.current.style.opacity = `0`
        }
        if(page<-1){
            setPage(n-1)
            setToggle(1)
            // slideBg1.current.style.opacity = `0`
            // slideBg1.current.style.transition = 'all 1s ease-in-out'
            // slideBg2.current.style.transition = 'all 1s ease-in-out'
            // slideBg2.current.style.opacity = `1`
        }
    }
    //페이지 버튼
    const onClickpage1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            ispage1 : true,
            ispage2 : false
        })
    }

    const onClickpage2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            ispage2 : true,
            ispage1 : false
        })
    }
    
    
    const moveTime=()=>{
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
                setPage(page=>page+1)
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
   

    
    //공지사항 텍스트 슬라이드

    // 0. 슬라이드 너비 자동화 : 로딩시 자동으로 슬라이드 랩퍼박스 너비를 설정하라
    React.useEffect(()=>{
        textSlide.current.style.height = `${100 * 6}%`;
        setN((4)); // 17개 이지만 번호는 0 ~ 16
    },[cnt]); // 로딩시 실행 1회

    //메인 슬라이드
    const txtSlide = () => {
        textSlide.current.style.transform = `translateY(${-24*cnt}px)`
        textSlide.current.style.transition = `all 0.2s ease-in-out`
        returnTxtSlide();
    }

    React.useEffect(()=>{ // 비동기처리
        if(toggle===0){ // 리턴이  아닌상태에서 실행
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
        // if(cnt<-1){
        //     setCnt(n-1)
        //     setToggle(1)
        //     textSlide.current.style.transform = `translateY(${-24*n}px)`
        //     textSlide.current.style.transition = `none`
        // }
    }

    // 자동 타이머 함수

    React.useEffect(()=>{
        let setId = 0;
        
        if(play===true){
            setId = setInterval(()=>{
                setCnt( cnt => cnt + 1 ); // 1 2 3 .... 
            }, 3000); // 4초간격 자동 실행
            return () => clearInterval(setId);
        }

    },[play]); // 로딩시 1회 실행

    axios({
        url: './data/sub1.json',
        method : 'get'
    })
    .then((res)=>{
        setState({
            ...state,
            슬라이드:res.data.슬라이드
        })
    })
    .catch((err)=>{
    })


    return (
        <main id='sub1' className='sub'>
            <div className="container">
                <div className="title">
                    <h2><img src="./img/starbucks/sub1/coffee_tit.jpg" alt="" /></h2>
                    <div className="small-txt">
                        <img src="./img/starbucks/sub1/icon_home.png" alt="" />
                        <img src="./img/starbucks/sub1/icon_arrow.png" alt="" />
                        <h4>COFFEE</h4>
                    </div>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="gap">
                                <div className="sub-content1">
                                    <div className='sub1-bg'></div>
                                <div className="button-box">
                                    <div onClick={onClickPrev} className="left"></div>
                                    <div onClick={onClickNext} className="right"></div>
                                    {/* <img className='left' src="./img/starbucks/sub1/mscard_arrow_l_off.png" alt="" />
                                    <img className='right' src="./img/starbucks/sub1/mscard_arrow_r_off.png" alt="" /> */}
                                </div>
                                {/* <div className="play-img">
                                    <a href="!#" onClick={onClickplayoff}><img src={`./img/starbucks/section2/main_prom_${state.imagefile ? 'stop.png' : 'play.png' }`} alt="" /></a>
                                </div>
                                <div className="page-count">
                                    <a href="!#" onClick={onClickpage1}><img src={`./img/starbucks/section2/main_prom_${state.ispage1 ? 'on' : 'off'}.png`} alt="" /></a> 
                                    <a href="!#" onClick={onClickpage2}><img src={`./img/starbucks/section2/main_prom_${state.ispage2 ? 'on' : 'off'}.png`} alt="" /></a>
                                </div> */}

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content2">
                                    <div className="left-box"></div>
                                    <div className="right-box"></div>
                                    <div className="row-box">
                                        <div className="row1">
                                            <img src="./img/starbucks/sub1/news_title.png" alt="" />
                                            <div className="notice-box">
                                                <ul ref={textSlide}>
                                                    <li><h4>스타벅스, 24주년 기념 환경재단과 함께 ‘다다익선 캠페인’ 24개 매장에서 진행!</h4></li>
                                                    <li><h4>스타벅스, 디즈니 협업 상품 2차 출시</h4></li>
                                                    <li><h4>스타벅스, 추석 맞이 서프라이즈 선물 증정 이벤트 진행</h4></li>
                                                    <li><h4>스타벅스, 150만 잔 팔린 ‘트렌타’ 상시 판매한다</h4></li>
                                                    <li><h4>스타벅스, 24주년 기념 환경재단과 함께 ‘다다익선 캠페인’ 24개 매장에서 진행!</h4></li>
                                                    <li><h4>스타벅스, 디즈니 협업 상품 2차 출시</h4></li>

                                                </ul>
                                            </div>
                                            <img src="./img/starbucks/sub1/icon_coffee_notice_more.png" alt="" />
                                        </div>
                                        <div className="row2">
                                            <img src="./img/starbucks/sub1/useInfo_app.png" alt="" />
                                            <img src="./img/starbucks/sub1/useInfo_txt.png" alt="" />
                                            <img src="./img/starbucks/sub1/icon_coffee_notice_more.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content3">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub1/coffee_hs_txt_221108.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content4">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub1/coffee_reserve_txt_221108.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content5">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub1/coffee_espresso_txt_221108.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content6">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub1/coffee_best_txt_221108.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

