import React from 'react';

export default  function Sub7_2ChildComponent ({매장별}) {
    return (
                <ul>
                {매장별.map((item,idx)=>{
                return(
                    <li className='store' key={item.번호}>
                        <div className="img-box" id='store'>
                        <a href="!#"><img className="imgsize" src={`./img/starbucks/sub7/${item.이미지}`} alt="" /></a>
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

