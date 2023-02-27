import React from "react";
import Image from "next/image";
import PlanetBg from "/public/images/bg/planetBg.png";
import CNSLogo from "/public/images/logos/logo.svg";
import BlackHoleBg from "/public/images/bg/blackHoleBg.svg";
import AnyWeb from "/public/images/icons/anyweb.png";
import Scan from "/public/images/icons/scan.png";
import Fluent from "/public/images/icons/fluent.png";
import Heyfoo from "/public/images/icons/heyfoo.png";
import ShuHe from "/public/images/icons/shuhe.png";
import Cellar from "/public/images/icons/cellar.png";
import MetaName from "/public/images/icons/metaname.png";
import JiMu from "/public/images/icons/jimu.png";
import TaoPai from "/public/images/icons/taopai.png";
import CloudBg from "/public/images/bg/cloudBg.svg";
import Doc from '/public/images/icons/doc.svg'
import Github from '/public/images/icons/github.svg'
import CCP from '/public/images/icons/ccp.png'

const Home: React.FC = () => {
  return (
    <>
      <Image
        src={CNSLogo}
        alt="cns logo"
        className="homeHeader w-[160px] h-[60px] z-10 absolute top-[30px] left-[60px] pointer-events-none select-none"
        draggable="false"
      />
      <a
        className="w-[160px] h-[54px] inline-flex justify-center items-center z-10 absolute top-[30px] right-[60px] select-none no-underline text-[#26233E] text-[26px] rounded-[16px] bg-[#BFB5FF] font-bold"
        href="https://app.web3verse.space"
        target="_blank"
        rel="noopener noreferrer"
      >
        APP
      </a>
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
        <div className="absolute top-[24px] w-full h-[122px] flex justify-center gap-[64px]">
          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={AnyWeb}
              alt="Anyweb Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">Anyweb</div>
          </div>

          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={Scan}
              alt="Scan Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
            />
            <div className="-mt-[16px]">ConfluxScan</div>
          </div>

          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={Fluent}
              alt="Fluent Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">Fluent</div>
          </div>
 
          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={Heyfoo}
              alt="Heyfoo wallet Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">Heyfoo钱包</div>
          </div>
        </div>

        <div className="absolute bottom-[48px] w-full h-[122px] flex justify-center gap-[64px]">
          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={ShuHe}
              alt="ShuHe wallet Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">数盒钱包</div>
          </div>

          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={Cellar}
              alt="Cellar wallet Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
            />
            <div className="-mt-[16px]">晒啦钱包</div>
          </div>

          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={MetaName}
              alt="MetaName Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">MetaName</div>
          </div>

          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={JiMu}
              alt="Block JiMu Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">区块积木</div>
          </div>

          <div className="w-[122px] h-fit text-[16px] text-[rgba(216,214,210,0.5)] text-center">
            <Image
              src={TaoPai}
              alt="TaoPai Icon"
              className="w-[122px] h-[122px] pointer-events-none select-none"
              draggable="false"
            />
            <div className="-mt-[16px]">淘派</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[196px] bg-[#3F3F69]">
        <Image
          src={CloudBg}
          alt="cloud background"
          className="absolute -top-[196px] w-full aspect-[48/7] pointer-events-none select-none"
          draggable="false"
        />

        <div className="mt-[32px] flex justify-center items-center gap-[32px] text-white">
          <a
            className="inline-flex"
            href="https://web3-username.gitbook.io/.web3-username-docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Doc}
              alt="doc link"
              className="w-[24px] h-[24px] mr-[6px]"
              draggable="false"
            />
            <span className="underline text-[16px] opacity-60">Doc</span>
          </a>
          <a
            className="inline-flex"
            href="https://github.com/web3-identity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Github}
              alt="doc link"
              className="w-[24px] h-[24px] mr-[6px]"
              draggable="false"
            />
            <span className="underline text-[16px] opacity-60">Github</span>
          </a>
        </div>

        <div className="mx-auto my-[24px] w-[1200px] h-[1px] bg-white opacity-[.15]" />

        <div className="leading-[30px] text-[16px] text-[rgba(216,214,210,0.5)] text-center">© 2023 Copyright by Conflux. All rights reserved.</div>
        <div className="flex items-center justify-center leading-[30px] text-[16px] text-[rgba(216,214,210,0.5)]">
            <Image
              src={CCP}
              alt=""
              className="w-[16px] h-[16px] mr-[4px]"
              draggable="false"
            />
            浙ICP备2022037222号-1
        </div>
      </div>
    </>
  );
};

export default Home;
