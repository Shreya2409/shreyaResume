import React from 'react'
import './Qualification.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Grad from '../../img/grad.png';
import Twelve from '../../img/12th.png';
import Tenth from '../../img/10th.png';
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'


const Qualification = () => {

  const clients =[
    {
      img: Grad,
      Yop: "Year of Passing : ",
      YearOfPassing: "2015-2019",
      Univ: "College : ",
      University: "Dr. APJ Abdul Kalam Unitversity Lucknow",
      Percent: "Percentage : ",
      Scored: "84.3%"
    },
    {
      img: Twelve,
      Yop: "Year of Passing : ",
      YearOfPassing: "2013-2014",
      Univ: "School : ",
      University: "MPEC Kanpur",
      Percent: "Percentage : ",
      Scored: "89.2%"
    },
    {
      img: Tenth,
      Yop: "Year of Passing : ",
      YearOfPassing: "2011-2012",
      Univ: "School : ",
      University: "MPEC Kanpur",
      Percent: "CGPA : ",
      Scored: "10 CGPA"
    }
  ]
  return (
<div className="q-wrapper">
   <div className="q-heading">
    <span>Quali</span>
    <span>ficat</span>
    <span>ions</span>
    <div className='blur q-blur1' style={{ background : "var (--purple)"}}></div>
    <div className='blur q-blur2' style={{ background : "skyblue"}}></div>
    </div>
    {/* slider */}
    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{clickable: true}}
    >
        {clients.map((client,index)=>{
          return(
            <SwiperSlide key={index}>
            <div className="qualification">
            <img src={client.img} alt=""/>
              <div className='yop'><span>{client.Yop}</span><span>{client.YearOfPassing}</span></div>
              <div className='univ'><span>{client.Univ}</span><span>{client.University}</span></div>
              <div className='percent'><span>{client.Percent}</span><span>{client.Scored}</span></div>
            </div>
            </SwiperSlide>
          )
        })}
    </Swiper>
</div>
  )
}

export default Qualification