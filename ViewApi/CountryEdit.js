import React, {useState, useEffect} from 'react'
import countryApi from '../api/countryApi'


export default function CountryEdit(props) {
    const [country, setCountry] = useState([])

    useEffect(()=>{
        countryApi.findOne(props.id.counID).then(data =>{
            setCountry(data)
        })
    },[])
  return (
   <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white">
        <a href="#">
            <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">.Net Core Bootcamp</h5>
                </a>
                <div>
                    <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Apply Date : </label>
                </div>
                <div>
                <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Status : </label>
                </div>
                <div>
                    <label className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>Last Progress : </label>
                </div>
            </div>
        </div>
    )
}
