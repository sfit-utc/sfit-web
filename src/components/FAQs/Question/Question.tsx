interface Question {
    question: string;
    answers: string[];
  }
  
  function Question({ question }: { question: Question }) {
    return (
      <div className="py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="font-bold text-lg md:text-2xl">{question.question}</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <div className="text-neutral-600 mt-3 group-open:animate-fadeIn text-md md:text-xl">
            {question.answers.map((answer, index) => (
              <p key={index}>
                {answer}
              </p>
            ))}
          </div>
        </details>
      </div>
    );
  }
  
  export default Question;
  