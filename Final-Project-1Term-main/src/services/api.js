const BASE_URL = "https://swapi.dev/api"

// SWAPI does not return an id, so we take it from the url
// "https://swapi.dev/api/people/1/" → "1"

function getIdFromUrl(url) {
    const parts = url.split("/").filter(Boolean); //With .filter we remove all the empty spaces
    return parts[parts.lenght - 1];
}

export async function getPeople(page = 1) {
    const response = await fetch(`${BASE_URL}/people?page=${page}`);
    if(!response.ok) throw new Error("Error fetching people");

    const data = await response.json();

    return {
        people: data.results.map((person) => ({
            ...person,
            id:getIdFromUrl(person.url),
        })),
        hasNext: data.next !== null,
        hasPrevious: data.previous !== null,
    };
}

export async function getPersonById(id) {
    const response = await fetch(await fetch(`${BASE_URL}/people/${id}/`));
    if(!response.ok) throw new Error("Error fetching person");

    const data = await response.json();

    return { ...data, id };
}