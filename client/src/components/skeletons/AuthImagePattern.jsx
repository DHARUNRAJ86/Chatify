const AuthImagePattern =({title,subtitle})=>{
     return <>
     <div className='hidden lg:flex items-center justify-center p-12'>
          <div className='max-w-md text-center'>
               {/*Grid Pattern */}
               <div className='grid grid-cols-3 gap-3 mb-8'>
                    {
                         [...Array(9)].map((_,index)=>{
                              return(
                                   <div key={index} className={`aspect-square rounded-2xl bg-gray-700/30 ${index%2===0 ? 'animate-pulse':''}`}></div>
                              )
                         })
                    }
               </div>
          </div>
     </div>
     </>
}
export default AuthImagePattern;