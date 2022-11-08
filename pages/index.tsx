import React from 'react';
import Image from 'next/image';
import PlanetBg from '../public/images/bg/planetBg.png';
import CNSLogo from '../public/images/logos/logo.svg';
import BlackHoleBg from '../public/images/bg/blackHoleBg.svg';
import AnyWeb from '../public/images/icons/anyWeb.svg';
import Scan from '../public/images/icons/scan.svg';
import Fluent from '../public/images/icons/fluent.svg';
import CloudBg from '/public/images/bg/cloudBg.png';

const Home: React.FC = () => {
  return (
    <main>
      <div className='homeBg min-w-[800px]'>
        <div className='homeWrapper flex flex-col items-center'>
          <Image src={CNSLogo} alt='cns logo' className='homeHeader w-32 h-12 z-10 absolute top-[25px] left-[61px]' />
          <div className='relative flex justify-center items-center'>
            <Image src={PlanetBg} alt='background bg' className='w-full min-h-screen z-0' priority={true} placeholder="blur"  />
            <div className='absolute text-white text-6xl text-center -translate-y-16 font-black' >
              <span className='py-3'>你的Web3身份</span><br/>
              <span className='text-[105px] py-3'>将从<span className='text-[#BFB5FF]'>.web3</span>开始</span>
            </div>
          </div>
          <div className='mt-20 text-2xl flex flex-col items-center text-[#7A7880]'>
            <p className='text-[40px] text-[#BFB5FF] mb-3'>Web3 用户名</p>
            <p>用可读性更好的字符串，作为 Web3 的标识符</p>
            <p>在 Web3 宇宙空间中遨游</p>
          </div>
          <div className='mt-5 mb-10 relative flex flex-col justify-center items-center w-9/12'>
            <Image src={BlackHoleBg} alt='black hole background' className='z-0 w-full' />
            <div className='absolute grid grid-cols-3 place-content-around w-7/12'>
              <Image src={AnyWeb} alt='Anyweb Icon' className='z-10 w-full max-w-[172px]' />
              <Image src={Scan} alt='Scan Icon' className='z-10 w-full max-w-[172px]' />
              <Image src={Fluent} alt='Fluent Icon' className='z-10 w-full max-w-[172px]' />
            </div>
          </div>
          <Image src={CloudBg} alt='cloud background' className='w-full' placeholder="blur" />
        </div>
      </div>
    </main>
  )
}

export default Home
