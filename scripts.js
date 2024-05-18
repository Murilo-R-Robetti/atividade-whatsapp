const botao_Copia = document.getElementById("geradordesktop");
const numero_Tel = document.getElementById("numTel");
const abre_Link = document.getElementById("linkdesktop");
const abre_Botao = document.getElementById("botaoLink");
const text_Click = document.getElementById("clickCopiar");
const copiar = document.getElementById("link");

numero_Tel.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D\s*/g, "");
    event.target.value = event.target.value.replace( /(\d{2})(\d)/, "($1) $2");
    event.target.value = event.target.value.replace( /(\d{5})(\d)/, "$1-$2");
    if (numero_Tel.value.length === 15){
        numero_Tel.style.color = "green";
        botao_Copia.style.pointerEvents = "auto";
        abre_Link.style.pointerEvents = "auto";
    } else{
        numero_Tel.style.color = "";
    }
});

botao_Copia.addEventListener("click", () => {
    copiar.style.display = "flex"
    text_Click.style.display = "flex"
    copiar.innerHTML = `https://wa.me/55${numero_Tel.value.replace(/\D\s*/g, "")}`
    copiar.addEventListener("click", () => {
    navigator.clipboard.writeText(copiar.innerHTML).then(() => text_Click.innerHTML = ("Link copiado para a área de transferência."))})
})

numero_Tel.addEventListener("click", () => {
    copiar.style.display = "none"
    text_Click.style.display = "none"
})

abre_Link.addEventListener("click", () => {
    abre_Botao.href = `https://wa.me/55${numero_Tel.value.replace(/\D\s*/g, "")}`;
    abre_Botao.target = "_blank"
}) 