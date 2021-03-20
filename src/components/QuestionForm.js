import { useState } from 'react';

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Ask your question here');
    const isInputError = inputValue.includes('f');

    return <div>
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => isInputError ?
       alert(`🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici`): alert(inputValue)}>Alert me 🚨</button>
    </div>
}

export default QuestionForm;