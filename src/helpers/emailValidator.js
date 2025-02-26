export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/; // Basic email regex
  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Please enter a valid email address.';
  return ''; // No error
};
