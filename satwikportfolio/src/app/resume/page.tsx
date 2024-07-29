import React from 'react'

const Resume = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      
        <h1 className='text-4xl font-bold text-center text-emerald-200'>Resume</h1>
      
      <div className="container mx-auto mt-10">
        <iframe
          src="/assets/Satwik_Resume_.pdf"
          className="w-full h-[90vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[95vh] border border-teal-300 shadow-lg rounded-lg"
          title="Satwik Mallajosyula's Resume"
          width="100%"
        height="800px"
        />
      </div>
    </div>
  )
}

export default Resume