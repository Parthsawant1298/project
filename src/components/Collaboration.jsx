import React from 'react';
import { brainwave, check } from "../assets";
import { collabApps } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const FeatureItem = ({ title, description }) => (
  <li className="mb-6 last:mb-0">
    <div className="flex items-center p-4 rounded-lg hover:bg-n-7/50 transition-colors">
      <img src={check} width={24} height={24} alt="check" className="flex-shrink-0" />
      <h6 className="body-2 ml-5 font-medium">{title}</h6>
    </div>
    <p className="body-2 mt-3 text-n-4 ml-11">{description}</p>
  </li>
);

const CollaborationFeatures = [
  {
    title: "End-to-End Pipeline Automation",
  },
  {
    title: "Interactive Data Analysis with LLaMA 3 and Pandas AI",
  },
  {
    title: "Custom Synthetic Dataset Generation",
  },
  {
    title: "AI-Driven Visualization and Explanations",
  },
  {
    title: "Personalized AI Chatbot",
  }
];

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex items-start gap-16">
        {/* Left Content Section */}
        <div className="max-w-[34rem] flex-shrink-0">
          <h2 className="h2 mb-8 leading-tight">
            Platform for Seamless Automation
          </h2>

          <ul className="mb-10">
            {CollaborationFeatures.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>

          <Button className="w-full sm:w-auto">
            Try It Now
          </Button>
        </div>

        {/* Right Visual Section */}
        <div className="lg:flex-1 mt-10 lg:mt-0">
          <p className="body-2 text-n-4 mb-16 lg:mb-32 lg:max-w-[22rem] lg:mx-auto">
            Empowering users of all skill levels to create machine learning projects effortlessly with a fully automated platform that delivers professional-grade results.
          </p>

          {/* Circular Integration Diagram */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            {/* Central Brain Symbol */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwave}
                    width={48}
                    height={48}
                    alt="brainwave"
                    className="transform hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* Rotating App Icons */}
            <div className="absolute inset-0 animate-spin-slow">
              <ul className="w-full h-full">
                {collabApps.map((app, index) => {
                  const angle = (360 / collabApps.length) * index;
                  return (
                    <li
                      key={app.id}
                      className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                      style={{
                        transform: `rotate(${angle}deg)`
                      }}
                    >
                      <div
                        className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl hover:border-n-1/30 transition-colors"
                        style={{
                          transform: `rotate(-${angle}deg)`
                        }}
                      >
                        <img
                          className="m-auto transform hover:scale-110 transition-transform"
                          width={app.width}
                          height={app.height}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </Section>
  );
};

export default Collaboration;
