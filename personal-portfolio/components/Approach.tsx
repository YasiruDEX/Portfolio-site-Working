import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>
      <div className="my-20 flex flex-wrap justify-center gap-4 w-full">
        <Card
          title="DeepLearning.AI"
          icon={<AceternityIcon order="DeepLearning.AI" />}
          des={
            <>
              <p>• AI for Medical Diagnosis</p>
              <p>• Supervised Machine Learning: Regression and Classification</p>
              <p>• Structuring Machine Learning Projects</p>
              <p>• Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</p>
            </>
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="MathWorks"
          icon={<AceternityIcon order="MathWorks" />}
          des={
            <>
              <p>• Deep Learning for Object Detection</p>
              <p>• Deep Learning for Computer Vision Specialization</p>
              <p>• Advanced Deep Learning Techniques for Computer Vision</p>
              <p>• Introduction to Deep Learning for Computer Vision</p>
            </>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Coursera"
          icon={<AceternityIcon order="Coursera" />}
          des={
            <>
              <p>• Building Production-Ready Apps with LLMs</p>
              <p>• Superhero Name Generator with TensorFlow</p>
              <p>• Optimize TensorFlow Models For Deployment with TensorRT</p>
            </>
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="HackerRank"
          icon={<AceternityIcon order="HackerRank" />}
          des="Problem Solving (Intermediate), Python (Basic), SQL (Basic)"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-indigo-700 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          title="Microsoft"
          icon={<AceternityIcon order="Microsoft" />}
          des="AI on Microsoft Azure"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-teal-500 rounded-3xl overflow-hidden"
            colors={[[82, 182, 154]]}
          />
        </Card>

        <Card
          title="Johns Hopkins University"
          icon={<AceternityIcon order="Johns Hopkins" />}
          des="Beginning Custom Projects with Raspberry Pi"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gray-700 rounded-3xl overflow-hidden"
            colors={[[147, 112, 219]]}
          />
        </Card>

        <Card
          title="LinkedIn Skills"
          icon={<AceternityIcon order="LinkedIn Skills" />}
          des="Learning FPGA Development"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-600 rounded-3xl overflow-hidden"
            colors={[[255, 204, 0]]}
          />
        </Card>
      </div>
    </section>
  );
};


export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[22rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};



// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
