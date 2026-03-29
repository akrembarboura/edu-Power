export const loginUser = async (email, password) => {
  const ADMIN_EMAIL = "akrem@edu.com";
  const ADMIN_PASSWORD = "akrem123";

  if (!email || !password) {
    throw new Error("Please enter email and password.");
  }

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return { email };
  } else {
    throw new Error("Email or password incorrect.");
  }
};