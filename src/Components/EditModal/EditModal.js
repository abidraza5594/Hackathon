// EditModal.js (Modal Component)
import React, { useState, useRef, useEffect } from 'react';

const EditModal = ({ itemToEdit, handleFormSubmit, onClose, formData, handleChange, handleSubmit }) => {
  // Rest of the component code
  const modalRef = useRef();

  return (
    <div className="modal-background">
      <div className="modal" ref={modalRef}>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>New Hackathon Submission</h1>
            <div className='title'>
              <label>Title</label>
              <input
                type="text"
                placeholder='Title of your submission'
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className='summary'>
              <label>Summary</label>
              <input
                type="text"
                placeholder='A short summary of your submission (this will be visible with your submission)'
                name="summary"
                value={formData.summary}
                onChange={handleChange}
              />
            </div>

            <div className='description'>
              <label>Description</label>
              <textarea
                name="description"
                placeholder='Write a long description of your project. You can describe your idea and approach here.'
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className='coverimage'>
              <label>Cover Image</label>
              <p>Minimum resolution: 360px  X 360px</p>
              <input
                type="file"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
              />
            </div>

            <div className='hackathonname'>
              <label>Hackathon Name</label>
              <input
                type="text"
                placeholder='Enter the name of the hackathon'
                name="hackathonName"
                value={formData.hackathonName}
                onChange={handleChange}
              />
            </div>

            <div className='hackathondate'>
              <div className='hackathonstartdate'>
                <label>Hackathon Start Date</label>
                <input
                  type="date"
                  placeholder='Select start date'
                  name="hackathonStartDate"
                  value={formData.hackathonStartDate}
                  onChange={handleChange}
                />
              </div>
              <div className='hackathonendtdate'>
                <label>Hackathon End Date</label>
                <input
                  type="date"
                  placeholder='Select end date'
                  name="hackathonEndDate"
                  value={formData.hackathonEndDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='githublink'>
              <label>Github Repository Link</label>
              <input
                type="text"
                placeholder='Enter your submission’s public GitHub repository link'
                name="githubRepositoryLink"
                value={formData.githubRepositoryLink}
                onChange={handleChange}
              />
            </div>

            <div className='otherlinks'>
              <label>Other Links (separated by commas)</label>
              <input
                type="text"
                placeholder='You can upload a video demo or URL of your demo app here.'
                name="otherLinks"
                value={formData.otherLinks}
                onChange={handleChange}
              />
            </div>

            <div className='uploadsubmission'>
              <button type="submit">Upload Submission</button>
            </div>
          </form>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
