// script.js

// Word data (for simplicity, we store it here as an array of objects)
const wordData = [
    { kanji: "ここ", furigana: "", translation: "This place" },
    { kanji: "そこ", furigana: "", translation: "That place" },
    { kanji: "あそこ", furigana: "", translation: "That place over there" },
    { kanji: "どこ", furigana: "", translation: "What place" },
    { kanji: "こちら", furigana: "", translation: "This way, this place" },
    { kanji: "そちら", furigana: "", translation: "That way, that place" },
    { kanji: "あちら", furigana: "", translation: "That way, that place over there" },
    { kanji: "どちら", furigana: "", translation: "Which way, where" },
    { kanji: "教室", furigana: "きょうしつ", translation: "Classroom" },
    { kanji: "食堂", furigana: "しょくどう", translation: "Dining hall, canteen" },
    { kanji: "事務所", furigana: "じむしょ", translation: "Office" },
    { kanji: "会議室", furigana: "かいぎしつ", translation: "Conference room" },
    { kanji: "受付", furigana: "うけつけ", translation: "Reception desk" },
    { kanji: "ロビー", furigana: "", translation: "Lobby" },
    { kanji: "部屋", furigana: "へや", translation: "Room" },
    { kanji: "トイレ（お手洗い）", furigana: "（おてあらい）", translation: "Toilet, rest room" },
    { kanji: "階段", furigana: "かいだん", translation: "Staircase" },
    { kanji: "エレベーター", furigana: "", translation: "Elevator" },
    { kanji: "エスカレーター", furigana: "", translation: "Escalator" },
    { kanji: "自動販売機", furigana: "じどうはんばいき", translation: "Vending machine" },
    { kanji: "電話", furigana: "でんわ", translation: "Telephone handset" },
    { kanji: "「お」国", furigana: "「お」くに", translation: "Country" },
    { kanji: "会社", furigana: "かいしゃ", translation: "Company" },
    { kanji: "うち", furigana: "", translation: "House, home" },
    { kanji: "靴", furigana: "くつ", translation: "Shoes" },
    { kanji: "ネクタイ", furigana: "", translation: "Tie, necktie" },
    { kanji: "ワイン", furigana: "", translation: "Wine" },
    { kanji: "売り場", furigana: "うりば", translation: "Department, counter" },
    { kanji: "地下", furigana: "ちか", translation: "Basement" },
    { kanji: "ー階", furigana: "ーかい（－がい）", translation: "-th floor" },
    { kanji: "何階", furigana: "なんがい", translation: "What floor" },
    { kanji: "ー円", furigana: "ーえん", translation: "- yen" },
    { kanji: "いくら", furigana: "", translation: "How much" },
    { kanji: "百", furigana: "ひゃく", translation: "Hundred" },
    { kanji: "千", furigana: "せん", translation: "Thousand" },
    { kanji: "万", furigana: "まん", translation: "Ten thousand" },
    { kanji: "すみません。", furigana: "", translation: "Excuse me." },
    { kanji: "どうも。", furigana: "", translation: "Thanks" }
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
  
