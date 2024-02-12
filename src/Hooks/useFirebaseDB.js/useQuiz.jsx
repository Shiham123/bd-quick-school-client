import { useEffect, useState } from 'react';
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';

const useQuiz = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    async function fetchQuiz() {
      const firebaseDB = getDatabase();
      const quizRef = ref(firebaseDB, 'quiz');
      const quizQuery = query(quizRef, orderByKey());

      try {
        setIsError(false), setIsLoading(true);

        // request firebase database
        const snapShot = await get(quizQuery);
        setIsLoading(false);

        if (snapShot.exists()) {
          setQuiz((prevQuiz) => {
            return [...prevQuiz, ...Object.values(snapShot.val())];
          });
        } else {
          return;
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false), setIsError(true);
      }
    }

    fetchQuiz();
  }, []);

  return { isLoading, isError, quiz };
};

export default useQuiz;
