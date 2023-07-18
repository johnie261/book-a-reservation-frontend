import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearValues, createGlamping, handleChange } from '../Features/gampling/gamplingSlice';

const AddItem = () => {
  const {
    isLoading,
    name,
    location,
    glamping_type: glampingType,
    description,
    image,
    daily_rate: dailyRate,
  } = useSelector((store) => store.glamping);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!name || !location || !glampingType || !description || !image || !dailyRate) {
      toast.error('Please fill out all fields');
      return;
    }
    dispatch(
      createGlamping({
        glamping: {
          name,
          location,
          glamping_type: glampingType,
          description,
          image,
          daily_rate: dailyRate,
        },
      }),
    );
    dispatch(clearValues());
  };

  return (
    <div className="form-container">
      <h2 className="form-name">ADD A NEW GLAMPING</h2>
      <div className="underline" />
      <form className="item-form">
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
        <label htmlFor="glamping_type" className="label">
          Glamping Type:
          <input
            id="glamping_type"
            name="glamping_type"
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
        <label htmlFor="image" className="label">
          Image link:
          <input
            id="image"
            name="image"
            value={image}
            onChange={handleInput}
            type="text"
            className="form-input"
            placeholder="Add a link to an image"
          />
        </label>
        <label htmlFor="daily_rate" className="label">
          Daily Rate:
          <input
            id="daily_rate"
            name="daily_rate"
            type="number"
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
        >
          {isLoading ? 'Loading..' : 'Add Glamping'}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
