import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../styles/AddCountryModal.css"

function CountryInfoModal({ selectedCountry, isOpen, onClose, getCountryList }) {



    const [countryInfoBeforeEdit, setCountryInfoBeforeEdit] = useState({});

    useEffect(() => {
        if (selectedCountry) {
            setCountryInfoBeforeEdit(selectedCountry);
        }
    }, [selectedCountry]);

    if (!isOpen || !selectedCountry) return null;

    const handleInputChange = (e) => {
        const fieldInput = e.target.name;
        const value = e.target.value;
        setCountryInfoBeforeEdit({
            ...countryInfoBeforeEdit,
            [fieldInput]: value
        })
    }

    const handleEditCountry = (e) => {
        e.preventDefault();
        // Country không có upload file nên gửi JSON thẳng, không cần FormData
        axios.put(`http://localhost:3000/api/admin/country/edit/${selectedCountry.id}`, { name: countryInfoBeforeEdit.name })
            .then((res) => {
                console.log(res);
                alert("Update success");
                getCountryList();
                onClose();
            })
            .catch((err) => {
                console.log(err);
                alert("Update fail")
            })
    }

    return (
        <div>
            <div className="modal-overlay">
                <div className="info-modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-group">
                            <h2 className="modal-title">Country information</h2>
                            <p className="modal-subtitle">View and edit country details</p>
                        </div>
                        <button className="modal-close-btn" onClick={onClose}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="info-form">
                        {/* ID - chỉ đọc */}
                        <div className="form-field">
                            <label className="form-label">
                                ID
                                <span className="readonly-tag">Read only</span>
                            </label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input className="form-input readonly" type="text" value={countryInfoBeforeEdit.id || ''} disabled readOnly />
                                <span className="lock-icon">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="form-field">
                            <label className="form-label">Country name</label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.6" />
                                    </svg>
                                </span>
                                <input className="form-input" type="text" defaultValue={countryInfoBeforeEdit.name || ''} name="name" onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="modal-actions">
                            <button className="btn-cancel" type="button" onClick={onClose}>Cancel</button>
                            <button className="btn-submit" type="submit" onClick={handleEditCountry}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryInfoModal;