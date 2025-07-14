// GPT.js (Public-safe Version)
// এই ফাইলটি GitHub এ আপলোড করার জন্য নিরাপদ।
// এখানে আপনি নিজে মোবাইল/কম্পিউটার দিয়ে KEY বসাতে পারবেন।

const API_KEY = ""; // 🔐 এখানে আপনার GPT API KEY বসান (শুধু GitHub এ আপলোডের পর)

// নিচের কোড পরিবর্তন করতে হবে না
async function askGPT() {
  if (!API_KEY) {
    document.getElementById("response").innerText = "⚠️ GPT KEY বসান gpt.js ফাইলে!";
    return;
  }

  const prompt = document.getElementById("input").value;
  const res = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100
    })
  });
  const data = await res.json();
  document.getElementById("response").innerText = data.choices?.[0]?.text || "❌ উত্তর পাওয়া যায়নি";
}
