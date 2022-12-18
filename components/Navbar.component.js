import {useState} from 'react';

import DailyComponent from './Daily.component';
import FeaturedComponent from './Featured.component';
import SpecialFeaturedComponent from './SpecialFeatured.component';

function NavbarComponent() {
    const [active, setActive] = useState(0);
    const [list, setList] = useState([
        {
            name: 'Daily',
            component: <DailyComponent/>
        },
        {
            name: 'Featured',
            component: <FeaturedComponent/>
        },
        {
            name: 'Special Featured',
            component: <SpecialFeaturedComponent/>
        },
    ]);

    return (
        <div>
            <ul className="flex p-5 gap-4">
                {list.map((item, index) => (
                    <li className={`${list[active].name === item.name ? 'bg-[#093a5b]' : 'bg-[#1f2024]'} cursor-pointer hover:bg-[#0a0a0b] transition-all ease-in rounded py-2 px-6 mt-5`} key={index} onClick={() => setActive(index)}>{item.name}</li>
                ))}
            </ul>

            {list[active].component}
        </div>
    )
}

export default NavbarComponent;
