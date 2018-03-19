
const backendBaseUrl = "http://34.234.36.234:8086/v1/"
const headers = {
    "Content-Type": "application/json", 
    "api-key" : "2BAAFD2BE944AAA5B21BCBDF99F6E",
    "api-secret" : "CA41A12EA2828DBC49CDBDA88D521"
}

export const checkStatusAndGetJSON = (fetchResponse) =>
    fetchResponse.ok
        ? Promise.resolve(fetchResponse).then(response => response.json())
        : Promise.resolve(fetchResponse).then(apiError => apiError.json()).then(error => Promise.reject(error))

const get = (path) => fetch(backendBaseUrl + path, {
    headers: headers
}).then(checkStatusAndGetJSON);

const post = (path, body) => fetch(backendBaseUrl + path, {
    body: JSON.stringify(body),
    headers: headers,
    method: "POST"
}).then(checkStatusAndGetJSON);

/**
 * Could have use the post for this as well by just changing the method, but i felt like this way its more cleaner. 
*/
const put = (path, body) => fetch(backendBaseUrl + path, {
    body: JSON.stringify(body),
    headers: headers,
    method: "PUT"
}).then(checkStatusAndGetJSON);

export const getUserList = () => get("mock-user/list")

export const addNewUser = (data) => post("mock-user", data)

export const updateUserCall = (data) => put("mock-user", data)
