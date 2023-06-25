export class SessionStore {
    static setLatLng(lat: number, lng: number) {
        sessionStorage.setItem('lat', lat.toString());
        sessionStorage.setItem('lng', lng.toString());
    }

    static getLatLng() {
        const lat = sessionStorage.getItem('lat');
        const lng = sessionStorage.getItem('lng');
        if (lat && lng) {
            return { lat: parseFloat(lat), lng: parseFloat(lng) };
        }
        return null;
    }
}
