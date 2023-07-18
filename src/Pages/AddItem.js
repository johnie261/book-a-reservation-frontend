import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearValues, createGlamping, handleChange } from '../Features/gampling/gamplingSlice';
import FileUpload from '../Components/FileUpload';
import { toast } from 'react-toastify';
import { addUploadedFile } from '../Features/file/FileSlice';

const AddItem = () => {
  const [images, setImages] = useState([])

  const {
    isLoading,
    name,
    location,
    glampingType,
    description,
    dailyRate,
  } = useSelector((store) => store.glamping);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(handleChange({ name, value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log("submit form")
    if (!name || !location || !glampingType || !description || !dailyRate) {
      toast.error('Please fill out all fields')
      return
    }
    dispatch(createGlamping({
      name,
      location,
      glampingType,
      description,
      dailyRate
    }))
    if(images.length > 0) {
      dispatch(addUploadedFile(images))
      // setImages([])
    }
  }

  return (
    <div className="form-container">
      <h2 className="form-name">ADD A NEW GLAMPING</h2>
      <div className="underline" />
      <form className="item-form" >
        <label htmlFor="name" className="label">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleInput}
            className="form-input"
            placeholder="Enter name of the glamping"
          />
        </label>
        <label htmlFor="location" className="label">
          Location:
          <input
            id="location"
            name="location"
            type="text"
            value={location}
            onChange={handleInput}
            className="form-input"
            placeholder="Enter location"
          />
        </label>
        <label htmlFor="glampingType" className="label">
          Glamping Type:
          <input
            id="glampingType"
            name="glampingType"
            type="text"
            value={glampingType}
            onChange={handleInput}
            className="form-input"
            placeholder="Enter type of glamping"
          />
        </label>
        <label htmlFor="description" className="label">
          Description:
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleInput}
            className="form-input"
            placeholder="Add description"
          />
        </label>
        < FileUpload setImages={setImages}/>
        {/* <label htmlFor="image" className="label">
          Image link:
          <input
            id="url"
            name="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            type="text"
            className="form-input"
            placeholder="Add a link to an image"
          />
          <button className='bttn'>Add&nbsp;photo</button>
        </label> */}
        <label htmlFor="dailyRate" className="label">
          Daily Rate:
          <input
            id="dailyRate"
            name="dailyRate"
            type="text"
            value={dailyRate}
            onChange={handleInput}
            className="form-input"
            placeholder="Add rate"
          />
        </label>
        <button 
          type="button" 
          className="button"
          onClick={handleSubmitForm}
          // onClick={()=> dispatch(clearValues)}
        >
          {isLoading ? "Loading.." : "Add Glamping"}
        </button> 
      </form>
    </div>
  );
};

export default AddItem;
