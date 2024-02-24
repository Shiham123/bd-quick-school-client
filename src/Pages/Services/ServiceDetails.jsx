import { useParams } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import DescriptionIcon from '@mui/icons-material/Description';
import QuizIcon from '@mui/icons-material/Quiz';
import FacebookIcon from '@mui/icons-material/Facebook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import PayDataFrom from './PayDataFrom';
import QuizModal from '../../quiz/shared/QuizModal';
import useLocationContext from '../../context/useLocationContext';
// import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useGetIdBasedServicesQuery } from '../../redux/services/ServicesApiSlice';
import ServicesBookmark from './ServicesBookmark';
import LikeDislikeComponent from './LikeDislikeComponent';
import { useGetQuizUserByEmailQuery } from '../../redux/IsQuizUser/QuizUserSlice';
import { useEffect } from 'react';

const ServiceDetails = () => {
  const { id } = useParams();
  const { isModalOpen, closeModal, openModal } = useLocationContext();
  // const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data, isLoading } = useGetIdBasedServicesQuery(id);

  const loggedInUserEmail = user?.email, // destructuring the value
    currentProductId = data?._id;

  const { data: quizUserData, isLoading: quizUserLoading } = useGetQuizUserByEmailQuery({ id: currentProductId, email: loggedInUserEmail });

  useEffect(() => {
    const isSubmit = quizUserData?.submitQuiz;
    if (isSubmit) {
      closeModal();
    } else {
      openModal();
    }
  }, [closeModal, openModal, quizUserData?.submitQuiz, quizUserData]);

  // axiosPublic
  //   .get(`/api/v2/quizUsers/${id}/${user?.email}`)
  //   .then((response) => {
  //     const submitQuiz = response.data?.submitQuiz;
  //     if (submitQuiz) {
  //       closeModal();
  //     } else {
  //       openModal();
  //     }
  //   })
  //   .catch((error) => console.log(error));

  if (isLoading || quizUserLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box className=" max-w-screen-2xl mx-auto text-white px-3 mt-4 pr-2">
      <Grid container spacing={8} columns={{ md: 12 }}>
        <Grid item md={8}>
          <Box>
            <Box className=" text-white space-y-6">
              <Typography variant="h4" className="text-xl font-bold text-yellow-400">
                {data?.title}
              </Typography>
              <Typography variant="h6" className="text-sm font-bold text-justify">
                {data?.details}
              </Typography>
            </Box>
            {/* Course instructor */}
            <Box className="mt-12">
              <Box>
                <Typography variant="h4" className="text-xl font-bold  text-yellow-400 ">
                  Course instructor
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={8} sx={{ mt: 2 }} alignItems="center">
                <Box>
                  <img src={data?.teacherImage} alt="" className="h-[150px] w-[250px] rounded-sm shadow-md shadow-yellow-400 " />
                </Box>
                <Box className="space-y-2">
                  <Typography variant="h5" className="font-bold text-yellow-200 uppercase">
                    {data?.teachername}
                  </Typography>
                  <Typography variant="h6" className="md:w-2/3 lg:w-[650px]">
                    {data?.designation}
                  </Typography>
                  <Typography variant="h6" className="md:w-2/3 lg:w-[650px]">
                    {data?.graduation}
                  </Typography>
                  <Typography variant="h6" className="md:w-2/3 lg:w-[650px]">
                    {data?.postgraduation}
                  </Typography>
                </Box>
              </Stack>
            </Box>
            {/* What you will learn by doing the course */}
            <Box className="mt-12">
              <Box className="my-8">
                <Typography variant="h4" className="text-xl font-bold text-yellow-400 mt-12">
                  What you will learn by doing the course
                </Typography>
              </Box>
              {/* <Grid
                container
                spacing={4}
                columns={{ md: 12 }}
                justifyContent="center"
                alignItems="center"
              > */}
              <div
                dangerouslySetInnerHTML={{ __html: ` ${data?.outcome}` }}
                className="text-xl font-bold max-w-3xl space-y-3 text-justify px-2"
              ></div>
              {/* <Grid item md={6}>
                  <p className="flex gap-x-2 items-baseline text-xl">
                    <IconButton>
                      <CheckIcon className="text-yellow-400" />
                    </IconButton>
                  </p>
                </Grid> */}
              {/* </Grid> */}
            </Box>
          </Box>
        </Grid>

        {/* Right Sidebar */}
        <Grid item md={4} className="relative">
          <Box className="mt-6">
            <img src={data?.image} alt="" className="border-2 rounded-md border-yellow-400 w-full" />
            {/* Price Section */}
            <Box className="flex items-center mt-6">
              {/* Regular Price */}
              <Typography variant="h5" className="text-yellow-400 font-bold">
                {' '}
                Price:
              </Typography>
              <IconButton>
                <AttachMoneyIcon className="text-yellow-400" />
                <Typography variant="h5" className="text-yellow-400">
                  {data.price}{' '}
                </Typography>
              </IconButton>
              {/* Discount Price */}
              <del className="text-gray-200 flex items-center">
                <Typography variant="h6" className="text-white">
                  {Number(Number(data.price) + 7)}
                </Typography>
              </del>
            </Box>
            <p className="-mt-2">
              Promo Code Applied <span className="text-yellow-400 font-bold">MS1050</span>
            </p>
            {/* -------- ! --- quiz button------------- */}
            <PayDataFrom image={data.image} />
            {/* <Video/> */}

            {isModalOpen && <QuizModal />}

            {/* -------- ! --- quiz button------------- */}
          </Box>
          {/* Icon Button and Details */}
          <Box className="my-12 border  border-sky-400 p-3 ">
            <Box className="flex items-center gap-2">
              <IconButton>
                <PersonOutlineIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6"> Total Enrolled 2398</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2">
              <IconButton>
                <AccessTimeIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6">Time Required 25 hours</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2">
              <IconButton>
                <SlowMotionVideoIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6"> 41 Videos</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2">
              <IconButton>
                <DescriptionIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6"> 41 Notes</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2">
              <IconButton>
                <QuizIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6"> 22 set Quiz</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2">
              <IconButton>
                <FacebookIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6"> Facebook Support Group</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2">
              <IconButton>
                <PersonOutlineIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6">Validity 6 Months</Typography>
            </Box>
            {/* End */}
            <Box className="flex items-center gap-2 mb-2">
              <IconButton>
                <CalendarTodayIcon className="text-xl text-yellow-400" />
              </IconButton>
              <Typography varient="h6"> Total Enrolled 2398</Typography>
            </Box>
            {/* End */}
          </Box>

          {/* Footer */}
          <Grid container columns={{ xs: 12, sm: 12, md: 12 }} spacing={{ md: 8, xs: 2, sm: 2 }} className="md:absolute md:bottom-0">
            <Grid item md={6} xs={12} sm={12}>
              <Box className="flex items-center gap-2">
                <IconButton>
                  <AlternateEmailIcon className="text-xl text-sky-400" />
                </IconButton>
                <Typography varient="h6">bdquick@school.com</Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <Box className="flex items-center gap-2">
                <IconButton>
                  <PhoneInTalkIcon className="text-xl text-sky-400" />
                </IconButton>
                <Typography varient="h6">017 21 33 21 33</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box className="flex gap-8">
        <LikeDislikeComponent currentProductId={currentProductId} loggedInUserEmail={loggedInUserEmail} />
      </Box>
      <ServicesBookmark currentProductId={currentProductId} loggedInUserEmail={loggedInUserEmail} />
      <hr className="my-16" />
    </Box>
  );
};

export default ServiceDetails;
