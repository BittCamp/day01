import React from 'react';

const Person = ( {name, age} ) => { //단 객체기호 무조건 들어가야됨. props로 안받고 name, age로 받아도 된다.
    // const{name, age} = props;
    return (
        <div>     
            <h1>나의 이름은 {name} 이고 , 나이는 {age} 살 입니다. </h1>
        </div>
    );
};

export default Person;