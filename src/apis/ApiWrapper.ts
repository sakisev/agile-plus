import axios, { AxiosResponse } from 'axios';
export default class ApiWrapper {
    private static BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:3000/api/';

    public static async post<Request, Response>(apiPath: string, params: Request): Promise<AxiosResponse<Response>> {
        const apiUri = this.BASE_URL + apiPath;

        console.log(apiUri);

        try {
            return await axios.post(apiUri, params);
        } catch (e) {
            console.error(e)
            throw e;
        }
    }
}
