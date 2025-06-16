function askAI() {
  const userInput = document.getElementById('userInput').value;
  const chatBox = document.getElementById('chatBox');
  let response = "🤖 AI: দয়া করে অপেক্ষা করুন...";

  if (userInput.includes("জ্বর")) {
    response = "🤖 AI: আপনার জ্বর হলে বিশ্রাম নিন ও প্যারাসিটামল খেতে পারেন। বেশি হলে ডাক্তারের সাথে যোগাযোগ করুন।";
  } else if (userInput.includes("কাশি")) {
    response = "🤖 AI: কাশির জন্য গরম পানি পান করুন, প্রয়োজনে কফ সিরাপ নিতে পারেন।";
  } else {
    response = "🤖 AI: আপনার প্রশ্নটি বুঝতে পারিনি, অনুগ্রহ করে অন্যভাবে বলুন।";
  }

  chatBox.innerHTML = "<p>" + response + "</p>";
}