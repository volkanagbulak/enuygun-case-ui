import { setReservationInfo } from "../../../redux/slices/reservationSlice";
import { useDispatch } from "react-redux";
import { reservationSchema } from "../../../utils/validations";
import { useRouter } from "next/router";
import { useState } from "react";
import FormInput from "../../../components/atoms/FormInput";
import StyledButton from "../../../components/atoms/StyledButton";

const Reservation = ({ eventId }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [reservationInfo, setReservationInfoState] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const handleChange = (e) => {
    setReservationInfoState({
      ...reservationInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await reservationSchema.validate(reservationInfo, { abortEarly: false });
      dispatch(setReservationInfo(reservationInfo));
      router.push(`/event/${eventId}/payment`);
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="container my-5">
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <FormInput label="Ad" name="name" value={reservationInfo.name} onChange={handleChange} error={errors.name} />
            <FormInput label="E-Posta" name="email" value={reservationInfo.email} onChange={handleChange} error={errors.email} />
            <FormInput label="Soyad" name="surname" value={reservationInfo.surname} onChange={handleChange} error={errors.surname} />

            <StyledButton variant="primary" className="w-100">
              Ödemeye Geç
            </StyledButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
