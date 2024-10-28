/*
Vytvořte prázdnou stránku, do které vložte knihovnu validator.js a svůj JavaScript index.js.

Ověřte pomocí metody validator.isEmail platnost vaší e-mailovou adresu.

Pokud máte po ruce platební kartu, ověřte, že má platné číslo pomocí metody isCreditCard. Případně můžete otestovat kartu 4125010001000208.

*/

console.log(validator.isEmail("marie.hamsikova@centrum.cz"));
console.log(validator.isCreditCard("4853122214789632"));

/* 

Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.

<p id="msg" class="msg"></p>
Napojte do stránky váš vlastní javascriptový soubor index.js.

Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu msg--valid. V opačném případě použijte třídu msg--invalid. Přidejte do stránky soubor style.css a třídy nastylujte například tak, že msg--valid bude mít zelené pozadí a msg--invalid naopak červené.

Pomocí funkce prompt požádejte uživatele o jeho e-mail. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu „E-mail v pořádku“. V opačném případě zobrazte „Neplatný e-mail“.*/

const email = prompt("Zadejte emailovou adresu:");

const message = document.querySelector("#msg");

if (validator.isEmail(email)) {
  message.textContent = "E-mail v pořádku";
  message.classList.add("msg--valid");
  console.log("OK");
} else {
  message.textContent = "Neplatný e-mail";
  message.classList.add("msg--invalid");
}
