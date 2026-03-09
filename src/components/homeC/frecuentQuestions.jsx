import './styles/frecuentQuestions.css'

export const FrecuentQuestions = () => {
    const questions = [
        {
            id: 1,
            question: "¿Qué es la contaminación?",
            answer: "La contaminación es el proceso por el cual se introducen sustancias nocivas en el medio ambiente, como el aire, el agua o el suelo."
        },
        {
            id: 2,
            question: "¿Qué es la contaminación?",
            answer: "La contaminación es el proceso por el cual se introducen sustancias nocivas en el medio ambiente, como el aire, el agua o el suelo."
        },
        {
            id: 3,
            question: "¿Qué es la contaminación?",
            answer: "La contaminación es el proceso por el cual se introducen sustancias nocivas en el medio ambiente, como el aire, el agua o el suelo."
        }
    ]

    return (
        <section className="frecuent-questions">
            <h2>Frecuent Questions</h2>
            {questions.map(question => (
                <details key={question.id}>
                    <summary>{question.question}</summary>
                    <p>{question.answer}</p>
                </details>
            ))}
        </section>
    )
}