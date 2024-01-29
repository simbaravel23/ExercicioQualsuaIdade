/*objetivo 1 - programar cada entrada de dados de dia,
 mes e ano, para aparecer nos respectivos lugares.
 1 precisa saber o dia e ano atual do sistema
 2 precisa calcular o anos atual menos o anos de nascimento
 juntamente com o dia e mes*/
 
/*function calcular(){
    let ano = document.getElementById('txtano').value
    let mes = document.getElementById('txtmes').value
    let dia = document.getElementById('txtdia').value
    var anos = data.getFullYear()
    let res = 2024 - ano

    let year = document.getElementById('ano')
    year.innerText = `${res} year`
}

function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#ano")

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Verifique os dados e tente novamente")*/

        let userInput = document.getElementById("date");
        userInput.max = new Date().toISOString().split("|")[0];
        let result = document.getElementById("result");
       
        function calculateAge() {
           let birthDate = new Date(userInput.value);
       
           let d1 = birthDate.getDate();
           let m1 = birthDate.getMonth() + 1;
           let y1 = birthDate.getFullYear();
       
           let today = new Date();
       
           let d2 = today.getDate();
           let m2 = today.getMonth() + 1;
           let y2 = today.getFullYear();
       
           let d3, m3, y3;
       
           y3 = y2 - y1;
       
           if (m2 >= m1) {
               m3 = m2 - m1;
           } else {
               y3--;
               m3 = 12 + m2 - m1;
           }
       
           if (d2 >= d1) {
               d3 = d2 - d1;
           } else {
               m3--;
               d3 = getDaysInMonth(y1, m1) + d2 - d1;
           }
       
           if (m3 < 0) {
               m3 = 11;
               y3--;
           }
       
           result.innerHTML = ` ${y3} years  
                                ${m3} months
                                ${d3} days `;
        }
       
        function getDaysInMonth(year, month) {
           return new Date(year, month, 0).getDate();
        }