import {useState} from "react";

type QuestionAnswerProps = {
  question: string;
  answer: string;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    if(isOpen) setIsOpen(false);
    if(!isOpen) setIsOpen(true);
  }

  return (
      <>
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex justify-between items-center " onClick={handleClick} >
            <h2 className={`${isOpen ? 'font-bold' : ''} text-md text-neutral-very-dark-grayish-blue`}>{question}</h2>
            <button className="h-10 w-10 flex basis-auto justify-center items-center " >
              <img className={`${isOpen ? 'transform rotate-180' : ''} h-3 w-4`} src="/images/icon-arrow-down.svg" alt="" />
            </button>
          </div>
          <p className={`${isOpen ? 'block' : 'hidden'} max-w-[320px]  md:max-w-[40ch] text-neutral-very-dark-grayish-blue`}>{answer}</p>
          <hr className="mt-2"/>
        </div>
      </>
  );
};

export default QuestionAnswer;
