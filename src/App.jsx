import { Button } from "./Button";

function App() {
    return (
        <div>
            <header />

            <main style={{ display: "flex", gap: "10px", padding: "100px" }}>
                <Button title="HI" />

                <Button title="Open Sample of Diary Entry" />
            </main>

            <footer />
        </div>
    );
}

export default App;
