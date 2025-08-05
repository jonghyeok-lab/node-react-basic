import React, {Fragment, useState} from "react";
import Try from "./Try";

const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * 9));
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {

    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers);
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런!');
            setTries((prevState) => {
                return [...prevState, {try: value, result: '홈런'}]
            })
            alert('게임을 다시 시작');
            setValue('');
            setAnswer(getNumbers());
            setTries([])
        }
    }

    const onChangeInput = (e) => {

    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return <Try key={`${i + 1}차 시도`} tryInfo={v}/>
                })}
            </ul>
        </>
    );
}