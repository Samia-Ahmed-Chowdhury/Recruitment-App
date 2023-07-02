'use client'
import CandidateList from '@/components/CandidateList/CandidateList';
import FilterBar from '@/components/FilterBar/FilterBar';
import React, { useState, useEffect } from 'react'

// import route from '@/'

function page() {

    const [itemData, setItemData] = useState([])
    const [listData, setListData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/candidate')
            .then(res => res.json())
            .then(data => {
                setListData(data)
                setItemData(data)
            })
    }, [])


    const searchHandler = (e) => {
        const searchValue = e.target.value.toLowerCase();
        console.log(searchValue)
        if (itemData && Array.isArray(itemData) && itemData.length > 0) {
            const ans = itemData.filter(item => item.name.toLowerCase().includes(searchValue))
            setItemData(ans)
        }
        if (itemData && Array.isArray(itemData) && itemData.length === 0) {
            const ans = listData.filter(item => item.name.toLowerCase().includes(searchValue))
            setItemData(ans)
        }
    }

    const roleHandler = (e) => {
        const searchValue = e.target.value;
        const ans = listData.filter(item => item.role === searchValue)
        setItemData(ans)
    }
    const locationHandler = (e) => {
        const searchValue = e.target.value;
        const ans = listData.filter(item => item.location === searchValue)
        setItemData(ans)
    }

    return (
        <div className='my-10 mx-auto max-w-7xl'>
            <FilterBar searchHandler={searchHandler} locationHandler={locationHandler} roleHandler={roleHandler} />
            <CandidateList itemData={itemData} />
        </div>
    )
}

export default page