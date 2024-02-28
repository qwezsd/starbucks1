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
                                <input type="text" id='user_id' name='id' placeholder='아이디를 입력해 주세요'/>
                                <input type="text" id='user_pw' name='pw' placeholder='비밀번호를 입력해 주세요'/>
                            </p>
                            <p className='p3'>
                                <label htmlFor="">
                                    <input type="checkbox" />아이디 저장
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
