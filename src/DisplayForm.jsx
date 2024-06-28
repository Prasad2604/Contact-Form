import React from 'react';

export default function DisplayForm({ formDataArray }) {
    return (
        <div>
            <div className="space-y-4">
                <h1 className='text-center mt-20 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-700'>Contact Form Data</h1>
                <p className='text-center font-semibold'>Designed for Website Vikreta’s interview assignment, this form is a testament to simplicity and functionality </p>
            </div>
            {formDataArray.length > 0 ? (
                formDataArray.map((data, index) => (
                    <div key={index} className='flex flex-col mx-auto h-screen w-full max-w-2xl mt-20 space-y-4 px-4'>
                        <p className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>Name: {data.first + " " + (data.last ? data.last : '')}</p>
                        <p className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>Mobile: {data.contactNumber}</p>
                        <p className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>Email: {data.email}</p>
                        <p className='text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>Message: {data.message}</p>
                    </div>
                ))
            ) : (
                <p className='flex flex-col mx-auto h-screen w-full max-w-2xl mt-20 space-y-4 px-4 text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>No data</p>
            )}
        </div>
    );
}
