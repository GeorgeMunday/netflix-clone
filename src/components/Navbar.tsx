import React from 'react';
import { NavbarWrapper } from '../styles/Navbar.modules';
import axios from 'axios';
import { popular } from '../modules/ApiLinks';


const Navbar = () => {
    const fetchDate = async () => {
        try {
            const results = await axios.get(popular)
            const allResults = await results.data;
            console.log(allResults);
        } catch(error)
        {
            console.error("Error fetching data:", error);
        }
    }

    React.useEffect(() => {
        fetchDate();
    }, []);
  return (
    <NavbarWrapper>
        <h1>Netflix Clone</h1>
    </NavbarWrapper>
  );
}

export default Navbar;