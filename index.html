<!DOCTYPE html>
<html lang="am">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GT Bingo Pro System</title>
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background-color: #0f172a; color: #f8fafc; user-select: none; padding-bottom: 50px; }

    /* Top Stats Header */
    .top-bar { background-color: #1e293b; color: #fff; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; }
    .stat-box { text-align: center; }
    .stat-label { color: #94a3b8; font-size: 9px; letter-spacing: 0.5px; }
    .stat-val-green { color: #22c55e; font-size: 13px; font-weight: bold; }
    .stat-val-white { color: #ffffff; font-size: 12px; font-weight: bold; }
    .stat-val-yellow { color: #eab308; font-size: 12px; font-weight: bold; }

    /* Sound Toggle Button */
    .sound-btn { background: #334155; color: #38bdf8; border: 1px solid #38bdf8; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 4px; }
    .sound-btn.muted { color: #ef4444; border-color: #ef4444; background: #0f172a; }

    /* Bottom Navigation Menu Bar */
    .bottom-menu { position: fixed; bottom: 0; left: 0; width: 100%; background: #1e293b; display: flex; overflow-x: auto; border-top: 1px solid #334155; z-index: 100; padding: 4px; gap: 4px; }
    .menu-item { background: #334155; color: #cbd5e1; border: none; padding: 6px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; cursor: pointer; white-space: nowrap; flex-shrink: 0; }
    .menu-item.active { background: #3b82f6; color: #fff; }

    /* Sections */
    .section { display: none; padding: 10px; }
    .section.active { display: block; }

    /* Billboard / Notice Board */
    .billboard-box { background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px dashed #eab308; border-radius: 8px; padding: 10px; margin-bottom: 12px; text-align: center; }
    .billboard-title { font-size: 12px; font-weight: bold; color: #eab308; margin-bottom: 4px; }
    .billboard-text { font-size: 11px; color: #cbd5e1; line-height: 1.4; }

    /* Winner Popup Display Box */
    .winner-announcement-box { display: none; background: linear-gradient(135deg, #065f46, #047857); border: 2px solid #34d399; border-radius: 8px; padding: 12px; text-align: center; margin-bottom: 10px; }
    .winner-title { font-size: 16px; font-weight: bold; color: #fef08a; margin-bottom: 6px; }
    .winner-name { font-size: 14px; font-weight: bold; color: #ffffff; background: #064e3b; padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 4px; }
    .winner-cards { font-size: 12px; color: #a7f3d0; font-weight: bold; }

    /* Room Selection Menu */
    .room-menu-box { display: flex; flex-direction: column; gap: 12px; max-width: 300px; margin: 20px auto; text-align: center; }
    .room-choice-btn { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; padding: 15px; font-size: 16px; font-weight: bold; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3); }
    .room-choice-btn.super { background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; box-shadow: 0 4px 10px rgba(234, 179, 8, 0.3); }

    /* Selection Phase Container */
    .buying-phase-box { background: #1e293b; border: 1px solid #3b82f6; border-radius: 8px; padding: 12px; margin-top: 10px; text-align: center; }
    .buying-title { font-size: 14px; font-weight: bold; color: #38bdf8; margin-bottom: 6px; }
    .timer-big { background: #0f172a; color: #eab308; padding: 8px; border-radius: 6px; font-size: 14px; font-weight: bold; border: 1px solid #eab308; margin-bottom: 10px; }
    
    .large-card-grid { max-height: 220px; overflow-y: auto; display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; padding: 6px; background: #0f172a; border: 1px solid #334155; border-radius: 6px; margin-bottom: 10px; }
    .large-card-item { background: #334155; color: #cbd5e1; padding: 8px 0; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold; text-align: center; border: 1px solid #475569; position: relative; }
    .large-card-item.selected { background: #22c55e; color: #000; border-color: #22c55e; }
    .large-card-item.locked-by-other { background: #475569; color: #94a3b8; cursor: not-allowed; opacity: 0.6; border: 1px dashed #64748b; }

    /* Game Layout */
    .game-layout { display: flex; gap: 8px; }
    
    /* Left Side: 1-75 Board */
    .left-panel { width: 135px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; overflow: hidden; flex-shrink: 0; }
    .bingo-headers { display: grid; grid-template-columns: repeat(5, 1fr); text-align: center; font-weight: 900; font-size: 12px; color: white; }
    .h-b { background-color: #2563eb; }
    .h-i { background-color: #dc2626; }
    .h-n { background-color: #eab308; }
    .h-g { background-color: #16a34a; }
    .h-o { background-color: #9333ea; }
    .h-cell { padding: 3px 0; }

    .numbers-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px; background-color: #334155; padding: 1px; }
    .num-cell { background-color: #0f172a; color: #94a3b8; font-weight: bold; font-size: 10px; display: flex; align-items: center; justify-content: center; height: 24px; }
    .num-cell.called { background-color: #eab308; color: #000; }
    .num-cell.last-called { background-color: #22c55e; color: #fff; }

    /* Right Side: Cards & Ball Display */
    .right-panel { flex-grow: 1; display: flex; flex-direction: column; gap: 8px; }
    .timer-banner { background: #1e293b; border: 1px solid #3b82f6; padding: 6px; border-radius: 6px; font-size: 12px; font-weight: bold; color: #38bdf8; text-align: center; }
    
    /* Ball & History Display */
    .ball-display-box { background: #1e293b; border: 1px solid #334155; border-radius: 6px; padding: 8px; display: flex; justify-content: space-between; align-items: center; }
    .history-balls-row { display: flex; gap: 4px; }
    .history-ball { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: bold; color: #fff; }
    .current-ball { width: 45px; height: 45px; border-radius: 50%; background: linear-gradient(135deg, #a855f7, #7e22ce); color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; border: 2px solid #fff; }

    /* User Bingo Boards */
    .boards-container { display: flex; flex-direction: column; gap: 6px; }
    .card-wrapper { background: #1e293b; padding: 6px; border-radius: 6px; border: 1px solid #3b82f6; }
    .card-title { font-size: 11px; font-weight: bold; color: #60a5fa; margin-bottom: 3px; text-align: left; display: flex; justify-content: space-between; align-items: center; }

    .user-bingo-board { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
    .u-header { background-color: #334155; color: white; font-weight: bold; font-size: 10px; padding: 2px 0; text-align: center; }
    .u-cell { background-color: #0f172a; color: #cbd5e1; font-size: 10px; font-weight: bold; display: flex; align-items: center; justify-content: center; height: 28px; border: 1px solid #1e293b; border-radius: 2px; }
    .u-cell.selected { background-color: #22c55e; color: #fff; }
    .u-cell.free { background-color: #f97316; color: #fff; }

    .btn-bingo { background: #dc2626; color: white; border: none; padding: 8px; width: 100%; font-size: 12px; font-weight: bold; border-radius: 6px; cursor: pointer; margin-top: 5px; }

    /* Forms */
    .form-box { background: #1e293b; padding: 12px; border-radius: 8px; border: 1px solid #334155; }
    input, select, textarea { width: 100%; padding: 8px; margin: 6px 0; background: #0f172a; border: 1px solid #334155; color: #fff; border-radius: 4px; font-size: 12px; }
    .btn { background: #22c55e; color: #000; border: none; padding: 8px; width: 100%; font-size: 13px; font-weight: bold; border-radius: 4px; cursor: pointer; margin-top: 6px; }
    .back-btn { background: #475569; color: #fff; border: none; padding: 6px 12px; border-radius: 4px; font-size: 11px; cursor: pointer; margin-bottom: 8px; }
  </style>
</head>
<body>

  <!-- Top Header Bar -->
  <div class="top-bar">
    <div class="stat-box">
      <div class="stat-label">DERASH (80%)</div>
      <div class="stat-val-green" id="derashVal">0.00 <span style="font-size: 9px;">ETB</span></div>
    </div>
    <div class="stat-box">
      <div class="stat-label">BALLS</div>
      <div class="stat-val-white" id="ballsCount">0/75</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">BALANCE</div>
      <div class="stat-val-yellow" id="balanceVal">0.00 ETB</div>
    </div>
    <button class="sound-btn" id="soundToggleBtn" onclick="toggleSound()">🎤 ON</button>
  </div>

  <!-- 1. PLAY SECTION -->
  <div id="playSection" class="section">
    
    <!-- Winner Display Banner -->
    <div id="winnerBanner" class="winner-announcement-box">
      <div class="winner-title">🎉🏆 BINGO! አሸናፊ ተገኝቷል!</div>
      <div class="winner-name" id="winnerNameDisplay">-</div>
      <div class="winner-cards" id="winnerCardDisplay">-</div>
    </div>

    <!-- Billboard / Notice Board -->
    <div class="billboard-box">
      <div class="billboard-title">📢 ማስታወቂያ እና የውድድር ዜናዎች (Billboard)</div>
      <div class="billboard-text" id="billboardContent">
        እንኳን ወደ <b>GT Bingo Pro</b> በደህና መጡ! 🚀<br>
        • የ 50 ብር ሱፐር ቢንጎ ሰባቱንም ቀን 24 ሰዓት ክፍት ነው!
      </div>
    </div>

    <!-- Room Menu -->
    <div id="roomMenu" class="room-menu-box">
      <h3 style="color: #38bdf8; font-size: 16px; margin-bottom: 5px; text-align: center;">የቢንጎ ክፍል ይምረጡ</h3>
      <button class="room-choice-btn" onclick="selectRoom(10)">🎮 የ 10 ብር ጨዋታ (15 ሰከንድ)</button>
      <button class="room-choice-btn super" onclick="selectRoom(50)">🔥 የ 50 ብር (Super Bingo - 🔒 ሎክድ)</button>
    </div>

    <!-- Selection Phase Area -->
    <div id="buyingPhaseArea" style="display: none;">
      <button class="back-btn" onclick="backToRooms()">← ክፍሎች ወደ መረጡበት ተመለስ</button>
      <div class="buying-phase-box">
        <div class="buying-title" id="phaseTitleBox">🎯 ካርቴላ ይምረጡ (ከ 0 እስከ 2 ካርቴላ)</div>
        <div class="timer-big" id="buyingTimerDisplay">⏳ ካርቴላ መምረጫ ክፍት ነው...</div>
        <div class="large-card-grid" id="largeCardListContainer"></div>
        <p style="font-size: 11px; color: #94a3b8; margin-bottom: 8px;">የመረቷቸው ካርቴላዎች፦ <span id="selectedCardsText" style="color: #22c55e; font-weight: bold;">ምንም አልተመረጠም</span></p>
        <button class="btn" id="confirmCardBtn" onclick="confirmCardSelection()">ካርቴላ አረጋግጥ & ጨዋታ ጀምር</button>
      </div>
    </div>

    <!-- Active Game Area -->
    <div id="activeGameArea" style="display: none;">
      <button class="back-btn" onclick="backToRooms()">← ክፍሎች ወደ መረጡበት ተመለስ</button>
      <div class="timer-banner" id="phaseStatus">🎮 ጨዋታው በይፋ ተጀምሯል!</div>
      <div class="game-layout" style="margin-top: 6px;">
        <div class="left-panel">
          <div class="bingo-headers">
            <div class="h-cell h-b">B</div>
            <div class="h-cell h-i">I</div>
            <div class="h-cell h-n">N</div>
            <div class="h-cell h-g">G</div>
            <div class="h-cell h-o">O</div>
          </div>
          <div class="numbers-grid" id="leftGrid"></div>
        </div>
        <div class="right-panel">
          <div class="ball-display-box">
            <div class="history-balls-row" id="historyBallsContainer"></div>
            <div class="current-ball" id="currentBallDisplay">-</div>
          </div>
          <div class="boards-container" id="boardsContainer"></div>
          <button class="btn-bingo" onclick="checkAutoBingo()">BINGO! (አሸንፌአለሁ)</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. BALANCE SECTION -->
  <div id="balanceSection" class="section">
    <div class="form-box">
      <h3 style="font-size: 14px; margin-bottom: 8px; color: #38bdf8;">የእኔ ባላንስ</h3>
      <p style="font-size: 16px; font-weight: bold; color: #22c55e;" id="myBalText">0.00 ETB</p>
    </div>
  </div>

  <!-- 3. DEPOSIT SECTION -->
  <div id="depositSection" class="section">
    <div class="form-box">
      <h3 style="font-size: 14px; margin-bottom: 8px; color: #38bdf8;">ገንዘብ ማስገቢያ (Deposit)</h3>
      <p style="font-size: 12px; color: #eab308; margin-bottom: 8px; font-weight: bold; background: #0f172a; padding: 8px; border-radius: 4px; border: 1px solid #eab308;">
        📍 ክፍያ መፈጸሚያ አድራሻ፦<br>
        • <b>ቴሌብር ስልክ ቁጥር፦</b> <span style="color: #22c55e; font-size: 14px;">0937565994</span>
      </p>
      <p style="font-size: 11px; color: #94a3b8; margin-bottom: 6px;">ገንዘብ ከላኩ በኋላ ከቴሌብር የደረሰዎትን ትክክለኛ የክፍያ SMS ኮፒ አድርገው እዚህ ይለጥፉ:</p>
      <textarea id="smsInput" rows="3" placeholder="የቴሌብር SMS እዚህ ይለጥፉ..."></textarea>
      <button class="btn" onclick="verifyDeposit()">ባላንስ አድስ (በራስ-ሰር ይደመር)</button>
    </div>
  </div>

  <!-- 4. WITHDRAW SECTION -->
  <div id="withdrawSection" class="section">
    <div class="form-box">
      <h3 style="font-size: 14px; margin-bottom: 8px; color: #38bdf8;">ገንዘብ ማውጫ (Withdraw)</h3>
      <p style="font-size: 11px; color: #94a3b8; margin-bottom: 6px;">ዋሌትዎ ላይ ያለውን ብር ብቻ በሚፈልጉት የባንክ አማራጭ ማውጣት ይችላሉ።</p>
      <select id="wBank">
        <option value="Telebirr">ቴሌብር (Telebirr)</option>
        <option value="CBE">የኢትዮጵያ ንግድ ባንክ (CBE)</option>
        <option value="Abyssinia">አቢሲኒያ ባንክ</option>
        <option value="Awash">አዋሽ ባንክ</option>
        <option value="Tsedey">ፀዴ ባንክ</option>
        <option value="Dashen">ዳሽን ባንክ</option>
      </select>
      <input type="text" id="wAcc" placeholder="የባንክ አካውንት ቁጥር / ስልክ ቁጥር">
      <input type="number" id="wAmt" placeholder="የሚያወጡት የብር መጠን">
      <button class="btn" onclick="requestWithdraw()">ዊዝድሮ ጠይቅ</button>
    </div>
  </div>

  <!-- 5. HISTORY SECTION -->
  <div id="historySection" class="section">
    <div class="form-box">
      <h3 style="font-size: 14px; margin-bottom: 8px; color: #38bdf8;">የግብይት ታሪክ</h3>
      <p style="font-size: 11px; color: #94a3b8;">ምንም የግብይት ታሪክ የለም።</p>
    </div>
  </div>

  <!-- 6. INSTRUCTION SECTION -->
  <div id="instructionSection" class="section">
    <div class="form-box">
      <h3 style="font-size: 14px; margin-bottom: 8px; color: #38bdf8;">ህጎች እና መመሪያዎች</h3>
      <p style="font-size: 11px; line-height: 1.5; color: #cbd5e1;">
        • **የ 50 ብር ሱፐር ቢንጎ፦** ሰባቱንም ቀን (24/7) ክፍት ነው።<br>
        • **የ 10 ብር ጨዋታ፦** 15 ሰከንድ የካርቴላ መምረጫ ቆጣሪ አለው።
      </p>
    </div>
  </div>

  <!-- 7. REGISTER SECTION -->
  <div id="registerSection" class="section active">
    <div class="form-box">
      <h3 style="font-size: 16px; margin-bottom: 10px; color: #38bdf8; text-align: center;">🎮 GT Bingo Pro - ምዝገባ</h3>
      <p style="font-size: 11px; color: #94a3b8; margin-bottom: 10px; text-align: center;">ጨዋታውን ለመጀመር እባክዎን ስምዎን እና ስልክ ቁጥርዎን ያስገቡ:</p>
      <input type="text" id="regName" placeholder="የእርስዎ ስም / ዩዘርኔም (ግዴታ *)">
      <input type="text" id="regPhone" placeholder="ስልክ ቁጥር (አማራጭ)">
      <button class="btn" onclick="registerUser()">ተመዝግቦ ወደ ጨዋታ ግባ</button>
    </div>
  </div>

  <!-- Bottom Navigation Menu Bar -->
  <div class="bottom-menu">
    <button class="menu-item" id="navPlay" onclick="switchSection('playSection', this)">Play 🎮</button>
    <button class="menu-item" id="navBal" onclick="switchSection('balanceSection', this)">My Balance</button>
    <button class="menu-item" id="navDep" onclick="switchSection('depositSection', this)">Deposit</button>
    <button class="menu-item" id="navWd" onclick="switchSection('withdrawSection', this)">Withdraw</button>
    <button class="menu-item" id="navHist" onclick="switchSection('historySection', this)">History</button>
    <button class="menu-item" id="navInst" onclick="switchSection('instructionSection', this)">Instruction</button>
    <button class="menu-item active" id="navReg" onclick="switchSection('registerSection', this)">Register</button>
  </div>

  <script>
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }

    let userBalance = parseFloat(localStorage.getItem("gt_bingo_balance")) || 0;
    let userName = "";
    let userPhone = "";
    let isRegistered = false;
    let currentRoomPrice = 10;
    let selectedCardNums = [];
    let isCardsLocked = false; 
    let globalTakenCards = []; 
    let calledNumbersList = [];
    let gameInterval;
    let isBuyingPhase = true;
    let buyTimer = null;
    let usedTransactions = JSON.parse(localStorage.getItem("gt_bingo_used_txns")) || [];
    let isAudioActive = true; 

    window.onload = function() {
      let savedName = localStorage.getItem("gt_bingo_username");
      if (savedName) {
        userName = savedName;
        userPhone = localStorage.getItem("gt_bingo_phone") || "";
        isRegistered = true;
        updateBalanceUI();
        switchSection('playSection', document.getElementById('navPlay'));
      }
    };

    function toggleSound() {
      isAudioActive = !isAudioActive;
      let btn = document.getElementById('soundToggleBtn');
      if (isAudioActive) {
        btn.innerText = "🎤 ON";
        btn.classList.remove('muted');
      } else {
        btn.innerText = "🔇 OFF";
        btn.classList.add('muted');
      }
    }

    function registerUser() {
      let nameInput = document.getElementById('regName').value.trim();
      let phoneInput = document.getElementById('regPhone').value.trim();

      if (!nameInput) {
        alert("⚠ እባክዎን ስምዎትን (ዩዘርኔም) ያስገቡ!");
        return;
      }

      userName = nameInput;
      userPhone = phoneInput;
      isRegistered = true;

      localStorage.setItem("gt_bingo_username", userName);
      localStorage.setItem("gt_bingo_phone", userPhone);

      alert(`✓ እንኳን ደህና መጡ ${userName}! ምዝገባዎ ተጠናቋል።`);
      switchSection('playSection', document.getElementById('navPlay'));
    }

    function switchSection(secId, btn) {
      if (secId !== 'registerSection' && !isRegistered) {
        alert("⚠ እባክዎን መጀመሪያ ይመዝገቡ!");
        switchSection('registerSection', document.getElementById('navReg'));
        return;
      }

      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
      document.getElementById(secId).classList.add('active');
      if(btn) btn.classList.add('active');
    }

    function selectRoom(price) {
      if (!isRegistered) {
        alert("⚠ እባክዎን መጀመሪያ ይመዝገቡ!");
        switchSection('registerSection', document.getElementById('navReg'));
        return;
      }

      currentRoomPrice = price;
      document.getElementById('roomMenu').style.display = 'none';
      document.getElementById('activeGameArea').style.display = 'none';
      document.getElementById('buyingPhaseArea').style.display = 'block';
      document.getElementById('winnerBanner').style.display = 'none';
      
      selectedCardNums = [];
      isCardsLocked = false; 
      updateSelectedCardsText();
      updateDerash();
      renderLarge1500CardsList();
      
      if (currentRoomPrice === 10) {
        startBuyingPhaseTimer();
      } else {
        document.getElementById('buyingTimerDisplay').innerText = "🔥 የ 50 ብር ሱፐር ቢንጎ (ሰባቱንም ቀን ክፍት ነው)፤ ካርቴላዎትን መርጠው 🔒 ሎክ ያዙ!";
      }
    }

    function backToRooms() {
      if (currentRoomPrice === 50 && isCardsLocked && selectedCardNums.length > 0) {
        selectedCardNums.forEach(c => {
          let idx = globalTakenCards.indexOf(c);
          if(idx > -1) globalTakenCards.splice(idx, 1);
        });
      }
      clearInterval(gameInterval);
      clearInterval(buyTimer);
      document.getElementById('buyingPhaseArea').style.display = 'none';
      document.getElementById('activeGameArea').style.display = 'none';
      document.getElementById('roomMenu').style.display = 'flex';
    }

    function updateBalanceUI() {
      localStorage.setItem("gt_bingo_balance", userBalance);
      document.getElementById('balanceVal').innerText = userBalance.toFixed(2) + " ETB";
      document.getElementById('myBalText').innerText = userBalance.toFixed(2) + " ETB";
    }

    function updateDerash() {
      let totalCollected = selectedCardNums.length * currentRoomPrice; 
      let derash = totalCollected * 0.8; 
      document.getElementById('derashVal').innerHTML = derash.toFixed(2) + ` <span style="font-size: 9px;">ETB</span>`;
    }

    function updateSelectedCardsText() {
      let textEl = document.getElementById('selectedCardsText');
      if (selectedCardNums.length === 0) {
        textEl.innerText = "ምንም ካርቴላ አልተመረጠም";
        textEl.style.color = "#94a3b8";
      } else {
        let lockStatus = (currentRoomPrice === 50 && isCardsLocked) ? " 🔒 (ሎክ ተደርጓል)" : " 🔓 (ተለዋዋጭ)";
        textEl.innerText = selectedCardNums.map(n => `#${n}`).join(', ') + lockStatus;
        textEl.style.color = (currentRoomPrice === 50 && isCardsLocked) ? "#eab308" : "#22c55e";
      }
    }

    function startBuyingPhaseTimer() {
      isBuyingPhase = true;
      let count = 15;
      let timerBanner = document.getElementById('buyingTimerDisplay');
      
      clearInterval(buyTimer);
      buyTimer = setInterval(() => {
        if (count > 0) {
          timerBanner.innerText = `⏳ የ 10 ብር ጨዋታ ቆጣሪ፡ ${count} ሰከንድ ይቀራል...`;
          count--;
        } else {
          clearInterval(buyTimer);
          timerBanner.innerText = `🚀 15 ሰከንድ አልቋል! ጨዋታው በይፋ እየጀመረ ነው...`;
          setTimeout(() => {
            finalizeGameStart();
          }, 1000);
        }
      }, 1000);
    }

    function confirmCardSelection() {
      if (selectedCardNums.length === 0) {
        alert("⚠ እባክዎን ቢያንስ 1 ካርቴላ ይምረጡ!");
        return;
      }

      let totalCost = selectedCardNums.length * currentRoomPrice;
      if (userBalance < totalCost) {
        alert(`⚠ በቂ ባላንስ የለዎትም! ለዚህ ጨዋታ ${totalCost} ብር ያስፈልጋል።`);
        return;
      }

      if (currentRoomPrice === 50) {
        isCardsLocked = true;
        selectedCardNums.forEach(c => {
          if (!globalTakenCards.includes(c)) globalTakenCards.push(c);
        });
        alert(`✓ የሱፐር ቢንጎ ካርቴላዎ [${selectedCardNums.map(n=>'#'+n).join(', ')}] 🔒 ሎክ ተደርጓል!`);
        updateSelectedCardsText();
        finalizeGameStart();
      } else {
        finalizeGameStart();
      }
    }

    function finalizeGameStart() {
      clearInterval(buyTimer);
      let totalCost = selectedCardNums.length * currentRoomPrice;
      
      if (userBalance < totalCost) {
        alert(`⚠ በቂ ባላንስ ስለሌለዎት ከጨዋታው ውጪ ሆናለተ።`);
        backToRooms();
        return;
      }

      if (totalCost > 0) {
        userBalance -= totalCost;
        updateBalanceUI();
      }

      isBuyingPhase = false;
      document.getElementById('buyingPhaseArea').style.display = 'none';
      document.getElementById('activeGameArea').style.display = 'block';

      renderUserBoards();
      startGameCalls();
    }

    function renderLeftGrid() {
      let grid = document.getElementById('leftGrid');
      grid.innerHTML = '';
      for (let row = 0; row < 15; row++) {
        for (let col = 0; col < 5; col++) {
          let num = (col * 15) + row + 1;
          let cell = document.createElement('div');
          cell.className = 'num-cell';
          cell.id = 'left-num-' + num;
          cell.innerText = num;
          grid.appendChild(cell);
        }
      }
    }

    function renderLarge1500CardsList() {
      let container = document.getElementById('largeCardListContainer');
      container.innerHTML = '';
      for (let i = 1; i <= 1500; i++) {
        let div = document.createElement('div');
        div.className = 'large-card-item';
        div.innerText = `#${i}`;

        if (currentRoomPrice === 50 && globalTakenCards.includes(i)) {
          div.classList.add('locked-by-other');
          div.innerHTML = `#${i} 🔒`;
        } else {
          if (selectedCardNums.includes(i)) {
            div.classList.add('selected');
          }
          div.onclick = () => toggleCardSelection(i, div);
        }
        container.appendChild(div);
      }
    }

    function toggleCardSelection(cardNum, element) {
      if (currentRoomPrice === 50 && isCardsLocked) {
        alert("⚠ የሱፐር ቢንጎ ካርቴላዎችዎ 🔒 ሎክ ስለሆኑ መቀየር አይችሉም!");
        return;
      }

      if (currentRoomPrice === 50 && globalTakenCards.includes(cardNum)) {
        alert("⚠ ይህ ካርቴላ በሌላ ተጫዋች ተይዟል 🔒!");
        return;
      }

      let index = selectedCardNums.indexOf(cardNum);
      if (index > -1) {
        selectedCardNums.splice(index, 1);
        element.classList.remove('selected');
      } else {
        if (selectedCardNums.length >= 2) {
          alert("⚠ ቢበዛ 2 ካርቴላ ብቻ መምረጥ ይቻላል!");
          return;
        }
        selectedCardNums.push(cardNum);
        element.classList.add('selected');
      }
      updateSelectedCardsText();
      updateDerash();
    }

    function getStandardBingoCard(cardNum) {
      let ranges = [{min:1, max:15}, {min:16, max:30}, {min:31, max:45}, {min:46, max:60}, {min:61, max:75}];
      let seed = cardNum * 12345;
      let cardData = [[], [], [], [], []];
      for (let c = 0; c < 5; c++) {
        let pool = [];
        for (let i = ranges[c].min; i <= ranges[c].max; i++) pool.push(i);
        for (let r = 0; r < 5; r++) {
          seed = (seed * 9301 + 49297) % 233280;
          let idx = Math.floor((seed / 233280) * pool.length);
          cardData[c].push(pool.splice(idx, 1)[0]);
        }
      }
      return cardData;
    }

    function renderUserBoards() {
      let container = document.getElementById('boardsContainer');
      container.innerHTML = '';

      if (selectedCardNums.length === 0) {
        container.innerHTML = '<p style="color: #64748b; font-size: 11px; text-align: center;">ምንም ካርቴላ አልተመረጠም</p>';
        return;
      }

      selectedCardNums.forEach(cardNum => {
        let cardData = getStandardBingoCard(cardNum);
        let wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';
        let badge = (currentRoomPrice === 50) ? "<span>🔒 (ሎክድ)</span>" : "<span>🔓 (ተለዋዋጭ)</span>";
        wrapper.innerHTML = `<div class="card-title">ካርቴላ #${cardNum} ${badge}</div>`;

        let board = document.createElement('div');
        board.className = 'user-bingo-board';
        board.setAttribute('data-cardnum', cardNum);

        ['B','I','N','G','O'].forEach(h => {
          let hc = document.createElement('div');
          hc.className = 'u-header';
          hc.innerText = h;
          board.appendChild(hc);
        });

        for (let r = 0; r < 5; r++) {
          for (let c = 0; c < 5; c++) {
            let cell = document.createElement('div');
            cell.className = 'u-cell';
            cell.setAttribute('data-row', r);
            cell.setAttribute('data-col', c);
            if (r === 2 && c === 2) {
              cell.innerText = 'FREE';
              cell.classList.add('free', 'selected');
            } else {
              cell.innerText = cardData[c][r];
            }
            board.appendChild(cell);
          }
        }
        wrapper.appendChild(board);
        container.appendChild(wrapper);
      });
    }

    function getLetter(num) {
      if (num <= 15) return "B";
      if (num <= 30) return "I";
      if (num <= 45) return "N";
      if (num <= 60) return "G";
      return "O";
    }

    function getBallColor(num) {
      if (num <= 15) return "#2563eb";
      if (num <= 30) return "#dc2626";
      if (num <= 45) return "#eab308";
      if (num <= 60) return "#16a34a";
      return "#9333ea";
    }

    function speakNumber(num) {
      if (!isAudioActive) return;

      let letter = getLetter(num);
      try {
        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } catch (e) {}

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        let msg = new SpeechSynthesisUtterance(`${letter} ${num}`);
        msg.rate = 0.95;
        msg.pitch = 1.1;
        window.speechSynthesis.speak(msg);
      }
    }

    function startGameCalls() {
      clearInterval(gameInterval);
      calledNumbersList = [];
      renderLeftGrid();

      gameInterval = setInterval(() => {
        if (calledNumbersList.length >= 75) return;
        let rand;
        do {
          rand = Math.floor(Math.random() * 75) + 1;
        } while (calledNumbersList.includes(rand));

        calledNumbersList.push(rand);
        document.getElementById('ballsCount').innerText = `${calledNumbersList.length}/75`;

        let letter = getLetter(rand);
        document.getElementById('currentBallDisplay').innerText = `${letter}-${rand}`;

        let historyContainer = document.getElementById('historyBallsContainer');
        historyContainer.innerHTML = '';
        let recent = calledNumbersList.slice(-4, -1);
        recent.forEach(n => {
          let b = document.createElement('div');
          b.className = 'history-ball';
          b.style.backgroundColor = getBallColor(n);
          b.innerText = `${getLetter(n)}${n}`;
          historyContainer.appendChild(b);
        });

        document.querySelectorAll('.num-cell').forEach(c => c.classList.remove('last-called'));
        let leftCell = document.getElementById('left-num-' + rand);
        if (leftCell) leftCell.classList.add('called', 'last-called');

        speakNumber(rand);

        let cells = document.querySelectorAll('.u-cell');
        cells.forEach(cell => {
          if (cell.innerText == rand) cell.classList.add('selected');
        });

        if (selectedCardNums.length > 0) {
          checkAutoBingo();
        }
      }, 4000);
    }

    function checkAutoBingo() {
      let boards = document.querySelectorAll('.user-bingo-board');
      let winningCards = [];

      boards.forEach(board => {
        let grid = Array(5).fill(null).map(() => Array(5).fill(false));
        let cells = board.querySelectorAll('.u-cell');
        let cardNum = board.getAttribute('data-cardnum');

        cells.forEach(cell => {
          let r = parseInt(cell.getAttribute('data-row'));
          let c = parseInt(cell.getAttribute('data-col'));
          if (!isNaN(r) && !isNaN(c) && cell.classList.contains('selected')) {
            grid[r][c] = true;
          }
        });

        let won = false;
        if (currentRoomPrice === 50) {
          let allFilled = true;
          for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
              if (!grid[r][c]) allFilled = false;
            }
          }
          if (allFilled) won = true;
        } else {
          for (let r = 0; r < 5; r++) if (grid[r].every(v => v)) won = true;
          for (let c = 0; c < 5; c++) if ([0,1,2,3,4].every(r => grid[r][c])) won = true;
          if ([0,1,2,3,4].every(i => grid[i][i]) || [0,1,2,3,4].every(i => grid[i][4-i])) won = true;
          if (grid[0][0] && grid[0][4] && grid[4][0] && grid[4][4]) won = true;
        }

        if (won && !winningCards.includes(cardNum)) {
          winningCards.push(cardNum);
        }
      });

      if (winningCards.length > 0) {
        clearInterval(gameInterval);
        let totalCollected = selectedCardNums.length * currentRoomPrice;
        let totalPrize = totalCollected * 0.8;
        let winnersCount = winningCards.length;
        let prizePerWinner = totalPrize / winnersCount;

        userBalance += prizePerWinner;
        updateBalanceUI();

        let winnerBanner = document.getElementById('winnerBanner');
        document.getElementById('winnerNameDisplay').innerText = `👤 ተጫዋች፦ ${userName}`;
        document.getElementById('winnerCardDisplay').innerText = `🎯 አሸናፊ ካርቴላ፦ #${winningCards.join(', #')} (${prizePerWinner.toFixed(2)} ETB)`;
        winnerBanner.style.display = 'block';

        alert(`🎉 BINGO! ተጫዋች [${userName}] በካርቴላ #${winningCards.join(', #')} አሸንፏል! ${prizePerWinner.toFixed(2)} ብር ወደ ዋሌትዎ ገብቷል።`);
        
        setTimeout(() => {
          selectRoom(currentRoomPrice);
        }, 10000);
      }
    }

    // ─── 1. አውቶማቲክ ዲፖዚት (SMS Auto-Recognize & Balance Add) ───
    function verifyDeposit() {
      let txt = document.getElementById('smsInput').value.trim();
      if (!txt) {
        alert("⚠ እባክዎን የቴሌብር SMS ይለጥፉ!");
        return;
      }

      let txnMatch = txt.match(/([A-Z0-9]{8,15})/i);
      let amtMatch = txt.match(/ETB\s*([\d\.]+)/i) || txt.match(/([\d\.]+)\s*ETB/i) || txt.match(/([\d\.]+)\s*ብር/i);

      if (!amtMatch) {
        alert("⚠ የብር መጠን በ SMS ውስጥ አልተገኘም! እባክዎን ትክክለኛ የቴሌብር SMS ይለጥፉ።");
        return;
      }

      let txnId = txnMatch ? txnMatch[1] : "TXN_" + Date.now();
      
      if (usedTransactions.includes(txnId)) {
        alert("⚠ ይህ SMS ወይም Transaction ID ቀደም ሲል ጥቅም ላይ ውሏል!");
        return;
      }

      let amt = parseFloat(amtMatch[1]);

      userBalance += amt;
      usedTransactions.push(txnId);
      localStorage.setItem("gt_bingo_used_txns", JSON.stringify(usedTransactions));
      updateBalanceUI();

      document.getElementById('smsInput').value = '';

      alert(`✓ የ ${amt.toFixed(2)} ብር ክፍያዎ በስኬት ተረጋግጦ ዋሌትዎ ላይ ተደምሯል!`);
      switchSection('playSection', document.getElementById('navPlay'));
    }

    // ─── 2. ዊዝድሮ (Withdraw) ጥያቄ (ከዋሌት መቀነስ) ───
    function requestWithdraw() {
      let amt = parseFloat(document.getElementById('wAmt').value);
      let bank = document.getElementById('wBank').value;
      let acc = document.getElementById('wAcc').value;

      if (isNaN(amt) || amt <= 0) {
        alert("⚠ እባክዎን ትክክለኛ የብር መጠን ያስገቡ!");
        return;
      }
      if (amt > userBalance) {
        alert(`⚠ በቂ ባላንስ የለዎትም! በዋሌትዎ ላይ ያለው [${userBalance.toFixed(2)} ETB] ብቻ ነው።`);
        return;
      }
      if (!acc) {
        alert("⚠ እባክዎን የባንክ አካውንት ቁጥር ወይም ስልክ ቁጥር ያስገቡ!");
        return;
      }

      // ከዋሌት መቀነስ
      userBalance -= amt;
      updateBalanceUI();

      // መረጃውን ለአድሚን ቦት በቴሌግራም መላክ
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

      alert(`✓ የ ${amt.toFixed(2)} ብር ዊዝድሮ ጥያቄዎ ተመዝግቦ ከዋሌትዎ ተቀናሽ ሆኗል! አድሚኑ አረጋግጦ ይለክልዎታል።`);

      document.getElementById('wAmt').value = '';
      document.getElementById('wAcc').value = '';

      switchSection('balanceSection', document.getElementById('navBal'));
    }

    updateBalanceUI();
    renderLeftGrid();
  </script>
</body>
</html>
