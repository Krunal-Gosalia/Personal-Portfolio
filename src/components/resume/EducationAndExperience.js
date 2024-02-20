import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const EducationAndExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h3 className="font-bold">Educational Qualification</h3>
        </div>
        <div className="mt-6 lgl:mt-6 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Masters Of Science"
            subTitle="University Of North Carolina at Charlotte"
            result="3.8 GPA"
            heightRatio="h-1/2"
          />
          <ResumeCard
            title="Bachelor Of Engineering"
            subTitle="University Of Mumbai"
            result="1st Class"
            heightRatio="h-1/2"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h3 className="font-bold">Job Experience</h3>
        </div>
        <div className="mt-6 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Consultant - Full Stack Developer"
            subTitle="Deloitte - (2017-Present)"
            result="USA"
            heightRatio="h-1/3"

          />
          <ResumeCard
            title="Performance Engineer Consultant"
            subTitle="Accenture - (2013 - 2015)"
            result="India"
            heightRatio="h-1/3"
          />
          <ResumeCard
            title="Software Developer Analyst"
            subTitle="Infini Systems - (2012 - 2013)"
            result="India"
            heightRatio="h-1/3"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default EducationAndExperience