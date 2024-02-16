import './section1.scss'
import img1 from '../../../assets/images/heading-pages-06.jpg'
import img2 from '../../../assets/images/banner-14.jpg'

export const FirstSectionAbout = () => {
    return (
        <>
            <div>
                <img src={img1} alt="" className='h-[35vh]  relative' />
                <h1 className='absolute top-[25vh] left-[20vw] lg:top-[23vh] lg:left-[40vw] text-white font-bold text-7xl'>ABOUT</h1>
            </div>
            <div className='lg:flex lg:flex-row flex flex-col gap-9 p-11 '>
                <img src={img2} className='h-[70vh] lg:w-[28vw] w-[90vw]' alt="" />
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-6'    >
                        <h1 className='text-gray-600'>Our story</h1>
                        <p className='text-gray-400 text-xl'>Phasellus egestas dui non, lobortis ultricies augue semper vitae. Vestibulum pharetra ante ac purus consectetur. Curabitur fringilla dolor lorem, nec molestie urna dapibus vel. Pellentesque porta neque bibendum est viverra. Vivamus lobortis magna interdum laoreet. Gravida elit quis, condimentum ex semper sit amet. Fusce magna eget ligula. Aliquam sodales imperdiet quam. Fringilla ut vehicula vehicula. Pellentesque congue ut gravida ac. Aliquam volutpat erat. Iaculis lectus donec facilisis, sodales eu sagittis. Etiam pellentesque, dictum rutrum magna, eleifend neque elit, tincidunt arcu sem. Rutrum turpis, commodo efficitur ut, convallis ipsum velit, maximus ligula ac ligula. Vivamus ultricies tristique vulputate. Ultrices vitae orci sed.</p>
                    </div>
                    <div className='border-l-2 border-gray-300 pl-6 pt-2'>
                        <p className='text-gray-400 text-xl'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <p className='text-gray-500'>- Steve Job’s</p>
                    </div>
                </div>

            </div>
        </>
    )
}
