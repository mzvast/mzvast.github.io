class ThemeService {
    constructor() {}
    syncTheme() {
        const theme = this.getTheme();
        document.body.setAttribute('class', theme);
    }
    setTheme(theme) {
        localStorage.setItem('theme', theme);
        document.body.setAttribute('class', theme);
    }
    getTheme() {
        return localStorage.getItem('theme') || 'light';
    }
}

export default new ThemeService();
