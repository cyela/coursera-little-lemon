export const validateForm = (formData) => {
  const nameRegex = /^[A-Za-z]{2,30}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    nameRegex.test(formData.firstName) &&
    nameRegex.test(formData.lastName) &&
    emailRegex.test(formData.email) &&
    phoneRegex.test(formData.phone) &&
    formData.date !== '' &&
    formData.time !== '' &&
    formData.guests >= 1 &&
    formData.guests <= 10
  );
};