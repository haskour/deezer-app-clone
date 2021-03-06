module.exports = {
    purge: [
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1206px',
            xl: '1580px',
        },
        colors: {
            primary: '#ef5466',
            gray: {
                1: '#f0f0f0',
                2: '#eaeaea',
                3: '#92929d',
            },
            dark: '#32323d',
            blue: 'rgb(45, 150, 200)',
            'blue-hover': 'rgb(3, 96, 138)',
            white: '#fff',
            facebook: '#3c5a99',
            apple: '#191922'
        },
        fontFamily: {
            sans: ["'Open Sans'", 'sans-serif'],
            'display': ["'Open Sans'", 'system-ui'],
            'body': ["'Open Sans'", 'system-ui'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}