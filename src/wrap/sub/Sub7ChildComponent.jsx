import React from 'react';

export default  function Sub7ChildComponent ({프로모션, 새소식, 매장별}) {
    return (
                <ul>
                    <li>
                        <div className="img-box">
                        <a href="!#"><img src="./img/starbucks/sub7/WEB_THUM_20230927081059562.jpg" alt="" /></a>
                        </div>
                        <div className="text-box">
                            <div className="p1">
                                <img src="./img/starbucks/sub7/icon_whats_new_pin.png" alt="" />
                                <h4>
                                디즈니 | 스타벅스 콜라보레이션 & 오텀 프로모션 2
                                </h4>
                            </div>
                            <div className="p2">
                                <h5>2023-10-05 ~ 2023-11-01</h5>
                            </div>
                        </div>
                    </li>
            {프로모션.map((item,idx)=>{
                return(
                    <li key={item.번호}>
                        <div className="img-box">
                        <a href="!#"><img src={`./img/starbucks/sub7/${item.이미지}`} alt="" /></a>
                        </div>
                        <div className="text-box">
                            <div className="p1">
                                <h4>{item.상세설명}
                                </h4>
                            </div>
                            <div className="p2">
                                <h5>{item.기간}</h5>
                            </div>
                        </div>
                    </li>
                )
            })
            }
            </ul>
);
};

