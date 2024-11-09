import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CvInfoContext } from '@/context/CvInfoContext';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../../../server/GlobalApi';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

function PersonalDetails({enabledNext}) {


    const params=useParams();
    const {cvInfo, setCvInfo} = useContext(CvInfoContext);

    const [formData,setFormData]=useState({});
    const [loading,setLoading]=useState(false);



 useEffect(()=>{
    console.log(params);
 },[params])





   
    const handleInputChange = (e) => {
        enabledNext(false)
        const {name, value}=e.target;


        setFormData({
            ...formData,
            [name]: value
        })

        setCvInfo({
            ...cvInfo,
            [name]: value
        });
    }

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);

        const data={
            data:formData
        }
        GlobalApi.UpdateCvDetail(params?.cvId,data).then((res)=>{
            console.log(res);
            enabledNext(true);
            setLoading(false);
            toast.success("Details updated 🎉✨");
        },(error)=>{
            setLoading(false);
        })
    }

    return (
        <div className='p-4 sm:p-5 shadow-lg border-t-primary border-t-4 mt-6 sm:mt-10'>
            <h2 className='text-lg sm:text-xl font-bold'>Personal Info</h2>
            <p className='text-sm sm:text-base text-gray-600 mb-4'>QuickStart with your basic information</p>

            <form onSubmit={onSave}>
                <div className='space-y-4'>
                    {/* Name Fields - Always in grid */}
                    <div className='grid grid-cols-3 gap-3'>
                        <div className='space-y-1.5'>
                            <label className='text-sm font-medium'>FirstName</label>
                            <Input 
                                name='firstName' 
                                defaultValue={cvInfo?.firstName}
                                required 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <label className='text-sm font-medium'>MiddleName</label>
                            <Input 
                                name='middleName' 
                                defaultValue={cvInfo?.middleName}
                                onChange={handleInputChange}
                              
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <label className='text-sm font-medium'>LastName</label>
                            <Input 
                                name='lastName' 
                                defaultValue={cvInfo?.lastName}
                                required 
                                onChange={handleInputChange}
                               
                            />
                        </div>
                    </div>

                    {/* Job Title - Full width */}
                    <div className='space-y-1.5'>
                        <label className='text-sm font-medium'>Job Title</label>
                        <Input 
                            name='jobTitle' 
                            defaultValue={cvInfo?.jobTitle}
                            required 
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='space-y-1.5'>
                        <label className='text-sm font-medium'>Address</label>
                        <Input 
                            name='address' 
                            defaultValue={cvInfo?.address}
                            required 
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* Contact Fields - Always in grid */}
                    <div className='grid grid-cols-3 gap-3'>
                        <div className='space-y-1.5'>
                            <label className='text-sm font-medium'>Phone</label>
                            <Input 
                                name='phone' 
                                defaultValue={cvInfo?.phone}
                                required 
                                onChange={handleInputChange}  
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <label className='text-sm font-medium'>Email</label>
                            <Input 
                                name='email' 
                                type='email'
                                defaultValue={cvInfo?.email}
                                required 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <label className='text-sm font-medium'>LinkedIn</label>
                            <Input 
                                name='linkedin' 
                                defaultValue={cvInfo?.linkedin}
                                required 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex justify-end'>
                    <Button type="submit"
                    disabled={loading}
                    >{loading? <Loader className='animate-spin' />:"Save"}</Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails
