import React, { useState } from 'react';

const SearchForm = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);

  // Lấy ngày hiện tại
  const today = new Date().toISOString().split('T')[0];

  const handleTripTypeChange = (event) => {
    setIsRoundTrip(event.target.value === 'roundTrip');
  };

  const handleTicketChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1) {
      setTicketCount(value);
    }
  };

  return (
    <div className="container">
      <form className="form">
        <div className="trip-type">
          <label>
            <input
              type="radio"
              name="tripType"
              value="oneWay"
              onChange={handleTripTypeChange}
              defaultChecked
            />
            Một chiều
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="roundTrip"
              onChange={handleTripTypeChange}
            />
            Khứ hồi
          </label>
        </div>

        <div className="input-group">
          <label>Điểm đi</label>
          <select>
            <option>Chọn điểm đi</option>
          </select>
        </div>

        <div className="input-group">
          <label>Điểm đến</label>
          <select>
            <option>Chọn điểm đến</option>
          </select>
        </div>

        <div className="input-group">
          <label>Ngày đi</label>
          <input type="date" defaultValue={today} />
        </div>

        {isRoundTrip && (
          <div className="input-group">
            <label>Ngày về</label>
            <input type="date" />
          </div>
        )}

        <div className="input-group">
          <label>Số vé</label>
          <input
            type="number"
            value={ticketCount}
            onChange={handleTicketChange}
            min="1"
          />
        </div>

        <button type="submit" className="button">
          Tìm chuyến xe
        </button>
      </form>
    </div>
  );
};

export default SearchForm;