function startGame() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Pokemon Game');
  if (!sheet) {
    sheet = ss.insertSheet('Pokemon Game');
  }
  sheet.clear();
  sheet.appendRow(['Trainer', 'Pokemon', 'HP']);
  sheet.appendRow(['Player', 'Bulbasaur', 50]);
  sheet.appendRow(['Enemy', getRandomEnemy(), 40]);
  SpreadsheetApp.flush();
}

function getRandomEnemy() {
  var options = ['Charmander', 'Squirtle', 'Pikachu'];
  var index = Math.floor(Math.random() * options.length);
  return options[index];
}

function attack() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Pokemon Game');
  if (!sheet) {
    SpreadsheetApp.getUi().alert('Start the game first by running startGame()');
    return;
  }
  var playerRow = 2;
  var enemyRow = 3;
  var playerHP = sheet.getRange(playerRow, 3).getValue();
  var enemyHP = sheet.getRange(enemyRow, 3).getValue();
  var playerDamage = Math.floor(Math.random() * 10) + 1; // 1-10 damage
  var enemyDamage = Math.floor(Math.random() * 8) + 1; // 1-8 damage
  enemyHP = Math.max(0, enemyHP - playerDamage);
  if (enemyHP === 0) {
    sheet.getRange(enemyRow, 3).setValue(enemyHP);
    SpreadsheetApp.getUi().alert('You win!');
    return;
  }
  playerHP = Math.max(0, playerHP - enemyDamage);
  sheet.getRange(playerRow, 3).setValue(playerHP);
  sheet.getRange(enemyRow, 3).setValue(enemyHP);
  if (playerHP === 0) {
    SpreadsheetApp.getUi().alert('You lose!');
  }
  SpreadsheetApp.flush();
}
