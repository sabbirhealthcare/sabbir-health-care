document.addEventListener("DOMContentLoaded", function () {
  const validNumbers = ["01942326459"];
  const paymentInput = prompt("আপনার বিকাশ/নগদ নম্বর লিখুন:");

  if (validNumbers.includes(paymentInput)) {
    alert("পেমেন্ট ভেরিফায়েড ✅ - এখন AI সেবায় নিয়ে যাওয়া হচ্ছে...");
    window.location.href = "ai.html";
  } else {
    alert("❌ ভুল নম্বর! সঠিক পেমেন্ট নম্বর দিন: 01942326459");
  }
});