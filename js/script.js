const progressBar = document.getElementById("progressBar");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
}
window.addEventListener("scroll", updateProgress);
updateProgress();

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const age = document.getElementById("age");
const income = document.getElementById("income");
const ageOutput = document.getElementById("ageOutput");
const incomeOutput = document.getElementById("incomeOutput");
const prediction = document.getElementById("prediction");
const predictBtn = document.getElementById("predictBtn");

function formatBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  });
}

function updateDemoLabels() {
  ageOutput.textContent = age.value;
  incomeOutput.textContent = formatBRL(income.value);
}

age?.addEventListener("input", updateDemoLabels);
income?.addEventListener("input", updateDemoLabels);
updateDemoLabels();

predictBtn?.addEventListener("click", () => {
  const ageValue = Number(age.value);
  const incomeValue = Number(income.value);

  // Regra didática simplificada, apenas para demonstrar a ideia.
  const approved = incomeValue >= 3000 && ageValue >= 30;

  prediction.querySelector("span").textContent = approved ? "✓" : "×";
  prediction.querySelector("strong").textContent = approved
    ? "Classe 1 — exemplo classificado como SIM"
    : "Classe 0 — exemplo classificado como NÃO";
});

function notebookAlert() {
  alert("Troque este link pelo endereço do notebook completo do grupo.");
  return false;
}

function pendingInfo(person){
  alert(`O ${person} ainda será adicionado quando o integrante enviar as informações.`);
  return false;
}
