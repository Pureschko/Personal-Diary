import { DiaryEntryCard, Modal } from "./Container";

import { Button } from "./Button";
import { CardContainer } from "./CardContainer";
import Nav from "./Nav.jsx";
import { useState } from "react";

export default function App() {
    const [isDiaryEnryCardHidden, setIsDiaryEnryCardHidden] = useState(true);

    return (
        <div>
            <header>
                <Nav />
                <CardContainer />
            </header>

            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "100px",
                }}
            >
                <Button
                    title="Open Sample of Diary Entry"
                    onClicked={() => setIsDiaryEnryCardHidden(false)}
                />

                <p>
                    Magna consequat et id cupidatat nulla ex cillum anim elit
                    nisi. Ex fugiat consectetur proident veniam exercitation
                    consectetur. Aliqua ex nostrud sit labore ullamco cillum
                    fugiat aute. Qui elit amet elit duis amet labore elit
                    officia reprehenderit duis aute pariatur. Ad eiusmod sit
                    tempor Lorem tempor incididunt velit amet ex elit nostrud
                    irure anim incididunt. Culpa cillum cillum labore qui anim
                    est elit ipsum irure. Pariatur amet enim non nulla nostrud
                    magna enim anim cillum minim eiusmod aliquip. Incididunt
                    aute est consectetur id consequat consequat aute ex pariatur
                    veniam aliqua. Labore deserunt nostrud eu amet culpa
                    cupidatat non voluptate ex voluptate. Officia aute aliquip
                    commodo in nulla et tempor nostrud et. Amet reprehenderit
                    velit reprehenderit dolor ullamco aliquip proident. Irure
                    dolor aliquip consequat sunt non sunt cillum magna sit irure
                    nisi duis. Cupidatat labore dolore nulla velit consectetur.
                    Aute cupidatat aliqua eiusmod laborum est occaecat mollit
                    veniam laboris. Culpa anim laborum do ea elit commodo qui et
                    quis non est pariatur velit ipsum. Laborum sit reprehenderit
                    eiusmod consectetur consectetur dolor. Sunt sunt labore sit
                    est minim esse aute id cupidatat reprehenderit. Ut qui
                    deserunt est anim. Incididunt occaecat Lorem ea magna
                    officia ea quis ipsum. Non incididunt in labore sint aliquip
                    dolor amet. Aliqua proident qui et anim occaecat consequat.
                    Nulla nisi mollit exercitation ad non velit non. Labore
                    tempor minim ex incididunt. Ipsum velit labore ex ea nisi.
                    Officia duis irure duis dolor dolor qui voluptate excepteur
                    tempor ipsum eiusmod ea qui minim. Mollit ipsum dolore
                    eiusmod proident incididunt eiusmod ea occaecat magna
                    ullamco consectetur officia commodo. Est nulla voluptate
                    proident ea qui est aliquip proident laboris ad ullamco
                    exercitation qui. Non occaecat dolor ipsum consectetur. Amet
                    ut minim voluptate ad ullamco aute excepteur id ullamco
                    labore excepteur anim dolore duis. Consectetur ad
                    reprehenderit minim cupidatat. Ipsum consectetur fugiat ad
                    ullamco mollit ea officia dolor. Nostrud nulla ullamco
                    deserunt sunt nisi anim et voluptate aliquip commodo laboris
                    enim. Eu ex fugiat in mollit. Deserunt quis fugiat nisi esse
                    ea ex est veniam. Sit proident sint aliqua enim excepteur in
                    non mollit esse cupidatat irure proident. Non voluptate esse
                    voluptate esse anim tempor fugiat tempor velit. Aliquip
                    cillum fugiat sunt dolore sint irure dolore adipisicing
                    fugiat do ut laborum. Deserunt non adipisicing labore elit
                    id deserunt ut nisi veniam. Do officia culpa ad tempor
                    ullamco ex irure esse quis esse labore cillum. Enim irure
                    enim mollit duis adipisicing. Lorem tempor labore laboris
                    non esse velit adipisicing in officia dolor tempor nisi
                    magna. Quis ipsum elit nisi aute laborum Lorem ex enim eu
                    quis est sit elit sit. Est consectetur cupidatat deserunt
                    magna. Dolore ad qui duis consectetur fugiat laboris.
                    Occaecat sint Lorem aliquip magna anim dolore. Ipsum nisi id
                    proident consequat ut exercitation reprehenderit aliquip
                    cupidatat. Consectetur nulla pariatur minim velit quis est.
                    Laborum voluptate sint ullamco nisi commodo reprehenderit ea
                    ad sint labore. Ullamco do consectetur sit sint cillum
                    excepteur laboris id laborum id deserunt consectetur. Enim
                    sunt magna officia laborum adipisicing. Pariatur quis do ut
                    laborum laboris velit eiusmod proident. Anim mollit ullamco
                    qui proident exercitation irure eu adipisicing tempor
                    nostrud eiusmod. Reprehenderit aliqua dolore tempor id enim
                    id est incididunt.{" "}
                </p>
            </main>

            <footer />

            <Modal
                isHidden={isDiaryEnryCardHidden}
                onCloseClicked={() => setIsDiaryEnryCardHidden(true)}
            >
                <DiaryEntryCard
                    title="Your Diary Entry"
                    entryDate={new Date()}
                    imageUrl="/assets/image1.jpg"
                    entryContent="Sunt officia do minim et nostrud dolore nulla ut sint quis qui est. Dolor id do nisi ea nulla aliquip deserunt voluptate non. Culpa et cupidatat adipisicing consequat enim sunt commodo proident ex est ad consectetur quis sit. Ea Lorem occaecat proident nisi ullamco laborum. Adipisicing do duis qui aliqua nulla deserunt exercitation cillum anim laboris reprehenderit incididunt cupidatat consectetur. Do duis laboris velit elit deserunt. Exercitation ad ullamco ullamco fugiat ut elit incididunt id proident do ut."
                />
            </Modal>
        </div>
    );
}
