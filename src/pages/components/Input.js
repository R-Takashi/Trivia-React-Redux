import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ id, type, label, placeholder, value, func, name }) {
  return (
    <div>
      <label htmlFor={ id }>
        {label}
        <input
          name={ name }
          id={ id }
          data-testid={ id }
          type={ type }
          placeholder={ placeholder }
          value={ value }
          onChange={ func }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
