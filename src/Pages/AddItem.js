import React from 'react';

const AddItem = () => (
  <div className="form-container">
    <h2 className="form-name">ADD A NEW GLAMPING</h2>
    <div className="underline" />
    <form className="item-form">
      <label htmlFor="name">
        Name:
        <input
          id="name"
          name="name"
          type="text"
          value=""
          className="form-input"
        />
      </label>
      <label htmlFor="location">
        Location:
        <input
          id="location"
          name="location"
          type="text"
          value=""
          className="form-input"
        />
      </label>
      <label htmlFor="type">
        Gampling Type:
        <input
          id="type"
          name="type"
          type="text"
          value=""
          className="form-input"
        />
      </label>
      <label htmlFor="description">
        Description:
        <textarea
          id="description"
          name="description"
          value=""
          className="form-input"
        />
      </label>
      <label htmlFor="image">
        Image link:
        <input
          id="image"
          name="image"
          type="text"
          className="form-input"
        />
      </label>
      <label htmlFor="dailyRate">
        Daily Rate:
        <input
          id="dailyRate"
          name="dailyRate"
          type="text"
          value=""
          className="form-input"
        />
      </label>
      <button type="button">Add Gampling</button>
    </form>
  </div>
);

export default AddItem;
