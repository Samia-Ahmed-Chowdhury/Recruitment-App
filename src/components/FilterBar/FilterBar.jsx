import React from 'react'
import { HiFilter } from 'react-icons/hi';

function FilterBar({searchHandler,locationHandler,roleHandler}) {
  return (
    <div className='flex justify-between '>
    <form className='flex items-center my-auto gap-4'>
        <div className='my-auto flex items-center'>
            <HiFilter className='text-[#9774FF] w-8 h-8 inline' />
            <h2>Filter:</h2>
        </div>
        <div className="form-control w-full">
            <select onChange={locationHandler} defaultValue='Location' name='category' className="space-y-5 select w-full max-w-xs input input-bordered">
                <option >Location</option>
                <option value="India">India</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
            </select>
        </div>
        <div className="form-control w-full">
            <select onChange={roleHandler} defaultValue='Role' name='category' className="space-y-5 select w-full max-w-xs input input-bordered">
                <option >Role</option>
                <option value="Frontend Developer"  >Frontend Developer</option>
                <option value="React Developere" >React Developer</option>
                <option value="Software Developer" >Software Developer</option>
                <option value="Next.js Developer" >Next.js Developer</option>
            </select>
        </div>
    </form>
    <form onChange={searchHandler} className="form-control  w-full ">
        <input type="text" name='search' placeholder="Search Name" className="ml-auto input bg-bgColor" />
    </form>
</div>
  )
}

export default FilterBar