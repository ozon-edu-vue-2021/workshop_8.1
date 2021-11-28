import axios from "axios";


export interface Pet {
    id: number
    name: string
    status: 'available' | 'pending' | 'sold'
}

export class petsApi {
    private url = 'https://petstore.swagger.io/v2/'

    async getPetsByStatus(params: {status: 'available' | 'pending' | 'sold'}): Promise<Array<Pet>> {
        try {
            const response = await axios.get(`${this.url}pet/findByStatus`, {
                params
            })
            return response.data
        } catch (error) {
            console.log(error)
            return []
        }
    }
}