function requestWithdraw() {
  let amt = parseFloat(document.getElementById('wAmt').value);
  let bank = document.getElementById('wBank').value;
  let acc = document.getElementById('wAcc').value;

  if (isNaN(amt) || amt <= 0 || !acc) {
    alert("⚠ እባክዎን ትክክለኛ መረጃ ያስገቡ!");
    return;
  }
  if (amt > userBalance) {
    alert(`⚠ በቂ ባላንስ የለዎትም!`);
    return;
  }

  // ከዋሌት መቀነስ
  userBalance -= amt;
  updateBalanceUI();

  // መረጃውን ወደ ቴሌግራም ቦት መላክ
  if (window.Telegram && window.Telegram.WebApp) {
    let withdrawData = {
      action: "withdraw_request",
      username: userName,
      phone: userPhone,
      amount: amt,
      bankType: bank,
      accountNumber: acc
    };
    window.Telegram.WebApp.sendData(JSON.stringify(withdrawData));
  }

  alert(`✓ የ ${amt.toFixed(2)} ብር ዊዝድሮ ጥያቄዎ ተልኳል! አስተዳዳሪው አረጋግጦ ይለክልዎታል።`);
  switchSection('balanceSection', document.getElementById('navBal'));
}
