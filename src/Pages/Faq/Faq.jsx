/* Import needed files and folder */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/* FAQ section */
const Faq = () => {
  return (
    <div className="py-10 rounded-2xl ">
      {/* FAQ Header  */}
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-extrabold mb-20 text-white font-cinzel">
        Frequently Asked Questions
      </h2>
      {/* FAQ Body */}
      <div className="w-[85%] bg-purple-800 mx-auto bg-transparent py-14 rounded-2xl border-2 mb-20 pb-10 shadow-2xl shadow-[#2980b9]">
        {/* FAQ Content */}
        <div className="w-[90%]  mx-auto flex flex-col gap-y-4">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>What is BD Quick School about?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                BD Quick School is an online educational platform dedicated to providing
                high-quality learning resources across a variety of subjects. We offer engaging
                video lessons, interactive quizzes, and other tools to help students of all ages
                enhance their knowledge and skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How can I access the content on Bd Quick School?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Accessing content on Bd Quick School is easy! Simply visit our website and create a
                free account. Once registered, you can explore our extensive library of educational
                materials at your own pace.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is there a cost to use BD Quick School?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                BD Quick Schools offers both free and premium subscription options. While basic
                access is free, our premium subscription provides additional features such as
                ad-free content, downloadable resources, and personalized learning paths. Check our
                pricing page on BDQuickSchools.com for more details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>How often is the content updated on BD Quick Schools?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We strive to keep our content current and relevant on BD Quick Schools. New lessons,
                quizzes, and other materials are regularly added to ensure that our users have
                access to the latest information. Updates typically occur [frequency], providing a
                dynamic and evolving learning experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Do I need to create an account to access the resources on BD Quick Schools?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, creating an account on BD Quick Schools is necessary to access our full range
                of resources. This account allows you to track your progress, save your favorite
                lessons, and tailor your learning experience to meet your specific needs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Is there a progress tracking feature on BD Quick Schools?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely! BD Quick Schools includes robust progress tracking tools. These features
                help you monitor your performance, identify areas for improvement, and set
                personalized learning goals. We believe in empowering our users to track their
                educational journey effectively.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>What subjects or topics are covered on BD Quick Schools?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                BD Quick Schools covers a wide range of subjects including [list of subjects]. Our
                goal is to provide comprehensive educational content that caters to students across
                different grades and disciplines.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Can I use BD Quick Schools on my mobile device?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, BD Quick Schools is designed to be mobile-friendly. You can access our platform
                on your smartphone or tablet through a web browser. Additionally, we have a
                convenient mobile app available for download on both Android and iOS devices.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* ############# */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                How does BD Quick Schools ensure the quality of educational content?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Quality is our top priority at BD Quick Schools. Our content is developed and
                reviewed by experienced educators and experts in each subject area. We continuously
                monitor user feedback and update our materials to ensure they meet the highest
                educational standards.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <hr className="w-[400px] mx-auto mb-20 border-2" />
    </div>
  );
};

export default Faq;
