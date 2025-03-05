// script.js

// Word data (for simplicity, we store it here as an array of objects)
const wordData = [
    { kanji: "私", furigana: "わたし", translation: "I" },
    { kanji: "あなた", furigana: "", translation: "You" },
    { kanji: "あの人（あの方）", furigana: "あのひと（あのかた）（あのかた）", translation: "That person, he, she" },
    { kanji: "ーさん", furigana: "", translation: "Mr., Ms.　ー" },
    { kanji: "ーちゃん", furigana: "", translation: "(Child suffix)" },
    { kanji: "ー人", furigana: "ーじん", translation: "(National of - suffix)" },
    { kanji: "先生", furigana: "せんせい", translation: "Teacher, instructor" },
    { kanji: "教師", furigana: "きょうし", translation: "Teacher, instructor (Self)" },
    { kanji: "学生", furigana: "がくせい", translation: "Student" },
    { kanji: "会社員", furigana: "かいしゃいん", translation: "Company employee" },
    { kanji: "社員", furigana: "しゃいん", translation: "Employee of - company" },
    { kanji: "銀行員", furigana: "ぎんこういん", translation: "Bank employee" },
    { kanji: "医者", furigana: "いしゃ", translation: "[Medical] Doctor" },
    { kanji: "研究者", furigana: "けんきゅしゃ", translation: "Researcher, scholar" },
    { kanji: "大学", furigana: "だいがく", translation: "University" },
    { kanji: "病院", furigana: "びょういん", translation: "Hospital" },
    { kanji: "だれ（どなた）", furigana: "", translation: "Who" },
    { kanji: "ー歳", furigana: "ーさい", translation: "- years old" },
    { kanji: "何歳", furigana: "なんさい", translation: "How old?" },
    { kanji: "はい", furigana: "", translation: "Yes" },
    { kanji: "いいえ", furigana: "", translation: "No" },
    { kanji: "初めまして。", furigana: "はじめまして。", translation: "How do you do?" },
    { kanji: "ーから来ました。", furigana: "ーからきました。", translation: "I'm from - (country)." },
    { kanji: "失礼ですが", furigana: "しつれいですが", translation: "Excuse me, but" },
    { kanji: "お名前は？", furigana: "おなまえは？", translation: "May I have your name?" },
    { kanji: "こちらはーさんです。", furigana: "", translation: "This is Mr./Ms. -." }
  ];
  
  let currentIndex = 0;
  
  // Elements
  const kanjiElem = document.querySelector(".kanji");
  const furiganaElem = document.querySelector(".furigana");
  const translationElem = document.getElementById("translation");
  const revealBtn = document.getElementById("revealBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  // Function to update the card content
  function updateCard() {
    const currentWord = wordData[currentIndex];
    kanjiElem.textContent = currentWord.kanji;
    furiganaElem.textContent = currentWord.furigana;
    translationElem.textContent = currentWord.translation;    
    translationElem.classList.add("hidden");
  }
  
  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCard();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentIndex < wordData.length - 1) {
      currentIndex++;
      updateCard();
    }
  });
  
  // Event listener for revealing translation
  revealBtn.addEventListener("click", () => {
    translationElem.classList.remove("hidden");
  });
  
  // Initialize the first card
  updateCard();
  