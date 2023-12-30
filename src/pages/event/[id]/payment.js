// pages/events/[id]/payment.js
import { useSelector } from "react-redux";
import { useState } from "react";
import { paymentSchema } from "../../../utils/validations";
import VerticalFormInput from "../../../components/atoms/VerticalFormInput";
import StyledButton from "../../../components/atoms/StyledButton";

const Payment = () => {
  const reservationInfo = useSelector((state) => state.reservation.reservationInfo);
  const [errors, setErrors] = useState({});
  const [creditCardInfo, setcreditCardInfo] = useState({
    ccname: "",
    ccnumber: "",
    ccexpiration: "",
    cccvv: "",
  });

  const handleChange = (e) => {
    setcreditCardInfo({
      ...creditCardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await paymentSchema.validate(creditCardInfo, { abortEarly: false });
      const combinedInfo = Object.assign({}, reservationInfo, creditCardInfo);

      console.log(combinedInfo);
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
      {reservationInfo ? (
        <>
          <div className="card ">
            <div className="card-body ">
              <h4 className="mb-2">Checkout</h4>
              <div>
                <h4 className="mt-4 pt-2">Credit Card Info</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Ad</label>
                      <input type="text" value={reservationInfo.name} className="form-control" disabled />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Soyad</label>
                      <input type="text" value={reservationInfo.surname} className="form-control" disabled />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input type="text" value={reservationInfo.email} className="form-control" disabled />
                    </div>
                  </div>
                  <div className="row g-3 my-3">
                    <VerticalFormInput label="İsim Soyisim" name="ccname" onChange={handleChange} error={errors.ccname} />
                    <VerticalFormInput label="Kart Numarası" name="ccnumber" onChange={handleChange} error={errors.ccnumber} />
                    <VerticalFormInput label="Ay/Yıl" name="ccexpiration" onChange={handleChange} error={errors.ccexpiration} />
                    <VerticalFormInput label="CVC/CVV" name="cccvv" onChange={handleChange} error={errors.cccvv} />
                  </div>

                  <StyledButton variant="primary" className="w-100">
                    Ödemeye Geç
                  </StyledButton>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Rezervasyon bilgileri bulunamadı.</p>
      )}
    </div>
  );
};

export default Payment;
