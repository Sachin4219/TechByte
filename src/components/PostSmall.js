import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';

function PostSmall ( props ) {
    return (
        <div className="flex flex-col px-8 py-3">
            <div className="w-[100%] h-[250px] rounded-md pb-3">
                <img className='w-[100%] h-[100%] object-cover rounded-md' src={ props.post.titleimage } alt="random post" />
            </div>
            <div className="flex flex-col mt-2">
                <div className="flex flex-row text-sm pb-2">
                    <p className="font-bold text-slate-800">{ props.post.tags.join( ", " ) }</p>
                    <p className='mx-2'> - </p>
                    <p className="text-slate-600">{ props.post.date }</p>
                </div>
                <Link to={ `/post/${ props.idx }` }>
                    <div className="font-sans">
                        <div className="mb-3 text-lg font-extrabold text-slate-800 leading-6">
                            <h3>{ props.post.title }</h3>
                        </div>
                    </div>
                    <div className="text-slate-500 text-sm font-normal tracking-wider whitespace-pre-line mb-2">
                        <p>{ props.post.content.slice( 0, 90 ) }...<button className="text-sm font-medium text-sky-700 hover:text-sky-600">Read More</button></p>
                    </div>
                </Link>
                <div className="flex flex-row gap-5 h-[50px] items-center">
                    <img src={ profile } className='w-[40px]'></img>
                    <p className='text-md text-slate-700'>{ props.post._author }</p>
                </div>
            </div>
        </div>
    );
}

export default PostSmall;