
async function getResponse() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const responseBox = document.getElementById("responseBox");

    const res = await fetch("diseases.json");
    const diseases = await res.json();

    let found = diseases.find(d => input.includes(d.name.toLowerCase()));
    if (input.includes("তুমি কে") || input.includes("প্রতিষ্ঠাতা")) {
        responseBox.innerText = "আমি ছাব্বির হেলথ কেয়ার-এর AI সহকারী। আমাদের লক্ষ্য রোগ বিশ্লেষণ ও চিকিৎসা সেবা নিশ্চিত করা। কিছুদিন ফ্রি সেবা চলছে, পরে ফি নির্ধারণ করা হবে ইনশাআল্লাহ।";
    } else if (found) {
        responseBox.innerText = `সমস্যা: ${found.name}\n\nচিকিৎসা: ${found.treatment}`;
    } else {
        responseBox.innerText = "আপনার লেখা অনুযায়ী সঠিক রোগ শনাক্ত করা যায়নি। দয়া করে বিস্তারিত লিখুন, যেমন: মাথাব্যথা, জ্বর, বুক ধড়ফড়, বমি ইত্যাদি।";
    }
}
