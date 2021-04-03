import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    // destructure properties from event so we don't lose property types
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    } else if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      // copy the existing state
      ...inputs,
      // makes a dynamic so we only change the key that is being modified
      [e.target.name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    // destructure inputs into kvp, and map it to wipe out the input
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    // update the defaults
    setInputs(blankState);
  }

  // return the things that we want to surface from custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
