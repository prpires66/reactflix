import React from 'react';
import Proptypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = 'id_$(name)';

  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <input
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.prototype = {
  label: Proptypes.string.isRequired,
  type: Proptypes.string,
  name: Proptypes.string.isRequired,
  value: Proptypes.string,
  onChange: Proptypes.func,
};

export default FormField;
