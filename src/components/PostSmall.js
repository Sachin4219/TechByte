function PostSmall ( props ) {
    return (
        <div className="flex flex-col px-6 py-3">
            <div className="w-[100%] h-[250px] rounded-md pb-3">
                <img className='w-[100%] h-[100%] object-cover rounded-md' src={ props.post.titleimage } alt="random post" />
            </div>
            <div className="flex flex-col mt-2">
                <div className="flex flex-row text-slate-600 pb-2">
                    <p>{ props.post.date }</p>
                    <p className='mx-2'> - </p>
                    <p>{ props.post._author }</p>
                </div>
                <div className="font-sans">
                    <div className="mb-3 text-lg font-extrabold text-slate-700">
                        <h3>{ props.post.title }</h3>
                    </div>
                </div>
                <div className="text-slate-500 text-md font-normal whitespace-pre-line">
                    <p>{ props.post.content.slice( 0, 80 ) }...Read More</p>
                </div>
            </div>
        </div>
    );
}

export default PostSmall;