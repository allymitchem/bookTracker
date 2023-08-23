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
        console.log(url)
        const result = await response.json()
        console.log("Did it make it here")
        return result
    } catch (error) {
    }
}