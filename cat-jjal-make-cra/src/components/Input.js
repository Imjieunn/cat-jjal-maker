import React from "react";

const Input = ({ updateMainCat }) => {
    const [value, setValue] = React.useState('');
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    const [errorMessage, setErrorMessage] = React.useState('');

    function handleInputChange(e) {
        const userValue = e.target.value;
        // console.log(includesHangul(userValue));
        if (includesHangul(userValue)) {
            setErrorMessage("한글은 입력할 수 없습니다.");
        } else {
            setErrorMessage("");
        }
        setValue(userValue.toUpperCase());
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setErrorMessage('');
        if (value === '') { setErrorMessage("빈 값으로 만들 수 없습니다."); return; }
        updateMainCat(value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name"
                value={value}
                placeholder="영어 대사를 입력해주세요" onChange={handleInputChange} />
            <button type="submit">생성</button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
        </form>
    );
}

export default Input;