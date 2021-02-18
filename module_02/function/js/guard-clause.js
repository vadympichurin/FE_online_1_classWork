



// const withdraw = function(amount, balance) {
//     if (amount === 0) {
//       console.log('Для проведения операции введите сумму больше нуля.');
//     } else if (amount > balance) {
//       console.log('Недостаточно средств на счету.');
//     } else {
//       console.log('Операция снятия средств проведена.');
//     }
//   };

const withdraw = function(amount, balance) {
    if(amount === 0) {
        console.log('Для проведения операции введите сумму больше нуля.');
        return;
    }

    if(amount > balance) {
        console.log('Недостаточно средств на счету.');
        return;
    }

    console.log('Операция снятия средств проведена.');
}


  
  withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
  withdraw(500, 300); // Недостаточно средств на счету.
  withdraw(100, 300); // Операция снятия средств проведена.
  