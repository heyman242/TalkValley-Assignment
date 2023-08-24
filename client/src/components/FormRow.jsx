const FormRow = ({ type, name, labelText,  onChange }) => {
  return (
    <div>
      <label htmlFor={name} >
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
