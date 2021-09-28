import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../actions/Actions';
import { Country } from './Country'
import { Nav } from '../nav/Nav'



export const CountryList = () => {

    const { countries } = useSelector((state) => state.getCountries);

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
   
    const [currentPage, setcurrentState] = useState(1);
    const [countriesPerPage] = useState(10)

    const [pageLimit] = useState(7);
    const [maxPage, setmaxPage] = useState(7)
    const [minPage, setminPage] = useState(0);



    const pages = [];

    const indexOfLastPage = currentPage * countriesPerPage;
    const indexOfFirstPage = indexOfLastPage - countriesPerPage;
    const currentPages = countries.slice(indexOfFirstPage, indexOfLastPage);

    const handleClick = (event) => {

        setcurrentState(Number(event.target.id))

    }

    const handleNextButton = () => {
        setcurrentState(currentPage + 1);

        if (currentPage + 1 > maxPage) {
            setmaxPage(maxPage + pageLimit);
            setminPage(minPage + pageLimit);

        }
    }
    const handlePrevButton = () => {
        setcurrentState(currentPage - 1);

        if ((currentPage - 1) % pageLimit === 0) {
            setmaxPage(maxPage - pageLimit);
            setminPage(minPage - pageLimit);

        }
    }
    for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {

        pages.push(i)

    }

    const renderPageNumber = pages.map((numbers) => {

        if (numbers < maxPage + 1 && numbers > minPage) {
            return (
                <li key={numbers}
                    id={numbers}
                    onClick={handleClick}
                    className={currentPage === numbers ? 'active' : null}
                >
                    {numbers}
                </li>
            )
        } else {
            return null;
        }

    })

    useEffect(() => {
        dispatch(fetchCountries())
        setTimeout(() => { setLoading(false) }, 1000)

    }, [])


    return (



        <div>
            <Nav />
            <div className="paginate_container">

                <div className="container" >
                    {loading  ?
                        (
                            <div className="load">

                            </div>
                        ) :
                        (
                            currentPages.map(country => (

                                <Country
                                    id={country.id}
                                    name={country.name}
                                    image={country.image}
                                    continent={country.continent}
                                    population={country.population}
                                    key={country.name}
                                />
                            ))
                        ) 
                        
                    }

                </div>
                <ul className="pagination">
                    <li>
                        <button
                            onClick={handlePrevButton}
                            disabled={currentPage === pages[0] ? true : false}
                        >
                            anterior
                        </button>
                    </li>
                    {renderPageNumber}
                    <li> <button
                        onClick={handleNextButton}
                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                    >
                        siguiente
                    </button>
                    </li>


                </ul>

            </div>
        </div>

    )
}


