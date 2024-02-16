import { Link, useNavigate } from 'react-router-dom'
import './section1.scss'


export const FirstSectionLogain= () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex gap-8 p-14'>
                <div className='border-2 border-gray-200 p-3 w-[40vw] h-[40vh] flex flex-col' >
                    <h1>New Customer</h1>
                    <h6>Register Account</h6>
                    <p>By creating an account you will be able to shop faster, 
                        be up to date on an order's status, 
                        and keep track of the orders you have previously made.</p>
                        <button onClick={() => navigate(`/Signup`)} className=' h-[6vh] w-[12vw] bg-stone-800 text-slate-100 '>CONTINUE</button>
                </div>
                <div className='border-2 border-gray-200 p-4 w-[50vw] h-[60vh] flex flex-col'>
                    <h1>Returning Customer</h1>
                    <h6>I am a returning customer</h6>
                    <div className='flex flex-col gap-2'>
                        <label className='text-bold' htmlFor="Email">Email</label>
                        <input className='border-1 rounded border-gray-500 w-[30vw] h-[6vh] p-2' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-2 pt-2'>
                        <label className='text-bold' htmlFor="Password">Password</label>
                        <input className='border-1 rounded border-gray-500 w-[30vw] h-[6vh] p-2' type="password" placeholder='Password' />
                        <p>Forgot your password?</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className=' h-[6vh] w-[12vw] bg-stone-800 text-slate-100 '>SIGN IN</button>
                        <Link to={`/`} className='pb-2 no-underline text-slate-950 hover:text-orange-500'> or Return to Store</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
