const list = Array.from(document.querySelectorAll('.cost__period__item'));
const expandableList = document.querySelectorAll('.cost__period__item__expand__list');
let count;
let itemTotal;
function calcTotal(e) {
  if (this.nodeName === 'LI' && this.children.length === 1) return;
  count = parseFloat(this.children[3].children[1].textContent);
  let amount = parseFloat(this.children[4].children[0].textContent) / count;
  if (e.target.classList.value === 'plus') {
    if (count >= 9) return;
    count++;
  } else if (e.target.classList.value === 'minus') {
    if (count <= 1) return;
    count--;
  }

  amount *= count;
  this.children[3].children[1].textContent = String(count);
  this.children[4].children[0].textContent = String(amount);

  printTotal();
}

function countTotal() {
  const checked = Array.from(document.querySelectorAll('.item-total')).filter(item => {
    return item.parentElement.parentElement.children[1].children[0].checked
  });

  // const total = Array.from(document.querySelectorAll('.item-total'))
  //   .map(item => parseFloat(item.textContent))
  //   .reduce((total, item) => total += item, 0);
  
    const total = checked
    .map(item => parseFloat(item.textContent))
    .reduce((total, item) => total += item, 0);
    
  return total;
}

function printTotal() {
  document.querySelectorAll('.sub-total').forEach(item => item.textContent = String(countTotal().toLocaleString()));
}

list.forEach(li => li.addEventListener('click', calcTotal));
expandableList.forEach(li => li.addEventListener('click', calcTotal));

printTotal();