// Fake Auth Service (Assignment Friendly)
// Admin login rule: email includes "admin" OR password === "admin123"
// User login rule: anything else

export async function loginRequest({ email, password }) {
  await wait(700);

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const isAdmin = email.toLowerCase().includes("admin") || password === "admin123";

  return {
    token: "fake-jwt-" + Math.random().toString(16).slice(2),
    role: isAdmin ? "admin" : "user",
    name: "Dhruv Tandel",
  };
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}