import { useState } from "react";
import { faqs } from "../../lib/dummy";
import { twMerge } from "tailwind-merge";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Accordion = () => {
  const [states, setStates] = useState(
    Array.from({ length: faqs.length }, () => false)
  );
  return (
    <div className="p-4 gap-2 flex flex-col">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          {...faq}
          state={states[index]}
          showingHandler={() => {
            setStates((prev) => {
              const isCurrentShowing = prev[index];
              return Array.from({ length: faqs.length }, (_, i) => {
                if (isCurrentShowing) {
                  return false;
                }
                return i === index ? true : false;
              });
            });
          }}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordion;

function AccordionItem({ question, answers, state, showingHandler, index }) {
  return (
    <div>
      <button
        onClick={showingHandler}
        className="bg-zinc-800 w-full justify-between p-4"
      >
        {question} {state ? <IoChevronUp /> : <IoChevronDown />}
      </button>
      <div
        className={twMerge(
          "px-2 flex-col transition-all overflow-hidden h-0 duration-500",
          state && "border-0 flex gap-2 h-auto p-2"
        )}
      >
        {answers.map((answer, i) => {
          if (index === 0 && i === 1) {
            return (
              <a key={answer} className="underline">
                {answer}
              </a>
            );
          }
          return <p key={answer}>{answer}</p>;
        })}
      </div>
    </div>
  );
}
