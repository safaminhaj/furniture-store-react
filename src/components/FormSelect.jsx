const FormSelect = ({ label, name, defaultValue, list, size }) => {
  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        className={`select select-bordered ${size}`}
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
