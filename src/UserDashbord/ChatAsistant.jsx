import { useState, useEffect } from 'react';
import OpenAI from 'openai';
import useAuth from '../Hooks/useAuth/useAuth';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

async function sendMessageToOpenAI(message) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
      logprobs: true,
      top_logprobs: 2,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return 'Error occurred while processing the request';
  }
}

function ChatAsistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [userQuestions, setUserQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, logOut } = useAuth();
  console.log(user);
  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('userQuestions'));
    if (storedQuestions) {
      setUserQuestions(storedQuestions);
    }
  }, []);
  const setInitialResponse = () => {
    setResponse('How can I help you today?');
  };

  const handleSend = async () => {
    const message = input.trim();
    if (message) {
      setLoading(true);
      const newQuestions = [message, ...userQuestions]; // Add the new question to the beginning of the array
      localStorage.setItem('userQuestions', JSON.stringify(newQuestions));
      setUserQuestions(newQuestions);

      const response = await sendMessageToOpenAI(message);
      setResponse(response);
      setInput('');
      setLoading(false);
      // Store the response in local storage
      localStorage.setItem(message, response);
    }
  };

  const handleNewChat = () => {
    setUserQuestions([]);
    setInput('');
    setInitialResponse();
  };

  const handleQuestionClick = (question) => {
    // Check if the question has an answer stored in local storage
    const storedResponse = localStorage.getItem(question);
    if (storedResponse) {
      setResponse(storedResponse);
    } else {
      // If there's no stored response, fetch from AI
      setLoading(true);
      sendMessageToOpenAI(question)
        .then((response) => {
          setResponse(response);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
          setResponse('Error occurred while processing the request');
        });
    }

    // Move the clicked question to the top of the list
    const updatedUserQuestions = [question, ...userQuestions.filter((q) => q !== question)];
    setUserQuestions(updatedUserQuestions);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex gap-5 bg-black  text-white  p-5">
      <div className="w-[20%]">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl text-center py-2 ">BQS Chatbot</h2>
          <button className="btn translate w-1/2 mx-auto" onClick={handleNewChat}>
            + New chat
          </button>
          <hr />
          <div>
            <div className="flex flex-col gap-2">
              {userQuestions.map((question, index) => (
                <button
                  className=" hover:bg-[#1C1F3D]  "
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  style={{ cursor: 'pointer' }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-top h-screen">
          <div tabIndex={0} role="button" className="btn btn-ghost  ">
            <div className="flex justify-center items-center gap-5">
              <img className="w-10 h-10  rounded-full" src={user?.photoURL} />

              <h2> {user?.email} </h2>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link to={'/myprofile'} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <li
                onClick={handleLogOut}
                className="hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000"
              >
                Logout
              </li>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center  bg-[#030221] rounded-md p-5 w-[80%]">
        {userQuestions.length === 0 ? (
          <div className="">
            <div className="lg:w-1/3 w-2/3 mx-auto py-5">
              <Player className="" autoplay loop src="/Ai.json"></Player>
            </div>
            <p className="text-white text-center text-5xl">How can I help you today?</p>
          </div>
        ) : (
          <div className="overflow-hidden overflow-y-scroll scroll-smooth w-[100%] max-w-screen flex flex-col gap-10 items-start m-[1rem] px-[2rem] ">
            <div className="flex gap-4">
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
              <p className="rounded-tr-lg bg-[#1C1F3D] p-3 font-bold">
                {userQuestions.length > 0 ? userQuestions[0] : ''}
              </p>
            </div>
            <div className="flex gap-4 w-fit  rounded">
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.postimg.cc/yN6vH6zy/blog-featured-what-is-chatbot.png"
                alt=""
              />
              <p className="rounded-md  bg-[#1C1F3D] p-3 font-bold">
                {loading ? 'Thinking, please wait...' : response}
              </p>
            </div>
          </div>
        )}

        <div className="mt-auto rounded flex items-center justify-center p-[1rem] bg-[#17172D]">
          <input
            className="bg-[#17172D] border-none w-[56rem] mx-auto p-4"
            type="text"
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            placeholder="send a message"
            value={input}
          />
          <button onClick={handleSend}>
            <img className="bg-transparent " src="https://i.ibb.co/Qv00yL2/send.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatAsistant;
