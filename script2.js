
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'bn-BD';
  recognition.start();

  recognition.onresult = function(event) {
    const speechResult = event.results[0][0].transcript;
    document.getElementById('userInput').innerText = "আপনি বললেন: " + speechResult;
    getAIResponse(speechResult);
  };

  recognition.onerror = function(event) {
    document.getElementById('response').innerText = 'ভয়েস ইনপুটে সমস্যা হয়েছে। আবার চেষ্টা করুন।';
  };
}

function getAIResponse(text) {
  let response = "আপনার সমস্যাটি স্পষ্ট নয়। অনুগ্রহ করে আরেকবার বলুন।";

  if (text.includes("জ্বর")) {
    response = "আপনার জ্বর থাকলে প্যারাসিটামল ৫০০mg খেতে পারেন এবং বিশ্রাম নিন।";
  } else if (text.includes("সর্দি") || text.includes("কাশি")) {
    response = "সর্দি কাশির জন্য গরম পানির ভাপ নিন এবং অ্যান্টিহিস্টামিন গ্রহণ করুন।";
  } else if (text.includes("মাথা ব্যথা")) {
    response = "মাথা ব্যথার জন্য প্যারাসিটামল গ্রহণ করুন এবং পর্যাপ্ত বিশ্রাম নিন।";
  } else if (text.includes("বমি")) {
    response = "বমির জন্য ওমিডন ৫০mg খেতে পারেন এবং তরল খাবার গ্রহণ করুন।";
  }

  document.getElementById('response').innerText = response;
}
