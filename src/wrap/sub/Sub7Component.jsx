import React from 'react';
import './sass/sub7.scss';
import Sub7ChildComponent from './Sub7ChildComponent.jsx';
import Sub7_1ChildComponent from './Sub7_1ChildComponent ';
import Sub7_2ChildComponent from './Sub7_2ChildComponent ';
import axios from 'axios';

export default function Sub1Component() {
    const textSlide = React.useRef();
    const [play, setPlay] = React.useState(true) // 트루면 타이머 진행, 펄스면 멈춤
    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);
    const [state, setState] = React.useState({
        ispage1 : true,
        play : true,
        슬라이드: [],
        imagefile: true,
        isarrow : false,
        프로모션:[],
        새소식:[],
        매장별:[],
        ispoint:false,
        isarrowUp : true,
        isarrowDown : false,
        })
 
    React.useState(()=>{
        axios.
        all([
            axios.get('./data/sub7.json'),
            axios.get('./data/sub7-1.json'),
            axios.get('./data/sub7-2.json')])
        .then(
            axios.spread((res1, res2, res3)=>{
                setState({
                    ...state,
                    프로모션:res1.data.프로모션,
                    새소식:res2.data.새소식,
                    매장별:res3.data.매장별
                })
            })
        )
        .catch((err)=>{
            console.log(err)
        })
    })

    React.useEffect(()=>{
        axios({
            url:'./data/sub7.json',
            method:'GET'
        }).then((res)=>{
            setState({
                ...state,
                프로모션:res.data.프로모션
            })
        }).catch((err)=>{
        })
    })
    // React.useEffect(()=>{
    //     axios({
    //         url:'./data/sub7-1.json',
    //         method:'GET'
    //     }).then((res)=>{
    //         setState({
    //             ...state,
    //             새소식:res.data.새소식
    //         })
    //     }).catch((err)=>{
    //     })
    // })
    // React.useEffect(()=>{
    //     axios({
    //         url:'./data/sub7-2.json',
    //         method:'GET'
    //     }).then((res)=>{
    //         setState({
    //             ...state,
    //             매장별:res.data.매장별
    //         })
    //     }).catch((err)=>{
    //     })
    // })
 
    // 이전 버튼 슬라이드   
    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
        setState({
            ...state,
            ispage1 : true,
        })
    }
    // 다음 버튼 슬라이드 
    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
        setState({
            ...state,
            ispage1 : true,
        })
    }
    //페이지 버튼
    const onClickpage1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            ispage1 : true,
        })
    }

    //공지사항 텍스트 슬라이드
    const txtSlide = () => {
        textSlide.current.style.transform = `translateY(${-24*cnt}px)`
        textSlide.current.style.transition = `all 0.4s ease-in-out`
        returnTxtSlide();
    }

    React.useEffect(()=>{ //비동기 방식이 필요함, 비동기 1 2 3 순차적 promise 기법 
        if(toggle===0){//리턴이 아닌 상태에서 실행
            txtSlide(); 
        }
        else { //리턴이 발생할 때
            setToggle(0)// 0은 원상복귀 return에서 토글이 1이었으니 0으로 바꿔줌
            setTimeout(function(){//비동기식 : 맨 마지막 페이지에서 촤라락 맨 앞으로 가는 거 그냥 17 -> 1로 가게 해야 함 
                txtSlide(); 
            }, 100)// 리턴 한 다음에 한 템포 쉬고 진행해라
        }
    }, [cnt]); //cnt가 증가하고 나서 0.1초 있다가 메인슬라이드를 실행함 4초마다 넘어가는데 약간의 틈을 줌\
    
    const returnTxtSlide=()=>{
        if(cnt>3){
            setCnt(0)
            setToggle(1)
            textSlide.current.style.transform = `translateY(${-24*-1}px)`
            textSlide.current.style.transition = `none`
        }
    }

    const onClickisArrow=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isarrow : !state.isarrow,
            ispoint : !state.ispoint
        })
    }
    React.useEffect(()=>{
        let setId = 0;
        
        if(play===true){
            setId = setInterval(()=>{
                setCnt( cnt => cnt + 1 ); // 1 2 3 .... 
            }, 3000); // 4초간격 자동 실행
            return () => clearInterval(setId);
        }

    },[cnt]); // 로딩시 1회 실행

    return (
        <main id='sub7' className='sub'>
            <div className="container">
                <div className="title">
                    <h1>WHAT'S NEW</h1>
                    <div className="small-txt">
                        <img src="./img/starbucks/sub1/icon_home.png" alt="" />
                        <img src="./img/starbucks/sub1/icon_arrow.png" alt="" />
                        <h4>WHAT'S NEW</h4>
                    </div>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="gap">
                                <div className="sub-content1">
                                    
                                <div className="button-box">
                                    <div onClick={onClickPrev} className="left"></div>
                                    <div onClick={onClickNext} className="right"></div>
                                </div>
                                <div className="play-img">
                                    <a href="!#" ><img src={`./img/starbucks/section2/main_prom_${state.imagefile ? 'stop.png' : 'play.png' }`} alt="" /></a>
                                </div>
                                <div className="page-count">
                                    <a href="!#" onClick={onClickpage1}><img src={`./img/starbucks/section2/main_prom_${state.ispage1 ? 'on' : 'off'}.png`} alt="" /></a>
                                </div>

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content1-1" onClick={onClickisArrow}>
                                    <h2>전체 보기</h2>
                                    <img  src={`./img/starbucks/sub7/useInfo_btn_${state.isarrow ? 'up' : 'down'}.png`} alt="" />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="gap">
                           
                                <div className={`sub-content1-2${state.ispoint ? ' on' : ' off'}`}>

                                     <div>
                                        <div className="box">
                                            <h2>프로모션 & 이벤트</h2>

                                            <Sub7ChildComponent 프로모션={state.프로모션}/>
                                        </div>

                                        <div className="whole2">
                                            <div className="box">
                                            <h2>새소식</h2>

                                            <Sub7_1ChildComponent 새소식={state.새소식}/>
                                            
                                        </div>
                                        </div>

                                            <div className="box">
                                            <h2>매장별 이벤트</h2>
                                            <Sub7_2ChildComponent 매장별={state.매장별}/>
                                            </div>
                                    </div>
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

                                    <img src="./img/starbucks/sub7/promotion_btxt1_20210218.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content4">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub7/promotion_btxt2_20210218.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content5">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub7/promotion_btxt3.png" alt="" />
                                    <button>자세히 보기</button>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content6">
                                    <div className="col-box">

                                    <img src="./img/starbucks/sub7/promotion_btxt4.png" alt="" />
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

