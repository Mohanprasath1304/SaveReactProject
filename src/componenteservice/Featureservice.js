import DB from '../assetsservice/DB.png';
import compu from '../assetsservice/compu.png';
import bri from '../assetsservice/bri.png';
import core from '../assetsservice/core.png';
export default function Featureservice(){
    return<section class="bg-blue-50 py-16">
    <div class="xl:max-w-7xl max-w-3xl  xl:pl-7 xl:pr-4 xl:-pr-10 mx-10">
     
      <div class="text-center xl:mb-12 mb-12">
        <h3 class="text-blue-700 font-bold text-lg mb-5 xl:mb-0">Featured Services</h3>
        <h1 class="xl:text-4xl text-3xl font-bold text-gray-900 xl:mt-2 xl:mx-80 leading-relaxed">Engaging Creative Minds Via Technology</h1>
      </div>
      
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 leading-relaxed text-center xl:text-left">
        
       
        <div class="">
          <div class="mb-4 xl:mr-48 ">
            <img src={DB} alt="Product Design Icon" class="mx-auto w-12 h-12"/>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Product Design</h3>
          <p class="text-gray-500 mt-2">Donec fringilla lacus ut ipsum faucibus posuere. Praesent ut lacus ac sem commodo mattis.</p>
        </div>
        
        
        <div className=''>
          <div class="mb-4 xl:mr-48">
            <img src={compu} alt="Digital Services Icon" class="mx-auto w-12 h-12"/>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Digital Services</h3>
          <p class="text-gray-500 mt-2">Consectetur adipiscing elit, sed do eiusmod tempor, praesent commodo mattis.</p>
        </div>
        
        
        <div className=''>
          <div class="mb-4 xl:mr-52">
            <img src={bri} alt="Innovative Thinking Icon" class="mx-auto w-12 h-12"/>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Innovative Thinking</h3>
          <p class="text-gray-500 mt-2">Praesent ut lacus ac sem commodo mattis. Dolor sit amet, consectetur.</p>
        </div>
        
        
        <div >
          <div class="xl:mb-4  xl:mr-48">
            <img src={core} alt="Content Engineering Icon" class="mx-auto w-12 h-12"/>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">Content Engineering</h3>
          <p class="text-gray-500 mt-2">Lacus ac sem commodo mattis. Praesent ut lacus ac sem commodo mattis.</p>
        </div>
        
      </div>
    </div>
  </section>
  
}