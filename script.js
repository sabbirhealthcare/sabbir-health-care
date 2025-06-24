
async function getResponse() {
    const input = document.getElementById("userInput").value.toLowerCase().trim();
    const resBox = document.getElementById("responseBox");
    const res = await fetch("diseases.json");
    const data = await res.json();

    if (input.includes("তুমি কে") || input.includes("প্রতিষ্ঠাতা")) {
        resBox.innerText = "আমি ছাব্বির হেলথ কেয়ার-এর এআই সহকারী। আমাদের লক্ষ্য হচ্ছে রোগ নির্ণয় করে ঘরে বসেই সঠিক পরামর্শ দেওয়া। কিছুদিন ফ্রি চলছে, পরে ফি নির্ধারণ হবে ইনশাআল্লাহ।";
        return;
    }

    let match = data.find(item => input.includes(item.name.toLowerCase()));
    if (match) {
        resBox.innerText = `সমস্যা: ${match.name}\n\nপরামর্শ: ${match.treatment}`;
    } else {
        resBox.innerText = "আপনার অসুস্থতার বিবরণ ভালোভাবে দিন যেমন: জ্বর, সর্দি, মাথাব্যথা, বমি, প্রস্রাব সমস্যা ইত্যাদি।";
    }
}
