module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61558108857573") {
    var aid = ["61558108857573"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সুমু আপুর মন মন ভালো নেই আস্কে-!💔🥀", "- কি গো সুমু কে মেনশন দিচ্ছো কেনো🫂💔", "সুমু আপু বিজি আছে মেনশন দিও না 😒","এত মেনশন না দিয়ে ইন বক্স আসো ঝাং 😘🥒"," Mantion_দিয়ো না💋😾😾🔨"," 😭😭","সুমু এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল সুমু রে একটা বাবু দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা জামাই দে","Mantion_দিস না বাঁলপাঁক্না সুমু প্রচুর বিজি 🥵🥀🤐","চুমু কে মেনশন দিচ্ছো কিনো🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
