import React from 'react'

const HomepageUser = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl'>🎉 Welcome to my website 🥳</h1>
        <h2 className='font-bold text-2xl'>My name is Thianthanet Mikula</h2>
        <p className='text-xl'>I study at Naresuan University, Faculty of Computer Engineering.</p>
        <p className='text-xl'> I am interested in web and network development.</p>
        <p className='text-xl'>This is a website for my learning practice.</p>
      </div>
      <br />
      <hr />
      <br />
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-xl'>💻 Skill 🖱</h3>
        <br />
        <div className='flex justify-center gap-2 sm:flex-row sm:flex-wrap'>
          <img src="/src/assets/html.png" className='w-14 h-14' />
          <img src="/src/assets/text.png" className='w-14 h-14' />
          <img src="/src/assets/js.png" className='w-14 h-14' />
          <img src="/src/assets/bootstrap-icon-css.png" className='w-14 h-14' />
          <img src="/src/assets/react.svg" className='w-14 h-14' />
          <img src="/src/assets/vitejs.svg" className='w-14 h-14' />
          <img src="/src/assets/tailwind-css-icon-2048x1229-u8dzt4uh.png" className='w-14 h-14' />
          <img src="/src/assets/java.png" className='w-14 h-14' />
          <img src="/src/assets/python.png" className='w-14 h-14' />
          <img src="/src/assets/letter-c.png" className='w-14 h-14' />
          <img src="/src/assets/mysql-database.png" className='w-14 h-14' />
          <img src="/src/assets/photoshop.png" className='w-14 h-14' />
        </div>
      </div>
    </div>
  )
}

export default HomepageUser