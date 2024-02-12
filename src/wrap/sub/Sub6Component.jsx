import React from 'react';
import './sass/sub6.scss'

export default function Sub2Component() {

    const ul1 = React.useRef();
    const [state, setState] = React.useState({
        isarrow1 : false,
        isarrow2 : false,
        row41 : true,
        row42 : false,
        color1 : true,
        color2 : false
    })

    const onClickmini1 = (e) => {
        e.preventDefault();
        setState({
            ...state,
            isarrow1 : !state.isarrow1
        })
    }
    const onClickmini2 = (e) => {
        e.preventDefault();
        setState({
            ...state,
            isarrow2 : !state.isarrow2
        })
    }

    const onClickProduct =(e)=>{
        e.preventDefault();
        setState({
            row41 : true,
            row42 : false,
            color1 : true,
            color2 : false
        })
    }
    const onClickPayment =(e)=>{
        e.preventDefault();
        setState({
            row41 : false,
            row42 :true,
            color1 : false,
            color2 : true,
        })
    }
    


    return (
        <main id='sub6' className='sub'>
            <div className="container">
                <div className="title">
                    <div className="title-box">
                        <h2><img src="./img/starbucks/sub6/ttl_b2b_guide.png" alt="" /></h2>
                        <div className="small-txt">
                            <img src="./img/starbucks/sub6/icon_home_w.png" alt="" />
                            <img src="./img/starbucks/sub6/icon_arrow_w.png" alt="" />
                            <h4>CORPORATE SALES</h4>
                            <img src="./img/starbucks/sub6/icon_arrow_w.png" alt="" />
                            <h4>단체 및 기업 구매 안내</h4>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="row1">
                            <img src="./img/starbucks/sub6/20211221_b2b_PC.jpg" alt="" />
                        </div>
                        <div className="row2">
                                <h3>
                            스타벅스에서 준비한 다양한 상품의 대량 구매 및 상담을 도와드립니다.
                        </h3>
                                <h4>
                            귀사의 브랜드 가치를 스타벅스가 함께하여 더욱 빛나게 합니다. 스타벅스 상품 및 카드 대량구매를 통하여 다양한 행사의 가치를 높여보세요.
                        </h4>
                        </div>
                        <div className="row3">
                                <h3>스타벅스 B2B에 대한 자세한 소개서를 확인해 보세요.</h3>
                                <button>B2B카탈로그 다운로드</button>
                        </div>
                        <div className="row4">
                                <button onClick={onClickProduct} className={state.color1 ? 'on' : 'off'}>상품 안내 및 구매 절차</button>
                                <button onClick={onClickPayment} className={state.color2 ? 'on' : 'off'}> 결제 수단 안내</button>
                        </div>
                        {state.row41 &&
                        <div className={`row4-1${state.row41 ? ' on' : ''}`}>
                                <ul>
                                    <li>
                                        <h4>스타벅스 단체 및 기업 구매가 가능한 상품의 종류는 MD 상품, 스타벅스 실물 카드, e-Gift Card(MMS/BULK) 가 있습니다. 각 상품별 안내 및 구매 절차를 확인해 주세요.</h4>
                                        </li>
                                    <li>
                                        <div className="bnt-box">
                                        <button>MD 상품</button>
                                        <button>실물카드</button>
                                        <button>e-Gift Card(MMS)</button>
                                        <button>e-Gift Card(BLUK)</button>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>스타벅스 MD 상품은 B2B 주문사이트를 통해 구매가 가능하며, 단체/기업고객을 위한 전용 상품 제작이 가능합니다. 특별한 선물로 즐거움을 선사하세요.</h4>
                                    </li>
                                    <li>
                                    <button>B2B 주문사이트 바로가기</button>
                                    </li>
                                    <li>
                                        <div className="process">
                                        <h3>구매절차</h3>
                                        <img src="./img/starbucks/sub6/b2b_icon_01.jpg" alt="" />
                                        <div className="text-box">
                                        <div className="p1">
                                            <div className="small-title">
                                            <h4>Step 1. B2B 주문사이트</h4>
                                            <p>[회원가입]</p>
                                            </div>
                                            <span>재판매 방지 등을 위해 가입 시<br />사업자 등록증 확인으로<br />거래처 등록까지 2~3영업일 소요</span>
                                        </div>
                                        <div className="p2">

                                        <div className="small-title">
                                            <h4>Step 2. 접수 및 담당자 상담</h4>
                                            </div>
                                            <span>
                                        사이트 내 상품 구매 혹은<br />구매 희망 상품 견적 관련 상담</span>
                                        </div>
                                        <div className="p3">

                                        <div className="small-title">
                                        <h4>Step 3. 결제 진행(선결제)</h4>
                                        </div>
                                        <span>ARS 결제 또는 무통장 입금</span>
                                        <p>[결제 수단 안내]</p>
                                        </div>
                                        <div className="p4">

                                            <div className="small-title">
                                            <h4>Step 4. 상품 발송</h4>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="caution">
                                        <h3>MD 상품 구매 유의사항</h3>
                                        <h4>· 재판매 방지 등을 위해 가입 시 사업자 등록증 확인하여 거래처 등록까지 2-3영업일 가량 소요될 수 있는 점 참고 부탁드립니다.</h4>
                                        <h4>· 모든 상품의 구매는 선입금을 원칙으로 합니다.</h4>
                                        <h4>· 최초 구매 및 결제가 완료되면 배송작업이 진행됩니다. 배송은 4-5 영업일이 소요되며, 택배사 사정에 따라 일정 변동이 있을 수 있습니다. <br />(주말 및 공휴일 제외 / 500개 이상 발주 시 별도 문의 바람)</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="consultation">
                                        <h3>상담 안내</h3>
                                        <h4>· 상담 및 운영 시간 : 평일 09 : 00 ~ 17 : 00 / 점심시간 12 : 30 ~ 13 : 30 (토 / 일 / 공휴일 제외)</h4>
                                        <h4>· 상품 문의 전화 : 070 - 4139 - 3440</h4>
                                        <h4>· e - mail : starbucksb2b@starbucks.co.kr</h4>
                                        <h5>* 단체 및 기업 구매 신청 또는 구매상담은 <em>[B2B 주문사이트]</em>에서 확인 해주세요.</h5>
                                        </div>
                                    </li>
                                </ul>
                        </div>}
                        {state.row42 &&
                        <div className={`row4-2${state.row42 ? ' on' : ''}`}>
                            <ul>
                                <li>
                                    <h4>스타벅스 B2B 거래는 선결제를 원칙으로 하며, ARS 카드 결제 또는 무통장 입금으로 결제가 진행됩니다.</h4>
                                </li>
                                <li>
                                    <button>B2B 주문사이트 바로가기<br />(상품, 실물카드)</button>
                                    <button>
                                        e-Gift Card 구매신청
                                        <br />
                                        (MMS/BULK)
                                    </button>
                                </li>
                                <li>
                                    <div className="card">
                                        <h3>ARS 카드 결제</h3>
                                        <h4>· ARS 결제는 스타벅스 담당자가 주문접수 확인 후 ARS 인증번호를 문자로 발송하므로, 접수일 +1일(영업일)이 소요될 수 있습니다.</h4>
                                        <h4>· 
                                        ARS 결제 완료되면 결제 영수증은 이니시스에서 신청자 정보의 e-mail로 자동 발송됩니다.
                                        </h4>
                                        <h5>* ARS 인증문자 수신 당일만 결제 가능하며 해당일이 지났을 경우 인증문자 재요청 필요합니다.</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="cash">
                                        <h3>무통장 입금</h3>
                                        <h4>· 무통장 입금 결제 희망 시 입금일자와 입금자명에 대해 사전 공유해 주시기 바랍니다.</h4>
                                        <h4>· 모든 입금 거래는 주문 확정 후 정확한 입금액을 확인 후 입금 바랍니다. (확정 전 선입금 금지)
                                        </h4>
                                        <h4>· 스타벅스 상품은 세금 계산서 발행 희망 시 출고 센터 측으로 문의 바랍니다.
                                        </h4>
                                        <h4>· 스타벅스 카드 및 e-Gift Card는 세금이 없는 유가증권 품목으로 세금계산서, 지출 증빙 및 현금영수증 발행이 불가합니다.</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        }
                        <div className="row5">
                        <div className="question">
                                        <div className="title-box">
                                        <h3>자주 하는 질문</h3>

                                        </div>
                                        <div className="txt-box">
                                            <h4>단체 및 기업 구매 안내에 대해 궁금하신 점이 생기셨나요?  <br />자주 하는 질문을 통해 궁금증을 해소해 보세요.</h4>
                                        <button>자주 하는 질문 바로가기</button>
                                        </div>
                                        </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="category1">
                            <div ref={ul1} onClick={onClickmini1} className="mini-title">
                            <a href="!#"><h3>단체 및 기업 구매 안내</h3><img src={`./img/starbucks/sub6/sbox_arrow_${state.isarrow1 ? 'up' : 'down'}.png`} alt="" /></a>
                            </div>
                            
                            <ul className={`${state.isarrow1 ? 'on' : 'off'}`}>
                                <div className="li-box">
                                <li><a href="!#"><h4>· MD 상품</h4></a></li>
                                <li><a href="!#"><h4>· 실물 카드</h4></a></li>
                                <li><a href="!#"><h4>· e-Gift Card(MMS)</h4></a></li>
                                <li><a href="!#"><h4>· e-Gift Card(BULK)</h4></a></li>
                                </div>
                            </ul>
                        </div>
                        <div className="category2">
                            <div onClick={onClickmini2} className="mini-title">
                            <a href="!#"><h3>단체 주문 배달 안내</h3><img src={`./img/starbucks/sub6/sbox_arrow_${state.isarrow2 ? 'up' : 'down'}.png`} alt="" /></a>
                            </div> 
                            <ul className={`${state.isarrow2 ? 'on' : 'off'}`}>
                                <div className="li-box">
                                <li><a href="!#"><h4>· 단체 주문 배달 안내</h4></a></li>
                                <li><a href="!#"><h4>· 단체 주문 신쳥</h4></a></li>
                                <li><a href="!#"><h4>· 신청 내역 조회</h4></a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

