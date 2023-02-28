export class ApiService {
    API_BASE_URL : string = 'https://restcountries.com';
    API_VERSION : string = 'v3.1';

    getUrl(endPoint: string){
        return `${this.API_BASE_URL}/${this.API_VERSION}/${endPoint}`
    }
}