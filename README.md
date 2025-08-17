# Pokemon Style Game for Google Sheets

This repository contains a simple Google Apps Script that allows you to play a mini Pokemon-style battle directly in a Google Sheet.

## Setup

1. Open a new or existing Google Sheet.
2. Navigate to **Extensions -> Apps Script**.
3. Create a new script file named `pokemon_game.gs` and copy the contents of `scripts/pokemon_game.gs` into it.
4. Save the script and close the Apps Script editor.

## Usage

1. In the Apps Script editor, run `startGame()` to initialize the sheet. This will create a `Pokemon Game` sheet with player and enemy info.
2. Each time you run `attack()`, the player attacks the enemy and the enemy retaliates. Hit points (HP) update in the sheet until either the player or the enemy reaches 0 HP.
3. The game displays a dialog when you win or lose.

Feel free to modify the script to add more features such as additional Pokemon, special moves, or multiple battles.

## Airline Manager Game

A lightweight browser-based airline manager for tracking your own flight simulator trips. All data is stored in your browser's local storage.

### Setup

1. Open `airline-manager/index.html` in a web browser.
2. Add flights using the form. Flights are saved locally so your progress stays on your machine.

Feel free to expand it with additional features like revenue tracking, aircraft maintenance, or route planning.

### Build an Executable

1. Navigate to `airline-manager`.
2. Run `npm install` to install dependencies.
3. Run `npm run build-win` to generate `AirlineManager.exe`.
