import axios from 'axios'
import React, { useEffect, useState } from 'react'

const getenData = async() => {
    const response = await axios.get('/api/v2/get-data');
    return response.data;
}

export default function () {
    const [repo, setRepo] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getenData().then((data) => setRepo(data));

    }, [refresh])

    const handleEdit = async(movie_name, review, id) => {

        try {
            await axios.post('/edit/' + id, {movie_name, review})
            setRefresh(!refresh);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async(id) => {
        try {
            await axios.delete('/api/v2/delete/' + id)
            setRefresh(!refresh)
        } catch (error) {
            console.log(error);
        }
    }

    if(!repo) {
        return <h1>No Data....</h1>
    }


    console.log('repo', repo)

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl'>Movie Information</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-xl">
                    <thead>
                        <tr className="bg-blue-gray-100 text-gray-700">
                            <th className="py-3 px-4 text-left">Movie Name</th>
                            <th className="py-3 px-4 text-left">Movie Review </th>
                            <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    {/* <tbody className="text-blue-gray-900">
                        <tr className="border-b border-blue-gray-200">
                            <td className="py-3 px-4">Company A</td>
                            <td className="py-3 px-4">$50.25</td>
                            <td className="py-3 px-4">
                                <button className="font-medium text-blue-600 hover:text-blue-800">Edit</button>
                                <button className="px-4 font-medium text-blue-600 hover:text-blue-800">Delete</button>
                            </td>
                        </tr>
                    </tbody> */}
                    <tbody className='ext-blue-gray-900'>
                        {
                            repo?.map((val, i) => {
                                return (<tr lassName="border-b border-blue-gray-200" key={i}>

                                     {console.log('val', val.movie_name)}
                                     {console.log('review', val.review)}

                                    <td className="py-3 px-4">Val {val.movie_name}</td>
                                    <td className="py-3 px-4">{val.review}</td>
                                    <td>
                                        <button 
                                            className="font-medium text-blue-600 hover:text-blue-800"
                                            onClick={(e) => handleEdit(val.movie_name, val.review, val.id)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="px-4 font-medium text-blue-600 hover:text-blue-800"
                                            onClick={(e) => handleDelete(val.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
    )
}
