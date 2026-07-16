import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../styles/AddCountryModal.css"
function AddCountryModal({ onClose }) {


    const [errors, setErrors] = useState({});
    const [countryName, setCountryName] = useState({
        name: "",
    });

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
    }

    const handleInputChange = (e) => {
        const fieldInput = e.target.name;
        const value = e.target.value;
        setCountryName({
            ...countryName,
            [fieldInput]: value
        })
    }

    const validateRegisterForm = () => {
        const errorsInForm = {};
        let valid = true;

        if (!countryName.name) {
            errorsInForm.name = 'Name is required';
            valid = false;
        }
        setErrors(errorsInForm);
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateRegisterForm()) {
            axios.post(`http://localhost:3000/api/admin/country/add`, countryName)
                .then((res) => {
                    console.log(res);
                    alert("Register success")
                })
                .catch((err) => {
                    console.log(err);
                    alert("Register fail")
                })
        }
        onClose();
        window.location.reload();
    }

    return (
        <div>
            <div className="modal-overlay">
                <div className="register-modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-group">
                            <h2 className="modal-title">Add country</h2>
                            <p className="modal-subtitle">Create a new country entry</p>
                        </div>
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Form */}
                    <div className="register-form">
                        <div className="form-field">
                            <label className="form-label">Country name</label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.6" />
                                    </svg>
                                </span>
                                <input className="form-input" type="text" placeholder="Enter country name" onChange={handleInputChange} name="name" />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={onClose}>Cancel</button>
                            <button className="btn-submit" onClick={handleSubmit}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                                Add country
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCountryModal;