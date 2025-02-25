export const emailValidator = (email) => {
  if (!email || email.trim() === '') {
    return "Email can't be empty";
  }
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return 'Email is invalid';
  }
  return '';
};
