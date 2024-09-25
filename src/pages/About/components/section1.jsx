import './section1.scss';
import img1 from '../../../assets/images/imagetwila1.jpeg';
import img2 from '../../../assets/images/imagstory.jpg';

export const FirstSectionAbout = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-9 lg:p-20 p-6 bg-black lg:pt-9'>
                {/* Image Section */}
                <img 
                    src={img2} 
                    className='lg:h-[70vh] lg:w-[28vw] w-full h-[50vh] object-cover' 
                    alt="Our Story" 
                />
                
                {/* Text Section */}
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-yellow-500 text-3xl'>Our Story</h1>
                        <p className='text-gray-400 lg:text-xl text-lg'>
                            Raja Club Athletic, widely known as Raja Casablanca or simply Raja, is a football club based in Casablanca, Morocco, that competes in Botola, the top flight of Moroccan football. Founded on 20 March 1949 in the district of Derb Sultan, the club has traditionally worn a green home kit since inception. Raja is a well-known club for the success of its football section, very popular in and outside the country. The club sits at the Raja CA Academy for training and plays home games in the Stade Mohammed V since 1955.
                        </p>
                    </div>
                    
                    {/* Quote Section */}
                    <div className='border-l-2 border-gray-300 pl-6 pt-2'>
                        <p className='text-gray-400 lg:text-xl text-lg'>
                            The club is one of the most widely supported teams in Africa.
                        </p>
                        <p className='text-gray-500'>- Rca</p>
                    </div>
                </div>
            </div>
        </>
    );
};
