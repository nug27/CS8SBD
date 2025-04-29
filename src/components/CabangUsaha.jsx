import Marquee from 'react-fast-marquee';
import bobo from'../assets/bobo.png';
import Gramedia from '../assets/Gramedia.png';
import Tribun from '../assets/Tribun.png';

const CabangUsaha = () => {
  return (
    <div className='mt-[100px]' >
          <Marquee>
            <div className='mx-10'>
              <img src={bobo} className='h-[40px]'/>
            </div>
            <div className='mx-10' >
              <img src={Gramedia} className='h-[30px]'/>
            </div> 
            <div className='mx-10'>
              <img src={Tribun} className='h-[90px]'/>
            </div>
            <div className='mx-10'>
              <img src='https://www.kompasgramedia.com/assets/photo/2018/09/10/1375360664.png' className='h-[100px]'/>
            </div>
            <div className='mx-10'>
              <img src='https://www.kompasgramedia.com/assets/photo/2023/08/30/3530251863.png' className='h-[40px]'/>
            </div>
            <div className='mx-10'>
              <img src='https://www.kompasgramedia.com/assets/photo/2023/07/24/2226986186.png' className='h-[40px]'/>
            </div>
            <div className='mx-10'>
              <img src='https://www.kompasgramedia.com/assets/photo/2018/09/11/926929974.png' className='h-[100px]'/>
            </div>
            <div className='mx-10'>
              <img src='https://www.kompasgramedia.com/assets/photo/2022/03/15/378411377.png' className='h-[40px]'/>
            </div>
          </Marquee>
      </div>
  )
}

export default CabangUsaha