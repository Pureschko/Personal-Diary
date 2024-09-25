/* eslint-disable react/prop-types */
import { DiaryEntryCard, Modal } from "./Container";

export const DiaryEntryCardModal = ({
    isHidden,
    onCloseClicked,
    prevEntryId,
}) => {
    const readDiaryEntry = JSON.parse(localStorage.getItem(prevEntryId));

    return (
        <Modal isHidden={isHidden} onCloseClicked={onCloseClicked}>
            {readDiaryEntry ? (
                <DiaryEntryCard
                    title={readDiaryEntry.title}
                    entryDate={readDiaryEntry.date}
                    imageUrl={readDiaryEntry.imageUrl}
                    entryContent={readDiaryEntry.content}
                />
            ) : (
                <>Entry does not exist 😟</>
            )}
        </Modal>
    );
};
