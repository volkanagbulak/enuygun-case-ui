import { useState } from "react";

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    eventId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reservation Form</h2>
      <label>
        Event ID:
        <input type="text" name="eventId" value={formData.eventId} onChange={handleChange} />
      </label>
      <button type="submit">Continue to Payment</button>
    </form>
  );
};

export default ReservationForm;
