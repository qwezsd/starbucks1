import React from 'react';
import './sass/sub8.scss'

export default function Sub8SignUpComponent () {
    return (
        <div id="sub8">
            <div className="container">
                <div className="container-box">
                    <div className="title">
                        <h2>로그인</h2>
                    </div>
                    <div className="content">
                        <div className="logIn-box">
                            <p className='p1'>
                                <span className='welcome'>Welcome!</span>
                                <span>스타벅스 코리아에 오신 것을 환영합니다.</span>
                            </p>
                            <p className='p2'>
                                <div className="input-box">
                                    <input type="text" id='user_id' name='id' placeholder='아이디를 입력해 주세요'/>
                                    <input type="text" id='user_pw' name='pw' placeholder='비밀번호를 입력해 주세요'/>
                                </div>
                                <div className="check-box">
                                    <label htmlFor="">
                                        <input type="checkbox" />아이디 저장
                                    </label>
                                </div>
                                <div className="button-box">
                                    <button>로그인</button>
                                </div>
                                <div className="notice-box">
                                    <span className='notice'>
                                        * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이 있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.
                                        <br />
                                        * 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
                                    </span>
                                </div>
                            </p>
                            <p className='p3'>
                                <span className='sign'>회원가입</span>
                                <i>|</i>
                                <span className='sign'>아이디 찾기</span>
                                <i>|</i>
                                <span className='sign'>비밀번호 찾기</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
