import * as yup from "yup";

export const reservationSchema = yup.object().shape({
  name: yup.string().required("Ad alanı zorunludur"),
  surname: yup.string().required("Soyad alanı zorunludur"),
  email: yup.string().required("E-Posta alanı zorunludur"),
});

export const paymentSchema = yup.object().shape({
  ccname: yup.string().required("İsim Soyisim alanı zorunludur"),
  ccnumber: yup.string().required("Kart Numarası alanı zorunludur"),
  ccexpiration: yup.string().required("Ay/Yıl alanı zorunludur"),
  cccvv: yup.string().required("CVC/CVV alanı zorunludur"),
});
