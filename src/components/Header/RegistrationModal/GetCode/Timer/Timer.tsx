import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, setTimer]);
  return (
    <>
      {timer > 0 ? (
        <p>
          Повторно получить код можно через 0:{timer < 10 ? `0${timer}` : timer}
        </p>
      ) : (
        <button onClick={() => setTimer(30)}>Получить новый код</button>
      )}
    </>
  );
};
