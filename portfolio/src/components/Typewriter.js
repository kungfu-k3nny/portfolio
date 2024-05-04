import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingDelay = 150, deletingDelay = 100, delayBetweenWords = 1000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            if (subIndex > 0) {
                setTimeout(() => {
                    setCurrentWord(currentWord.slice(0, subIndex - 1));
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
        <span>{currentWord}</span>
    );
};

export default Typewriter;