export const minLength = (e, bound, setErrors) => {
  setErrors((state) => ({
    ...state,
    [e.target.name]: e.target.value.length < bound,
  }));
};

export const emailValidation = (e, email, setErrors) => {
  const pattern = /@.{3,}/gm;

  const result = email.match(pattern);

  setErrors((state) => ({
    ...state,
    [e.target.name]: result === null,
  }));
};

export const imgValidation = (e, imageUrl, setErrors) => {
  const pattern = /^https:\/\/.*/gm;

  const result = imageUrl.match(pattern);

  setErrors((state) => ({
    ...state,
    [e.target.name]: result === null,
  }));
};

export const phoneValidation = (e, phoneNumber, setErrors) => {
  const pattern = /^0\d{9}$/gm;

  const result = phoneNumber.match(pattern);

  setErrors((state) => ({
    ...state,
    [e.target.name]: result === null,
  }));
};

export const isPositiveValidator = (e, num, setErrors) => {
  const pattern = /^\d*$/gm;

  console.log(num);

  const result = num.match(pattern);

  console.log(result);

  setErrors((state) => ({
    ...state,
    [e.target.name]: result === null,
  }));
};
