// import React from "react";
import Header from "../Header";
// images
import hero from "../assets/images/hero.svg";
import fertilityChart from "../assets/images/fertilityChart.svg";
import trackFertility from "../assets/images/trackFertility.svg";
import women from "../assets/images/women.svg";
import confirmed from "../assets/images/confirmed.svg";
import chart from "../assets/images/chart.svg";

// brands
import thisWeek from "../assets/brands/thisWeek.svg";
import entrepreneur from "../assets/brands/entrepreneur.svg";
import forbes from "../assets/brands/forbes.svg";
import bloomberg from "../assets/brands/bloomberg.svg";
import washington from "../assets/brands/washington.svg";

// shapes
import breeze from "../assets/shapes/breeze.svg";
import firework from "../assets/shapes/firework.svg";

const Separator = () => {
  return (
    <div className="flex lg:justify-start justify-center items-center my-5">
      <svg
        width="261"
        height="7"
        viewBox="0 0 261 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="261" height="7" rx="3.5" fill="#1F94AA" />
      </svg>
    </div>
  );
};

function Home() {
  return (
    <div>
      <Header />
      <div className="grid lg:grid-flow-col grid-flow-row justify-between items-center bg-[#F7F7FE]">
        <div className="relative lg:left-[90px] p-5 lg:text-start text-center ">
          <p className="lg:text-5xl text-4xl text-[#112D35] lg:w-[493px] font-bold">
            Track your fertility hormones at home, <br />
            in 5 minutes.
          </p>
          <Separator />
          <p className="text-base text-[#112D35] lg:w-[400px] font-light">
            Get accurate results of Estrogen, LH and Progesterone with Inito,
            the all-in-one, FDA-registered fertility monitor.
          </p>

          <br />
          <button className="bg-cyan text-white font-medium text-base rounded-full w-[167px] h-[51px]">
            Learn more
          </button>
        </div>
        <img src={hero} alt={hero} />
      </div>

      <div className="lg:mt-[120px] mt-[50px]">
        <p className="uppercase text-2xl text-[#c4c4c4] text-center">
          As Seen on
        </p>

        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[150px] gap-10 my-10">
          {[thisWeek, entrepreneur, forbes, bloomberg, washington].map(
            (item) => (
              <img src={item} alt={item} />
            )
          )}
        </div>
      </div>

      <div className="lg:mt-0 mt-[50px] text-center p-5">
        <div className="flex justify-end items-center lg:w-[750px] m-auto">
          <img className="" src={breeze} alt={breeze} />
        </div>

        <p className="lg:text-4xl text-3xl font-bold text-[#112D35]">
          Not all ovulation tests are created{" "}
          <span className="border-b-4 border-[#1F94AA]">equal</span>
        </p>

        <p className="lg:w-[568px] m-auto text-base text-[#3F555D] mt-[24px]">
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation and supports pregnancy:{" "}
          <span className="font-bold">Progesterone</span>.
        </p>
      </div>

      <div className="mt-[40px] text-center p-5">
        <div className="flex justify-end items-center lg:w-[750px] m-auto">
          <img className="" src={firework} alt={firework} />
        </div>
        <p className="lg:text-4xl text-3xl font-bold text-[#112D35]">
          What makes <span className="border-b-4 border-[#1F94AA]">Inito</span>{" "}
          different?
        </p>

        <p className="lg:w-[532px] m-auto text-base text-[#3F555D] mt-[24px]">
          Inito is the only fertility monitor that measures all{" "}
          <span className="font-bold">3 hormones</span> on a single test strip,
          showing you a full picture of your cycles with results unique to your
          body.
        </p>
      </div>

      {/* Predict & Confirm */}
      <div className="lg:w-[1240px] lg:m-auto m-5 rounded-[40px] bg-[#F7F7FE]">
        <div className="flex lg:flex-row items-center flex-col justify-between">
          <div className="text-start lg:p-20 p-7">
            <p className="lg:text-4xl text-3xl font-bold text-[##112D35] lg:w-[424px]">
              Predict and confirm your ovulation with{" "}
              <span className="border-b-4 border-[#1F94AA]">actual</span> data
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              Unlike most ovulation tests that only give you "yes/no" results,
              Inito provides real numerical values of your fertility hormones.
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              If you have irregular cycles, actual data is necessary to know
              exactly when you ovulate, and when is the best time to try to
              conceive.
            </p>
            <br />
            <button className="bg-cyan w-[202px] h-[50px] text-white font-medium rounded-full ">
              Get the inito kit
            </button>
          </div>

          <img
            src={fertilityChart}
            alt={fertilityChart}
            className="lg:rounded-tr-[40px]"
          />
        </div>

        <div className="flex lg:flex-row items-center flex-col-reverse justify-between">
          <img
            src={trackFertility}
            alt={trackFertility}
            // className="lg:rounded-tr-[40px]"
          />

          <div className="text-start lg:p-20 p-7">
            <p className="lg:text-4xl text-3xl font-bold text-[##112D35] lg:w-[424px]">
              Never <span className="border-b-4 border-[#1F94AA]">miss</span> a
              day again with Inito
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              Inito tracks up to{" "}
              <span className="font-bold">6 fertile days</span> and confirms
              ovulation by measuring all 3 hormones in just 5 minutes:
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] mt-[24px]">
              Estrogen, which rises 3-4 days before ovulation
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] ">
              LH, which surges 24-36 hours before ovulation
            </p>
            <p className="lg:w-[427px] m-auto text-base text-[#3F555D] ">
              Progesterone (PdG), which rises after ovulation
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="lg:w-[1240px] lg:m-auto flex lg:flex-row flex-col items-center justify-between">
        <div className="lg:w-[600px] p-7">
          <p className="font-semibold text-[#112D35] text-3xl lg:w-[463px]">
            “Inito is all that you need to give you the{" "}
            <span className="border-b-4 border-[#1F94AA]">best</span> chance of
            conception."
          </p>

          <div className="flex items-center gap-5 mt-[32px]">
            <img
              src="https://picsum.photos/200"
              className="rounded-full w-[82px] h-[82px]"
              alt="avatar"
            />
            <div>
              <p className="text-sm text-[#112D35]">Dr. Rachel Green</p>
              <p className="text-xs text-[#3F555D]">MD</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7FE] rounded-[40px] p-10 lg:w-[600px] lg:m-0 m-5">
          <p className="lg:text-3xl text-2xl font-semibold text-[#112D35]">
            Why measure Progesterone?
          </p>
          <p className="text-base text-[#3F555D] mt-[23px]">
            <span className="font-bold">Anovulation</span> (having a menstrual
            cycle with no egg) is actually a common occurrence, affecting 1 in
            10 women*.
          </p>
          <p className="text-base text-[#3F555D] mt-[23px]">
            A sure way to confirm ovulation is a rise in{" "}
            <span className="font-bold">Progesterone level</span>
            after peak fertility. Progesterone also supports implantation and
            elevated levels of PdG during the 7-10 day window after ovulation
            correlates to higher chances of a successful pregnancy.
          </p>
          <p className="text-[#1F94AA] text-sm mt-[23px]">
            * Source: National Institutes of Health
          </p>
        </div>
      </div>

      <div className="lg:w-[1240px] m-auto">
        <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:mt-[123px] p-5">
          Why Inito is the smarter way to get pregnant
        </p>

        <div className="flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between ">
          <img src={women} alt={women} />
          <br />

          <div>
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Adapts to your{" "}
              <span className="border-b-4 border-[#1F94AA]">unique</span>{" "}
              irregular cycle
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Most ovulation kits have a set value or a threshold, making them
              likely to give a false read if your hormones fall outside the
              average range.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Every woman is unique, especially with a condition like PCOS or
              Thyroid which can influence hormone levels. Inito measures real
              values of your hormones to personalize results to the unique you.
            </p>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5">
          <div>
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Inito <span className="border-b-4 border-[#1F94AA]">tracks</span>{" "}
              everything so you don’t have to
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              The Inito Fertility Monitor comes with a free easy-to-use App, so
              you can track your fertile days with ease and know exactly when
              you ovulate.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Our App notifies you for everything:
            </p>
            <li className="text-base text-[#3F555D] list-disc">
              Your fertility levels
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              When to test on the right days
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              When you’ve successfully ovulated
            </li>
            <li className="text-base text-[#3F555D] list-disc">
              And when to roll into bed!
            </li>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
          <img src={confirmed} alt={confirmed} />
        </div>

        <div className="flex lg:flex-row flex-col lg:m-0 m-5 items-center justify-between lg:mt-[80px] mt-5">
          <img src={chart} alt={chart} />
          <br />
          <div>
            <p className="lg:text-4xl text-3xl font-bold text-[#112D35] lg:w-[480px]">
              Get charts and actual values of your{" "}
              <span className="border-b-4 border-[#1F94AA]">hormones</span>{" "}
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Actual numerical values are necessary to know whether your PdG
              levels are sufficient enough to support a healthy pregnancy.
            </p>

            <p className="text-base text-[#3F555D] mt-[23px] lg:w-[480px]">
              Studies show that Pdg levels lower than 7.9ng/ml in serum (around
              10ug/ml PdG) 6-8 days after ovulation are associated with lower
              pregnancy outcomes.
            </p>
            <button className="bg-cyan text-white font-medium text-base rounded-full w-[202px] h-[50px] mt-[30px]">
              Get the inito kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
