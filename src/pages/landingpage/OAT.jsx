import React, { useState, useEffect } from "react";
import Image from "next/image";
import Classes from "./styles/OAT.module.css";
const text1 = "Live Entertainment Beneath";
const text2 = "the Sparkling Night Sky!";
const textStyle = {
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Work Sans",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "76px",
};
const textStyleMobile = {
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Work Sans",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "20px",
};
const OAT = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <center>
            <div className={Classes.container_row}>
              <div className={Classes.layer1}>
                <h2 className={Classes.css1m}>OPEN AIR</h2>
                <h2 className={Classes.css2m}>THEATRE</h2>
              </div>
              <div className={Classes.layer2}>
                <h2 className={Classes.css3m}>OPEN AIR</h2>
                <h2 className={Classes.css4m}>THEATRE</h2>
              </div>
              <div className={Classes.layer3}>
                <Image
                  src="/oatart.png"
                  width={128}
                  height={190}
                  className={Classes.cssim}
                  alt="OAT"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center pt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M11.4138 5.38097C11.7363 5.41605 12 5.67569 12 6.00004C12 6.32436 11.7363 6.58397 11.4139 6.61909C10.1939 6.75194 9.04859 7.29666 8.17262 8.17262C7.29675 9.0485 6.75205 10.1937 6.61912 11.4135C6.58397 11.7361 6.3242 12 5.99967 12C5.67515 12 5.41537 11.7361 5.38022 11.4135C5.24731 10.1938 4.7027 9.04871 3.82695 8.17286C2.95113 7.29693 1.80601 6.75216 0.586162 6.61916C0.263719 6.58401 0 6.32436 0 6C0 5.67565 0.263719 5.416 0.586162 5.38084C1.80601 5.24784 2.95113 4.70307 3.82695 3.82714C4.70278 2.95121 5.24741 1.80603 5.38025 0.586166C5.41537 0.26373 5.675 0 5.99934 0C6.32369 0 6.58332 0.263692 6.61844 0.586128C6.67396 1.09581 6.80173 1.59602 6.9987 2.07151C7.27075 2.72826 7.66951 3.32498 8.1722 3.82761C8.67489 4.33023 9.27166 4.72892 9.92844 5.0009C10.4039 5.19781 10.9042 5.32551 11.4138 5.38097Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M16.1696 7.62303C16.6264 7.67274 17 8.04056 17 8.50005C17 8.95951 16.6264 9.3273 16.1696 9.37704C14.4413 9.56525 12.8188 10.3369 11.5779 11.5779C10.3371 12.8187 9.5654 14.441 9.37709 16.1691C9.32729 16.6262 8.95928 17 8.49954 17C8.03979 17 7.67178 16.6262 7.62198 16.1691C7.43369 14.4412 6.66215 12.819 5.42151 11.5782C4.18076 10.3373 2.55851 9.56556 0.830396 9.37714C0.373601 9.32734 0 8.9595 0 8.5C0 8.0405 0.373602 7.67266 0.830396 7.62286C2.55851 7.43445 4.18076 6.66269 5.42151 5.42178C6.66226 4.18088 7.43382 2.55854 7.62203 0.830402C7.67177 0.373618 8.03958 0 8.49907 0C8.95855 0 9.32637 0.373564 9.37613 0.830348C9.45478 1.55239 9.63578 2.26103 9.91482 2.93464C10.3002 3.86503 10.8651 4.71039 11.5773 5.42244C12.2894 6.1345 13.1349 6.6993 14.0653 7.0846C14.7389 7.36356 15.4476 7.54447 16.1696 7.62303Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M11.4138 5.38097C11.7363 5.41605 12 5.67569 12 6.00004C12 6.32436 11.7363 6.58397 11.4139 6.61909C10.1939 6.75194 9.04859 7.29666 8.17262 8.17262C7.29675 9.0485 6.75205 10.1937 6.61912 11.4135C6.58397 11.7361 6.3242 12 5.99967 12C5.67515 12 5.41537 11.7361 5.38022 11.4135C5.24731 10.1938 4.7027 9.04871 3.82695 8.17286C2.95113 7.29693 1.80601 6.75216 0.586162 6.61916C0.263719 6.58401 0 6.32436 0 6C0 5.67565 0.263719 5.416 0.586162 5.38084C1.80601 5.24784 2.95113 4.70307 3.82695 3.82714C4.70278 2.95121 5.24741 1.80603 5.38025 0.586166C5.41537 0.26373 5.675 0 5.99934 0C6.32369 0 6.58332 0.263692 6.61844 0.586128C6.67396 1.09581 6.80173 1.59602 6.9987 2.07151C7.27075 2.72826 7.66951 3.32498 8.1722 3.82761C8.67489 4.33023 9.27166 4.72892 9.92844 5.0009C10.4039 5.19781 10.9042 5.32551 11.4138 5.38097Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex flex-col pt-4">
              <div style={textStyleMobile}>{text1}</div>
              <div style={textStyleMobile}>{text2}</div>
            </div>
          </center>
        </>
      ) : (
        <>
          <center>
            <div className={Classes.container_row}>
              <div className={Classes.layer1}>
                <h2 className={Classes.css1}>OPEN AIR</h2>
                <h2 className={Classes.css2}>THEATRE</h2>
              </div>
              <div className={Classes.layer2}>
                <h2 className={Classes.css3}>OPEN AIR</h2>
                <h2 className={Classes.css4}>THEATRE</h2>
              </div>
              <div className={Classes.layer3}>
                <Image
                  src="/oatart.png"
                  width={1000}
                  height={5000}
                  className={Classes.cssi}
                  alt="OAT"
                />
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="flex flex-row justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.8277 10.7619C23.4726 10.8321 24 11.3514 24 12.0001C24 12.6487 23.4726 13.1679 22.8277 13.2382C20.3878 13.5039 18.0972 14.5933 16.3452 16.3452C14.5935 18.097 13.5041 20.3873 13.2382 22.827C13.1679 23.4722 12.6484 24 11.9993 24C11.3503 24 10.8307 23.4722 10.7604 22.827C10.4946 20.3875 9.40539 18.0974 7.6539 16.3457C5.90226 14.5939 3.61202 13.5043 1.17232 13.2383C0.527437 13.168 0 12.6487 0 12C0 11.3513 0.527438 10.832 1.17232 10.7617C3.61202 10.4957 5.90226 9.40614 7.6539 7.65428C9.40555 5.90242 10.4948 3.61206 10.7605 1.17233C10.8307 0.52746 11.35 0 11.9987 0C12.6474 0 13.1666 0.527385 13.2369 1.17226C13.3479 2.19161 13.6035 3.19204 13.9974 4.14303C14.5415 5.45652 15.339 6.64996 16.3444 7.65522C17.3498 8.66047 18.5433 9.45784 19.8569 10.0018C20.8079 10.3956 21.8083 10.651 22.8277 10.7619Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
              >
                <path
                  d="M40.8996 19.2818C42.055 19.4075 43 20.3379 43 21.5001C43 22.6623 42.055 23.5926 40.8997 23.7184C36.5281 24.1945 32.4241 26.1464 29.2852 29.2852C26.1467 32.4238 24.1948 36.5273 23.7185 40.8984C23.5926 42.0544 22.6617 43 21.4988 43C20.3359 43 19.4051 42.0544 19.2791 40.8984C18.8029 36.5277 16.8513 32.4245 13.7132 29.2861C10.5749 26.1473 6.47153 24.1952 2.10041 23.7187C0.944992 23.5927 0 22.6623 0 21.5C0 20.3377 0.944992 19.4073 2.10041 19.2813C6.47153 18.8048 10.5749 16.8527 13.7132 13.7139C16.8516 10.5752 18.8032 6.4716 19.2792 2.10043C19.4051 0.945032 20.3354 0 21.4976 0C22.6599 0 23.5902 0.944897 23.7161 2.10029C23.915 3.92664 24.3729 5.71907 25.0787 7.42292C26.0535 9.77626 27.4824 11.9145 29.2837 13.7156C31.085 15.5167 33.2234 16.9453 35.5769 17.9199C37.2808 18.6255 39.0732 19.0831 40.8996 19.2818Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.8277 10.7619C23.4726 10.8321 24 11.3514 24 12.0001C24 12.6487 23.4726 13.1679 22.8277 13.2382C20.3878 13.5039 18.0972 14.5933 16.3452 16.3452C14.5935 18.097 13.5041 20.3873 13.2382 22.827C13.1679 23.4722 12.6484 24 11.9993 24C11.3503 24 10.8307 23.4722 10.7604 22.827C10.4946 20.3875 9.40539 18.0974 7.6539 16.3457C5.90226 14.5939 3.61202 13.5043 1.17232 13.2383C0.527437 13.168 0 12.6487 0 12C0 11.3513 0.527438 10.832 1.17232 10.7617C3.61202 10.4957 5.90226 9.40614 7.6539 7.65428C9.40555 5.90242 10.4948 3.61206 10.7605 1.17233C10.8307 0.52746 11.35 0 11.9987 0C12.6474 0 13.1666 0.527385 13.2369 1.17226C13.3479 2.19161 13.6035 3.19204 13.9974 4.14303C14.5415 5.45652 15.339 6.64996 16.3444 7.65522C17.3498 8.66047 18.5433 9.45784 19.8569 10.0018C20.8079 10.3956 21.8083 10.651 22.8277 10.7619Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex flex-col pt-8">
              <div style={textStyle}>{text1}</div>
              <div style={textStyle}>{text2}</div>
            </div>
          </center>
        </>
      )}
    </>
  );
};

export default OAT;
