import './section1.scss';
import img1 from '../../../assets/images/size2.png';

export const FirstSectionContact = () => {
    return (
        <div className="lg:flex flex flex-col lg:flex-row p-6 lg:p-6 bg-black gap-8">
            {/* Map Section */}
            <div className="flex justify-center lg:justify-start">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2257067884275!2d-7.588891426501435!3d33.57348854286191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0cd013af75%3A0x3a9b7256f8b803f6!2z2YXYrdi32Kkg2YjZhNin2K8g2LLZitin2YY!5e0!3m2!1sfr!2sma!4v1707921694897!5m2!1sfr!2sma"
                    className="lg:w-[600px] w-full h-[300px] lg:h-[500px] rounded-md shadow-lg"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col gap-3  w-full lg:w-[45%]">
                <h2 className="text-green-500 font-light text-3xl">Send us your message</h2>
                <div className="flex flex-col gap-4">
                    <input 
                        className="border bg-black border-gray-500 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        type="text" 
                        placeholder="Name" />
                    <input 
                        className="border bg-black border-gray-500 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        type="email" 
                        placeholder="Email" />
                    <input 
                        className="border bg-black border-gray-500 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        type="number" 
                        placeholder="Phone" />
                    <textarea 
                        className="border bg-black border-gray-500 p-3 rounded w-full h-[20vh] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Message">
                    </textarea>
                    <button className="bg-green-500 text-white w-40  py-2 text-xl font-light rounded-3xl hover:bg-green-600 transition-all">
                        SEND
                    </button>
                </div>
            </div>
        </div>
    );
}
