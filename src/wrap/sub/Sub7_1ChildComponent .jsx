import React from 'react';

export default  function Sub7_1ChildComponent ({프로모션, 새소식, 매장별}) {
    return (
                <ul>
                {새소식.map((item,idx)=>{
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
                        </div>
                    </li>
                )
            })
            }
            </ul>
);
};

