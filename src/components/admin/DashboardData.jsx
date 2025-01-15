import React, { useEffect, useState } from 'react'
import useAuth from '../../useAuth/useAuth'
import { countUser } from '../../api/user'
import { countProducts } from '../../api/product'
import GaugeChart from 'react-gauge-chart';

const DashboardData = () => {
  const [count, setCount] = useState(0)
  const [countProduct, setCountProduct] = useState(0)
  const token = useAuth((state) => state.token)
  const maxValue = 100

  useEffect(() => {
    handleGetUserCount(token)
    handleGetProductCount(token)
  }, [])

  const handleGetUserCount = async (token) => {
    try {
      const resCount = await countUser(token)
      setCount(resCount.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleGetProductCount = async (token) => {
    try {
      const resProductCount = await countProducts(token)
      console.log('resPro', resProductCount)
      setCountProduct(resProductCount.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='p-6 bg-gray-100'>
      <h1 className='font-bold text-3xl mb-4'>💰Dashboard📚</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded shadow-lg'>
          <h2 className='text-xl font-semibold mb-4'>Total Users</h2>
          <GaugeChart
            id='user-gauge'
            nrOfLevels={30}
            percent={count / maxValue}
            colors={['#FF5F6D', '#FFC371']}
            arcWidth={0.3}
            textColor='#333'
          />
          <p className='text-center mt-2 text-2xl font-bold'>{count}</p>
        </div>
        <div className='bg-white p-6 rounded shadow-lg'>
          <h2 className='text-xl font-semibold mb-4'>Total Products</h2>
          <GaugeChart
            id='product-gauge'
            nrOfLevels={30}
            percent={countProduct / maxValue}
            colors={['#5FBEFF', '#85FFBD']}
            arcWidth={0.3}
            textColor='#333'
          />
          <p className='text-center mt-2 text-2xl font-bold'>{countProduct}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardData