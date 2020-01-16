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
      required
      onChange={onChange}
      options={selectOptions}
      styles={{ 
        multiValueLabel: styles => ({ ...styles, backgroundColor: '#00FFB2' }), 
        multiValueRemove: styles => ({ ...styles, backgroundColor: '#00FFB2' }),
        container: styles => ({ ...styles, margin: '30px 10px 50px 10px', fontFamily: 'Montserrat' }),
      }}
    />
  );
};

export default FormSelect;


