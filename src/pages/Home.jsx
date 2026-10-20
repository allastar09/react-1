import React from 'react'
import robot from '../assets/83701034272 1.png'
import spo from '../assets/Companies.svg'
import krug from '../assets/krug.png'

const Home = () => {
  return (
    <div>
        <div className='flex items-center justify-evenly'>
            <div className='flex-row gap-y-[20px]'>
            <h1 className='text-[white] font-bold text-[55px] w-[550px]'>Transforming Data into   <span className='bg-[#0A84FF] font-bold p-[10px] rounded-2xl'>Decisions</span></h1>
            <p className='w-[547px] text-[grey] mt-[20px]'>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
            <button className='w-[200px] h-[50px] rounded-2xl text-[white] bg-[#0A84FF] text-center mt-[40px]'>Dook a Meeting</button>
            </div>
            <img src={robot} alt="" />
        </div>
        <img src={spo} alt=""  className='mt-[80px] m-auto'/>
        <div>
            <h1 className='text-[white] w-[570px] mt-[100px] text-center text-[36px] m-auto'>Leverage the power of machine learning and AI to unlock insights and drive business growth</h1>
            <div className='flex m-auto gap-[48px] ml-[350px] mt-[60px]'>
                <div className='w-[377px] bg-[#141414] h-[480px] rounded-[36px]'>
                   <div className='w-[377px] h-[480px] bg-[#141414] rounded-[36px] flex flex-col items-center text-center p-[30px] gap-y-[20px]'>
                        <img src={krug} alt="" />
                        <p className='text-[24px] text-[white]'>Predictive Analytics</p>
                        <h3 className='w-[265px] text-[16px] text-[white]'>Forecast trends and make data-driven decisions with our advanced ML models.</h3>
                   </div>
                </div>
                <div className='w-[377px] bg-[#141414] h-[480px] rounded-[36px]'>
                   <div className='w-[377px] h-[480px] bg-[#141414] rounded-[36px] flex flex-col items-center text-center p-[30px] gap-y-[20px]'>
                        <img src={krug} alt="" />
                        <p className='text-[24px] text-[white]'>Predictive Analytics</p>
                        <h3 className='w-[265px] text-[16px] text-[white]'>Forecast trends and make data-driven decisions with our advanced ML models.</h3>
                   </div>
                </div>
                <div className='w-[377px] bg-[#141414] h-[480px] rounded-[36px]'>
                   <div className='w-[377px] h-[480px] bg-[#141414] rounded-[36px] flex flex-col items-center text-center p-[30px] gap-y-[20px]'>
                        <img src={krug} alt="" />
                        <p className='text-[24px] text-[white]'>Predictive Analytics</p>
                        <h3 className='w-[265px] text-[16px] text-[white]'>Forecast trends and make data-driven decisions with our advanced ML models.</h3>
                   </div>
                </div>
            </div>
        </div>

            <h1 className='text-[56px] font-bold text-center text-[white] mt-[200px]'>Frequently Asked Questions</h1>
        <div className='flex flex-col gap-y-[24px] ml-[559px] mt-[50px]'>
            <div className='w-[798px] h-[140px] bg-[#141414] rounded-[36px] flex items-center justify-evenly p-[20px]'>
            <h1 className='text-[white] text-[56px]'>1</h1>
            <p className='text-[white] text-[26px]'>Lorem Ipsum is simply dummy text of the printing </p>
            <h1 className='text-[white] text-5xl'>+</h1>
            </div>
            <div className='w-[798px] h-[140px] bg-[#141414] rounded-[36px] flex items-center justify-evenly p-[20px]'>
            <h1 className='text-[white] text-[56px]'>2</h1>
            <p className='text-[white] text-[26px]'>Lorem Ipsum is simply dummy text of the printing </p>
            <h1 className='text-[white] text-5xl'>+</h1>
            </div>
            <div className='w-[798px] h-[140px] bg-[#141414] rounded-[36px] flex items-center justify-evenly p-[20px]'>
            <h1 className='text-[white] text-[56px]'>3</h1>
            <p className='text-[white] text-[26px]'>Lorem Ipsum is simply dummy text of the printing </p>
            <h1 className='text-[white] text-5xl'>+</h1>
            </div>
            <div className='w-[798px] h-[140px] bg-[#141414] rounded-[36px] flex items-center justify-evenly p-[20px]'>
            <h1 className='text-[white] text-[56px]'>4</h1>
            <p className='text-[white] text-[26px]'>Lorem Ipsum is simply dummy text of the printing </p>
            <h1 className='text-[white] text-5xl'>+</h1>
            </div>
            <div className='w-[798px] h-[140px] bg-[#141414] rounded-[36px] flex items-center justify-evenly p-[20px]'>
            <h1 className='text-[white] text-[56px]'>5</h1>
            <p className='text-[white] text-[26px]'>Lorem Ipsum is simply dummy text of the printing </p>
            <h1 className='text-[white] text-5xl'>+</h1>
            </div>
            <div className='w-[798px] h-[140px] bg-[#141414] rounded-[36px] flex items-center justify-evenly p-[20px]'>
            <h1 className='text-[white] text-[56px]'>6</h1>
            <p className='text-[white] text-[26px]'>Lorem Ipsum is simply dummy text of the printing </p>
            <h1 className='text-[white] text-5xl'>+</h1>
            </div>
        </div>
    </div>
  )
}

export default Home