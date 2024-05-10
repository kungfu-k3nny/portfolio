import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingDelay = 100, deletingDelay = 50, delayBetweenWords = 1000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(' ');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (isDeleting) {
            if (subIndex > 1) {
                timeoutId = setTimeout(() => {
                    // Functional update to avoid including currentWord in dependencies
                    setCurrentWord(currentWord.slice(0, subIndex - 1));
                    setSubIndex(subIndex - 1);
                }, deletingDelay);
            } else if (subIndex === 1) {
                timeoutId = setTimeout(() => {
                    // Functional update to reset currentWord without needing it in dependencies
                    setCurrentWord(' ');
                    setSubIndex(subIndex - 1);
                }, deletingDelay);
            } else {
                setIsDeleting(false);
                // Functional update to avoid including index in dependencies
                setIndex(prevIndex => (prevIndex + 1) % words.length);
            }
        } else {
            if (subIndex < words[index].length) {
                timeoutId = setTimeout(() => {
                    // Using functional update for currentWord
                    setCurrentWord(currentWord => currentWord + words[index][subIndex]);
                    setSubIndex(subIndex + 1);
                }, typingDelay);
            } else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenWords);
            }
        }

        // Cleanup function to clear timeout when dependencies change or component unmounts
        return () => clearTimeout(timeoutId);
    }, [
        // Including all dependencies used in the effect to adhere to react-hooks/exhaustive-deps
        subIndex, isDeleting, currentWord, deletingDelay, index, typingDelay, delayBetweenWords, words
    ]);

    return (
        <div className='blinker-horizontal-stack'>
            <p className='blinker-space'>{currentWord}</p>
            <blinker></blinker>
        </div>
    );
};

export default Typewriter;