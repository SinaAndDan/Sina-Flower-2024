// lib/auth.ts
export async function verifyPassword(
  enteredPassword: string,
  storedPassword: string
): Promise<boolean> {
  return enteredPassword === storedPassword;
}
