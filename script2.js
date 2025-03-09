// script.js

// Word data (for simplicity, we store it here as an array of objects)
const wordData = [
    { kanji: "これ", furigana: "", translation: "This" },
    { kanji: "それ", furigana: "", translation: "That" },
    { kanji: "あれ", furigana: "", translation: "That over there" },
    { kanji: "このー", furigana: "", translation: "This - here" },
    { kanji: "そのー", furigana: "", translation: "That - near listener" },
    { kanji: "あのー", furigana: "", translation: "That - over there" },
    { kanji: "本", furigana: "ほん", translation: "Book" },
    { kanji: "辞書", furigana: "じしょ", translation: "Dictionary" },
    { kanji: "雑誌", furigana: "ざっし", translation: "Magazine" },
    { kanji: "新聞", furigana: "しんぶん", translation: "Newspaper" },
    { kanji: "ノート", furigana: "", translation: "Notebook" },
    { kanji: "手帳", furigana: "てちょう", translation: "Personal organiser" },
    { kanji: "名刺", furigana: "めいし", translation: "Business card" },
    { kanji: "カード", furigana: "", translation: "(Credit) Card" },
    { kanji: "鉛筆", furigana: "えんぴつ", translation: "Pencil" },
    { kanji: "ボールペン", furigana: "", translation: "Ballpoint pen" },
    { kanji: "シャープペンシル", furigana: "", translation: "Mechanical pencil" },
    { kanji: "かぎ", furigana: "", translation: "Key" },
    { kanji: "時計", furigana: "とけい", translation: "Watch, Clock" },
    { kanji: "傘", furigana: "かさ", translation: "Umbrella" },
    { kanji: "かばん", furigana: "", translation: "Bag, briefcase" },
    { kanji: "ＣＤ", furigana: "", translation: "CD, compact disc" },
    { kanji: "テレビ", furigana: "", translation: "Television" },
    { kanji: "ラジオ", furigana: "", translation: "Radio" },
    { kanji: "カメラ", furigana: "", translation: "Camera" },
    { kanji: "コンピューター", furigana: "", translation: "Computer" },
    { kanji: "車", furigana: "くるま", translation: "Car, vehicle" },
    { kanji: "机", furigana: "つくえ", translation: "Desk" },
    { kanji: "いす", furigana: "", translation: "Chair" },
    { kanji: "チョコレート", furigana: "", translation: "Chocolate" },
    { kanji: "コーヒー", furigana: "", translation: "Coffee" },
    { kanji: "「お」土産", furigana: "「お」みやげ", translation: "Souvenir, present" },
    { kanji: "英語", furigana: "えいご", translation: "English language" },
    { kanji: "日本語", furigana: "にほんご", translation: "Japanese language" },
    { kanji: "ー語", furigana: "ーご", translation: "- language" },
    { kanji: "何", furigana: "なん", translation: "What" },
    { kanji: "そう", furigana: "", translation: "So" },
    { kanji: "あの", furigana: "", translation: "Er..." },
    { kanji: "えっ", furigana: "", translation: "Oh? What!" },
    { kanji: "どうぞ。", furigana: "", translation: "Here you are." },
    { kanji: "そうですか。", furigana: "", translation: "I see" },
    { kanji: "違います。", furigana: "ちがいます。", translation: "No it isn't./ You are wrong." },
    { kanji: "あ", furigana: "", translation: "Oh!" }
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
  