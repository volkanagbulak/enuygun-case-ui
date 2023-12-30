const VerticalFormInput = ({ label, name, value, onChange, error }) => {
  return (
    <div className="col-md-3">
      <label className="form-label">{label}</label>
      <input type="text" name={name} className={`form-control ${error ? "is-invalid" : ""}`} value={value} onChange={(e) => onChange(e)} />
      {error}
    </div>
  );
};

export default VerticalFormInput;
