export const headers = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const headers_token = {
  headers: {
    "auth": localStorage.getItem('token'),
    "Content-Type": "application/json"
  }
}