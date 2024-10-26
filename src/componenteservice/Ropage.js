import rocket from '../assetsservice/rocket.png';
export default function Ropage(){
    return  <section class=" xl:-mt-[100px] xl:px-16 flex flex-col md:flex-row bg-gray-50 items-center  justify-between xl:ml-0 ml-10 xl:-mt-32">
    
    <div class="xl:w-[600px] xl:h-600px space-y-6 xl:-mt-32">
      
      <h3 class="text-blue-600 font-semibold text-lg">Our Process</h3>
      <h1 class="text-4xl font-bold text-gray-900 leading-relaxed pr-10">Generating New Business Growth Plans</h1>
      <p class="text-gray-500 xl:mt-4 mr-24 xl:mr-0">Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus phasellus magna erat.</p>
      
      
      <div class="space-y-6">
       
        <div className='xl:mr-0 mr-10'>
          <div class="flex justify-between mb-1 ">
            <span class="text-gray-400 font-bold">Business Goal</span>
            <span class="text-gray-500">65%</span>
          </div>
          <div class="h-[10px] rounded-full bg-gray-200 shadow-md xl:mr-0 mr-0">
            <div class="h-[10px] bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-2/3"></div>
          </div>
        </div>
  
       
        <div className='xl:mr-0 mr-10'>
          <div class="flex justify-between mb-1">
            <span class="text-gray-400 font-bold">Traffic Growth</span>
            <span class="text-gray-500">90%</span>
          </div>
          <div class="h-[10px] rounded-full bg-gray-200 shadow-md">
            <div class="h-[10px] bg-gradient-to-r from-red-500 to-orange-500 rounded-full xl:w-[440px] w-[280px]"></div>
          </div>
        </div>
  
      
        <div className='xl:mr-0 mr-10'>
          <div class="flex justify-between mb-1">
            <span class="text-gray-400 font-bold">Competitor Research</span>
            <span class="text-gray-500">75%</span>
          </div>
          <div class="h-[10px] rounded-full bg-gray-200 shadow-md">
            <div class="h-[10px] bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  
    
    <div class="xl:w-[550px]  xl:-mt-7 md:mt-0 flex justify-center  mt-10 mr-10 xl:mr-0 ">
      <img src={rocket} alt="Rocket Launch Illustration" class="xl:w-[550px] xl:h-[500px] " />
    </div>
  </section>
  
}