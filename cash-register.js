function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  console.log(change)
  let obj = {
    status: "",
    change: []
  }
  let currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED" : 100
  }

  let cashInDrawer = cid.map(
    arr => arr[1]
  ).reduce(
    (total, amount) => total + amount
  )

  
  if(change > cashInDrawer){
    obj.status = "INSUFFICIENT_FUNDS",
    obj.change = []
    return obj
  }else if(cashInDrawer == change){
    obj.status = "CLOSED",
    obj.change = cid
    return obj
  }else{
    cid = cid.reverse();

    for (let elem of cid) {
      let curr = [elem[0], 0];

      while (change >= currencyUnits[elem[0]] && elem[1] > 0) {
        curr[1] += currencyUnits[elem[0]];
        elem[1] -= currencyUnits[elem[0]];
        change -= currencyUnits[elem[0]];
        change = change.toFixed(2);
      }

      if (curr[1] > 0) {
        obj.change.push(curr);
      }
    }
    obj.status = "OPEN"

  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return obj
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
