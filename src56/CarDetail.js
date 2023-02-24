import { useRef } from "react";

const CarDetails = ({ initialData, onSubmit }) => {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      model: formRef.current.model.value,
      year: formRef.current.year.value,
      color: formRef.current.color.value,
    };
    formRef.current.reset();
    console.log(data);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor='model'>Model:</label>
      <input name='model' type='text' defaultValue={initialData.model} />
      <label htmlFor='year'>Year:</label>
      <input name='year' type='number' defaultValue={initialData.year} />
      <label htmlFor='color'>Color:</label>
      <input name='color' type='text' defaultValue={initialData.color} />
      <button type='submit'>submit</button>
    </form>
  );
};

export default CarDetails;
