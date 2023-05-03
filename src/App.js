import Background from './components/Background';

const base_url = 'https://api.pexels.com/v1/search?'
function App() {
    fetch(base_url, {
        headers: {
            Authorization: process.env.REACT_APP_AUTH_KEY
        }
    });
    return (
        <>
            <Background />
            <h1>Memory Game</h1>
        </>
    );
}

export default App;
