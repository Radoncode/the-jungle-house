import { useState } from 'react';

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Ask your question here');

    const handleClick = () => {
        alert(inputValue);
    }
    return <div>
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleClick}>Alert me 🚨</button>
    </div>
}

export default QuestionForm;