async function requester(method, url, data, accessToken, XAdmin) {
    const options = {};

    if (method !== 'GET') {
        options.method = method;
    };

    if (XAdmin) {
        options.headers = {
            'X-Admin': 'true'
        }
    };

    if (accessToken) {
        options.headers = {
            'X-Authorization': accessToken
        }
    };

    if (data) {
        if (options.headers) {
            options.headers['Content-Type'] = 'application/json';
        } else {
            options.headers = {
                'Content-Type': 'application/json'
            }
        }
        options.body = JSON.stringify(data);
    };

    const response = await fetch(url, options);
    const result = await response.json();

    if (response.code === 409) {
        throw result;
    }

    if (!response.ok) {
        throw result;
    };

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');