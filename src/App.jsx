import { Button } from "./Button";
import { DiaryEntryCard } from "./Container";

function App() {
    return (
        <div>
            <header />

            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "100px",
                }}
            >
                <Button title="HI" />

                <Button
                    title="Open Sample of Diary Entry"
                    onClicked={() => {
                        console.log("Open Sample of Diary Entry");
                    }}
                />

                <DiaryEntryCard
                    title="I am a modal"
                    entryDate={new Date()}
                    imageUrl="/assets/image1.jpg"
                    entryContent="Sunt officia do minim et nostrud dolore nulla ut sint quis qui est. Dolor id do nisi ea nulla aliquip deserunt voluptate non. Culpa et cupidatat adipisicing consequat enim sunt commodo proident ex est ad consectetur quis sit. Ea Lorem occaecat proident nisi ullamco laborum. Adipisicing do duis qui aliqua nulla deserunt exercitation cillum anim laboris reprehenderit incididunt cupidatat consectetur. Do duis laboris velit elit deserunt. Exercitation ad ullamco ullamco fugiat ut elit incididunt id proident do ut."
                />
            </main>

            <footer />
        </div>
    );
}

export default App;
