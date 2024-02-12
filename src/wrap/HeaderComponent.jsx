import React from 'react';
import './sass/header.scss'
import {Link, Outlet} from 'react-router-dom'

export default function HeaderComponent () {

    const coffeeBox = React.useRef();
    const menuBox = React.useRef();
    const storeBox = React.useRef();
    const responsibilityBox = React.useRef();
    const starbucksRewardsBox = React.useRef();
    const corporateSalesBox = React.useRef();
    const whatsNewBox = React.useRef();
    const [state, setState] = React.useState({
        coffee:false,
        menu:false,
        store : false,
        responsibility : false,
        starbucksRewards : false,
        corporateSales : false,
        whatsNew : false,
        coffeeBox: false,
        menuBox : false,
        storeBox : false,
        responsibilityBox : false,
        starbucksRewardsBox : false,
        corporateSalesBox : false,
        whatsNewBox : false,
    });


    const onMouseEnterCoffee = ()=>{

        coffeeBox.current.style.display = `block`
        setState({
            coffee:true,
            coffeeBox:true
           
        })
    }
    
    const onMouseLeaveCoffe = () => {
        coffeeBox.current.style.display = `none`
        setState({
            coffee:false,
            coffeeBox:false,
        })
    }
    
    const onMouseEnterMenu = ()=>{
        menuBox.current.style.display = `block`
        setState({
            menu:true,
            menuBox :true
        })
    }
    const onMouseLeaveMenu = () => {

    menuBox.current.style.display = `none`
        setState({
            menu:false,
            menuBox: false,
        })
    }

    const onMouseEnterStore = () => {
        menuBox.current.style.display = `block`
        setState({
            store:true,
            storeBox : true
        })
    }
    const onMouseLeaveStore = () => {
    menuBox.current.style.display = `none`
        setState({
            store:false,
            storeBox:false
        })
    }

    const onMouseEnterResponsibility = () => {
        responsibilityBox.current.style.display = `block`
        setState({
            responsibility:true,
            responsibilityBox : true
        })
    }

    const onMouseLeaveResponsibility = () => {

    responsibilityBox.current.style.display = `none`
        setState({
            responsibility:false,
            responsibilityBox : false
        })
    }
    const onMouseEnterStarbucksRewards = () => {
        starbucksRewardsBox.current.style.display = `block`
        setState({
            starbucksRewards:true,
            starbucksRewardsBox : true
        })
    }
    const onMouseLeaveStarbucksRewards = () => {

    starbucksRewardsBox.current.style.display = `none`
        setState({
            starbucksRewards:false,
            starbucksRewardsBox:false
        })
    }
    const onMouseEnterCorporateSales = () => {
        corporateSalesBox.current.style.display = `block`
        setState({
            corporateSales:true,
            corporateSalesBox:true
        })
    }
    const onMouseLeaveCorporateSales = () => {

    corporateSalesBox.current.style.display = `none`
        setState({
            corporateSales:false,
            corporateSalesBox: false
        })
    }
    const onMouseEnterWhatsNew = () => {
        whatsNewBox.current.style.display = `block`
        setState({
            whatsNew:true,
            whatsNewBox:true
        })
    }
    const onMouseLeaveWhatsNew = () => {
        whatsNewBox.current.style.display = `none`
        setState({
            whatsNew:false,
            whatsNewBox:false
        })
    }
    
    return (
        <>
            <header id='header'>
                <div className="container">
                    <div className="content">
                        <div className="gap">
                            <div className="row1">
                                <Link to="/main"><img src="./img/starbucks/logo.png" alt="" /></Link>
                            </div>
                            <div className="row2">
                                <div className="col1">
                                    <div className="nav-box">
                                        <a href="!#"><p>Sign In</p></a>
                                        <i>I</i>
                                        <a href="!#"><p>My Starbucks</p></a>
                                        <i>I</i>
                                        <a href="!#"><p>Customer Service & Ideas</p></a>
                                        <i>I</i>
                                        <a href="!#"><p>Find a Store</p></a>
                                    </div>
                                    <div className="icon-box">
                                        <a href="!#"><img src="./img/starbucks/icon_magnifier_black.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col2">
                                    <ul>
                                        <li onMouseEnter={onMouseEnterCoffee}  onMouseLeave={onMouseLeaveCoffe}>
                                            <Link to="/sub1" className={state.coffee ? 'on' : ''}><p>COFFEE</p></Link>

                                            <div className="category">
                                                <div ref={coffeeBox} className={`coffee-box sub1${state.coffeeBox ? ' on' : ' off'}`} >
                                                    <div className="coffee-content">
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>커피</h3></a>
                                                                        <a href="!#"><h4>스타벅스 원두</h4></a>
                                                                        <a href="!#"><h4>스타벅스 비아</h4></a>
                                                                        <a href="!#"><h4>스타벅스앳홈by캡슐</h4></a>
                                                                        <a href="!#"><h4>나와 어울리는 커피</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>커피 이야기</h3></a>
                                                                        <a href="!#"><h4>농장에서 우리의 손으로</h4></a>
                                                                        <a href="!#"><h4>최상의 아라비카 원두</h4></a>
                                                                        <a href="!#"><h4>스타벅스 로스트 스펙트럼</h4></a>
                                                                        <a href="!#"><h4>스타벅스 디카페인</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>스타벅스 리저브</h3></a>
                                                                        <a href="!#"><h4>RESERVE MAGAZINE</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>에스프레소 음료</h3></a>
                                                                        <a href="!#"><h4>도피오</h4></a>
                                                                        <a href="!#"><h4>에스프레소 마키아또</h4></a>
                                                                        <a href="!#"><h4>아메리카노</h4></a>
                                                                        <a href="!#"><h4>마키아또</h4></a>
                                                                        <a href="!#"><h4>카푸치노</h4></a>
                                                                        <a href="!#"><h4>라떼</h4></a>
                                                                        <a href="!#"><h4>모카</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>최상의 커피를 즐기는 법</h3></a>
                                                                        <a href="!#"><h4>커피 프레스</h4></a>
                                                                        <a href="!#"><h4>푸어 오버</h4></a>
                                                                        <a href="!#"><h4>아이스 푸어 오버</h4></a>
                                                                        <a href="!#"><h4>커피 메이커</h4></a>
                                                                    </li>
                                                                </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li onMouseEnter={onMouseEnterMenu}  onMouseLeave={onMouseLeaveMenu}>
                                            <Link to="/sub2" className={state.menu ? 'on' : ''}><p>MENU</p></Link>
                                            <div className="category">
                                                <div ref={menuBox} className={`coffee-box sub2${state.menuBox ? ' on' : ' off'}`}>
                                                    <div className="coffee-content">
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>음료</h3></a>
                                                                        <a href="!#"><h4>콜드 브루</h4></a>
                                                                        <a href="!#"><h4>브루드 커피</h4></a>
                                                                        <a href="!#"><h4>에스프레소</h4></a>
                                                                        <a href="!#"><h4>프라푸치노</h4></a>
                                                                        <a href="!#"><h4>블렌디드</h4></a>
                                                                        <a href="!#"><h4>스타벅스 리프레셔</h4></a>
                                                                        <a href="!#"><h4>스타벅스 피지오</h4></a>
                                                                        <a href="!#"><h4>티(티바나)</h4></a>
                                                                        <a href="!#"><h4>기타 제조 음료</h4></a>
                                                                        <a href="!#"><h4>스타벅스 주스(병음료)</h4></a>
                                                                    </li>
                                                                </ul><ul>
                                                                    <li>
                                                                        <a href="!#"><h3>푸드</h3></a>
                                                                        <a href="!#"><h4>브레드</h4></a>
                                                                        <a href="!#"><h4>케이크</h4></a>
                                                                        <a href="!#"><h4>샌드위치 & 샐러드</h4></a>
                                                                        <a href="!#"><h4>따뜻한 푸드</h4></a>
                                                                        <a href="!#"><h4>과일 & 요거트</h4></a>
                                                                        <a href="!#"><h4>스낵 & 미니 디저트</h4></a>
                                                                        <a href="!#"><h4>아이스크림</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>상품</h3></a>
                                                                        <a href="!#"><h4>머그</h4></a>
                                                                        <a href="!#"><h4>글라스</h4></a>
                                                                        <a href="!#"><h4>플라스틱 텀블러</h4></a>
                                                                        <a href="!#"><h4>스테인리스 텀블러</h4></a>
                                                                        <a href="!#"><h4>보온병</h4></a>
                                                                        <a href="!#"><h4>액세사리</h4></a>
                                                                        <a href="!#"><h4>선물세트</h4></a>
                                                                        <a href="!#"><h4>커피 용품</h4></a>
                                                                        <a href="!#"><h4>패키지 티(티바나)</h4></a>
                                                                        <a href="!#"><h4>시럽</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>카드</h3></a>
                                                                        <a href="!#"><h4>실물카드</h4></a>
                                                                        <a href="!#"><h4>e-Gift 카드</h4></a>
                                                                    
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>메뉴 이야기</h3></a>
                                                                        <a href="!#"><h4>스타벅스 티바나</h4></a>
                                                                        <a href="!#"><h4>스타벅스 콜드 브루</h4></a>
                                                                    </li>
                                                                </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li  onMouseEnter={onMouseEnterStore}  onMouseLeave={onMouseLeaveStore}>
                                            <Link to="/sub3" className={state.store ? ' on' : ''}><p>STORE</p></Link>
                                            <div className="category">
                                                <div ref={storeBox} className={`coffee-box sub3${state.storeBox ? ' on' : ' off'}`}>
                                                    <div className="coffee-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>매장 찾기</h3></a>
                                                                    <a href="!#"><h4>퀵 검색</h4></a>
                                                                    <a href="!#"><h4>지역 검색</h4></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>드라이브 스루 매장</h3></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                <a href="!#"><h3>스타벅스 리저브 매장</h3></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>커뮤니티 스토어 매장</h3></a>
                                                                </li>
                                                            </ul>
                                                    </div>
                                                    </div>
                                            </div>


                                        </li>
                                        <li onMouseEnter={onMouseEnterResponsibility} onMouseLeave={onMouseLeaveResponsibility} >
                                            <Link to="/sub4" className={state.responsibility ? 'on' : ''}><p>RESPONSIBILITY</p></Link>
                                            <div className="category">
                                                <div ref={responsibilityBox} className={`coffee-box sub4${state.responsibilityBox ? ' on' : ' off'}`}>
                                                <div className="coffee-content">
                                                        <ul>
                                                            <li>
                                                                <a href="!#"><h3>사회공헌 캠페인 소개</h3></a>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <a href="!#"><h3>지역 사회 참여 활동</h3></a>
                                                                <a href="!#"><h4>희망배달 캠페인</h4></a>
                                                                <a href="!#"><h4>재능기부 카페 소식</h4></a>
                                                                <a href="!#"><h4>커뮤니티 스토어</h4></a>
                                                                <a href="!#"><h4>청년 지원 프로그램</h4></a>
                                                                <a href="!#"><h4>우리 농산물 사랑 캠페인</h4></a>
                                                                <a href="!#"><h4>우리 문화 지키기</h4></a>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <a href="!#"><h3>환경보호 활동</h3></a>
                                                                <a href="!#"><h4>친환경 활동</h4></a>
                                                                <a href="!#"><h4>일회용 컵 없는 매장</h4></a>
                                                                <a href="!#"><h4>커피 원두 재활용</h4></a>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <a href="!#"><h3>윤리 구매</h3></a>
                                                                <a href="!#"><h4>윤리적 원두 구매</h4></a>
                                                                <a href="!#"><h4>공정무역 인증</h4></a>
                                                                <a href="!#"><h4>커피 농가 지원 활동</h4></a>
                                                            
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <a href="!#"><h3>글로벌 사회 공헌</h3></a>
                                                                <a href="!#"><h4>윤리경영 보고서</h4></a>
                                                                <a href="!#"><h4>스타벅스 제단</h4></a>
                                                                <a href="!#"><h4>지구촌 봉사의 달</h4></a>
                                                            </li>
                                                        </ul>
                                                </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li onMouseEnter={onMouseEnterStarbucksRewards} onMouseLeave={onMouseLeaveStarbucksRewards}>
                                            <Link to="/sub5" className={state.starbucksRewards ? 'on' : ''} ><p>STARBUCKS REWARDS</p></Link>
                                            <div className="category">
                                                <div ref={starbucksRewardsBox} className={`coffee-box sub5${state.starbucksRewardsBox ? ' on' : ' off'}`} >
                                                    <div className="coffee-content">
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>스타벅스 리워드</h3></a>
                                                                        <a href="!#"><h4>스타벅스 리워드 소개 캠페인</h4></a>
                                                                        <a href="!#"><h4>등급 및 혜택</h4></a>
                                                                        <a href="!#"><h4>스타벅스 별</h4></a>
                                                                        <a href="!#"><h4>자주 하는 질문</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>스타벅스 카드</h3></a>
                                                                        <a href="!#"><h4>스타벅스 카드 소개</h4></a>
                                                                        <a href="!#"><h4>스타벅스 카드 갤러리</h4></a>
                                                                        <a href="!#"><h4>등록 및 조회</h4></a>
                                                                        <a href="!#"><h4>충전 및 이용안내</h4></a>
                                                                        <a href="!#"><h4>분실 신고/환불신청</h4></a>
                                                                        <a href="!#"><h4>자주 하는 질문</h4></a>
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <a href="!#"><h3>스타벅스 e-Gift Card</h3></a>
                                                                        <a href="!#"><h4>스타벅스 e-Gift Card 소개</h4></a>
                                                                        <a href="!#"><h4>이용안내</h4></a>
                                                                        <a href="!#"><h4>선물하기</h4></a>
                                                                        <a href="!#"><h4>자주 하는 질문</h4></a>
                                                                    
                                                                    </li>
                                                                </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li onMouseEnter={onMouseEnterCorporateSales} onMouseLeave={onMouseLeaveCorporateSales}>
                                            <Link to="/sub6" className={state.corporateSales ? 'on' : ''}><p>CORPORATE SALES</p></Link>
                                            <div className="category">
                                                <div ref={corporateSalesBox} className={`coffee-box sub6${state.corporateSalesBox ? ' on' : ' off'}`}   >
                                                    <div className="coffee-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>단체 및 기업 구매 안내</h3></a>
                                                                    <a href="!#"><h4>MD 상품</h4></a>
                                                                    <a href="!#"><h4>실물카드</h4></a>
                                                                    <a href="!#"><h4>e-Gift Card(MMS)</h4></a>
                                                                    <a href="!#"><h4>e-Gift Card(BULK)</h4></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>단체 주문 배달 안내</h3></a>
                                                                    <a href="!#"><h4>단체 주문 배달 안내</h4></a>
                                                                    <a href="!#"><h4>단체 주문 신청</h4></a>
                                                                    <a href="!#"><h4>신청 내역 조회</h4></a>
                                                                </li>
                                                            </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li  onMouseEnter={onMouseEnterWhatsNew}  onMouseLeave={onMouseLeaveWhatsNew}>
                                            <Link to="/sub7" className={state.whatsNew ? 'on' : ''}><p>WHAT'S NEW</p></Link>
                                            <div className="category">
                                                <div ref={whatsNewBox} className={`coffee-box sub7${state.whatsNewBox ? ' on' : ' off'}`}>
                                                    <div className="coffee-content">
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>이벤트</h3></a>
                                                                    <a href="!#"><h4>전체</h4></a>
                                                                    <a href="!#"><h4>스타벅스 카드</h4></a>
                                                                    <a href="!#"><h4>스타벅스 리워드</h4></a>
                                                                    <a href="!#"><h4>온라인</h4></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>뉴스</h3></a>
                                                                    <a href="!#"><h4>전체</h4></a>
                                                                    <a href="!#"><h4>상품 출시</h4></a>
                                                                    <a href="!#"><h4>스타벅스와 문화</h4></a>
                                                                    <a href="!#"><h4>스타벅스 사회공헌</h4></a>
                                                                    <a href="!#"><h4>스타벅스 카드출시</h4></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>매장별 이벤트</h3></a>
                                                                    <a href="!#"><h4>일반 매장</h4></a>
                                                                    <a href="!#"><h4>신규 매장</h4></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>공지사항</h3></a>
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <a href="!#"><h3>월페이퍼</h3></a>
                                                                </li>
                                                            </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

            
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
            <Outlet />
        </>
    );
};
