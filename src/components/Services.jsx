import Section from "./section";
import Heading from "./Heading";
import { service1, service2, service3, check, stars } from "../assets";
import { brainwaveServicesIcons } from "../constants";

const Services = () => {
  const platformFeatures = [
    "End-to-End ML Pipeline Automation",
    "Intelligent Dataset Generation",
    "Interactive Data Analysis", 
    "AI-Powered Visualization",
    "Comprehensive Model Training"
  ];

  return (
    <Section crosses id="features">
      <div className="container">
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <Heading className={"mx-auto text-center lg:mt-[3rem]"}
          title="Revolutionize Your Machine Learning Workflow"
          text="Automate, Accelerate, and Innovate with Nebula AI"
        />

        <div className="relative">
          {/* First Feature Section: Comprehensive Automation */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="End-to-End ML Automation"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-2">Complete ML Project Automation</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Transform your ideas into fully functional machine learning projects with zero complexity
              </p>
              <ul className="body-2">
                {platformFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img 
                      src={check} 
                      width={24} 
                      height={24} 
                      alt="check" 
                      className="mr-4" 
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Two-Column Feature Showcase */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* Synthetic Data Generation */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Synthetic Data Generation"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-2">Synthetic Dataset Creation</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Generate high-quality, custom synthetic datasets tailored to your specific machine learning needs
                </p>
              </div>
            </div>

            {/* Interactive AI Guidance */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-2">AI-Powered Guidance</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Intelligent chatbot assistance to guide you through every step of your machine learning journey
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.slice(0, 3).map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={`Service icon ${index + 1}`} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="AI Guidance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;