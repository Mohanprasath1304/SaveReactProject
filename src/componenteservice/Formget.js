import formimg from '../assetsservice/formimg.png';
export default function Headerservice(){
    return <section class="bg-blue-50 py-16">
    <div class=" ml-10 lg:flex lg:items-center -mr-20 ">
      
      
      <div class="xl:w-[500px] w-80 mb-8 lg:mb-0 xl:ml-10 xl:mr-20">
        <img src={formimg} alt="Illustration" class="xl:w-[500px] w-80 xl:h-auto"/>
      </div>
      
     
      <div class="lg:w-[500px] xl:ml-20">
        <h3 class="text-blue-600 font-semibold text-lg">Get in Touch</h3>
        <h1 class="xl:text-4xl text-3xl font-bold text-gray-900 mt-2 leading-relaxed">We Provide Best Services.Need Help?</h1>
        
      
        <form action="#" class="mt-8 space-y-6 xl:-mr-24">
          
        
          <div>
            <label for="name" class="sr-only">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name*" class="xl:w-full w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-gray-50 focus:ring-orange-500"/>
          </div>
          
         
          <div>
            <label for="email" class="sr-only">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email*" class="xl:w-full w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none bg-gray-50 focus:ring-2 focus:ring-orange-500"/>
          </div>
          
         
          <div>
            <label for="message" class="sr-only">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Message*" class="xl:w-full w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none bg-gray-50 focus:ring-2 focus:ring-orange-500"></textarea>
          </div>
          
       
          <div>
            <button type="submit" class="w-40 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-md shadow-lg focus:outline-none  focus:ring-2 focus:ring-orange-500">
              Send Message
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </section>
  
}