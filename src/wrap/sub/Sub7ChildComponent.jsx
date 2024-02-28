import React from 'react';

export default  function Sub7ChildComponent ({프로모션, 새소식, 매장별}) {

    const listItem = (list) =>{
        return list.map((item, idx)=>(
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
        ))
    }
    return (
        <div>
            <div className="box">
                <h2>프로모션 & 이벤트</h2>
                <ul>
                    {listItem(프로모션)}
                </ul>
            </div>
            <div className="whole2">
                <div className="box">
                    <h2>새소식</h2>
                    <ul>
                        {listItem(새소식)}
                    </ul>
                </div>
            </div>
            <div className="box">
                <h2>매장별 이벤트</h2>
                <ul>
                    {listItem(매장별)}
                </ul>
            </div>
        </div>
);
};

