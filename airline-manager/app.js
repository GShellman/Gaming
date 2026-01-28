const story = {
  nodes: {
    start: {
      title: 'Morgen über Tenochtitlan',
      text: [
        'Der Nebel steigt von den Kanälen auf, als die Trommeln den Sonnenaufgang begleiten.',
        'Heute, {name}, sollst du Zeichen der Götter sammeln, bevor die Sonnenfinsternis eintritt.'
      ],
      choices: [
        { label: 'Dem Priester des Sonnentempels folgen', next: 'temple' },
        { label: 'Mit der Jaguarkriegerin trainieren', next: 'training' },
        { label: 'Die schwimmenden Gärten erkunden', next: 'canals' }
      ]
    },
    temple: {
      title: 'Stufen zum Himmel',
      text: [
        'Der Priester reicht dir Räucherharz und deutet auf den Altar.',
        'Der Stein ist warm und wartet auf eine Gabe.'
      ],
      choices: [
        {
          label: 'Opfere Kakao und erbete eine Vision',
          next: 'vision',
          effects: { favor: 1, addItem: 'Sonnenamulett' },
          log: 'Du legst Kakao auf den Altar und erhältst ein Sonnenamulett.'
        },
        {
          label: 'Bitte um Wissen über die Finsternis',
          next: 'riddle',
          log: 'Der Priester erzählt dir ein altes Rätsel über den Schatten.'
        }
      ]
    },
    riddle: {
      title: 'Das Rätsel des Schattens',
      text: [
        '"Die Sonne ruht nicht, doch ihr Herz sucht Schutz", sagt der Priester.',
        'Du spürst, dass Mut nötig ist, um das Zeichen zu deuten.'
      ],
      choices: [
        {
          label: 'Du schwörst, die Stadt zu beschützen',
          next: 'vision',
          effects: { courage: 1, favor: 1 },
          log: 'Dein Schwur erfüllt dich mit Mut und die Sonne erhört dich.'
        },
        {
          label: 'Du gehst und suchst Rat bei den Kriegern',
          next: 'training'
        }
      ]
    },
    training: {
      title: 'Pfad der Jaguarkrieger',
      text: [
        'Die Kriegerin Yaqui lächelt, als du die Übungsarena betrittst.',
        '"Zeig mir, wie du dem Schatten begegnest", fordert sie.'
      ],
      choices: [
        {
          label: 'Sparring im Sand',
          next: 'training_result',
          effects: { courage: 1 },
          log: 'Der Kampf macht dich schneller und stärkt deinen Mut.'
        },
        {
          label: 'Erzähle von den Zeichen der Sonne',
          next: 'vision',
          effects: { favor: 1 },
          log: 'Yaqui erinnert sich an eine alte Prophezeiung und segnet dich.'
        }
      ]
    },
    training_result: {
      title: 'Schweiß und Staub',
      text: [
        'Yaqui überreicht dir eine Obsidian-Klinge als Zeichen des Respekts.',
        '"Nimm sie. Du wirst sie brauchen, wenn der Himmel dunkelt."'
      ],
      choices: [
        {
          label: 'Zurück zu den Kanälen',
          next: 'canals',
          effects: { addItem: 'Obsidian-Klinge' }
        },
        {
          label: 'Direkt zum Sonnentempel',
          next: 'temple',
          effects: { addItem: 'Obsidian-Klinge' }
        }
      ]
    },
    canals: {
      title: 'Gärten auf dem Wasser',
      text: [
        'Du gleitest über die Chinampas. Händler rufen, Kinder lachen.',
        'Ein Kanu gerät ins Wanken, als dunkle Wolken aufziehen.'
      ],
      choices: [
        {
          label: 'Rette den Händler und seine Jade',
          next: 'market_return',
          effects: { favor: 1, addItem: 'Jade-Siegel' },
          log: 'Der Händler schenkt dir ein Jade-Siegel als Dank.'
        },
        {
          label: 'Folge einem verborgenen Wasserweg',
          next: 'island',
          log: 'Du paddelst in einen stillen Kanal, wo die Luft kühler wird.'
        }
      ]
    },
    market_return: {
      title: 'Zurück im Markt',
      text: [
        'Der Händler führt dich zu einem Schrein am Markt.',
        'Du spürst, dass die Zeichen sich sammeln.'
      ],
      choices: [
        {
          label: 'Die Zeichen im Tempel deuten lassen',
          next: 'sun_trial'
        },
        {
          label: 'Noch einmal die Krieger aufsuchen',
          next: 'training'
        }
      ]
    },
    island: {
      title: 'Die versunkene Insel',
      text: [
        'Im Schilf entdeckst du eine versunkene Insel. Ein Altar mit goldenen Glyphen leuchtet schwach.',
        'Ein Jaguargeist zeichnet die Luft mit seinem Schweif.'
      ],
      choices: [
        {
          label: 'Sprich das Gebet des Jaguar',
          next: 'sun_trial',
          effects: { courage: 1, addItem: 'Jaguar-Totem' },
          log: 'Der Geist überlässt dir ein Jaguar-Totem.'
        },
        {
          label: 'Nimm die Glyphen mit und geh',
          next: 'sun_trial',
          effects: { favor: 1 },
          log: 'Die Glyphen glühen in deiner Hand, als du zurückkehrst.'
        }
      ]
    },
    vision: {
      title: 'Vision der Fünften Sonne',
      text: [
        'Du siehst den Himmel dunkel werden, doch eine goldene Schlange windet sich um die Sonne.',
        'Nur wer Mut und Gunst sammelt, kann den Schatten abwehren.'
      ],
      choices: [
        {
          label: 'Bereite dich auf die Prüfung vor',
          next: 'sun_trial'
        },
        {
          label: 'Suche weiter nach Zeichen in den Kanälen',
          next: 'canals'
        }
      ]
    },
    sun_trial: {
      title: 'Die Sonnenfinsternis',
      text: [
        'Die Trommeln verstummen. Der Schatten kriecht über den Kalenderstein.',
        'Du musst entscheiden, wie du die Stadt schützt.'
      ],
      choices: [
        {
          label: 'Erhebe das Sonnenamulett und rufe die Götter',
          next: 'ending_light',
          requires: { item: 'Sonnenamulett' }
        },
        {
          label: 'Schlage mit der Obsidian-Klinge in die Dunkelheit',
          next: 'ending_courage',
          requires: { item: 'Obsidian-Klinge' }
        },
        {
          label: 'Verbinde alle Zeichen zu einem Ritual',
          next: 'ending_balance',
          requires: { minFavor: 2 }
        }
      ]
    },
    ending_light: {
      title: 'Sieg der Strahlen',
      text: [
        'Das Amulett glüht wie flüssiges Gold. Die Sonne bricht durch den Schatten.',
        'Tenochtitlan jubelt, und dein Name wird in Liedern bewahrt.'
      ],
      end: true,
      log: 'Du rufst die Götter und bringst das Licht zurück.'
    },
    ending_courage: {
      title: 'Mut des Jaguar',
      text: [
        'Deine Klinge schneidet in den Schatten. Der Jaguargeist brüllt aus der Dunkelheit.',
        'Die Menschen sehen deinen Mut und folgen dir in ein neues Zeitalter.'
      ],
      end: true,
      log: 'Dein Mut zerreißt die Finsternis.'
    },
    ending_balance: {
      title: 'Ritual der Harmonie',
      text: [
        'Jade, Rauch und Gesang verbinden sich. Der Schatten löst sich im Klang der Trommeln auf.',
        'Die Götter schenken dir ein Zeichen der Harmonie, und die Stadt bleibt geschützt.'
      ],
      end: true,
      log: 'Du vereinst alle Zeichen und stellst das Gleichgewicht wieder her.'
    }
  }
};

