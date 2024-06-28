import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput,Label, Button } from 'flowbite-react'
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function ContactForm({setFormDataArray}) {
        const [formData, setFormData] = useState({});
        const { register, handleSubmit, formState: { errors } } = useForm(); 
        const [messageLength, setMessageLength] = useState(0);

        const navigate = useNavigate();

        const handleInputChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });

            if(e.target.name==='message'){
                setMessageLength(e.target.value.length);
            }
        };



    const validateContactNumber = (value) => {
        const regex = /^\d{10}$/;
        return regex.test(value) || 'Invalid contact number (10 digits only)';
    };


    
    const validateEmail = (value) => {
        const regex = /^[^\s@]+@websitevikreta\.com$/; 
        return regex.test(value) || 'Email must be of the form username@websitevikreta.com';
    };
      
    const onSubmit = (data) => {
        console.log(formData);
        setFormDataArray(prevArray => [...prevArray, formData]);    
        alert('Data Sent Successfully')
        navigate('/display');
    };
      

  return (
    <div className='h-screen mt-20'>
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10 md:gap-4">
            {/* left  */}
            <div className="flex-1 space-y-4">
                <span className='font-bold text-4xl px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Contact Form</span>
                <p className='mt-3 font-semibold'>Contact Form as a part of assignment of Website Vikreta's Interview</p>
            </div>
            <div className="flex-1 space-y-4">
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <Label htmlFor="first" value="First Name" className="required-field"/>
                    <TextInput
                        {...register('first', { required: 'First name is required' })}
                        type="text"
                        placeholder="FirstName"
                        id="first"
                        name="first"
                        className="w-full focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md border border-gray-300"
                        onChange={handleInputChange}
                        required
                    />
                    {errors.first && <p className='text-red-500'>{errors.first.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label value='Last Name'/>
                        <TextInput
                            {...register('last')}
                            type='text'
                            placeholder='LastName'
                            id='last'   
                            onChange={handleInputChange}      
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className='text-sm font-medium mr-3 required-field'>Email Address</Label>
                    <TextInput
                        {...register('email', { required: 'Email is required', validate: validateEmail })}
                        type="email"
                        placeholder="example@websitevikreta.com"
                        id="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                
                <div className="space-y-2">
                    <Label value='Contact Number' className='text-sm font-medium mr-3 required-field' />
                            <TextInput
                                {...register('contactNumber', { required: 'Contact number is required', validate: validateContactNumber })}
                                type="text"
                                placeholder="Enter your contact number"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber || ''}
                                onChange={handleInputChange}
                            />
                    {errors.contactNumber && <p className='text-red-500'>{errors.contactNumber.message}</p>}
                </div>

                <div className="flex flex-col">
                    <Label value="Message" className='text-sm font-medium mr-3 required-field mb-2' htmlFor="message" />
                    <textarea
                        {...register('message', { required: 'Message is required' })}
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Write your message here"
                        className="w-full resize-none focus:outline-none focus:ring-1 focus:ring-teal-500 rounded-md px-2 py-1 border border-gray-300"
                        maxLength="200"
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                    <p className="text-right text-sm">{messageLength}/200</p>
                </div>

                <Button gradientDuoTone='purpleToPink' type='submit' outline >
                    Send
                </Button>
                </form>
            </div>
    </div>
    </div>
  )
}

