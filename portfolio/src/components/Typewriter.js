import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingDelay = 100, deletingDelay = 50, delayBetweenWords = 1000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            if (subIndex > 1) {
                setTimeout(() => {
                    setCurrentWord(currentWord.slice(0, subIndex - 1));
                    setSubIndex(subIndex - 1);
                }, deletingDelay);
            } else if (subIndex == 1) {
                setTimeout(() => {
                    setCurrentWord('');
                    setSubIndex(subIndex - 1);
                }, deletingDelay);
            } else {
                setIsDeleting(false);
                setIndex((index + 1) % words.length);
            }
        } else {
            if (subIndex < words[index].length) {
                setTimeout(() => {
                    setCurrentWord(currentWord + words[index][subIndex]);
                    setSubIndex(subIndex + 1);
                }, typingDelay);
            } else {
                setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenWords);
            }
        }
    }, [subIndex, isDeleting]);

    return (
        <div className='blinker-horizontal-stack'>
            <p className='blinker-space'>{currentWord}</p>
            <blinker></blinker>
        </div>
    );
};

export default Typewriter;