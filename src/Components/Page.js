import React,{useEffect, useState} from 'react'
const Page = () => {

    // const [reloaded, setReloaded] = useState(false);

    // localStorage.removeItem('rahul')
    // localStorage.removeItem('user')
    // localStorage.removeItem('wallet')

    // useEffect(() => {
    //     if (
    //         !localStorage.getItem('rahul') &&
    //         !localStorage.getItem('user') &&
    //         !localStorage.getItem('wallet') &&
    //         !reloaded
    //     ) {
    //         setReloaded(true);
    //         window.location.reload(false);
    //     }
    // }, [reloaded]);


    return (
        <div>
            <div className='pagenotfound'>
                Please Login First
            </div>
        </div>
    )
}
export default Page;