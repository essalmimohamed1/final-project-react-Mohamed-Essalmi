import { Link } from 'react-router-dom'
import './section1.scss'


export const FirstSectionSignup = () => {
    return (
        <>
            <div className='p-9'>
                <div>
                    <h1>Create Account</h1>
                    <h5>Your Personal Details</h5>
                </div>
                <div className='flex flex-col gap-3 p-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-bold' htmlFor="First Name">First Name</label>
                        <input className='border-1 rounded border-gray-500 w-[60vw] h-[6vh] p-2' type="text" placeholder='First Name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-bold' htmlFor="Last Name">Last Name</label>
                        <input className='border-1 rounded border-gray-500 w-[60vw] h-[6vh] p-2' type="text" placeholder='Last Name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-bold' htmlFor="Email">Email</label>
                        <input className='border-1 rounded border-gray-500 w-[60vw] h-[6vh] p-2' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-bold' htmlFor="Password">Password</label>
                        <input className='border-1 rounded border-gray-500 w-[60vw] h-[6vh] p-2' type="password" placeholder='Password' />
                    </div>
                </div>
                <div className='flex items-center gap-3 p-3'>
                    <button className=' h-[6vh] w-[22vw] lg:w-[12vw] bg-stone-800 text-slate-100 '>CREATE</button>
                    <Link to={`/`} className='pb-2 no-underline text-slate-950 hover:text-orange-500'> or Return to Store</Link>
                </div>
            </div>
        </>
    )
}
