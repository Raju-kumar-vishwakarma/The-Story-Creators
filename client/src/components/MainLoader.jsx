import React from 'react'

const MainLoader = () => {
  return (
     <div className="absolute  inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="flex flex-col items-center ">
                <div className="w-12 h-12 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>

            </div>
        </div>
  )
}

export default MainLoader;