const state = {
  name: 'Reisende',
  favor: 0,
  courage: 0,
  inventory: [],
  currentNode: null
};

const nameInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const nodeTitle = document.getElementById('node-title');
const nodeText = document.getElementById('node-text');
const choicesContainer = document.getElementById('choices');
const logList = document.getElementById('log');
const favorValue = document.getElementById('favor');
const courageValue = document.getElementById('courage');
const inventoryValue = document.getElementById('inventory');

function resetState() {
  state.name = nameInput.value.trim() || 'Reisende';
  state.favor = 0;
  state.courage = 0;
  state.inventory = [];
  state.currentNode = 'start';
  logList.innerHTML = '';
}

function updateStatus() {
  favorValue.textContent = state.favor;
  courageValue.textContent = state.courage;
  inventoryValue.textContent = state.inventory.length ? state.inventory.join(', ') : '–';
}

function applyEffects(effects) {
  if (!effects) {
    return;
  }
  if (effects.favor) {
    state.favor += effects.favor;
  }
  if (effects.courage) {
    state.courage += effects.courage;
  }
  if (effects.addItem) {
    if (!state.inventory.includes(effects.addItem)) {
      state.inventory.push(effects.addItem);
    }
  }
}

function addLogEntry(message) {
  if (!message) {
    return;
  }
  const li = document.createElement('li');
  li.textContent = message;
  logList.prepend(li);
}

function canChoose(choice) {
  if (!choice.requires) {
    return { allowed: true };
  }
  if (choice.requires.item && !state.inventory.includes(choice.requires.item)) {
    return { allowed: false, reason: `Benötigt: ${choice.requires.item}` };
  }
  if (choice.requires.minFavor && state.favor < choice.requires.minFavor) {
    return { allowed: false, reason: `Benötigt Sonnen-Gunst ${choice.requires.minFavor}` };
  }
  return { allowed: true };
}

function renderNode(nodeId) {
  const node = story.nodes[nodeId];
  if (!node) {
    return;
  }
  state.currentNode = nodeId;
  nodeTitle.textContent = node.title;
  nodeText.innerHTML = '';
  node.text.forEach((line) => {
    const p = document.createElement('p');
    p.textContent = line.replace('{name}', state.name);
    nodeText.appendChild(p);
  });

  choicesContainer.innerHTML = '';
  if (node.end) {
    const endMessage = document.createElement('p');
    endMessage.textContent = 'Das Abenteuer ist beendet. Du kannst jederzeit neu beginnen.';
    nodeText.appendChild(endMessage);
    updateStatus();
    addLogEntry(node.log);
    return;
  }

  node.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.type = 'button';
    const availability = canChoose(choice);
    button.textContent = choice.label;
    if (!availability.allowed) {
      button.disabled = true;
      const hint = document.createElement('span');
      hint.className = 'choice-hint';
      hint.textContent = availability.reason;
      button.appendChild(hint);
    } else {
      button.addEventListener('click', () => {
        applyEffects(choice.effects);
        addLogEntry(choice.log);
        updateStatus();
        renderNode(choice.next);
      });
    }
    choicesContainer.appendChild(button);
  });
  updateStatus();
}

startBtn.addEventListener('click', () => {
  resetState();
  updateStatus();
  renderNode(state.currentNode);
});

restartBtn.addEventListener('click', () => {
  nameInput.value = '';
  resetState();
  updateStatus();
  renderNode(state.currentNode);
});

updateStatus();
