export async function apiRickAndMorti(character){
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}&status=alive`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        return data = await response.json()
    } catch (error) {
        console.log(error)
        return 
    }
}