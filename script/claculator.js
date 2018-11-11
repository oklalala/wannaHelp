const list = Array.from(document.querySelectorAll('.cost__period__item'));
const expandableList = document.querySelectorAll('.cost__period__item__expand__list');
const checkboxes = Array.from(document.querySelectorAll('.cost__period__item__checkbox'));
let count;
let itemTotal;
let subtotal = 0;

function handleCount(e) {
  e.stopPropagation();

  if (this.nodeName === 'LI' && this.children.length === 1) return;
  // 只能選取加或減
  if (!e.target.matches('.plus') && !e.target.matches('.minus')) return;
  count = parseFloat(this.querySelector('.count').textContent);
  let amount = parseFloat(this.querySelector('.item-total').textContent) / count;
  // 設定 count 最小 1、最大 9
  if (e.target.classList.value === 'plus') {
    if (count >= 9) return;
    count++;
  } else if (e.target.classList.value === 'minus') {
    if (count <= 1) return;
    count--;
  }

  amount *= count;
  this.querySelector('.count').textContent = String(count);
  this.querySelector('.item-total').textContent = String(amount);

  printTotal();
}

function countTotal() {
  const total = checkboxes.filter(item => item.querySelector('input').checked)
    .map(item => parseFloat(item.parentElement.querySelector('.item-total').textContent))
    .reduce((total, item) => total + item, 0);
  
  return total;
}

function printTotal() {
  const total = countTotal();
  document.querySelectorAll('.sub-total').forEach(item => item.textContent = String(total.toLocaleString()));
}

// 按下 checkbox 後執行
function renderTotal(e) {
  e.stopPropagation();
  // 避免選到收合選單的 li
  if (this.nodeName === 'LI' && this.children.length === 1) return;
  if (!e.target.matches('[type="checkbox"]')) return;

  printTotal();
}

list.forEach(li => li.addEventListener('click', handleCount));
expandableList.forEach(li => li.addEventListener('click', handleCount));
list.forEach(li => li.addEventListener('click', renderTotal));
expandableList.forEach(li => li.addEventListener('click', renderTotal));