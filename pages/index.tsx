import React from "react";
import Image from "next/image";
import PlanetBg from "/public/images/bg/planetBg.png";
import CNSLogo from "/public/images/logos/logo.svg";
import BlackHoleBg from "/public/images/bg/blackHoleBg.svg";
import AnyWeb from "/public/images/icons/anyWeb.svg";
import Scan from "/public/images/icons/scan.png";
import Fluent from "/public/images/icons/fluent.svg";
import CloudBg from "/public/images/bg/cloudBg.svg";

const Home: React.FC = () => {
  return (
    <>
      <Image
        src={CNSLogo}
        alt="cns logo"
        className="homeHeader w-[152px] h-[54px] z-10 absolute top-[30px] left-[60px] pointer-events-none select-none"
        draggable="false"
      />
      <div className="relative flex justify-center items-center aspect-[8/5]">
        <Image
          src={PlanetBg}
          alt="background bg"
          className="w-full h-full z-0 pointer-events-none select-none"
          priority={true}
          placeholder="blur"
          draggable="false"
        />
        <div className="absolute text-white text-center -translate-y-[68px] font-black">
          <div className="text-[64px] leading-[84px]">你的Web3身份</div>
          <div className="text-[104px] leading-[140px]">
            将从<span className="text-[#BFB5FF]">.web3</span>开始
          </div>
        </div>
      </div>
      
      <div className="mt-[80px] text-center">
        <p className="mb-[8px] text-[40px] leading-[60px] text-[#BFB5FF] font-semibold">
          Web3 用户名
        </p>
        <p className="text-[24px] leading-[40px] text-[#7A7880] font-normal">用可读性更好的字符串，作为 Web3 的标识符</p>
        <p className="text-[24px] leading-[40px] text-[#7A7880] font-normal">在 Web3 宇宙空间中遨游</p>
      </div>

      <div className="mt-[100px] mx-auto relative flex flex-col justify-center w-[1080px] h-[322px]">
        <Image
          src={BlackHoleBg}
          alt="black hole background"
          className="w-full h-full translate-y-[18px] pointer-events-none select-none"
          draggable="false"
        />
        <div className="absolute w-full h-[122px] flex justify-center gap-[54px]">
          <Image
            src={AnyWeb}
            alt="Anyweb Icon"
            className="w-[122px] h-[122px] pointer-events-none select-none"
            draggable="false"
          />
          <Image
            src={Scan}
            alt="Scan Icon"
            className="w-[122px] h-[122px] pointer-events-none select-none"
          />
          <Image
            src={Fluent}
            alt="Fluent Icon"
            className="w-[122px] h-[122px] pointer-events-none select-none"
            draggable="false"
          />
        </div>
      </div>

      <Image
        src={CloudBg}
        alt="cloud background"
        className="absolute bottom-0 w-full aspect-[48/7] pointer-events-none select-none"
        draggable="false"
      />
    </>
  );
};

export default Home;
