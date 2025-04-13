import { useState, useEffect } from "react"

export const LoadingScreen = ({onComplete}) => {
    const [text,setText] = useState("");
    const fullText = "Loading";

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.substring(0,index));
                index++;
            } else {
                clearInterval(intervalId);
                setTimeout(() => {
                    onComplete();
                  }, 1000);
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [onComplete]);

    return(
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font-mono font-bold">
          {text} <span className="animate-blink">|</span>
        </div>
  
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    );
};