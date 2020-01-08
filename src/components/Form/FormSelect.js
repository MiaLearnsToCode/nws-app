import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const FormSelect = ({selectOptions, onChange}) => {

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      onChange={onChange}
      options={selectOptions}
      styles={{ multiValueLabel: styles => ({ ...styles, backgroundColor: '#00FFB2' }), multiValueRemove: styles => ({ ...styles, backgroundColor: '#00FFB2' }),}}
    />
  );
}

export default FormSelect