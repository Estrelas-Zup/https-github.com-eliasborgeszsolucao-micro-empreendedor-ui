import jwtDecode from 'jwt-decode'

export function getUserFromLocalStorage() {
    const token = localStorage.getItem('token')
    try {
        const tokenDecoded = jwtDecode(token);
        return tokenDecoded.sub
    } catch (error) {
        return null
    }
}