 function formatMoney(n) {
  return (Math.round(n * 100) / 100).toLocaleString();
}


export default formatMoney;