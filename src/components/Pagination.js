import React from 'react';
import './styles/Pagination.css';

const Pagination = ({countryPerPage, totalCountries, paginate}) => {
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalCountries/countryPerPage); i++ ) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            {/*eslint-disable-next-line*/}
                            <a onClick={() => paginate(number)} href="#" className="page-link"> 
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>   
        </nav>
    );

}

export default Pagination;