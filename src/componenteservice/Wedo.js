import serviceimg from '../assetsservice/serviceimg.jpeg';
import tik01 from '../assetsservice/tik01.png';
export default function Wedo(){
    return  <body class="bg-gray-50">

    
    <section class=" xl:pt-12 xl:-pb-20 bg-gray-50 pb-20 xl:-pb-40 pt-10">
        <div class="container xl:mx-10 flex flex-wrap xl:items-center justify-between ">
            
           
            <div class="xl:w-[630px] xl:h-[700px] xl:pl-[60px] w-[400px] h-[400px] px-7 xl:-ml-8">
               <img className='xl:w-[630px] xl:h-[500px] w-[400px] ' src={serviceimg} alt='serviceimg' />
            </div>

            
            <div class="xl:w-[650px] xl:pr-[60px] xl:-mt-[200px] px-8 ">
                <h2 class="text-blue-800 font-bold xl:text-lg text-lg uppercase xl:mb-4 mb-5">What We Do</h2>
                <h1 class="xl:text-4xl text-3xl font-bold  xl:text-black-800 xl:mb-4 mb-6 xl:leading-relaxed leading-relaxed  xl:pr-20">A Better Website Means Better User Experience</h1>
                <p class="text-gray-400 xl:mb-8 mb-8">Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus ipsum metus faucibus eros.</p>

               
                <div class="xl:grid xl:grid-cols-2 xl:gap-5 text-center xl:text-left xl:-mr-20 ">
                   
                    <div class="bg-white shadow-lg xl:p-6 rounded-lg flex items-center space-x-4 mb-5 p-7 xl:mb-0">
                        <div class="text-orange-500 ">
                           <img src={tik01} alt='tik1'/>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800">Content strategy</h4>
                            <p class="text-gray-500">Maecenas ipsum suscipit</p>
                        </div>
                    </div>

                    
                    <div class="bg-white shadow-lg xl:p-6 rounded-lg flex  items-center space-x-4 mb-5 p-7 xl:mb-0">
                        <div class="text-orange-500">
                        <img src={tik01} alt='tik1'/>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800">IT Management</h4>
                            <p class="text-gray-500">Maecenas ipsum suscipit</p>
                        </div>
                    </div>

                   
                    <div class="bg-white shadow-lg xl:p-6 rounded-lg flex  items-center space-x-4 mb-5 p-7 xl:mb-0">
                        <div class="text-orange-500">
                        <img src={tik01} alt='tik1'/>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800">Work Dedication</h4>
                            <p class="text-gray-500">Maecenas ipsum suscipit</p>
                        </div>
                    </div>

                  
                    <div class="bg-white shadow-lg xl:p-6 rounded-lg flex  items-center space-x-4 mb-5 p-7 xl:mb-0">
                        <div class="text-orange-500">
                        <img src={tik01} alt='tik1'/>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-gray-800">Time Management</h4>
                            <p class="text-gray-500">Maecenas ipsum suscipit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>
}