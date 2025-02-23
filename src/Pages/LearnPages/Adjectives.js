import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {AdjectivesWords} from "../../Data/adjectiveData"
import toast, { Toaster } from "react-hot-toast";

function Adjectives() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTestWindow, setShowTestWindow] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState("");

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === AdjectivesWords.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? AdjectivesWords.length - 1 : prevIndex - 1
        );
    };

    const getRandomIndex = () => Math.floor(Math.random() * AdjectivesWords.length);
    
    const getRandomIndexes = (correctAnswer) => {
        const indexes = [];
        while (indexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * AdjectivesWords.length);
         
            if (!indexes.includes(randomIndex)) indexes.push(randomIndex);
        }
        if (!indexes.includes(correctAnswer)) indexes[Math.floor(Math.random() * 3)]=correctAnswer;

        return indexes;
    };


    const startTest = () => {
        setCorrectAnswer(getRandomIndex());
        setShowTestWindow(true);
    };

    const handleCardClick = (chosenWord) => {
        const isCorrect = chosenWord === correctAnswer ;
        isCorrect ? toast.success("اجابة صحيحة ", {
            icon: '👏',
            duration: 1000,

          }) : toast.error("اجابة خاطئة , حاول مرة أخرى !",{
            icon: '🤯',
            duration: 1000,
          });
        setCorrectAnswer(getRandomIndex());
    };

    return (
        <div className="learn-page">
            <Header />
           
           {!showTestWindow && <div className="memorize-words">
                <h2 className="title">تعلم الكلمات و احفظها جيدا</h2>
                <div className="words-slider">
                    <button onClick={prevSlide} className="right-arrow arrow">
                        <img src={require("../../Images/Icons/arrow.png")} alt="Right arrow" />
                    </button>
                    <div className="word-card">
                        <img src={AdjectivesWords[currentIndex].img} alt="Animal" />
                        <h2 className="en-w">{AdjectivesWords[currentIndex].enW}</h2>
                        <h3 className="ar-w">{AdjectivesWords[currentIndex].arW}</h3>
                        <p className="sentence">{AdjectivesWords[currentIndex].enSen}</p>
                    </div>
                    <button onClick={nextSlide} className="left-arrow arrow">
                        <img src={require("../../Images/Icons/arrow.png")} alt="Left arrow" />
                    </button>
                </div>

                <div className="start-test" onClick={startTest}>
                        <button className="btn">ابدا الاختبار الان</button>
                </div>
            </div>}

            {showTestWindow && (
                
                <div className="test">
                   
                        <h1 className="question">
                            ماذا تعني كلمة - <b>{AdjectivesWords[correctAnswer].arW}</b>
                        </h1>

                    <div className="choose-card">
                        {getRandomIndexes(correctAnswer).map((cardIndex, i) => (
                            <div className="word-card" key={i} onClick={()=>handleCardClick(cardIndex)} >
                                <img src={AdjectivesWords[cardIndex].img} alt="Animal" />
                                <h2 className="en-w">{AdjectivesWords[cardIndex].enW}</h2>
                                <p className="sentence">{AdjectivesWords[cardIndex].enSen}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Adjectives;
