const loveMessages = [
  "Я тебя люблю",       // русский
  "I love you",         // английский
  "Te amo",             // испанский
  "Je t'aime",          // французский
  "Ich liebe dich",     // немецкий
  "Ti amo",             // итальянский
  "Eu te amo",          // португальский
  "愛してる",            // японский
  "사랑해",              // корейский
  "أنا أحبك",           // арабский
  "Te iubesc",          // румынский
  "Я тебе кохаю",       // украинский
  "Jag älskar dig",     // шведский
  "Я тебe люблю"        // белорусский
];

const textDiv = document.getElementById("loveText");
let count = 0;
let total = 400;

function showLove() {
  if (count < total) {
    const message = loveMessages[count % loveMessages.length];
    textDiv.textContent = message + " ❤️";
    count++;
    setTimeout(showLove, 150); // меняем сообщение каждые 150 мс
  } else {
    textDiv.textContent = "400 дней вместе! ❤️";
  }
}

showLove();
