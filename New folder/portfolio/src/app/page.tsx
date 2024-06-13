import SocialMedia from "@/components/socialMedia/page";
import React from "react";
import logo from "../../public/logo.svg";
import face from "../../public/facebook.svg";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#404040] flex justify-center items-center">
      <div className="text-[#FFFFFF] h-[416.8px]  pt-[67px] ">
        <div>
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex gap-[66px] ">
            <div>
              <p className="my-[10px] ">
                AlgoX is where you get access to the best
                <br />
                new tokens before they list
                <br />
                on other centralized or decentralized
                <br />
                exchanges.
              </p>
              <div className="flex gap-4 ">
                <SocialMedia
                  src={face}
                  alt="facebook"
                  link="https://www.facebook.com/"
                />
                <SocialMedia
                  src={face}
                  alt="facebook"
                  link="https://www.facebook.com/"
                />
                <SocialMedia
                  src={face}
                  alt="facebook"
                  link="https://www.facebook.com/"
                />
                <SocialMedia
                  src={face}
                  alt="facebook"
                  link="https://www.facebook.com/"
                />
              </div>
            </div>
            <div>
              <p>AlegoX capital</p>
              <p>Exchange</p>
              <p>FAQs</p>
            </div>
            <div>
              <p>More</p>
              <p>Algorithmic trading</p>
              <p>Market Making</p>
            </div>
            <div>
              <h1 className="text-[24px] ">Newsletter</h1>
              <p className="text-[#b3b3b3] ">
                Keep up to date with our progress. Subscribe for e-mail updates.
              </p>
              <input
                className="bg-transparent placeholder-white border-b border-[#b3b3b3] "
                placeholder="Your email address"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
