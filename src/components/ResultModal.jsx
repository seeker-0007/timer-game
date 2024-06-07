import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, handleTimerReset },
  ref
) {
  const dialog = useRef();

  const isUserLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={handleTimerReset}>
      {isUserLost ? <h2>You lost!</h2> : <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds!</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTimeRemaining} seconds left !</strong>
      </p>
      <form method="dialog" onClick={handleTimerReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
