import React from 'react';
import background from './background-image.png';
import Navbar from '../components/navbar';

const ContactPage = () => {
    return (
        <div className='h-screen bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `url(${background})` }}>
            <div className='absolute inset-0 backdrop-filter backdrop-blur-sm bg-slate-800 bg-opacity-75'>
                <Navbar />
                <div className='h-screen flex flex-col items-center'>
                    <h2 className='font-mono text-5xl mt-32 text-white font-bold mb-8'>Ask us anything!</h2>
                    <p className='font-mono text-lg text-white mb-8 max-w-[600px] text-justify'>
                        Have a question or inquiry? We're here to help! Feel free to reach out to us with anything on your mind.
                    </p>
                    <div className='bg-white p-8 rounded-md shadow-md w-5/12 justify-center'>
                        <form>
                            <label className='block mb-4'>
                                Name:
                                <input type='text' className='border rounded-md p-2 w-full' />
                            </label>
                            <label className='block mb-4'>
                                Email:
                                <input type='email' className='border rounded-md p-2 w-full' />
                            </label>
                            <label className='block mb-4'>
                                Message:
                                <textarea className='border rounded-md p-2 w-full' />
                            </label>
                            <div className='flex justify-end'>
                                <button
                                    type='submit'
                                    className='bg-[#4B6989] text-white rounded-md p-2 hover:bg-[#4b6989b9]'
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
