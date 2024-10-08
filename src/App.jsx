import { CardContainer } from "./CardContainer";
import { DiaryEntryCardModal } from "./DiaryEntryCardModal.jsx";
import Nav from "./Nav.jsx";
import { useState } from "react";

export default function App() {
    const [isDiaryEntryCardHidden, setIsDiaryEntryCardHidden] = useState(true);
    const [prevEntryId, setPrevEntryId] = useState();

    return (
        <div>
            <header>
                <Nav />
            </header>

            {/* passing props to control visibility of modal, diary entry and 
            on close button to update hidden state SE*/}
            <DiaryEntryCardModal
                isHidden={isDiaryEntryCardHidden}
                prevEntryId={prevEntryId}
                onCloseClicked={() => setIsDiaryEntryCardHidden(true)}
            />

            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                {/* when preview button is clicked set the entry id to local storage 
                and show diary entry card  SE */}
                <CardContainer
                    onPreviewClicked={entryId => {
                        setPrevEntryId(entryId);
                        setIsDiaryEntryCardHidden(false);
                    }}
                />
            </main>

            <footer />
        </div>
    );
}
