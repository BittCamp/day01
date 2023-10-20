import React from 'react';

const Lion = (props) => {
    const {name} = props; //비구조 할당. 구조분해
    return (
        <div>
            <h1>나는 {name} 컴포넌트이다. </h1>
        </div>
    );
};

export default Lion;