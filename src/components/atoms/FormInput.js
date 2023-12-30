const FormInput = ({ label, name, value, onChange, error }) => {
  return (
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <input type="text" name={name} className={`form-control ${error ? "is-invalid" : ""}`} value={value} onChange={(e) => onChange(e)} />
        {error}
      </div>
    </div>
  );
};

export default FormInput;
