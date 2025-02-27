module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            // Example neuomorphic shadow – adjust colors to taste
            boxShadow: {
                neu: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }
        }
    },
    plugins: []
}
