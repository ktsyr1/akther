module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        
        colors: {
            ui: {
                1: '#E8C174',
                2: '#AA894E'
            },
            dark: {
                1: 'var(--c-dark)',
                2: 'var(--c-darkX)'
            },
            bg: {
                1: 'var(--c-bg)',
                2: 'var(--c-bgX)'
            }

        }
    },
    plugins: [],
}