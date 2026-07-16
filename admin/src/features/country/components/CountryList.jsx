import axios from 'axios';
import React from 'react';
import CountryInfoModal from './CountryInfoModal';
import { useState, useEffect } from 'react';
import "../styles/CountryList.css"

function CountryList({ toggleModal }) {
    const [countries, setCountries] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({});

    // lấy danh sách country từ back-end
    const getCountryList = () => {
        axios.get("http://localhost:3000/api/admin/country/list")
            .then(res => { setCountries(res.data); console.log(res.data); })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        getCountryList();
    }, []);

    const renderCountryList = () => {
        return countries.map((country, index) => {
            return <tr key={index}>
                <td>
                    <input type="checkbox" className="checkbox" />
                </td>
                <td>{country.id}</td>
                <td>{country.name}</td>
                <td>
                    <div className="action-cell">
                        <button className="action-icon-btn edit" onClick={() => getExactlyCountryById(country.id)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M4 20l4.2-.6L19.6 8.1a1.5 1.5 0 0 0 0-2.1l-1.6-1.6a1.5 1.5 0 0 0-2.1 0L4.6 15.8 4 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="action-icon-btn delete" onClick={() => handleDeleteCountryById(country.id)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7h10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        });
    }

    const getExactlyCountryById = (id) => {
        axios.get(`http://localhost:3000/api/admin/country/show/${id}`)
            .then(res => {
                setSelectedCountry(res.data);
                setOpenEditModal(true);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleDeleteCountryById = (id) => {
        axios.delete(`http://localhost:3000/api/admin/country/delete/${id}`)
            .then(res => {
                alert("Delete success");
                getCountryList();
            }).catch(err => {
                console.log(err);
            })
    }

    const toggleEditModal = () => {
        setOpenEditModal(!openEditModal);
    }

    return (
        <div>
            <div className="users-table-wrap">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th className="th-checkbox">
                                <input type="checkbox" className="checkbox" />
                            </th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCountryList()}
                    </tbody>
                </table>

                <CountryInfoModal selectedCountry={selectedCountry} isOpen={openEditModal} onClose={toggleEditModal} />
            </div>
        </div>
    );
}

export default CountryList;