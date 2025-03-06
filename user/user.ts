// lib/user.ts
interface User {
  id: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: "1",
    email: "test@example.com",
    password: "password123", // Plain text for now (should be hashed)
  },
  {
    id: "2",
    email: "john.doe@example.com",
    password: "johnpassword",
  },
];

export async function findUserByEmail(email: string): Promise<User | null> {
  const user = users.find((user) => user.email === email);
  return user || null;
}

export async function addUser(email: string, password: string): Promise<User> {
  const newUser = { id: (users.length + 1).toString(), email, password };
  users.push(newUser);
  return newUser;
}
