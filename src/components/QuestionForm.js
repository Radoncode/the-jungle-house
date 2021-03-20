import { useState } from 'react';

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Ask your question here');

    const checkValue = (value) => {
        if(!value.includes('f')){
            setInputValue(value);
        }
    }
    return <div>
                <textarea
                    value={inputValue}
                    onChange={(e) => checkValue(e.target.value)}
                />
                <button onClick={()=> alert(inputValue)}>Alert me 🚨</button>
    </div>
}

export default QuestionForm;