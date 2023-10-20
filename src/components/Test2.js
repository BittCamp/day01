import React from 'react';

const Test2 = () => {
    //함수 영역 - 조건문 , 제어문 ... 등 사용 가능
    let title = '신상명세서'
    const name = '홍길동'
    const age = 25
    const addr = '서울'

    const css1 = {
        color: 'red',
        backgroundColor: 'yellow',
        fontsize: '30pt',
        padding: 20, //글자 생략하면 ''안써도 된다.
        margin: 10,
        border: '3px solid #000'
    }

    const css2 = {
        width: 400,
        color: '#fff',
        backgroundColor: 'hotpink',
        fontsize: 20,
        padding: 15,
        margin: 30, //숫자끝에는 ,꼭 붙여야된다.
    }
    return (
        // <>   //Fragment div 로  나누는 건데 div 글을 생략하고 <>이렇게써줘도된다.
        <>
            <h2>JSX 영역</h2>
            <h2 style={ css1 }>{title}</h2>
            <ul>
                <li style={ css2 }>이름 : { name } </li>
                <li style={{ backgroundColor: 'greenyellow', padding: 15, margin: 'auto' }}>
                    나이 : { age } 살  { age >= 19 ? '성인' : '청소년' }
                </li>
                <li>주소 : { addr }</li>
            </ul>
        </>
    );
};

export default Test2;