export const BASE_URL = 'https://mocki.io/v1'


export const getData = async (path) => {
    try {
        const res = await fetch(BASE_URL + path)
        const data = await res.json()
        return data
    } catch (error) {
        return []
    }
}

export const editComplData = async (userId, relData) => {
    try {
        const res = await fetch(BASE_URL + "/6203a480-806c-4f54-8961-a73b876fe8a0/" + userId, {
            method: "PATCH",
            body: JSON.stringify(relData),
            headers: {
                "Content-Type": "application/json"
            }
        })
    
    } catch (error) {
        console.log(error);
    }
}