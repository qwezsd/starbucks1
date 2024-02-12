import React from 'react';
import './sass/sub5.scss'

export default function Sub1Component() {
    const textSlide = React.useRef();
    const slideBg1 = React.useRef();
    const slideBg2 = React.useRef();
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
        isimgon1 : true,
        isimgon2 : false
    })

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
 //타이머 함수
 React.useEffect(()=>{
    let setId = 0;
    if (play === true){
        setId = setInterval(()=>{
            setCnt(cnt=>cnt+1)
            // moveTime();
        }, 3000);
        return () => clearInterval(setId)
        
    }
}, [cnt])



    return (
        <main id='sub5' className='sub'>
            <div className="container">
                <div className="title">
                    <h2><img src="./img/starbucks/sub5/14_msr_tit.png" alt="" /></h2>
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
                                    <div className="col-box">
                                        <div className="txt-box">
                                            <img src="./img/starbucks/sub5/14_msr_bn_txt1.png" alt="" />
                                        </div>
                                        <div className="btn-box">
                                            <button>스타벅스 리워드 소개</button>
                                            <button>My리워드 확인</button>
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
                                        <div className="txt-box">
                                            <img src="./img/starbucks/sub5/msr_main_txt1.png" alt="" />
                                        </div>
                                        <div className="btn-box">
                                            <button>스타벅스 카드 소개</button>
                                            <button>등록 및 조회</button>
                                            <button>충전 및 이용안내</button>
                                            <button>My스타벅스 카드 확인</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="gap">
                                <div className="sub-content4">
                                    <div className="col-box">
                                        <div className="txt-box">
                                            <img src="./img/starbucks/sub5/msr_main_txt_20170823.png" alt="" />
                                        </div>
                                        <div className="btn-box">
                                            <button>스타벅스 e-Gift Card 소개</button>
                                            <button>이용안내</button>
                                            <button>선물하기</button>
                                        </div>
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

