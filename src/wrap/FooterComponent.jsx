import React from 'react';
import './sass/footer.scss'

export default function FooterComponent () {
    return (
        <div id='footer'>
            <div className="row1">
                <div className="container">
                    <div className="content">
                        {/* <ul>
                            <li><h4>CUSTOMER SERVICE & IDEAS</h4></li>
                            <li><h4>자주 하는 질문</h4></li>
                            <li><h4>고객의 소리</h4></li>
                            <li><h4>스타벅스 이용 팁</h4></li>
                            <li><h4>고객 경험 설문조사</h4></li>
                            <li><h4>비회원 전자영수증 조회</h4></li>
                        </ul> */}
                        <ul>
                                <li><a href="!#"><h3>COMPANY</h3></a></li>
                                <li><a href="!#"><h4>한눈에 보기</h4></a></li>
                                <li><a href="!#"><h4>스타벅스 사명</h4></a></li>
                                <li><a href="!#"><h4>스타벅스 소개</h4></a></li>
                                <li><a href="!#"><h4>컴플라이언스</h4></a></li>
                                <li><a href="!#"><h4>국내 뉴스들</h4></a></li>
                                <li><a href="!#"><h4>세계의 스타벅스</h4></a></li>
                                <li><a href="!#"><h4>글로벌 뉴스룸</h4></a></li>
                        </ul>
                        <ul>
                                <li><a href="!#"><h3>CORPORATE SALES</h3></a></li>
                                <li><a href="!#"><h4>단체 및 기업 구매 안내</h4></a></li>
                                <li><a href="!#"><h4>단체 주문 배달 안내</h4></a></li>
                        </ul>
                        <ul>
                                <li><a href="!#"><h3>PARTNERSHIP</h3></a></li>
                                <li><a href="!#"><h4>신규 입점 제의</h4></a></li>
                                <li><a href="!#"><h4>협력 고객사 등록신청</h4></a></li>
                                <li><a href="!#"><h4>중개업체 확인</h4></a></li>
                        </ul>
                        <ul>
                                <li><a href="!#"><h3>ONLINE COMMUNITY</h3></a></li>
                                <li><a href="!#"><h4>페이스북</h4></a></li>
                                <li><a href="!#"><h4>트위터</h4></a></li>
                                <li><a href="!#"><h4>유튜브</h4></a></li>
                                <li><a href="!#"><h4>인스타그램</h4></a></li>
                        </ul>
                        <ul>
                                <li><a href="!#"><h3>RECRUIT</h3></a></li>
                                <li><a href="!#"><h4>채용 소개</h4></a></li>
                                <li><a href="!#"><h4>채용 지원하기</h4></a></li>
                        </ul>
                        <img src="./img/starbucks/footer/footer_logo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="container">
                    <div className="content">
                        <div className="img-box">
                            <img src="./img/starbucks/footer/footer_award_2211_01.jpg" alt="" />
                            <img src="./img/starbucks/footer/footer_award_2211_02.jpg" alt="" />
                            <img src="./img/starbucks/footer/footer_award_2211_03.jpg" alt="" />
                            <img src="./img/starbucks/footer/footer_award_2211_04.jpg" alt="" />
                            <img src="./img/starbucks/footer/footer_award_2211_05.jpg" alt="" />
                            <img src="./img/starbucks/footer/footer_award_2211_06.jpg" alt="" />
                            <img src="./img/starbucks/footer/footer_award_2211_07.jpg" alt="" />
                        </div>
                    </div>
                </div> 
            </div>
            <div className="row3">
                <div className="container">
                    <div className="content">
                        <ul>
                            <li>
                                    <a className='important' href="!#">개인정보처리방침</a>
                                    <a href="!#">영상정보처리기기 운영관리 방침</a>
                                    <a href="!#">홈페이지 이용약관</a>
                                    <a className='important' href="!#">위치정보 이용약관</a>
                                    <a href="!#">스타벅스 카드 이용약관</a>
                                    <a href="!#">신세계 유니버스 클럽 이용약관</a>
                                    <a href="!#">비회원 이용약관</a>
                                    <a href="!#">My DT Pass 서비스 이용약관</a>
                                    <a className='last' href="!#">윤리경영 핫라인</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className="button-box">
                                    <button>찾아오시는 길</button>
                                    <button>신규입점제의</button>
                                    <button>사이트 맵</button>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>사업자등록번호 : 201-81-21515</p>
                                <p>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</p>
                                <p>TEL : 1522-3232</p>
                                <p>개인정보 책임자 : 이찬우</p>
                            </li>
                        </ul>
                        <ul>
                            <li><h4>ⓒ 2023 Starbucks Coffee Company. All Rights Reserved.</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
