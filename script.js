
async function handleInput() {
  const input = document.getElementById('userInput').value;
  const responseBox = document.getElementById('response');
  if (!input.trim()) {
    responseBox.innerHTML = "অনুগ্রহ করে আপনার সমস্যাটি লিখুন।";
    return;
  }

  // Simulate AI response
  const simulatedResponse = {
    fever: "আপনার জ্বর হতে পারে। পর্যাপ্ত পানি পান করুন এবং প্যারাসিটামল নিন।",
    cough: "আপনার কাশি হচ্ছে মনে হচ্ছে। আদা-চা পান করুন এবং বিশ্রাম নিন।",
    pain: "ব্যথার জন্য হালকা ব্যায়াম করুন এবং প্রয়োজনে পেইন কিলার সেবন করুন।",
    default: "আমরা আপনার সমস্যা বুঝতে পারিনি। দয়া করে আরও বিস্তারিত লিখুন।"
  };

  let matched = Object.keys(simulatedResponse).find(key => input.toLowerCase().includes(key));
  responseBox.innerHTML = simulatedResponse[matched] || simulatedResponse.default;
}
