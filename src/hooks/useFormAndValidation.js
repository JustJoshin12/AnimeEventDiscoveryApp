import { useState, useCallback } from "react";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [resetFile, setResetFile] = useState(false);

  const handleChange = (e) => {
    const { name, type } = e.target;
    if (type === "file") {
      setResetFile(false);

      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setValues((prevValues) => ({
            ...prevValues,
            [name]: e.target.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: e.target.validationMessage,
    }));
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setResetFile(true);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    resetFile, 
    setResetFile, 
  };
}