import React from 'react'
import './sass/section3.scss'


export default function Section3Component () {
    return (
        <div id='section3'>
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="col1">
                            <img src="./img/starbucks/section3/rewards-logo.png" alt="" />
                        </div>
                        <div className="col2">
                            <div className="row1">
                                <div className="txt-box1">
                                    <h2>스타벅스만의 특별한 혜택, 스타벅스 리워드</h2>
                                    <h3>스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요. <br />스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.</h3>
                                </div>
                                <div className="btn-box1">
                                    <button className='signUp'>회원가입</button>
                                    <button className='signIn'>로그인</button>
                                </div>
                            </div>
                            <hr />
                            <div className="row2">
                                <div className="txt-box2">
                                    <p>회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요! <br />카드를 등록하여 스타벅스 리원드 외원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다.</p>
                                </div>
                                <div className="btn-box2">
                                    <button className='gift'>e-Gift Card 선물하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

