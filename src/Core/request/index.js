
const getToken = () => localStorage.getItem("authToken")

const getHeaders = () => ({
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json'
})
export const post = (route, body) => fetch(route, { headers: getHeaders(), body, method: 'POST' });

export const get = (route, body) => fetch(route, { headers: getHeaders(), body, method: 'GET' });

export const put = (route, body) => fetch(route, { headers: getHeaders(), body, method: 'PUT' });


