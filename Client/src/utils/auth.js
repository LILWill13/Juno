import decode from 'jwt-decode';

class AuthService {
  // check if user's logged in
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token && !this.isTokenExpired(token);
  }

  // logs user out
  logout() {
    localStorage.removeItem('token');
    window.location.assign('/');
  }
}

export default new AuthService();
