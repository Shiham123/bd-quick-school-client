import axios from 'axios';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
const AdminProfile = () => {
  const [teams, setTeam] = useState([]);

  // Fetch Data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/Admin_Profile.json');
        setTeam(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="w-[90%] md:w-[70%] mx-auto py-24">
        {/* Heading Admin Profile */}
        <h1 className="text-5xl font-extrabold leading-snug">
          Welcome to Our BD Quick School Gateway to Learning Excellence!
        </h1>
        {/* Description Admin Profile */}
        <h3 className="py-6 text-xl">
          At BD Quick School we are committed to providing a dynamic and user-friendly platform for
          your educational journey. Whether you're a student, professional, or lifelong learner, our
          website offers a diverse range of courses to enhance your knowledge and skills.
        </h3>
        {/* Admin Panel Team */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 py-10">
          {teams.map((team, idx) => (
            <div className="bg-white p-8 text-center rounded-3xl shadow-2xl" key={idx}>
              <img
                className="w-[150px] h-[150px] mx-auto rounded-full object-cover"
                src={team.profile}
                alt=""
              />
              <h2 className="text-3xl font-bold pt-4">{team.userName}</h2>
              <h2 className="text-xl font-semibold">{team.role}</h2>
              <p className="py-4 text-[17px]">{team.bio}</p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <div className="p-4 text-center border-b md:border-b-white md:border-r">
                  <h2 className="text-4xl font-bold">{team.articles}</h2>
                  <h5 className="text-xl">Articales</h5>
                </div>
                <div className="p-4 text-center border-b md:border-b-white md:border-b-none md:border-r">
                  <h2 className="text-4xl font-bold">{team.followers}k</h2>
                  <h5 className="text-xl">Follwers</h5>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-4xl font-bold">{team.rating}</h2>
                  <h5 className="text-xl">Rating</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
