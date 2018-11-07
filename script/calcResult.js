// cost-result reference
const reference = document.querySelector(".reference");
const referenceText = document.querySelector(".reference__text");
const referenceList = document.querySelector(".reference__list");

function openLinks(e) {
  if (e.target.matches(".reference__text")) {
    referenceList.classList.add("reference__list__active");
    e.target.style.cursor = "auto";
    reference.style.paddingBottom = "25px";
    document.querySelector(
      'label[for="reference__toggle__checkbox"]'
    ).style.display = "inline";
  } else if (e.target.matches('input[type="checkbox"]')) {
    referenceList.classList.remove("reference__list__active");
    referenceText.style.cursor = "pointer";
    reference.style.paddingBottom = "0";
    document.querySelector(
      'label[for="reference__toggle__checkbox"]'
    ).style.display = "none";
  }
}

reference.addEventListener("click", openLinks);

// 扣掉補助金額
const subsidyItems = Array.from(document.querySelectorAll(".subsidy__item"));
let subsidyTotal = 0;
function deductTotal(e) {
  e.stopPropagation();
  if (!e.target.matches('input[type="checkbox"]')) return;
  calcResultAmount = countTotal();

  if (e.target.checked) {
    subsidyTotal += parseFloat(this.querySelector(".subsidy-amount").textContent);
  } else {
    subsidyTotal -= parseFloat(this.querySelector(".subsidy-amount").textContent);
  }

  printSubsidyTotal();
}

function calcSubsidyTotal() {
    let calcResultAmount = countTotal();
    // console.log(calcResultAmount, subsidyTotal);
    return calcResultAmount - subsidyTotal;
}

function printSubsidyTotal() {
    const total = calcSubsidyTotal();
  document.querySelectorAll(".sub-total").forEach(item => (item.textContent = String(total.toLocaleString())));
}

subsidyItems.forEach(item => item.addEventListener("click", deductTotal));