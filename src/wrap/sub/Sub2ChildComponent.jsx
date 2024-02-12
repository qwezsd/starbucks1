import React from 'react';

export default function Sub2ChildComponent ({제품}) {
    return (
            <ul>
            {제품.map((item,idx)=>{
                return(
                    <li key={item.번호}>
                        <div className="img-box">
                        <a href="!#"><img src={`./img/starbucks/sub2/${item.이미지}`} alt="" /></a>
                        </div>
                        <div className="text-box">
                            <h4>{item.제품명}</h4>
                        </div>
                    </li>
                    )
                })
                }
            </ul>
    );
};