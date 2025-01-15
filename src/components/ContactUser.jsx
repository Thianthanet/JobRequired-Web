import React from 'react'

const ContactUser = () => {
    return (
        <div className='bg-gray-50 py-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-extrabold text-4xl text-gray-800 mb-4'>👋 Contact Me 📞</h1>
            </div>
            <hr className='border-gray-300 my-4' />
            <div className='space-y-6'>
                <a href="https://www.youtube.com/@EXRAZERZ4" className='flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-200 transition duration-300'>
                    <img src="/src/assets/youtube.png" className='w-16 h-16 rounded-full' />
                    <h1 className='font-semibold text-2xl text-gray-800'>EXRAZER</h1>
                </a>
                <a href="https://www.facebook.com/ZeRoXKunG/" className='flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-200 transition duration-300'>
                    <img src="/src/assets/2021_Facebook_icon.svg.png" className='w-16 h-16 rounded-full' />
                    <h1 className='font-semibold text-2xl text-gray-800'>Thianthanet Mikula</h1>
                </a>
                <a href="https://github.com/Thianthanet" className='flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-200 transition duration-300'>
                    <img src="/src/assets/25231.png" className='w-16 h-16 rounded-full' />
                    <h1 className='font-semibold text-2xl text-gray-800'>Thianthanet</h1>
                </a>
                <a href="mailto:Thianthanetm45@gmail.com" className='flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-200 transition duration-300'>
                    <img src="/src/assets/email.png" className='w-16 h-16 rounded-full' />
                    <h1 className='font-semibold text-2xl text-gray-800'>Thianthanetm45@gmail.com</h1>
                </a>
                <a href="#" className='flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-200 transition duration-300'>
                    <img src="/src/assets/LINE_New_App_Icon_(2020-12).png" className='w-16 h-16 rounded-full' />
                    <h1 className='font-semibold text-2xl text-gray-800'>zeskykung54321</h1>
                </a>
                <a href="tel:0956456755" className='flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-200 transition duration-300'>
                    <img src="/src/assets/call.png" className='w-16 h-16 rounded-full' />
                    <h1 className='font-semibold text-2xl text-gray-800'>095-645-6755</h1>
                </a>
            </div>
        </div>
    )
}

export default ContactUser
