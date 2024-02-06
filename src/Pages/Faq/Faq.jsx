/* Import needed files and folder */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';
import { useTranslation } from 'react-i18next';

/* FAQ section */
const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { t, i18n } = useTranslation();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="py-10 rounded-2xl ">
      {/* FAQ Header  */}
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-extrabold mb-12 text-white font-cinzel">
        {t('faqhead')}
      </h2>
      {/* FAQ Body */}
      <div className="w-[80%] rounded-sm bg-purple-800 mx-auto bg-transparent py-12  mb-20 shadow-all">
        {/* FAQ Content */}
        <div className="w-[90%] mx-auto flex flex-col gap-4 ">
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            className="py-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                What is BD Quick School about?
              </Typography>
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
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            className="py-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                How can I access the content on Bd Quick School?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Accessing content on Bd Quick School is easy! Simply visit our website and create a
                free account. Once registered, you can explore our extensive library of educational
                materials at your own pace.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            className="py-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Is there a cost to use BD Quick School?
              </Typography>
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
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
            className="py-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                How often is the content updated on BD Quick Schools?
              </Typography>
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
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
            className="py-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
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
          <Accordion
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
            className="py-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Is there a progress tracking feature on BD Quick Schools?
              </Typography>
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
        </div>
      </div>
      <hr className="w-[400px] mx-auto mb-20 border-2" />
    </div>
  );
};

export default Faq;
