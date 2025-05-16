

var quotes = [
  "“Be yourself; everyone else is already taken.” ― Oscar Wilde",
  "“In the middle of every difficulty lies opportunity.” ― Albert Einstein",
  "“Success is not final, failure is not fatal: It is the courage to continue that counts.” ― Winston S. Churchill",
  "“Believe you can and you're halfway there.” ― Theodore Roosevelt",
  "“Act as if what you do makes a difference. It does.” ― William James",
  "“What you get by achieving your goals is not as important as what you become by achieving your goals.” ― Zig Ziglar",
  "“Don’t watch the clock; do what it does. Keep going.” ― Sam Levenson",
  "“Everything you can imagine is real.” ― Pablo Picasso",
  "“Do one thing every day that scares you.” ― Eleanor Roosevelt",
  "“Hardships often prepare ordinary people for an extraordinary destiny.” ― C.S. Lewis"
];




var num = Math.floor(Math.random() * 10);
    var lastnum=-1;


document.getElementById("genrate_quote").addEventListener("click", function() {

    num = Math.floor(Math.random() * 10);
    while(num===lastnum){
        num = Math.floor(Math.random() * 10);

    }


  document.getElementById("auto_generated_quote").textContent = quotes[num];
 
  
});