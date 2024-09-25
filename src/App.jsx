import { DiaryEntryCard, Modal } from "./Container";

import { CardContainer } from "./CardContainer";
import Nav from "./Nav.jsx";
import { useState } from "react";

export default function App() {
    const [isDiaryEntryCardHidden, setIsDiaryEntryCardHidden] = useState(true);

    return (
        <div>
            <header>
                <Nav />
            </header>

            <Modal
                isHidden={isDiaryEntryCardHidden}
                onCloseClicked={() => setIsDiaryEntryCardHidden(true)}
            >
                <DiaryEntryCard
                    title="Your Diary Entry"
                    entryDate={new Date()}
                    imageUrl="/assets/image1.jpg"
                    entryContent="Sunt officia do minim et nostrud dolore nulla ut sint quis qui est. Dolor id do nisi ea nulla aliquip deserunt voluptate non. Culpa et cupidatat adipisicing consequat enim sunt commodo proident ex est ad consectetur quis sit. Ea Lorem occaecat proident nisi ullamco laborum. Adipisicing do duis qui aliqua nulla deserunt exercitation cillum anim laboris reprehenderit incididunt cupidatat consectetur. Do duis laboris velit elit deserunt. Exercitation ad ullamco ullamco fugiat ut elit incididunt id proident do ut."
                />
            </Modal>

            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <CardContainer
                    onPreviewClicked={entryId => {
                        console.log(entryId);
                        setIsDiaryEntryCardHidden(false);
                    }}
                />
            </main>

            <footer />
        </div>
    );
}
