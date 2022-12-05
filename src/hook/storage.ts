const ACCESS_KEY = "access_token";

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY);
}

export function setAccessToken(token: string) {
  return localStorage.setItem(ACCESS_KEY, token);
}

export function RemoveToken() {
  localStorage.removeItem(ACCESS_KEY);
}
