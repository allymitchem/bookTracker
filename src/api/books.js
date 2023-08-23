const url = 'https://openlibrary.org/'


export async function getBook(searchString) {
    const reqObj = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }

    try {
        const response = await fetch(url+`search.json?title=${searchString}`, reqObj)
        const result = await response.json()
        console.log("from api function", result)
        return result
    } catch (error) {
        console.error(error)
    }
}