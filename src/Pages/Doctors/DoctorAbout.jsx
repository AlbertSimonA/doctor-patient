import React from 'react'
import { FormateDate } from '../../Utils/FormateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold gap-2 items-center'>
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Aron Finch
                </span>
            </h3>
            <p className="text_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam totam deserunt quasi animi! Eius quas repellat
                 molestias saepe commodi, natus delectus, 
                quisquam et aspernatur dolores, quos ipsum voluptas omnis facere.
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
            <ul className='pt-4 md:p-5 '>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormateDate('09-03-2012')} - {FormateDate('09-04-2015')}</span>
                       <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p> 


              </div>
              <p className='text-[14px] leading-5 font-medium text-textColor'>New Appolo Hospital, Texas</p> 

                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormateDate("12-04-2010")} - {FormateDate('09-06-2012')}</span>
                       <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p> 


              </div>
              <p className='text-[14px] leading-5 font-medium text-textColor'>New Appolo Hospital, Texas</p> 

                </li>
            </ul>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'> 
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {FormateDate('07-04-2020')} -  {FormateDate('10-09-2023')}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Appollo Hospital, Texas
                    </p>
                    </li>

                    <li className='p-4 rounded bg-[#fff9ea]'> 
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {FormateDate('07-04-2020')} -  {FormateDate('10-09-2023')}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Appollo Hospital, Texas
                    </p>
                    </li>
            </ul>
        </div>
        
    </div>
  )
}

export default DoctorAbout