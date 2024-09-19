import './section1.scss'
import img1 from '../../../assets/images/imagetwila1.jpeg'
import img2 from '../../../assets/images/imagstory.jpg'

export const FirstSectionAbout = () => {
    return (
        <>
            <div className='lg:flex lg:flex-row flex flex-col gap-9 p-11 bg-black '>
                <img src={img2} className='h-[70vh] lg:w-[28vw] w-[90vw]' alt="" />
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-6'    >
                        <h1 className='text-yellow-500'>Our story</h1>
                        <p className='text-gray-400 text-xl'>Raja Club Athletic, widely known as Raja Casablanca or simply Raja, is a football club based in Casablanca, Morocco, that competes in Botola, the top flight of Moroccan football.

Founded on 20 March 1949 in the district of Derb Sultan, the club has traditionally worn a green home kit since inception. Raja is a well known club for the success of its football section, very popular in and outside the country. The club sits at the Raja CA Academy for training and plays home games in the Stade Mohammed V since 1955. Unlike most African sporting entities, Raja's members have owned and operated the club throughout its history.</p>
                    </div>
                    <div className='border-l-2 border-gray-300 pl-6 pt-2'>
                        <p className='text-gray-400 text-xl'>The club is one of the most widely supported teams in Africa. Raja is one of two founding members of Botola that have never been relegated from the top division with Wydad AC and AS FAR. The club holds many long-standing rivalries, most notably in the Casablanca Derby with Wydad AC and the Classico with the capital side AS FAR</p>
                        <p className='text-gray-500'>- Rca </p>
                    </div>
                </div>

            </div>
        </>
    )
}
