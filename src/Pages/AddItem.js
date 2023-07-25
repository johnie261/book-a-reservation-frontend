import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearValues, createGlamping, handleChange } from '../Features/gampling/gamplingSlice';
import inputFields from '../Utils/FormInputs';
const AddItem = () => {
  const {
    isLoading,
    name,
    location,
    glamping_type: glampingType,
    description,
    image,
    daily_rate: dailyRate,
  } = useSelector((store) => store.glampingForm);
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

  const getFieldValue = (fieldName) => {
    if (fieldName === 'name') return name;
    if (fieldName === 'location') return location;
    if (fieldName === 'glamping_type') return glampingType;
    if (fieldName === 'image') return image;
    if (fieldName === 'daily_rate') return dailyRate;
    return '';
  };

  return (
    <div className="form-container">
      <h2 className="form-name">ADD A NEW GLAMPING</h2>
      <div className="underline" />
      <form className="item-form">
        {inputFields.map((field, index) => (
          <label key={field.index} htmlFor={field.name} className="label">
          {field.label}
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={field.name === 'description' ? description : ''}
              onChange={handleInput}
              className="form-input"
              placeholder={field.placeholder}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type} value={getFieldValue(field.name)}
              onChange={handleInput}
              className="form-input"
              placeholder={field.placeholder}
            />
          )}
        </label>
        ))}
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
