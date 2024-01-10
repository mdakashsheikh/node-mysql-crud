import React from 'react'

export default function MovieForm() {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>CRUD OPERATION</h1>
            <form className='flex flex-col gap-4'>
                <input 
                    type='text' 
                    id='movieName' 
                    placeholder='Movie name' 
                    className='bg-slate-200 p-2 rounded-lg'
                />
                <input 
                    type='text' 
                    id='review' 
                    placeholder='Review' 
                    className='bg-slate-200 p-2 rounded-lg'
                />
                <button className='bg-slate-500 p-2 rounded-lg text-white uppercase hover:opacity-80 disabled:opacity-90'>
                    Submit
                </button>
            </form>
        </div>
    )
}
