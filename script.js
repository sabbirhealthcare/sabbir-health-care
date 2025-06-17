
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'bn-BD';
  recognition.start();

  recognition.onresult = function(event) {
    const speechResult = event.results[0][0].transcript;
    document.getElementById('userInput').innerText = speechResult;
    getAIResponse(speechResult);
  };

  recognition.onerror = function(event) {
    document.getElementById('response').innerText = 'ভয়েস ইনপুটে সমস্যা হয়েছে। আবার চেষ্টা করুন।';
  };
}

function getAIResponse(text) {
  // Dummy AI Response simulation based on keywords
  let response = "আমরা আপনার সমস্যাটি বুঝতে পারিনি। দয়া করে আবার বলুন।";

  if (text.includes("জ্বর")) {
    response = "আপনার জ্বরের জন্য প্যারাসিটামল ৫০০mg খেতে পারেন। প্রচুর পানি পান করুন।";
  } else if (text.includes("সর্দি") || text.includes("কাশি")) {
    response = "সর্দি কাশির জন্য গরম পানির ভাপ নিন ও অ্যান্টিহিস্টামিন খেতে পারেন।";
  } else if (text.includes("মাথা ব্যথা")) {
    response = "মাথা ব্যথার জন্য বিশ্রাম নিন ও প্যারাসিটামল খেতে পারেন।";
  }

  document.getElementById('response').innerText = response;
}
