const BASE_URL = "https://reqres.in/api/";


export const fetchAuthSingIn = async (data) => {
    const url = BASE_URL + "api/users/2";

    try {
        const resp = (await fetch(url, {
            method: 'GET',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors"
        }))
        if (resp.status === 200)
            return await resp.json();
        else {
            throw resp.status
        }

    } catch (e) {
        return {
            error: e
        }
    }

};
