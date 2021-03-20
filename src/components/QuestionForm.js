const QuestionForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target['my_input'].value);
    }
    return <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='my_input' defaultValue='type your text here' />
                    <button type='submit'>Entrer</button>
                </form>
    </div>
}

export default QuestionForm;