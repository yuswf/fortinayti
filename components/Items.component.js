import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useSWR from 'swr';

import {setData} from '../stores/data';

import NavbarComponent from './Navbar.component';

function ItemsComponent() {
    const dispatch = useDispatch();
    const fetcher = url => fetch(url).then(r => r.json()).then(data => data.data);
    const {data, error} = useSWR('https://fortnite-api.com/v2/shop/br', fetcher);

    useEffect(() => {
        if (data) {
            dispatch(setData(data));
        }
    }, [data]);

    return (
        <div>
            <NavbarComponent />
        </div>
    )
}

export default ItemsComponent;
