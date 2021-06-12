export default class EmployeesService {
    _apiBase = 'https://reqres.in/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch '${url}', received '${res.status}'`);
        }

        return await res.json();
    }

    async getUsers(count) {
        const res = await this.getResource(`/users?per_page=${count}`);
        return await res['data'];
    }
}