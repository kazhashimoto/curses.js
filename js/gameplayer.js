function GamePlayer(win) {
	const _win = win;
	var _dlev;
	var _taskmgr;
	
	function init() {
		_dlev = new DungeonLevel(_win);
		_taskmgr = new TaskManager();
	}
	
	this.start = function() {
		init();
		
		console.dir(_dlev);
		_dlev.makeRooms();
		_dlev.putPlayer();
		_dlev.createInventory();
		_dlev.createPets(1);
		_dlev.putShopkeeper();
		_dlev.createObjects();
		_dlev.createMonsters();
		_dlev.display();
		_dlev.printStatus();
		_dlev.printMessage();
	};
	
	this.command = function(ev) {
		var key = ev.key;
		if (ev.ctrlKey || ev.altKey || ev.metaKey) {
			return;
		}
		_dlev.deleteLines();
		if (_dlev.inPrompt()) {
			_dlev.doCommand(key);
			return;
		}
		
		switch (key) {
			case 'h': case 'j': case 'k': case 'l':
			case 'y': case 'u': case 'b': case 'n':
				_dlev.youMove(key);
				break;
			case 'H': case 'J': case 'K': case 'L':
			case 'Y': case 'U': case 'B': case 'N':
				goUntil(key);
				break;
			case 'd':
				_dlev.doDrop(key);
				break;
			case 'i':
				_dlev.doInventory(key);
				break;
			case 'q':
				_dlev.doDrink(key);
				break;
			case 'r':
				_dlev.doRead(key);
				break;
			case ',':
				_dlev.doPickup(key);
				break;
			case '/':	// DEBUG
				var p = _dlev.playerXY;
				_dlev.dumpObjects(p.y, p.x);
				break;
			case '=':	// DEBUG
				_dlev.dumpInvSlot();
				break;
			case '%':	// DEBUG
				_dlev.dumpObjectsAll();
				break;
			case '&':	// DEBUG
				_dlev.makeObjects();
				break;
			case '#':	// DEBUG
				_dlev.dumpMonsters();
				break;
			case 'C':
				_dlev.clearInventory();
				break;
		}
		
		_dlev.flushMessages();
	};
	
	function t_player_move(o) {
		var key = o.data;
		if (!_dlev.youMove(key, false)) {
			_dlev.flushMessages();
			return false;
		}
		var p = _dlev.playerXY;
		if (_dlev.somethingAt(p.y, p.x, true)) {
			return false;
		}
		o.count--;
		if (o.count > 0) {
			return true;
		}
		return false;
	}

	//function t_move_random(o) {
//		var dlev = game.dlev;
//		const dir_keys = 'hjklyubn';
//		var len = dir_keys.length;
//		var key = dir_keys.charAt(getRandomInt(0, len));
//		console.log('key=' + key);
//		dlev.youMove(key);
//		o.data--;
//		if (o.data > 0) {
//			return true;
//		}
//		return false;
//	}

	function goUntil(key) {
		var o = { func: t_player_move, data: key.toLowerCase(), count: 100, delay: 10 };
		_taskmgr.add(o);
		_taskmgr.runTimer();
	}
}