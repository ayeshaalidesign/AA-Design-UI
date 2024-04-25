import React from 'react'

const NotFound = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-white" style={{fontFamily:'Seasons'}}>
    <div className=" w-full space-y- px-5 pb-4 rounded m-4">
    <h1 class="mt-12 text-5xl font-bold text-center mb-4">404: Page Not Found</h1>
    <p class="mb-4 text-lg text-black text-semibold text-center">Oops! The resource you are looking for is not available.</p>
    <div class="animate-bounce">
      <svg class="mx-auto h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    </div>
    <p class="mb-12 text-black text-ms mt-4 text-center">Let's get you back <a href="/" class="text-blue-500">Home</a>.</p>
    </div>
  </div>
     
  )
}

export default NotFound
