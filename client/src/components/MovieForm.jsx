import axios from 'axios';
import React, { useState } from 'react'

export default function MovieForm() {
    const [movieName, setMovieName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const result = axios.post('/api/v2/insert', {movieName, review})
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>CRUD OPERATION</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input 
                    type='text' 
                    id='movieName' 
                    placeholder='Movie name' 
                    className='bg-slate-200 p-2 rounded-lg'
                    onChange={e => setMovieName(e.target.value)}
                />
                <input 
                    type='text' 
                    id='review' 
                    placeholder='Review' 
                    className='bg-slate-200 p-2 rounded-lg'
                    onChange={e => setReview(e.target.value)}
                />
                <button className='bg-slate-500 p-2 rounded-lg text-white uppercase hover:opacity-80 disabled:opacity-90'>
                    Submit
                </button>
            </form>
        </div>
    )
}
