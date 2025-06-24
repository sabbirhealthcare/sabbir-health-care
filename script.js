
async function getResponse() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const responseBox = document.getElementById("responseBox");
    const res = await fetch("diseases.json");
    const data = await res.json();

    let found = data.find(d => input.includes(d.name.toLowerCase()));
    if (found) {
        responseBox.innerText = `সমস্যা: ${found.name}\n\nচিকিৎসা: ${found.treatment}`;
    } else if (input.includes("তুমি কে") || input.includes("প্রতিষ্ঠাতা")) {
        responseBox.innerText = "আমি ছাব্বির হেলথ কেয়ার-এর ডিজিটাল চিকিৎসা সহকারী। আমরা রোগ বিশ্লেষণ, চিকিৎসা, ও রিপোর্ট ব্যাখ্যা করি।";
    } else {
        responseBox.innerText = "আপনার সমস্যাটি ভালোভাবে লিখুন, আমি সাহায্য করার চেষ্টা করছি ইনশাআল্লাহ।";
    }
}
