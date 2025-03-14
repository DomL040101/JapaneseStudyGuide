// script.js

// Word data (for simplicity, we store it here as an array of objects)
const wordData = [
    { kanji: "起きます", furigana: "おきます", translation: "Get up, wake up" },
    { kanji: "寝ます", furigana: "ねます", translation: "Sleep, go to bed" },
    { kanji: "働きます", furigana: "はたらきます", translation: "Work" },
    { kanji: "休みます", furigana: "やすみます", translation: "Take a rest" },
    { kanji: "勉強します", furigana: "べんきょうします", translation: "Study" },
    { kanji: "終わります", furigana: "おわります", translation: "Finish" },
    { kanji: "デパート", furigana: "", translation: "Department store" },
    { kanji: "銀行", furigana: "ぎんこう", translation: "Bank" },
    { kanji: "郵便局", furigana: "ゆうびんきょく", translation: "Post office" },
    { kanji: "図書館", furigana: "としょかん", translation: "Library" },
    { kanji: "美術館", furigana: "びじゅつかん", translation: "Art museum, art gallery" },
    { kanji: "今", furigana: "いま", translation: "Now" },
    { kanji: "ー時", furigana: "ーじ", translation: "- o'clock" },
    { kanji: "ー分", furigana: "ーふん（－ぷん）", translation: "- minute" },
    { kanji: "半", furigana: "はん", translation: "Half" },
    { kanji: "何時", furigana: "なんじ", translation: "What time" },
    { kanji: "何分", furigana: "なんぷん", translation: "What minute" },
    { kanji: "午前", furigana: "ごぜん", translation: "A.M., morning" },
    { kanji: "午後", furigana: "ごご", translation: "P.M., afternoon" },
    { kanji: "朝", furigana: "あさ", translation: "Morning" },
    { kanji: "昼", furigana: "ひる", translation: "Daytime, noon" },
    { kanji: "晩（夜）", furigana: "ばん（よる）", translation: "Night, evening" },
    { kanji: "一昨日", furigana: "おととい", translation: "The day before yesterday" },
    { kanji: "昨日", furigana: "きのう", translation: "Yesterday" },
    { kanji: "今日", furigana: "きょう", translation: "Today" },
    { kanji: "明日", furigana: "あした", translation: "Tomorrow" },
    { kanji: "明後日", furigana: "あさって", translation: "The day after tomorrow" },
    { kanji: "今朝", furigana: "けさ", translation: "This morning" },
    { kanji: "今晩", furigana: "こんばん", translation: "This evening, tonight" },
    { kanji: "休み", furigana: "やすみ", translation: "Rest, a holiday, a day off" },
    { kanji: "昼休み", furigana: "ひるやすみ", translation: "Lunchtime" },
    { kanji: "試験", furigana: "しけん", translation: "Examination, test" },
    { kanji: "会議", furigana: "かいぎ", translation: "Meeting, conference" },
    { kanji: "映画", furigana: "えいが", translation: "Film, movie" },
    { kanji: "毎朝", furigana: "まいあさ", translation: "Every morning" },
    { kanji: "毎晩", furigana: "まいばん", translation: "Every night" },
    { kanji: "毎日", furigana: "まいにち", translation: "Every day" },
    { kanji: "月曜日", furigana: "げつようび", translation: "Monday" },
    { kanji: "火曜日", furigana: "かようび", translation: "Tuesday" },
    { kanji: "水曜日", furigana: "すいようび", translation: "Wednesday" },
    { kanji: "木曜日", furigana: "もくようび", translation: "Thursday" },
    { kanji: "金曜日", furigana: "きんようび", translation: "Friday" },
    { kanji: "土曜日", furigana: "どようび", translation: "Saturday" },
    { kanji: "日曜日", furigana: "にちようび", translation: "Sunday" },
    { kanji: "何曜日", furigana: "なんようび", translation: "What day of the week" },
    { kanji: "ーから", furigana: "", translation: "From -" },
    { kanji: "ーまで", furigana: "", translation: "Up to -, until -" },
    { kanji: "ーとー", furigana: "", translation: "And (used to connect nouns)" },
    { kanji: "大変ですね。", furigana: "たいへんですね。", translation: "That's tough, isn't it?" },
    { kanji: "番号", furigana: "ばんごう", translation: "Number" },
    { kanji: "何番", furigana: "なんばん", translation: "What number" }
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
  
