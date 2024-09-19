import './section1.scss'
import img1 from '../../../assets/images/size2.png'


export const FirstSectionContact = () => {
    return (
        <>
            <div className='lg:flex flex lg:flex-row flex-col p-10 bg-black'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2257067884275!2d-7.588891426501435!3d33.57348854286191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0cd013af75%3A0x3a9b7256f8b803f6!2z2YXYrdi32Kkg2YjZhNin2K8g2LLZitin2YY!5e0!3m2!1sfr!2sma!4v1707921694897!5m2!1sfr!2sma" className='lg:w-[600px] lg:h-[600px] w-[350px] h-[600px]'   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex flex-col gap-6 p-6    '>
                    <h2 className='text-yellow-500 font-thin' >Send us your message</h2>
                    <div className='flex flex-col gap-6'>
                        <input className='border-1 bg-black border-zinc-400 p-3 rounded lg:w-[40vw]' type="text" placeholder='Name' />
                        <input className='border-1 bg-black border-zinc-400 p-3 rounded lg:w-[40vw]' type="email" placeholder='Email' />
                        <input className='border-1 bg-black border-zinc-400 p-3 rounded lg:w-[40vw] ' type="number" placeholder='Phone' />
                        <textarea className='border-1 bg-black border-zinc-400 p-3 rounded lg:w-[40vw] h-[25vh]' placeholder='message' name="" id="" cols="30" rows="10"></textarea>
                        <button className='bg-yellow-500 text-white lg:h-[7vh] lg:w-[40vw] h-[8vh] w-[50vw] font-light text-2xl rounded-3xl hover:bg-green-600 hover:transition-all'>SEND</button>
                    </div>
                </div>
            </div>
        </>
    )
}
