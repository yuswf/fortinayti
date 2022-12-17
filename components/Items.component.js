import {useEffect} from 'react';
import Image from 'next/image';
import useSWR from 'swr';

function ItemsComponent() {
    const fetcher = url => fetch(url).then(r => r.json()).then(data => data.data);
    const {data, error} = useSWR('https://fortnite-api.com/v2/shop/br', fetcher);

    return (
        <div>
            <h1 className="text-2xl font-bold p-5">Daily</h1>

            <div className="flex p-5 grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                {data?.daily?.entries.map((entry, _) => (
                    <div key={_} className="bg-[#1f2024] rounded h-[300px]">
                        {entry.newDisplayAsset.materialInstances[0].images.Background && <img className="rounded mt-6 mx-auto" width="200" height="150" src={entry.newDisplayAsset.materialInstances[0].images.Background} alt="bg" />
                            ||
                            <div role="status"
                                 className="p-4 max-w-sm rounded animate-pulse md:p-6">
                                <div
                                    className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"
                                         viewBox="0 0 640 512">
                                        <path
                                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                                    </svg>
                                </div>
                            </div>
                        }

                        <span className="flex justify-center mt-6">
                            <img className="w-6 h-6" src="https://fortnite-api.com/images/vbuck.png" alt="vb"/>&nbsp;
                            {entry.finalPrice === entry.regularPrice ? <>{entry.regularPrice}</> : <><del>{entry.regularPrice}</del>&nbsp;{entry.finalPrice}</>}
                        </span>
                    </div>
                ))}
            </div>

            <hr className="w-[1500px] my-10 mx-auto"/>

            <h1 className="text-2xl font-bold p-5">Featured</h1>

            <div className="flex p-5 grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                {data?.featured?.entries.map((entry, _) => (
                    <div key={_} className="bg-[#1f2024] rounded h-[300px]">
                        {entry.newDisplayAsset.materialInstances[0].images.Background && <img className="rounded mt-6 mx-auto" width="200" height="150" src={entry.newDisplayAsset.materialInstances[0].images.Background} alt="bg" />
                            ||
                            <div role="status"
                                 className="p-4 max-w-sm rounded animate-pulse md:p-6">
                                <div
                                    className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"
                                         viewBox="0 0 640 512">
                                        <path
                                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                                    </svg>
                                </div>
                            </div>
                        }

                        <span className="flex justify-center mt-6">
                            <img className="w-6 h-6" src="https://fortnite-api.com/images/vbuck.png" alt="vb"/>&nbsp;
                            {entry.finalPrice === entry.regularPrice ? <>{entry.regularPrice}</> : <><del>{entry.regularPrice}</del>&nbsp;{entry.finalPrice}</>}
                        </span>
                    </div>
                ))}
            </div>

            <hr className="w-[1500px] my-10 mx-auto"/>

            <h1 className="text-2xl font-bold p-5">Special Featured</h1>

            <div className="flex p-5 grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                {data?.specialFeatured?.entries.map((entry, _) => (
                    <div key={_} className="bg-[#1f2024] rounded h-[300px]">
                        {entry.newDisplayAsset.materialInstances[0].images.Background && <img className="rounded mt-6 mx-auto" width="200" height="150" src={entry.newDisplayAsset.materialInstances[0].images.Background} alt="bg" />
                            ||
                            <div role="status"
                                 className="p-4 max-w-sm rounded animate-pulse md:p-6">
                                <div
                                    className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor"
                                         viewBox="0 0 640 512">
                                        <path
                                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                                    </svg>
                                </div>
                            </div>
                        }

                        <span className="flex justify-center mt-6">
                            <img className="w-6 h-6" src="https://fortnite-api.com/images/vbuck.png" alt="vb"/>&nbsp;
                            {entry.finalPrice === entry.regularPrice ? <>{entry.regularPrice}</> : <><del>{entry.regularPrice}</del>&nbsp;{entry.finalPrice}</>}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemsComponent;
