import React from 'react'
import img from '../assets/Frame 24.svg'
import br from '../assets/brain.png'
import kub from '../assets/kub-service.png'
import an from '../assets/anali.png'
import k from '../assets/comp.png'
import inf from '../assets/in.png'
import hg from '../assets/hg.png'

const Service = () => {
  return (
    <div className='text-[white]'>
      <img src={img} alt="" className='m-auto mt-[50px]'/>
      <h1 className='text-[white] mt-[100px] text-center text-[36px]'>Our Services</h1>
      <div className='flex flex-wrap gap-[58px] ml-[370px] mt-[30px]'>
        <div className='w-[586px] h-[668px] bg-[#141414] flex flex-col gap-y-[30px] p-[90px] rounded-2xl'>
            <img src={br} alt=""  className='w-[300px] ml-[70px]'/>
            <h1 className='text-[26px] text-center'>Machine Learning Solutions</h1>
            <p className='text-center'>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
            <button className='text-[white] border border-[#459CF3] w-[200px] rounded-2xl ml-[100px]'>Book Cal</button>
        </div>
        <div className='w-[586px] h-[668px] bg-[#141414] flex flex-col gap-y-[30px] p-[90px] rounded-2xl'>
            <img src={kub} alt=""  className='w-[300px] ml-[70px]'/>
            <h1 className='text-[26px] text-center'>Machine Learning Solutions</h1>
            <p className='text-center'>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
            <button className='text-[white] border border-[#459CF3] w-[200px] rounded-2xl ml-[100px]'>Book Cal</button>
        </div>
        <div className='w-[586px] h-[668px] bg-[#141414] flex flex-col gap-y-[30px] p-[90px] rounded-2xl'>
            <img src={an} alt=""  className='w-[300px] ml-[70px]'/>
            <h1 className='text-[26px] text-center'>Machine Learning Solutions</h1>
            <p className='text-center'>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
            <button className='text-[white] border border-[#459CF3] w-[200px] rounded-2xl ml-[100px]'>Book Cal</button>
        </div>
        <div className='w-[586px] h-[668px] bg-[#141414] flex flex-col gap-y-[30px] p-[90px] rounded-2xl'>
            <img src={k} alt=""  className='w-[300px] ml-[70px]'/>
            <h1 className='text-[26px] text-center'>Machine Learning Solutions</h1>
            <p className='text-center'>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
            <button className='text-[white] border border-[#459CF3] w-[200px] rounded-2xl ml-[100px]'>Book Cal</button>
        </div>
         <div className='w-[586px] h-[668px] bg-[#141414] flex flex-col gap-y-[30px] p-[90px] rounded-2xl'>
            <img src={inf} alt=""  className='w-[300px] ml-[70px]'/>
            <h1 className='text-[26px] text-center'>Machine Learning Solutions</h1>
            <p className='text-center'>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
            <button className='text-[white] border border-[#459CF3] w-[200px] rounded-2xl ml-[100px]'>Book Cal</button>
        </div>
        <div className='w-[586px] h-[668px] bg-[#141414] flex flex-col gap-y-[30px] p-[90px] rounded-2xl'>
            <img src={hg} alt=""  className='w-[300px] ml-[70px]'/>
            <h1 className='text-[26px] text-center'>Machine Learning Solutions</h1>
            <p className='text-center'>Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.</p>
            <button className='text-[white] border border-[#459CF3] w-[200px] rounded-2xl ml-[100px]'>Book Cal</button>
        </div>
      </div>
    </div>
  )
}

export default Service