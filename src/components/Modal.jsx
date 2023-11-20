import React, { useState } from 'react';
import './Modal.css';

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      page: '',
      description: '',
      status: 'ready-stock',
    }
  );

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className='modal-container'
      onClick={(e) => {
        if (e.target.className === 'modal-container') closeModal();
      }}
    >
      <div className='modal'>
        <form>
          <div className='form-group'>
            <label htmlFor='page'>Page</label>
            <input name='page' value={formState.page} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='status'>Status</label>
            <select
              name='status'
              value={formState.status}
              onChange={handleChange}
            >
              <option value='ready-stock'>Ready Stock</option>
              <option value='restock'>Restock</option>
              <option value='out-of-stock'>Out Of Stock</option>
            </select>
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
