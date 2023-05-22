import React from 'react';
import { AiFillCaretRight, AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { blogposts } from '../assets/data';


function Post () {
    const postDetails = blogposts[ 0 ];

    return (
        <div className='w-[100%] pt-16 flex justify-center'>
            <div className="box-border w-[70%] px-[5%] flex justify-between max-[1000px]:items-center max-[1000px]:w-[90%] max-[1000px]:flex-col">
                <div className="w-[70%] max-[1000px]:w-[100%] flex flex-col">
                    <div className="w-[100%] mb-4">
                        <img className='w-[100%] max-h-[500px]' src={ postDetails.titleimage } alt="random post" />
                    </div>
                    <div className=" flex flex-row justify-between text-slate-600 pb-2">
                        <p>{ postDetails.date }</p>
                        <p>{ postDetails._author }</p>
                    </div>
                    <div className="">
                        <div className="mb-5 text-2xl font-bold text-slate-700">
                            <h3>{ postDetails.title }</h3>
                        </div>
                        <div className="text-slate-500 text-lg whitespace-pre-line">
                            <p>{ postDetails.content }</p>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] max-[1000px]:mt-16 max-[1000px]:w-[100%]'>
                    <div className='flex items-center justify-between text-2xl'>
                        <AiFillInstagram className='text-rose-600' />
                        <AiFillFacebook className='text-blue-500' />
                        <AiOutlineTwitter className='text-sky-500' />
                    </div>
                    <div>
                        <h3 className='pt-5 pb-3 border-b text-slate-800'>Categories</h3>
                        {
                            postDetails.tags.map( ( tag, index ) => {
                                return <p key={ index } className='flex items-center justify-between text-slate-600 pt-2'>
                                    <span>{ tag }</span>
                                    <AiFillCaretRight />
                                </p>
                            } )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;