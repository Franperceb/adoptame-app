import { useState ,useEffect } from 'react'

const useForm = (callback, validate) => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputs = e => {
    e.persist()
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
        }))
      }

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(form));
    setIsSubmitting(true);
  };


  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, validate,errors ,isSubmitting ]);

  return [form, handleInputs,handleSubmit,errors]
}

export default useForm