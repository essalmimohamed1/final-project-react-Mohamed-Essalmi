import './section1.scss'
import img1 from '../../../assets/images/heading-pages-06.jpg'


export const FirstSectionContact = () => {
    return (
        <>
            <div>
                <img src={img1} alt="" className='h-[35vh] relative' />
                <h1 className='absolute top-[23vh] left-[40vw] text-white font-bold text-7xl'>CONTACT</h1>
            </div>
            <div className='flex gap-9 p-14'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2257067884275!2d-7.588891426501435!3d33.57348854286191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0cd013af75%3A0x3a9b7256f8b803f6!2z2YXYrdi32Kkg2YjZhNin2K8g2LLZitin2YY!5e0!3m2!1sfr!2sma!4v1707921694897!5m2!1sfr!2sma" width="600" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex flex-col gap-6 p-6    '>
                    <h2 className='text-gray-600 font-thin' >Send us your message</h2>
                    <div className='flex flex-col gap-6'>
                        <input className='border-1 border-zinc-400 p-3 rounded w-[40vw]' type="text" placeholder='Name' />
                        <input className='border-1 border-zinc-400 p-3 rounded w-[40vw]' type="email" placeholder='Email' />
                        <input className='border-1 border-zinc-400 p-3 rounded w-[40vw]' type="number" placeholder='Phone' />
                        <textarea className='border-1 border-zinc-400 p-3 rounded h-[25vh]' placeholder='message' name="" id="" cols="30" rows="10"></textarea>
                        <button className='bg-zinc-900 text-white h-[7vh] font-light text-2xl w-[12vw] rounded-3xl hover:bg-orange-600 hover:transition-all'>SEND</button>
                    </div>
                </div>
            </div>
        </>
    )
}
