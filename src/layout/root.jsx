import { Outlet } from 'react-router-dom';
import Navber from '../components/shared/navber';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;