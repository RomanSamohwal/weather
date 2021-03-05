import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.teleport.org/api/cities/'
})

export const ApiCity = {
    getCity: async (city: string) => {
        const response = await instance.get<responseCities>(`?search=${city}&limit=5`);
        console.log(response)
        return response.data._embedded["city:search-results"]
    }
}

type responseCities = {
    _embedded: citySearchResults
}

type citySearchResults = {
    'city:search-results': Array<City>
}

export type City = {
    matching_alternate_names: Array<MatchingAlterNames>,
    matching_full_name: string
}

export type MatchingAlterNames = {
    name: string
}