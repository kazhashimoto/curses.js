/* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Fisher–Yates
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let r = Math.floor(Math.random() * (i + 1));
		[array[i], array[r]] = [array[r], array[i]];
	}
}

// Colors
const color_set = [
	'red', 'green', 'brown', 'magenta', 'cyan', 'gray', 'orange',
	'yellow', 'bright-blue', 'bright-magenta', 'white'
];

// Map Symbols
const S_DOOR = Symbol('door');	// closed door
const S_STAIRS_DOWN = Symbol('stairs down');
const S_STAIRS_UP = Symbol('stairs up');
const S_FOUNTAIN = Symbol('fountain');

const sym_class = [
	{ type: S_DOOR, sym: '+', color: 'color-copper' },
	{ type: S_STAIRS_DOWN, sym: '>' },
	{ type: S_STAIRS_UP, sym: '<' },
	{ type: S_FOUNTAIN, sym: '{', color: 'c-bright-blue' },
];

// Room Type
const RT_NORMAL = Symbol('normal');
const RT_SHOP = Symbol('shop');

// Object Class
const OC_GOLD = Symbol('gold');
const OC_FOOD = Symbol('food');
const OC_POTION = Symbol('potion');
const OC_SCROLL = Symbol('scroll');
const OC_WAND = Symbol('wand');
const OC_WEAPON = Symbol('weapon');
const OC_ARMOR = Symbol('armor');
const OC_TOOL = Symbol('tool');
const OC_SPELLBOOK = Symbol('spellbook');
const OC_RING = Symbol('ring');
const OC_AMULET = Symbol('amulet');
const OC_GEM = Symbol('gem');
const OC_ROCK = Symbol('rock');
const OC_STONE = Symbol('gray stone');

// Common names
const CN_ANY = Symbol('any');
const CN_GOLD = Symbol('gold piece');
// Weapons
const CN_SHORT_SWORD = Symbol('short sword');
const CN_DAGGER = Symbol('dagger');
// Armor
const CN_LEATHER_ARMOR = Symbol('leather armor');
// Comestibles
const CN_CANDY_BAR = Symbol('candy bar');
const CN_WOLFSBANE = Symbol('sprig of wolfsbane');
const CN_GARLIC = Symbol('clove of garlic');
const CN_FOOD_RATION = Symbol('food ration');
// Potions
const CN_POTION_SICKNESS = Symbol('sickness');
// Scrolls
const CN_SCROLL_IDENTIFY = Symbol('identify');
const CN_SCROLL_GOLD_DETECTION = Symbol('gold detection');
// Spellbooks
const CN_SPELL_EXTRA_HEALING = Symbol('extra healing');
const CN_SPELL_REMOVE_CURSE = Symbol('remove curse');
const CN_SPELL_LIGHT = Symbol('light');
// Wands
const CN_WAND_WISHING = Symbol('wishing');
// Rings
const CN_RING_POISON_RES = Symbol('poison resistance');
const CN_RING_FIRE_RES = Symbol('fire resistance');
const CN_RING_COLD_RES = Symbol('cold resistance');
const CN_RING_HUNGER = Symbol('hunger');
// Amulets
const CN_AMULET_ESP = Symbol('ESP');
const CN_AMULET_LIFE_SAVING = Symbol('life saving');
// Tools
const CN_LOCK_PICK = Symbol('lock pick');
const CN_SACK = Symbol('sack');
// Gems/Stones
const CN_GEM_WORTHLESS = Symbol('worthless piece of blue glass');
const CN_GEM_DIAMOND = Symbol('diamond');
const CN_GEM_RUBY = Symbol('ruby');
const CN_ROCK = Symbol('rock');
// gray stones
const CN_LUCKSTONE = Symbol('luckstone');
const CN_FLINT = Symbol('flint stone');

const obj_class = [
	{ type: OC_GOLD, sym: '$', color: 'color-gold', group: 'Coins',
		item: [ { cname: CN_GOLD, qty: [1, 20] }]},
	{ type: OC_AMULET, sym: '"', color: 'any', group: 'Amulets',
		item: [ { cname: CN_AMULET_ESP }, { cname: CN_AMULET_LIFE_SAVING } ]},
	{ type: OC_WEAPON, sym: ')', color: 'color-metal', group: 'Weapons',
		item: [ { cname: CN_SHORT_SWORD }, { cname: CN_DAGGER, qty: [5, 15] } ]},
	{ type: OC_ARMOR, sym: '[', color: 'c-brown', group: 'Armor',
		item: [ { cname: CN_LEATHER_ARMOR } ]},
	{ type: OC_FOOD, sym: '%', color: 'color-organic', group: 'Comestibles',
		item: [ { cname: CN_CANDY_BAR }, { cname: CN_FOOD_RATION }, { cname: CN_WOLFSBANE }, { cname: CN_GARLIC } ]},
	{ type: OC_SCROLL, sym: '?', color: 'color-paper', group: 'Scrolls',
		item: [ { cname: CN_SCROLL_IDENTIFY }, { cname: CN_SCROLL_GOLD_DETECTION } ]},
	{ type: OC_SPELLBOOK, sym: '+', color: 'color-paper', group: 'Spellbooks',
		item: [ { cname: CN_SPELL_EXTRA_HEALING }, { cname: CN_SPELL_LIGHT }, { cname: CN_SPELL_REMOVE_CURSE } ]},
	{ type: OC_POTION, sym: '!', color: 'any', group: 'Potions',
		item: [ { cname: CN_POTION_SICKNESS } ]},
	{ type: OC_RING, sym: '=', color: 'color-metal', group: 'Rings',
		item: [ { cname: CN_RING_COLD_RES }, { cname: CN_RING_FIRE_RES }, { cname: CN_RING_HUNGER }, { cname: CN_RING_POISON_RES } ]},
	{ type: OC_WAND, sym: '/', color: 'color-metal', group: 'Wands',
		item: [ { cname: CN_WAND_WISHING, charge: [3, 5] } ]},
	{ type: OC_TOOL, sym: '(', color: 'c-brown', group: 'Tools',
		item: [ { cname: CN_LOCK_PICK }, { cname: CN_SACK, container: true } ]},
	{ type: OC_GEM, sym: '*', color: 'any', group: 'Gems/Stones',
		item: [ { cname: CN_GEM_DIAMOND }, { cname: CN_GEM_RUBY }, { cname: CN_GEM_WORTHLESS } ]},
	{ type: OC_ROCK, sym: '*', color: 'c-gray', group: 'Gems/Stones',
		item: [ { cname: CN_ROCK } ]},
	{ type: OC_STONE, sym: '*', color: 'c-gray', group: 'Gems/Stones',
		item: [ { cname: CN_LUCKSTONE }, { cname: CN_FLINT } ]}
];

// Appearances
const obj_appearances = {
	scroll: [ 'HELLO WORLD', 'CODEPEN', 'READ ME', 'LOREM IPSUM', 'HACKEM MUCHE' ],
	potion: [ 'ruby', 'pink', 'orange', 'yellow', 'emerald', 'bubbly', 'smoky', 'cloudy', 'fizzy' ],
	spellbook: [ 'cloth', 'leather', 'velvet', 'dusty', 'thick' ],
	ring: [ 'pearl', 'iron', 'steel', 'sapphire', 'diamond' ],
	amulet: [ 'oval', 'triangular', 'square', 'hexagonal', 'octagonal' ],
	wand: [ 'aluminum', 'balsa', 'forked', 'curved', 'short' ],
	gem: [ 'white', 'red', 'orange', 'blue', 'violet' ]
};

// Monsters
const M_ACID_BLOB = Symbol('acid blob');
const M_JACKAL = Symbol('jackal');
const M_LITTLE_DOG = Symbol('little dog');
const M_GECKO = Symbol('gecko');
const M_HOBGOBLIN = Symbol('hobgoblin');
const M_KOBOLD_LORD = Symbol('kobold lord');
const M_RAT = Symbol('sewer rat');
const M_GRID_BUG = Symbol('grid bug');
const M_LICHEN = Symbol('lichen');
const M_ZOMBIE = Symbol('kobold zombie');
const M_NEWT = Symbol('newt');
const M_SHOPKEEPER = Symbol('shopkeeper');

const monst_class = [
	{ type: M_ACID_BLOB, sym: 'b', color: 'c-green' },
	{ type: M_JACKAL, sym: 'd', color: 'c-brown' },
	{ type: M_LITTLE_DOG, sym: 'd', color: 'c-white' },
	{ type: M_GECKO, sym: ':', color: 'c-green' },
	{ type: M_HOBGOBLIN, sym: 'o', color: 'c-brown' },
	{ type: M_KOBOLD_LORD, sym: 'k', color: 'c-magenta' },
	{ type: M_RAT, sym: 'r', color: 'c-brown' },
	{ type: M_GRID_BUG, sym: 'x', color: 'c-magenta' },
	{ type: M_LICHEN, sym: 'F', color: 'c-bright-green' },
	{ type: M_ZOMBIE, sym: 'Z', color: 'c-brown' },
	{ type: M_NEWT, sym: ':', color: 'c-yellow' },
	{ type: M_SHOPKEEPER, sym: '@', color: 'c-white' }
];

// Generic type names
const T_MONSTERS = Symbol('monsters');
const T_PLAYER = Symbol('player');

// BUC status (blessed/uncursed/cursed)
const BUC_BLESSED = Symbol('blessed');
const BUC_UNCURSED = Symbol('uncursed');
const BUC_CURSED = Symbol('cursed');

// Directions
const NORTH = Symbol('north');
const EAST = Symbol('east');
const SOUTH = Symbol('south');
const WEST = Symbol('west');

function DungeonLevel(win) {
	const _self = this;
	const _win = win;
	var _margin_top = 1;
	var _num_doors = 0;
	var _num_rooms = 0;
	var _ymax, _xmax;
	var _map = [];
	var _layer = [];
	var _rooms = [
		{ type: RT_NORMAL, x_size: 8, y_size: 8, sx: 3, sy: 6,
		 	stairs: [ { type: S_STAIRS_UP, offset_y: 4, offset_x: 3, sym: '<' } ],
		 	doors: [ { type: S_DOOR, pos: NORTH, offset_x: 4  }, { type: S_DOOR, pos: SOUTH, offset_x: 2 }, 
					{ type: S_DOOR, pos: EAST, offset_y: 5, target: 'e-01' } ]
		},
		{ type: RT_NORMAL, x_size: 20, y_size: 7, sx: 20, sy: 13,
		 	doors: [ { type: S_DOOR, pos: NORTH, offset_x: 17, state: 'none', target: 'e-02'  }, 
					{ type: S_DOOR, pos: WEST, offset_y: 5  }, { type: S_DOOR, pos: EAST, offset_y: 2, target: 'e-03' } ]
		},
		{ type: RT_NORMAL, x_size: 10, y_size: 8, sx: 32, sy: 1,
		 	doors: [ { type: S_DOOR, pos: EAST, offset_y: 3, state: 'none' }, { type: S_DOOR, pos: WEST, offset_y: 5, name: 'e-01' },
					{ type: S_DOOR, pos: NORTH, offset_x: 2, state: 'none' } ]
		},
		{ type: RT_NORMAL, x_size: 20, y_size: 7, sx: 54, sy: 1,
		 	stairs: [ { type: S_STAIRS_DOWN, offset_y: 3, offset_x: 12, sym: '>' } ],
		 	doors: [ { type: S_DOOR, pos: WEST, offset_y: 4, name: 'e-02' }, { type: S_DOOR, pos: SOUTH, offset_x: 12 }],
		 	water: [ { type: S_FOUNTAIN }]
		},
		{ type: RT_NORMAL, x_size: 14, y_size: 9, sx: 50, sy: 10,
		 	doors: [ { type: S_DOOR, pos: NORTH, offset_x: 2  }, { type: S_DOOR, pos: EAST, offset_y: 3 },
					{ type: S_DOOR, pos: WEST, offset_y: 6, name: 'e-03' }]
		},
		{ type: RT_SHOP, x_size: 11, y_size: 6, sx: 16, sy: 1,
		 	doors: [ { type: S_DOOR, pos: WEST, offset_y: 2, state: 'closed' }],
		 	stock_type: [ OC_FOOD, OC_GEM, OC_POTION, OC_SCROLL, OC_WAND, OC_WEAPON, OC_TOOL ]
		}
	];
	var _player = { gentype: T_PLAYER, name: 'Kazuhiro', sym: '@', y: 0, x: 0, color: 'cursor',
				   wallet: null,
				   inv_slot: {}
				  };
	var _monsters = [];
	var _objects = [];
	var _queued_msg = [];
	var _queued_text = [];
	
	function init() {
		for (let y = 0; y < NLINES - 3; y++) { // 21 lines
			_map[y] = [];
			for (let x = 0; x < NCOLS; x++) {
				_map[y][x] = { base: ' ', o_list: [] };
			}
		}
		_ymax = _map.length;
		_xmax = _map[0].length;
		initAppearances();
	}
	
	this.display = function(force) {
		if (force === undefined) {
			force = false;
		}
		for (let y = 0; y < _ymax; y++) {
			let row = _map[y];
			for (let x = 0; x < _xmax; x++) {
				let o = null;
				if (row[x].base !== ' ' || force) {
					o = row[x]
				}
				if (!o || typeof o !== 'object') {
					continue;
				}
				let color = null;
				let sym = ' ';
				if (o.o_list.length > 0) {
					let top = o.o_list[o.o_list.length - 1];
					sym = top.sym;
					color = getColorOf(o.o_list);
					if (!color) {
						color = 'c-white';
					}
				} else {
					sym = o.base;
				}
				_win.move(y + _margin_top, x);
				if (color) {
					_win.attron(color);
				}
				_win.addch(sym);
				if (color) {
					_win.attroff(color);
				}
			}
		}
		_win.refresh();
	};
	
	// s: Symbol("foo"), returns the description: foo.
	function getSymbolName(s) {
		return s.toString().slice(7, -1);
	}
	
	function getColorOf(o_list) {
		var color = null;
		for (let i = 0, len = o_list.length; i < len; i++) {
			let o = o_list[i];
			if (o.hasOwnProperty('color')) {
				color = o.color;
			} else {
				color = null;
			}
		}
		return color;
	}
	
	this.makeRooms = function() {
		for (let i = 0, len = _rooms.length; i < len; i++) {
			let r = _rooms[i];
			r.id = ++_num_rooms;
			if (r.hasOwnProperty('doors')) {
				setDoorPosition(r);
			}
			drawRoom(r);
		}
		makePassages();
	};
	
	function drawRoom(r) {
		var y_top = r.sy;
		var y_bottom = r.sy + r.y_size - 1;
		var x_left = r.sx;
		var x_right = r.sx + r.x_size - 1;
		var x, y;
		
		for (x = x_left; x <= x_right; x++) {
			_map[y_top][x].base = '-';
			_map[y_bottom][x].base = '-';
		}
		for (y = y_top + 1; y < y_bottom; y++) {
			let row = _map[y];
			row[x_left].base = '|';
			row[x_right].base = '|';
			for (x = x_left + 1; x < x_right; x++) {
				row[x].base = '.';		// floor
			}
		}

		var props = [ 'doors', 'stairs', 'water' ];
		for (let i = 0, len = props.length; i < len; i++) {
			let name = props[i];
			if (r.hasOwnProperty(name)) {
				placeSymbols(r, r[name]);
			}
		}
		if (r.type === RT_SHOP) {
			createShopItems(r);
		}
	}
	
	function placeSymbols(r, items) {
		for (let i = 0, len = items.length; i < len; i++) {
			putSymbol(r, items[i]);
		}
	}
	
	function getSymClass(cls_list, type) {
		for (let i = 0, len = cls_list.length; i < len; i++) {
			if (type === cls_list[i].type) {
				return cls_list[i];
			}
		}
		return null;
	}
	
	function createShopItems(r_shop) {
		var len = r_shop.stock_type.length;
		var x_len = r_shop.x_size - 2;
		var y_len = r_shop.y_size - 2;
		var floor_size = x_len * y_len;
		var idx, x, y, dx, dy;
		var [shop_y, shop_x] = getDoorCoord(r_shop, r_shop.doors[0]);
		var door_pos = r_shop.doors[0].pos;
		
		for (let i = 0; i < floor_size; i++) {
			dx = i % x_len;
			dy = Math.floor(i / x_len);
			x = r_shop.sx + dx + 1;
			y = r_shop.sy + dy + 1;
			// do not put items in order to leave space for aisle
			if (door_pos === NORTH || door_pos === SOUTH) {
				if (Math.abs(y - shop_y) === 1) {
					continue;
				}
			} else if (door_pos === EAST || door_pos === WEST) {
				if (Math.abs(x - shop_x) === 1) {
					continue;
				}
			}
			if (Math.random() < 0.15) {
				continue;
			}
			idx = getRandomInt(0, len);
			let o = newObj(obj_class, r_shop.stock_type[idx]);
			if (o) {
				[o.y, o.x] = [y, x];
				o.for_sale = true;
				_map[y][x].o_list.push(o);
				_objects.push(o);
			}
		}
	}
	
	function putSymbol(r, o) {
		var y, x;
		var dy, dx;
		
		if (o.hasOwnProperty('offset_y')) {
			dy = o.offset_y;
		} else {
			dy = getRandomInt(1, r.y_size - 1);
		}
		if (o.hasOwnProperty('offset_x')) {
			dx = o.offset_x;
		} else {
			dx = getRandomInt(1, r.x_size - 1);
		}
		y = r.sy + dy;
		x = r.sx + dx;
		
		let tmp = newObj(sym_class, o.type);
		if (!tmp) {
			return;
		}
		if (tmp.type === S_DOOR) {
			tmp.sym = o.sym;
		}
		tmp.stationary = true;
		_map[y][x].o_list.push(tmp);
	}
	
	function newObj(cls_list, type, spec) {
		var cls = getSymClass(cls_list, type);
		if (!cls) {
			return null;
		}
		var o = {};
		o.type = cls.type;
		o.sym = cls.sym;
		if (cls_list === obj_class) {
			if (spec === undefined) {
				spec = CN_ANY;
			}
			let match = [];
			o.cname = getCName(cls, spec, match);
			let ci = match[0];	// class item
			o.cname_type = ci.cname;
			if (ci.hasOwnProperty('appearance')) {
				o.appearance = ci.appearance;
			}
			if (ci.hasOwnProperty('container')) {
				o.container = [];
			}
			o.qty = 1;
			if (ci.hasOwnProperty('qty')) {
				o.qty = pickNumber(ci.qty);
			}
			if (ci.hasOwnProperty('charge')) {
				o.charge = pickNumber(ci.charge);
			}
			o.known_level = 0;
			o.buc_status = (o.type === OC_GOLD)? BUC_UNCURSED: pickBUC(true);
		}
		if (cls.hasOwnProperty('color')) {
			if (cls.color === 'any') {
				let idx = getRandomInt(0, color_set.length);
				o.color = 'c-' + color_set[idx];
			} else {
				o.color = cls.color;
			}
		}
		return o;
	}
	
	function getCName(cls, spec, match) {
		if (match === undefined) {
			match = [];
		}
		match[0] = {};
		var cname = 'something';
		if (!cls.hasOwnProperty('item') || cls.item.length === 0) {
			return cname;
		}
		if (spec === CN_ANY) {
			let idx = getRandomInt(0, cls.item.length);
			cname = getSymbolName(cls.item[idx].cname);
			match[0] = cls.item[idx];
		} else {
			for (let i = 0, len = cls.item.length; i < len; i++) {
				if (spec === cls.item[i].cname) {
					cname = getSymbolName(spec);
					match[0] = cls.item[i];
					break;
				}
			}
		}
		return cname;
	}
	
	function initAppearances() {
		for (let i = 0, len = obj_class.length; i < len; i++) {
			let cls = obj_class[i];
			let t = getSymbolName(cls.type);
			if (!obj_appearances.hasOwnProperty(t)) {
				continue;
			}
			let a_list = obj_appearances[t];
			shuffle(a_list);
			for (let k = 0, num = cls.item.length; k < num; k++) {
				let ci = cls.item[k];
				ci.appearance = a_list[k % a_list.length];
			}
		}
	}
	
	this.createObjects = function(count) {
		var len = obj_class.length;
		if (count === undefined) {
			count = getRandomInt(5, 16);
		}
		while (count) {
			let idx = getRandomInt(0, len);
			let type = obj_class[idx].type;
			let o = newObj(obj_class, type);
			xxplaceObject(o);
			_objects.push(o);
			count--;
		}
		setKnownDefault();
	};
	
	function xxplaceObject(o) {
		var n = _rooms.length;
		var idx, pos, dx, dy;
		var x, y;
		var x_len, y_len;
		do {
			idx = getRandomInt(0, n);
		} while (_rooms[idx].type === RT_SHOP);
		
		var r = _rooms[idx];
		x_len = r.x_size - 2;
		y_len = r.y_size - 2;
		var floor_size = x_len * y_len;
		
		do {
			pos = getRandomInt(0, floor_size);
			dx = pos % x_len;
			dy = Math.floor(pos / x_len);
			x = r.sx + dx + 1;
			y = r.sy + dy + 1;
		} while (occupied(y, x) || !isFloor(y, x));
		
		[o.y, o.x] = [y, x];
		_map[y][x].o_list.push(o);
	}

	function occupied(y, x) {
		var o = objAt(y, x);
		if (o && o.hasOwnProperty('gentype')) {
			if (o.gentype === T_MONSTERS || o.gentype === T_PLAYER) {
				return o;
			}
		}
		return null;
	}
	
	function isFloor(y, x) {
		var o_list = _map[y][x].o_list;
		if (o_list.length > 0) {
			let o = o_list[0];
			if (o.hasOwnProperty('stationary')) {
				return false;
			}
		}
		return _map[y][x].base === '.';
	}
	
	function removeObject(o) {
		for (let i = _objects.length - 1; i >= 0; i--) {
			let otmp = _objects[i];
			if (o === otmp) {
				_objects.splice(i, 1);
				[o.y, o.x] = [0, 0];
				return true;
			}
		}
		return false;
	}
	
	function newMonster(type) {
		var mon = newObj(monst_class, type);
		if (!mon) {
			return null;
		}
		mon.gentype = T_MONSTERS;
		mon.tame = false;
		mon.y = 0;
		mon.x = 0;
		return mon;
	}
	
	this.createPets = function(count) {
		while (count) {
			let pet = newMonster(M_LITTLE_DOG);
			pet.tame = true;
			keepAround(pet);
			_monsters.push(pet);
			count--;
		}
	};
	
	function keepAround(pet) {
		var cx = _player.x;
		var cy = _player.y;
		var x, y;
		var places = [];
		for (let d = 1; d < 4; d++) {
			// top
			y = cy - d;
			for (x = cx - d; x < cx + d; x++) {
				if (canMove(y, x)) {
					places.push([x, y]);
				}
			}
			// right
			x = cx + d;
			for (y = cy - d; y < cy + d; y++) {
				if (canMove(y, x)) {
					places.push([x, y]);
				}
			}
			// bottom
			y = cy + d;
			for (x = cx + d; x > cx - d; x--) {
				if (canMove(y, x)) {
					places.push([x, y]);
				}
			}
			// left
			x = cx - d;
			for (y = cy + d; y > cy - d; y--) {
				if (canMove(y, x)) {
					places.push([x, y]);
				}
			}
			if (places.length > 0) {
				break;
			}
		}
		var idx = getRandomInt(0, places.length);
		var pos = places[idx];
		x = pos[0];
		y = pos[1];
		moveMonster(pet, y, x);
	}
	
	this.createMonsters = function(count) {
		var len = monst_class.length;
		if (count === undefined) {
			count = getRandomInt(5, 16);
		}
		while (count) {
			let idx = getRandomInt(0, len);
			let type = monst_class[idx].type;
			if (type === M_SHOPKEEPER || type === M_LITTLE_DOG) {
				continue;
			}
			let mon = newMonster(type);
			populate(mon);
			_monsters.push(mon);
			count--;
		}
	}
	
	function populate(mon) {
		var n = _rooms.length;
		var idx, pos, dx, dy;
		var x_len, y_len;
		var x, y;
		do {
			idx = getRandomInt(0, n);
		} while (_rooms[idx].type === RT_SHOP);
		
		var r = _rooms[idx];
		x_len = r.x_size - 2;
		y_len = r.y_size - 2;
		var floor_size = x_len * y_len;
		do {
			pos = getRandomInt(0, floor_size);
			dx = pos % x_len;
			dy = Math.floor(pos / x_len);
			x = r.sx + dx + 1;
			y = r.sy + dy + 1;
		} while (!canMove(y, x));
		
		moveMonster(mon, y, x);
	}
	
	function setDoorPosition(r) {
		var doors = r.doors;
		
		for (let i = 0, len = doors.length; i < len; i++) {
			let d = doors[i];
			d.id = ++_num_doors;
			switch (d.pos) {
				case NORTH:
					d.offset_y = 0;
					break;
				case EAST:
					d.offset_x = r.x_size - 1;
					break;
				case SOUTH:
					d.offset_y = r.y_size - 1;
					break;
				case WEST:
					d.offset_x = 0;
					break;
			}
			setDoorSymbol(d);
		}
	}
	
	function setDoorSymbol(d) {
		if (d.hasOwnProperty('state')) {
			switch (d.state) {
				case 'closed':
					d.sym = '+';
					break;
				case 'none':
					d.sym = '.';
					break;
			}
			return;
		}
		switch (d.pos) {
			case NORTH:
			case SOUTH:
				d.sym = '|';
				break;
			case EAST:
			case WEST:
				d.sym = '-';
				break;
		}
	}
	
	function makePassages() {
		for (let i = 0, len = _rooms.length; i < len; i++) {
			let r = _rooms[i];
			if (r.hasOwnProperty('doors')) {
				digTunnels(r);
			}
		}
		fixTunnels();
	}
	
	function fixTunnels() {
		var count;
		for (let y = 0; y < _ymax; y++) {
			let row = _map[y];
			for (let x = 0; x < _xmax; x++) {
				if (typeof row[x].base === 'number') {
					row[x].base = '#';
				}
			}
		}
		do {
			count = trimTunnelEdges();
		} while (count > 0);
	}
	
	function trimTunnelEdges() {
		var count = 0;
		for (let y = 0; y < _ymax; y++) {
			let row = _map[y];
			for (let x = 0; x < _xmax; x++) {
				if (row[x].base === '#' && isEdge(y, x)) {
					row[x].base = ' ';
					count++;
				}
			}
		}
		return count;
	}
	
	function isEdge(cy, cx) {
		var count = 0;
		for (let y = cy - 1; y <= cy + 1; y++) {
			for (let x = cx - 1; x <= cx + 1; x++) {
				if (!isValidRange(y, x)) {
					continue;
				}
				if (_map[y][x].base === ' ') {
					count++;
					if (count >= 7) {
						return true;
					}
				}
			}
		}
		if (count === 6) {
			if (_map[cy - 1][cx - 1].base === '#' || _map[cy - 1][cx + 1].base === '#'
			   || _map[cy + 1][cx - 1].base === '#' || _map[cy + 1][cx + 1].base === '#') {
				return true;
			}
		}
		return false;
	}
	
	function digTunnels(r) {
		var doors = r.doors;

		for (let i = 0, len = doors.length; i < len; i++) {
			let d = doors[i];
			let sx, sy, x, y;
			let dir;
			if (d.hasOwnProperty('target')) {
				digTunnelsTarget(r);
				continue;
			}
			switch (d.pos) {
				case NORTH:
					sx = r.sx + d.offset_x;
					sy = r.sy - 1;
					x = sx;
					y = sy - 1;
					dir = 'N';
					break;
				case SOUTH:
					sx = r.sx + d.offset_x;
					sy = r.sy + r.y_size;
					x = sx;
					y = sy + 1;
					dir = 'S';
					break;
				case EAST:
					sx = r.sx + r.x_size;
					sy = r.sy + d.offset_y;
					x = sx + 1;
					y = sy;
					dir = 'E';
					break;
				case WEST:
					sx = r.sx - 1;
					sy = r.sy + d.offset_y;
					x = sx - 1;
					y = sy;
					dir = 'W';
					break;
			}
			_map[sy][sx].base = r.id;
			if (foundPath(r.id, sy, sx)) {
				continue;
			}
			if (isValidRange(y, x)) {
				digThrough(y, x, r.id, dir);
			}
		}
	}
	
	function digThrough(start_y, start_x, id, dir) {
		var [y, x] = [start_y, start_x];
		do {
			_map[y][x].base = id;
			if (foundPath(id, y, x)) {
				break;
			}
			switch (dir) {
				case 'N':
					y--;
					break;
				case 'E':
					x++;
					break;
				case 'S':
					y++;
					break;
				case 'W':
					x--;
					break;
			}
		} while (canDig(y, x));
	}
	
	function isValidRange(y, x) {
		var in_range = ((y >= 0 && y < _ymax) && (x >= 0 && x < _xmax));
		return in_range;
	}
	
	function canDig(y, x) {
		if ((x <= 0 || x >= _xmax - 1) || (y <= 0 || y >= _ymax - 1)) {
			return false;
		}
		var ch = _map[y][x].base;
		switch (ch) {
			case '|':
			case '-':
			case '+':
			case '.':
				return false;
		}
		return true;
	}
	
	function foundPath(id, y, x) {
		if (isConnectedPath(id, y - 1, x) || isConnectedPath(id, y, x + 1)
		   || isConnectedPath(id, y + 1, x) || isConnectedPath(id, y, x - 1)) {
			return true;
		}
		return false;
	}
	
	function isConnectedPath(id, y, x) {
		if (!isValidRange(y, x)) {
			return false;
		}
		var ch = _map[y][x].base;
		var r;
		if (ch === '#') {
			return true;
		}
		switch (ch) {
			case '+':
			case '-':
			case '|':
				r = getRoom(y, x);
				if (r && r.id !== id && isDoor(r, y, x)) {
					return true;
				}
				break;
		}
		if (typeof ch === 'number') {
			if (ch !== id) {
				return true;
			}
		}
		return false;
	}
	
	function getRoom(y, x) {
		for (let i = 0, len = _rooms.length; i < len; i++) {
			let r = _rooms[i];
			if ((y >= r.sy && y < r.sy + r.y_size)
			   && (x >= r.sx && x < r.sx + r.x_size)) {
				return r;
			}
		}
		return null;
	}
	
	function isDoor(r, y, x) {
		var doors = r.doors;
		for (let i = 0, len = doors.length; i < len; i++) {
			let d = doors[i];
			if ((y === r.sy + d.offset_y) && (x === r.sx + d.offset_x)) {
				return true;
			}
		}
		return false;
	}
	
	function digTunnelsTarget(r) {
		var doors = r.doors;
		for (let i = 0, len = doors.length; i < len; i++) {
			let d = doors[i];
			if (d.hasOwnProperty('target')) {
				let [y, x] = getDoorCoord(r, d);
				let [ey, ex] = getDoorCoordByName(d.target);
				digTo(d.pos, r.id, y, x, ey, ex);
			}
		}
	}
	
	function getDoorCoord(r, d) {
		let y = r.sy + d.offset_y;
		let x = r.sx + d.offset_x;
		return [y, x];
	}
	
	function getDoorCoordByName(name) {
		for (let i = 0, len = _rooms.length; i < len; i++) {
			let r = _rooms[i];
			for (let k = r.doors.length - 1; k >= 0; k--) {
				let d = r.doors[k];
				if (d.hasOwnProperty('name') && d.name === name) {
					return getDoorCoord(r, d);
				}
			}
		}
		return [null, null];
	}
	
	function digTo(dir, id, sy, sx, ey, ex) {
		if (ex === sx) {
			return;
		}
		var a = (ey - sy) / (ex - sx);
		var x, y, oy;
		var x0, y0, dx;
		if (dir === EAST) {
			y = sy;
			x = sx + 1;
			_map[y][x].base = id;
			oy = y;
			dx = 1;
			x0 = sx + 2;
			y0 = sy;
			a = (ey - y0) / (ex - x0);
		} else if (dir === NORTH) {
			y = sy - 1;
			x = sx;
			_map[y][x].base = id;
			oy = y;
			dx = (sx < ex)? 1: -1;
			x0 = sx;
			y0 = sy - 1;
		} else {
			return;
		}
		for (x = x0; x != ex; x += dx) {			
			y = Math.round(a * (x - x0) + y0);
			if (!canDig(y, x)) {
				break;
			}
			_map[y][x].base = id;
			if (Math.abs(y - oy) > 0) {
				drawY(id, oy, y, x);
			}
			oy = y;
		}
	}
	
	function drawY(id, sy, ey, x) {
		if (sy < ey) {
			for (let y = sy; y <= ey; y++) {
				_map[y][x].base = id;
			}
		} else {
			for (let y = ey; y <= sy; y++) {
				_map[y][x].base = id;
			}
		}
	}
	
	function findRoom(type) {
		for (let i = 0, len = _rooms.length; i < len; i++) {
			if (_rooms[i].type === type) {
				return _rooms[i];
			}
		}
		return null;
	}
	
	this.putPlayer = function() {
		var r = _rooms[0];
		let [y, x] = getDoorCoord(r, r.doors[0]);
		movePlayer(y + 1, x, true);
	};
	
	function movePlayer(y, x, initial) {
		if (initial === undefined || !initial) {
			_map[_player.y][_player.x].o_list.pop();
		}
		_player.y = y;
		_player.x = x;
		_map[y][x].o_list.push(_player);
		_self.display();
	}
	
	function isInside(r, y, x) {
		if ((y > r.sy && y < r.sy + r.y_size - 1)
			&& (x > r.sx && x < r.sx + r.x_size - 1)) {
			return true;
		}
		return false;
	}
	
	function objAt(y, x) {
		let list = _map[y][x].o_list;
		if (list.length === 0) {
			return null;
		}
		return list[list.length - 1];
	}
	
	function canMove(y, x, who_is_there) {
		if ((x < 0 || x >= _xmax) || (y < 0 || y >= _ymax)) {
			return false;
		}
		if (_map[y][x].base === ' ') {
			return false;
		}
		var r = getRoom(y, x);
		if (r) {
			if (!isDoor(r, y, x) && !isInside(r, y, x)) {
				return false;
			}
		}
		var o = occupied(y, x);
		if (o) {
			if (who_is_there !== undefined) {
				who_is_there.gentype = o.gentype;
			}
			return false;
		}
		return true;
	}
	
	function moveMonster(mon, y, x) {
		_map[mon.y][mon.x].o_list.pop();
		mon.y = y;
		mon.x = x;
		_map[y][x].o_list.push(mon);
	}
	
	function swapPosition(a, b) {
		_map[a.y][a.x].o_list.pop();
		_map[b.y][b.x].o_list.pop();
		var [ty, tx] = [a.y, a.x];
		[a.y, a.x] = [b.y, b.x];
		[b.y, b.x] = [ty, tx];
		_map[a.y][a.x].o_list.push(a);
		_map[b.y][b.x].o_list.push(b);
	}
	
	this.putShopkeeper = function() {
		var shk = newMonster(M_SHOPKEEPER);
		var r = findRoom(RT_SHOP);
		var [shop_y, shop_x] = getDoorCoord(r, r.doors[0]);
		var door_pos = r.doors[0].pos;
		var x, y;
		switch (door_pos) {
			case NORTH:
				y = shop_y + 1;
				x = shop_x - 1;
				break;
			case EAST:
				y = shop_y + 1;
				x = shop_x - 1;
				break;
			case SOUTH:
				y = shop_y - 1;
				x = shop_x - 1;
				break;
			case WEST:
				y = shop_y + 1;
				x = shop_x + 1;
				break;
		}
		_monsters.push(shk);
		moveMonster(shk, y, x);
	};
	
	this.youMove = function(dir, hit_ok) {
		var y, x;
		var dx, dy;
		var result = false;
		if (hit_ok === undefined) {
			hit_ok = true;
		}
		switch (dir) {
			case 'h':
				[dy, dx] = [0, -1];
				break;
			case 'j':
				[dy, dx] = [1, 0];
				break;
			case 'k':
				[dy, dx] = [-1, 0];
				break;
			case 'l':
				[dy, dx] = [0, 1];
				break;
			case 'y':
				[dy, dx] = [-1, -1];
				break;
			case 'u':
				[dy, dx] = [-1, 1];
				break;
			case 'b':
				[dy, dx] = [1, -1];
				break;
			case 'n':
				[dy, dx] = [1, 1];
				break;
			default:
				return false;
		}
		y = _player.y + dy;
		x = _player.x + dx;
		var who = { gentype: null };
		if (canMove(y, x, who)) {
			let done = false;
			let flag = false;
			movePlayer(y, x);
			if (autopickup(y, x)) {
				done = true;
				flag = true;	// there were items picked up.
			}
			if (youSeeHere(y, x, flag)) {
				done = true;
			}
			if (done) {
				return false;
			}
			result = true;
		} else if (hit_ok && who.gentype === T_MONSTERS) {
			let m = objAt(y, x);
			if (m.tame) {
				swapPosition(_player, m);
			} else {
				hitMonster(m);
			}
		}
		this.display();
		return result;
	};
	
	// merge objects of the same type into one object
	function rehashObjects(y, x) {
		var o;
		var o_list = _map[y][x].o_list;
		for (let i = 0, len = o_list.length; i < len; i++) {
			o = o_list[i];
			if (o === _player || o.hasOwnProperty('stationary') || o.hasOwnProperty('for_sale')
				|| !canSumUp(o) || o.qty === 0) {
				continue;
			}
			for (let k = i + 1; k < len; k++) {
				let o2 = o_list[k];
				if (canSumUp(o2) && matchObj(o, o2)) {
					o.qty += o2.qty;
					o2.qty = 0;
					o2.cname = null;
				}
			}
		}
		for (let i = o_list.length - 1; i >= 0; i--) {
			o = o_list[i];
			if (!o.cname && o.qty === 0) {
				o_list.splice(i, 1);
				removeObject(o);
			}
		}
	}
	
	function countObjAt(y, x) {
		var count = 0;
		var o_list = _map[y][x].o_list;
		for (let i = 0, len = o_list.length; i < len; i++) {
			let o = o_list[i];
			if (o === _player || o.hasOwnProperty('stationary')) {
				continue;
			}
			count++;
		}
		return count;
	}
	
	function youSeeHere(y, x, flag) {
		var name, str;
		var o_list = _map[y][x].o_list;
		var count = countObjAt(y, x);
		if (!count) {
			return 0;
		}
		rehashObjects(y, x);
		count = countObjAt(y, x);
		if (count > 1) {
			if (count > 4) {
				let s = (count <= 10)? 'several': 'many';
				if (flag) {
					s = s + ' more';
				}
				str = 'There are ' + s + ' objects here.';
				if (_queued_msg.length > 0) {
					_queued_msg.push(str);
				} else {
					putLine(str);
					_self.display();
				}
				return count;
			}
			if (_queued_msg.length > 0) {
				_queued_msg.push('');	// hook to show a popup list
			}
			listThingsAt(y, x, flag);
			return count;
		}
		var o = objAt(y, x);
		if (o === _player) {
			o_list.pop();
			o = objAt(y, x);
			o_list.push(_player);
		}
		if (o.hasOwnProperty('stationary')) {
			return 0;
		}
		str = 'You see here ' + getObjName(o) + '.';
		if (_queued_msg.length > 0) {
			_queued_msg.push(str);
		} else {
			putLine(str);
		}
		return 1;
	}
	
	function autopickup(y, x) {
		var str;
		var n_picked = 0;
		var o_list = _map[y][x].o_list;
		const pickup_types = [ OC_GOLD, OC_SCROLL, OC_POTION ];

		_queued_msg = [];
		for (let i = o_list.length - 1; i >= 0; i--) {
			let o = o_list[i];
			if (o.hasOwnProperty('for_sale')) {
				continue;
			}
			if (pickup_types.includes(o.type)) {
				o_list.splice(i, 1);
				removeObject(o);
				n_picked++;
				addToInventory(o);
			}
		}
		return n_picked;
	}
	
	function pickup(y, x, target) {
		var o_list = _map[y][x].o_list;
		for (let i = o_list.length - 1; i >= 0; i--) {
			let o = o_list[i];
			let found = false;
			if (target !== undefined) {
				if (o === target) {
					found = true;
				}
			} else if (o !== _player && !o.hasOwnProperty('stationary')) { // pick any
				found = true;
			}
			if (found) {
				o_list.splice(i, 1);
				removeObject(o);
				addToInventory(o);
				return o;
			}
		}
		return null;
	}
	
	function addToInventory(o) {
		var str;
		if (o.type === OC_GOLD) {
			pickupGold(o);
			str = '$ - ' + getDescriptiveName(o) + '.';
		} else {
			let key = getInventorySlot(o);
			let otmp = _player.inv_slot[key];
			if (otmp) {
				otmp.qty += o.qty;
			} else {
				_player.inv_slot[key] = o;
				o.inv = true;
				o.key = key;
			}
			str = key + ' - ' + getObjName(o) + '.';
		}
		_queued_msg.push(str);
	}
	
	function pickupGold(o) {
		let otmp = _player.wallet;
		if (otmp) {
			otmp.qty += o.qty;
		} else {
			_player.wallet = o;
			o.inv = true;
			o.key = '$';
		}
	}
	
	function moreMessages(key)
	{
		if (_kbd_input.state === 1) {
			eraseMenu();
		}
		if (_queued_msg.length === 1 && !_queued_msg[0].length) { // hook to show a popup list
			_queued_msg.shift();
			if (_queued_text.length) {
				popupText(_queued_text, '--More--');
				_kbd_input.state = 1;
				return true;
			}
		}
		if (this.flushMessages()) {
			return true;
		}
		return false;
	};
	
	var _item_slot = [];
	var _item_menu_tab = [];	// array[page#][y] = { slot#, key }
	
	function createItemSlot(o_list) {
		_item_slot = [];
		_item_menu_tab = [];
		var idx = 0;
		if (o_list === undefined) { // create from inventory
			if (_player.wallet) {
				_item_slot[idx++] = { page: 0, key: '$', obj: _player.wallet, selected: false};
			}
			for (let key in _player.inv_slot) {
				let o = _player.inv_slot[key];
				if (o) {
					_item_slot[idx] = { page: 0, key: key, obj: o, selected: false};
					idx++;
				}
			}
			console.log('## item_slot');
			console.dir(_item_slot);
			return;
		}
		for (let i = 0, len = o_list.length; i < len; i++) {
			let o = o_list[i];
			if (o === _player || o.hasOwnProperty('stationary')) {
				continue;
			}
			_item_slot[idx] = { page: 0, key: null, obj: o, selected: false};
			idx++;
		}
		console.dir(_item_slot);
	}
	
	function getItemSlot(page, key) {
		for (let i = 0, len = _item_slot.length; i < len; i++) {
			let slot = _item_slot[i];
			if (slot.page === page && slot.key === key) {
				return slot;
			}
		}
		return null;
	}
	
	function getSelectedObjects() {
		var o_list = [];
		for (let i = 0, len = _item_slot.length; i < len; i++) {
			let slot = _item_slot[i];
			if (slot.selected) {
				o_list.push(slot.obj);
			}
		}
		return (o_list.length > 0)? o_list: null;
	}
	
	function menu_end_proc(callback, data) {
		let cart = getSelectedObjects();
		if (cart) {
			_queued_msg = [];
			callback(cart, data);
			_post_message = true;
		}
		_item_menu_tab = [];
		_item_slot = [];
	}
	
	// page command
	const MENU_FIRST_PAGE = Symbol('first page');
	const MENU_NEXT_PAGE = Symbol('next page');
	const MENU_SELECT_ITEM = Symbol('select item');
	
	function menu_show_page(cmd, md, key) {
		if (cmd === MENU_FIRST_PAGE) {
			_menu_page = 1;
			if (!showPickupMenu(md)) {
				_kbd_input.data = _menu_page; // save last page number
				_menu_page = 0;
			}
			_kbd_input.state = (_menu_page > 0)? 1: 2;
			_kbd_input.setFilter(/[$a-zA-Z]/);
			_kbd_input.setFilter([' ', 'Escape', 'Enter']);
		} else if (cmd === MENU_NEXT_PAGE && _menu_page > 0) {
			if (!showPickupMenu(md)) {
				_kbd_input.data = _menu_page;
				_menu_page = 0;
				_kbd_input.state = 2;
			}
		} else if (cmd === MENU_SELECT_ITEM) {
			let cur_page = (_menu_page > 1)? (_menu_page - 1): _kbd_input.data;
			let slot = getItemSlot(cur_page, key);
			if (!slot) {
				return false;
			}
			if (has(md.multi_select) && !md.multi_select) {
				slot.selected = true;
			} else {
				slot.selected = !slot.selected;
				let save = _menu_page;
				_menu_page = cur_page;
				showPickupMenu(md);
				_menu_page = save;
			}
		}
		return true;
	}
	
	function pickup_done(cart, data) {
		var [y, x] = [data.y, data.x];
		for (let i = 0, len = cart.length; i < len; i++) {
			let o = cart[i];
			pickup(y, x, o);
		}
	}
	
	this.doPickup = function(key) {
		var o;
		var [y, x] = [ _player.y, _player.x ];
		var exit_cmd = ((_kbd_input.state > 0 && (key === 'Escape' || key === 'Enter') )
						|| (_kbd_input.state === 2 && key === ' '));
		if (exit_cmd) {
			eraseMenu();
			if (key === ' ' || key === 'Enter') {
				menu_end_proc(pickup_done, { y: y, x: x });
			}
			return false;
		}
		const md = {
			title: 'Pick up what?',
			fixed_key: false
		};
		if (_kbd_input.state === 0) {
			rehashObjects(y, x);
			var count = countObjAt(y, x);
			if (!count) {
				putLine('There is nothing here to pick up.');
				return false;
			}
			if (count > 1) {
				_kbd_input.start(this.doPickup);
				createItemSlot(_map[y][x].o_list);
				menu_show_page(MENU_FIRST_PAGE, md);
				return true;
			}
		} else if (_kbd_input.state > 0) {
			if (key === ' ') {
				menu_show_page(MENU_NEXT_PAGE, md);
			} else {
				menu_show_page(MENU_SELECT_ITEM, md, key);
			}
			return true;
		}
		_queued_msg = [];
		o = pickup(y, x);
		if (!o) {
			putLine('There is nothing here to pick up.');
		}
		return false;
	};
	
	function setSlotPage(page, y, line) {
		var found = line.match(/(^[$a-zA-Z]+) (\+|-) /);
		if (found) {
			let key = found[1];
			for (let i = 0, len = _item_slot.length; i < len; i++) {
				let slot = _item_slot[i];
				if (key === slot.key) {
					slot.page = page;
					break;
				}
			}
		}
		return line;
	}
	
	// line (initial format): slot# - object name
	function setKeyLetter(page, y, line) {
		if (_item_menu_tab[page] === undefined) {
			_item_menu_tab[page] = [];
		}
		var arr =  _item_menu_tab[page];
		var found = line.match(/(^[0-9]+) (\+|-) /);
		if (found) {
			let idx = +found[1];
			let slot = _item_slot[idx];
			let o = slot.obj;
			let nextkey;
			if (o.type === OC_GOLD) {
				nextkey = '$';
			} else {
				nextkey = 'a';
				for (let i = arr.length - 1; i >= 0; i--) {
					let tmp = arr[i];
					if (tmp !== undefined && tmp.key !== '$') {
						let c = tmp.key.charCodeAt(0);
						nextkey = String.fromCharCode(c + 1);
						break;
					}
				}
			}
			let e = { slot: idx, key: nextkey };
			_item_menu_tab[page][y] = e;
			line = line.replace(/^[0-9]+/, e.key);
			slot.page = page;
			slot.key = e.key;
		}
		return line;
	}
	
	function showPickupMenu(md) {
		var menu_lines = [];
		var key_func = setKeyLetter;
		if (has(md.fixed_key) && md.fixed_key) {
			key_func = setSlotPage; // XXX: undefined;
		}
		if (_menu_page > 1) {
			eraseMenu();
		}
		_self.deleteLines();
		if (has(md.title)) {
			menu_lines.push(md.title);
			menu_lines.push('');
		}
		for (let i = 0, len = obj_class.length; i < len; i++) {
			let cls = obj_class[i];
			addPickupMenu(menu_lines, cls, md.filter);
		}
		console.dir(menu_lines);
		_player.color = null; // player's cursor off
		_self.display();
		if (showItemList(menu_lines, _menu_page, null, key_func)) {
			_menu_page++;
			return true;
		}
		return false;
	}
	
	function addPickupMenu(lines, cls, filter) {
		var header = true;
		var count = 0;
		var filter_enabled = (has(filter) && _browse_filter);
		if (cls.group === 'Gems/Stones') {
			if (lines.includes('<h>' + cls.group)) {
				header = false;
			}
		}
		if (header) {
			lines.push('<h>' + cls.group);
		}
		for (let i = 0, len = _item_slot.length; i < len; i++) {
			let slot = _item_slot[i];
			let o = slot.obj;
			if (o && o.type === cls.type) {
				if (!filter_enabled || filter(o)) {
					let key = (slot.key === null)? +i: slot.key;
					let sgn = slot.selected? '+': '-';
					lines.push(key + ' ' + sgn + ' ' + getObjName(o));
					count++;
				}
			}
		}
		if (header && !count) {
			lines.pop();	// remove header
		}
	}
	
	function isReadable(o) {
		return (o.type === OC_SCROLL || o.type === OC_SPELLBOOK);
	}
	
	function countInventory(check_func) {
		var count = 0;
		for (let key in _player.inv_slot) {
			let o = _player.inv_slot[key];
			if (o && check_func(o)) {
				count++;
			}
		}
		return count;
	}
	
	function read_done(cart, data) {
		let o = cart[0];	// multi-select not allowed
		read_it(o);
	}
	
	function read_it(o) {
		var key = o.key;
		console.log('### read_it')
		if (isReadable(o)) {
			_queued_msg = [];
			if (o.type === OC_SCROLL) {
				_queued_msg.push('As you read the scroll, it disappears.');
				_post_message = true;
				_player.inv_slot[o.key] = null;
				o.inv = false;
				scroll_effect(o);
			} else {
				putLine('<<< read object: ' + o.cname);
			}
		} else {
			putLine('That is a silly thing to read.');
		}
	}
	
	this.doRead = function(key) {
		var selected = [];
		var count = countInventory(isReadable);
		if (!count) {
			putLine("You don't have anything to read.");
			return false;
		}
		const md = {
			// title: '',
			fixed_key: true,
			multi_select: false,
			filter: isReadable,
			callback: read_done
		};
		if (browseInventory(key, this.doRead, 'What do you want to read?', selected, md)) {
			return true;
		}
		if (_browse_status < 0) {
			return false;
		}
		let o = selected[0];
		read_it(o);
		return false;
	};
	
	function scroll_effect(o) {
		switch (o.cname_type) {
			case CN_SCROLL_GOLD_DETECTION:
				break;
			case CN_SCROLL_IDENTIFY:
				_queued_msg.push('This is an identify scroll.');
				_queued_msg.push('');
				_queued_text = [];
				_kbd_input_chain.push(identify);
				break;
			default:
				break;
		}
	}
	
	function identify_done(cart, data) {
		for (let i = 0, len = cart.length; i < len; i++) {
			let o = cart[i];
			o.known_level++;
			if (o.known_level === 1) {
				o.known_level = 2;
			}
			let str = o.key + ' - ' + getDescriptiveName(o) + '.';
			_queued_msg.push(str);
			
		}
	}
	
	function identify(key) {
		console.log('### identify: key=' + key + ' state=' + _kbd_input.state);
		var exit_cmd = ((_kbd_input.state > 0 && (key === 'Escape' || key === 'Enter') )
						|| (_kbd_input.state === 2 && key === ' '));
		if (exit_cmd) {
			eraseMenu();
			if (key === ' ' || key === 'Enter') {
				menu_end_proc(identify_done);
			}
			return false;
		}
		const md = {
			title: 'What would you like to identify first?',
			fixed_key: true
		};
		if (_kbd_input.state === 0) {
			_kbd_input.start(identify);
			createItemSlot();
			menu_show_page(MENU_FIRST_PAGE, md);
			return true;
		} else if (_kbd_input.state > 0) {
			if (key === ' ') {
				menu_show_page(MENU_NEXT_PAGE, md);
			} else {
				menu_show_page(MENU_SELECT_ITEM, md, key);
			}
			return true;
		}
		return false;
	}
	
	function isDrinkable(o) {
		return (o.type === OC_POTION);
	}
	
	function drink_done(cart, data) {
		let o = cart[0];	// multi-select not allowed
		drink_it(o);
	}
	
	function drink_it(o) {
		console.log('### drink_it');
		var key = o.key;
	}
	
	this.doDrink = function(key) {
		var selected = [];
		var count = countInventory(isDrinkable);
		if (!count) {
			putLine("You don't have anything to drink.");
			return false;
		}
		const md = {
			// title: '',
			fixed_key: true,
			multi_select: false,
			filter: isDrinkable,
			callback: drink_done
		};
		if (browseInventory(key, this.doDrink, 'What do you want to drink?', selected, md)) {
			return true;
		}
		if (_browse_status < 0) {
			return false;
		}
		let o = selected[0];
		drink_it(o);
		return false;
	};
	
	// zap a wand
	function isWand(o) {
		return (o.type === OC_WAND);
	}
	
	function zap_done(cart, data) {
		let o = cart[0];	// multi-select not allowed
		zap_it(o);
	}
	
	function zap_it(o) {
		console.log('### zap_it');
		var key = o.key;
	}
	
	this.doZap = function(key) {
		var selected = [];
		var count = countInventory(isWand);
		if (!count) {
			putLine("You don't have anything to zap.");
			return false;
		}
		const md = {
			// title: '',
			fixed_key: true,
			multi_select: false,
			filter: isWand,
			callback: zap_done
		};
		if (browseInventory(key, this.doZap, 'What do you want to zap?', selected, md)) {
			return true;
		}
		if (_browse_status < 0) {
			return false;
		}
		let o = selected[0];
		zap_it(o);
		return false;
	};
	
	// eat something
	function isEdible(o) {
		return (o.type === OC_FOOD);
	}
	
	function eat_done(cart, data) {
		let o = cart[0];	// multi-select not allowed
		eat_it(o);
	}
	
	function eat_it(o) {
		var str = '';
		o.qty--;
		if (!o.qty) {
			_player.inv_slot[o.key] = null;
			o.inv = false;
		}
		let rotten = (getRandomInt(0,100) < 10);
		if (rotten) {
			str = 'Blecch!  Rotten food!';
			// Ugh.  Rotten egg.
		} else {
			if (o.cname_type === CN_GARLIC) {
				str = 'This clove of garlic is delicious!'
			} else {
				str = 'That food really hit the spot! You finish eating the food ration.';
			}
		}
		_queued_msg.push(str);
		_post_message = true;
	}
	
	this.doEat = function(key) {
		var selected = [];
		var count = countInventory(isEdible);
		if (!count) {
			putLine("You don't have anything to eat.");
			return false;
		}
		const md = {
			// title: '',
			fixed_key: true,
			multi_select: false,
			filter: isEdible,
			callback: eat_done
		};
		if (browseInventory(key, this.doEat, 'What do you want to eat?', selected, md)) {
			return true;
		}
		if (_browse_status < 0) {
			return false;
		}
		let o = selected[0];
		eat_it(o);
		return false;
	};
	
	
	this.flushMessages = function() {
		const prompt = '--More--';
		if (!_queued_msg.length) {
			return 0;
		}
		let max_len = NCOLS - prompt.length - 1; // prompt + a space for cursor
		let line = _queued_msg.shift();
		let cur_len = line.length;
		while (_queued_msg.length > 0) {
			let s = _queued_msg[0];
			// msg <space> msg <prompt>
			// If the last element is a null string, this is a hook to show a popup list.
			if ((cur_len + s.length + 1 > max_len) || (_queued_msg.length === 1 && !s.length)) {
				putLine(line + prompt);
				line = null;
				break;
			}
			line = line + ' ' + _queued_msg.shift();
			cur_len = line.length;
		}
		if (line) {
			putLine(line);
		}
		if (_queued_msg.length) {
			_kbd_input.start(moreMessages);
			_kbd_input.setFilter([' ', 'Escape']);
		}
		return _queued_msg.length;
	};
	
	function hitMonster(m) {
		var p = Math.random();
		const name = getSymbolName(m.type);
		if (p < 0.5) {
			putLine('You kill the ' + name + '!');
			killMonster(m);
		} else if (p < 0.8) {
			putLine('The ' + name +' bites!')
		} else {
			putLine('You miss the ' + name + '.');
		}
	}
	
	function killMonster(m) {
		_map[m.y][m.x].o_list.pop();
		for (let i = _monsters.length - 1; i >= 0; i--) {
			if (_monsters[i] === m) {
				_monsters.splice(i, 1);
				break;
			}
		}
	}
	
	this.printStatus = function(clr) {
		if (clr === undefined) {
			clr = false;
		}
		if (clr) {
			_win.move(22, 0);
			_win.clrtoeol();
			_win.move(23, 0);
			_win.clrtoeol();
		}
		_win.move(22, 0);
		_win.addstr(_player.name + ' the Tenderfoot');
		_win.move(22, 30);
		_win.addstr('St:14 Dx:10 Co:14 In:14 Wi:14 Ch:9 Chaotic');
		_win.move(23, 0);
		_win.addstr('Dlvl:4');
		_win.move(23, 9);
		_win.addstr('$:' + countMoney() + ' HP:13(16) Pw:8(8) AC:7 Xp:2 Satiated');
		_win.refresh();
	};
	
	function initInventorySlot() {
		const alpha = [ 'a'.charCodeAt(0), 'A'.charCodeAt(0) ];
		for (let k = 0; k < 2; k++) {
			let c = alpha[k];
			for (let i = 0; i < 26; i++) {
				let key = String.fromCharCode(c + i);
				_player.inv_slot[key] = null;
			}
		}
	}
	
	function allocInventorySlot() {
		const alpha = [ 'a'.charCodeAt(0), 'A'.charCodeAt(0) ];
		for (let k = 0; k < 2; k++) {
			let c = alpha[k];
			for (let i = 0; i < 26; i++) {
				let key = String.fromCharCode(c + i);
				if (!_player.inv_slot[key]) {
					return key;
				}
			}
		}
		return null;
	}
	
	function getInventorySlot(o) {
		var key;
		if (!canSumUp(o)) {
			return allocInventorySlot();
		}
		for (key in _player.inv_slot) {
			let otmp = _player.inv_slot[key];
			if (otmp && canSumUp(otmp) && matchObj(o, otmp)) {
				return key;
			}
		}
		return allocInventorySlot();
	}
	
	function pickNumber(range) {
		if (Array.isArray(range)) {
			return getRandomInt(range[0], +range[1] + 1);
		}
		return range;
	}
	
	function pickBUC(cursed_ok) {
		var n = getRandomInt(0, 20);
		if (n < 2) {
			return BUC_BLESSED;
		}
		if (n > 18 && cursed_ok) {
			return BUC_CURSED;
		}
		return BUC_UNCURSED;
	}
	
	function setKnownDefault() {
		for (let i = 0, len = _objects.length; i < len; i++) {
			let o = _objects[i];
			if (o.hasOwnProperty('for_sale') && o.for_sale) {
				continue;
			}
			o.known_level = 0;
			switch (o.type) {
				case OC_GOLD:
				case OC_WEAPON:
				case OC_ARMOR:
				case OC_FOOD:
				case OC_TOOL:
					o.known_level = 1;
					break;
			}
		}
	}
	
	function countMoney() {
		var o = _player.wallet;
		if (o && o.hasOwnProperty('qty')) {
			return o.qty;
		}
		return 0;
	}
	
	function makeGold(max_amount) {
		var o = newObj(obj_class, OC_GOLD, CN_GOLD);
		[o.y, o.x] = [0, 0];
		o.inv = true;
		o.key = '$';
		o.known_level = 1;
		o.qty = getRandomInt(0, max_amount + 1);
		return o;
	}
	
	this.createInventory = function() {
		const inv_items = [
			{ type: OC_AMULET, cname: CN_AMULET_ESP },
			{ type: OC_WEAPON, cname: CN_SHORT_SWORD, enchanted: 0, wielded: true },
			{ type: OC_WEAPON, cname: CN_DAGGER, qty: [5, 15], enchanted: 0, wielded: false },
			{ type: OC_ARMOR, cname: CN_LEATHER_ARMOR, enchanted: [0, 1], worn: true },
			{ type: OC_FOOD, cname: CN_FOOD_RATION, qty: [1, 3] },
			{ type: OC_FOOD, cname: CN_GARLIC, qty: [1, 3] },
			{ type: OC_SCROLL, cname: CN_SCROLL_GOLD_DETECTION },
			{ type: OC_SPELLBOOK, cname: CN_SPELL_EXTRA_HEALING },
			{ type: OC_POTION, cname: CN_POTION_SICKNESS },
			{ type: OC_RING, cname: CN_RING_COLD_RES, enchanted: 0 },
			{ type: OC_WAND, cname: CN_WAND_WISHING, charge: 3 },
			{ type: OC_TOOL, cname: CN_LOCK_PICK },
			{ type: OC_TOOL, cname: CN_SACK },
			{ type: OC_GEM, cname: CN_GEM_WORTHLESS, qty: [1, 3] },
			{ type: OC_ROCK, cname: CN_ROCK, qty: [1, 3] },
			{ type: OC_STONE, cname: CN_FLINT, qty: [1, 3] }
		];
		
		initInventorySlot();
		const c = 'a'.charCodeAt(0);
		for (let i = 0, len = inv_items.length; i < len; i++) {
			let inv = inv_items[i];
			let key = String.fromCharCode(c + i);
			let o = newObj(obj_class, inv.type, inv.cname);
			if (!o) {
				break;
			}
			[o.y, o.x] = [0, 0];
			o.inv = true;
			o.key = key;
			o.qty = 1;
			o.charge = 0;
			o.enchanted = 0;
			o.buc_status = pickBUC(false);
			o.known_level = 3;
			if (inv.hasOwnProperty('qty')) {
				o.qty = pickNumber(inv.qty);
			}
			if (inv.hasOwnProperty('charge')) {
				o.charge = pickNumber(inv.charge);
			}
			if (inv.hasOwnProperty('enchanted')) {
				o.enchanted = pickNumber(inv.enchanted);
			}
			if (inv.hasOwnProperty('wielded')) {
				o.wielded = inv.wielded;
			}
			if (inv.hasOwnProperty('worn')) {
				o.worn = inv.worn;
			}
			_player.inv_slot[key] = o;
		}
		_player.wallet = makeGold(50);
	};
	
	// Determine whether "a" or "an" should precede the string.
	function detArticle(str) {
		if (str.match(/^[aeio]/)) {
			return 'an';
		}
		if (str.match(/^uncursed/)) {
			return 'an';
		}
		return 'a';
	}
	
	function x_pluralize(str, count) {
		var result;
		if (str.match(/ of /)) { // something of sometype
			let s = str.replace(/ +of +.*$/, '');
			s = pluralize(s, count);
			let of_part = str.match(/ of +.*$/);
			result = s + of_part[0];
		} else {
			result = pluralize(str, count);
		}
		return result;
	}
	
	function getDescriptiveName(o) {
		var str, buc, s;
		var enchanted = '';
		if (o.hasOwnProperty('enchanted')) {
			enchanted = '+' + o.enchanted + ' ';
		}
		if (o.type === OC_GOLD) {
			str = pluralize(o.cname, o.qty);
		} else if (o.type === OC_POTION || o.type === OC_SCROLL || o.type === OC_SPELLBOOK) {
			s = getSymbolName(o.type);
			str = pluralize(s, o.qty) + ' of ' + o.cname;
		} else if (o.type === OC_FOOD) {
			str = x_pluralize(o.cname, o.qty);
		} else if (o.type === OC_WEAPON) {
			str = enchanted + pluralize(o.cname, o.qty);
			if (o.hasOwnProperty('wielded')) {
				if (o.wielded) {
					s = '(weapon in hand)';
				} else {
					s = '(alternate weapon; not wielded)';
				}
				str = str + ' ' + s;
			}
		} else if (o.type === OC_ARMOR) {
			str = enchanted + pluralize(o.cname, o.qty);
			if (o.hasOwnProperty('worn') && o.worn) {
				let s = '(being worn)';
				str = str + ' ' + s;
			}
		} else if (o.type === OC_WAND) {
			str = 'wand of ' + o.cname;
			if (o.hasOwnProperty('charge')) {
				s = '(0:' + o.charge + ')';
				str = str + ' ' + s;
			}
		} else if (o.type === OC_SPELLBOOK || o.type === OC_AMULET) {
			str = getSymbolName(o.type) + ' of ' + o.cname;
		} else if (o.type === OC_RING) {
			str = enchanted + getSymbolName(o.type) + ' of ' + o.cname;
		} else if (o.type === OC_GEM || o.type === OC_ROCK || o.type === OC_STONE) {
			str = x_pluralize(o.cname, o.qty);
		} else {
			str = x_pluralize(o.cname, o.qty);
		}
		
		if (o.known_level > 2) {
			let buc = false;
			if (o.buc_status === BUC_BLESSED || o.buc_status === BUC_CURSED) {
				buc = true;
			} else if (!o.hasOwnProperty('charge') || o.type === OC_ARMOR || o.type === OC_RING) {
				buc = true;
			}
			if (buc) {
				buc = getSymbolName(o.buc_status);
				str = buc + ' ' + str;
			}
		}
		if (o.hasOwnProperty('container') && o.container.length === 0){
			str = 'empty ' + str;
		}
		str = ((o.qty === 1)? detArticle(str): o.qty) + ' ' + str;
		return str;
	}
	
	function getObjName(o) {
		var str, s;
		if (o.type === OC_GOLD || o.known_level > 1) {
			return getDescriptiveName(o);
		}
		s = getSymbolName(o.type);
		if (o.type === OC_SCROLL) {
			str = pluralize(s, o.qty) + ' labeled ' + o.appearance;
		} else if (o.type === OC_WEAPON || o.type === OC_ARMOR || o.type === OC_TOOL || o.type === OC_FOOD) {
			str = pluralize(o.cname, o.qty);
		} else if (o.appearance) {
			str = o.appearance + ' ' + pluralize(s, o.qty);
		} else {
			str = pluralize(s, o.qty);
		}
		str = ((o.qty === 1)? detArticle(str): o.qty) + ' ' + str;
		return str;
	}
	
	function getListWidth(lines) {
		var max_width = 0;
		for (let i = 0, len = lines.length; i < len; i++) {
			let w = lines[i].length;
			if (w > max_width) {
				max_width = w;
			}
		}
		return max_width;
	}
	
	function showItemList(lines, page, end_prompt, callback) {
		var y, len;
		var x_pos, offset;
		var more, max_page;
		const lines_per_page = 8; // NLINES;	// XXX: DEBUG
		if (page === undefined) {
			page = 1;
			offset = 0;
		} else {
			offset = (page - 1) * (lines_per_page - 1);
		}
		if (end_prompt === undefined || end_prompt === null) {
			end_prompt = '(end)';
		}
		max_page = Math.ceil(lines.length / (lines_per_page - 1));
		
		let max_width = getListWidth(lines);
		x_pos = NCOLS - max_width - 2;
		for (y = 0, len = Math.min(lines.length - offset, lines_per_page - 1); y < len; y++) {
			_win.move(y, x_pos);
			_win.clrtoeol();
			let heading = false;
			let str = lines[y + offset];
			if (callback !== undefined) {
				str = callback.call(_self, page, y, str);
			}
			if (str.match(/^<h>/)) {
				str = str.replace(/^<h>/, '');
				heading = true;
			}
			_win.addch(' ');
			if (heading) {
				_win.attron('standout');
			}
			_win.addstr(str);
			if (heading) {
				_win.attroff('standout');
			}
		}
		_win.move(y, x_pos);
		_win.clrtoeol();
		if (y === lines.length) {
			_win.addstr(' ' + end_prompt);
			more = false;
		} else {
			_win.addstr(' (' + page + ' of ' + max_page + ') ');
			more = (page < max_page)? true: false;
		}
		_win.refresh();
		return more;
	}

	var _menu_page = 0;		// if > 0, next page number to be displayed
	var _kbd_input = new KeybdInput;
	var _kbd_input_chain = [];
	var _post_message = false;
	this.doCommand = function(key) {
		_post_message = false;
		_kbd_input.process(this, key);
		if (!_kbd_input.isActive()) {
			if (_post_message) {
				this.flushMessages();
			} else if (_kbd_input_chain.length > 0) {
				let f = _kbd_input_chain.shift();
				f.call(this, key);
			}
		}
	};
	
	function key_to_continue(key) {
		eraseMenu();
		return false;
	}

	this.inPrompt = function() {
		return _kbd_input.isActive();
	};
	
	function has(f) {
		return (f !== undefined && f !== null);
	}
	
	var _browse_status = 0;		// -1: quit
	var _browse_filter = false;
	var _browsing = false;
	function browse_end() {
		_browse_status = -1;
		_browse_filter = false;
		_browsing = false;
	}
	// returns - true: continue browsing, false: end (or quit) browsing
	function browseInventory(key, cmdfunc, prompt, selected, md) {
		console.log('### browseInventory: state=' + _kbd_input.state + ' key=' + key + ' browsing=' + _browsing);
		var letters = getInvLetters(md.filter);
		var sp_or_enter = (key === ' ' || key === 'Enter');
		var back_to_first = ((_kbd_input.state === 3 && sp_or_enter) 
							 || (_browsing && (_kbd_input.state > 0 && key === 'Enter')));
		var exit_cmd = ((_kbd_input.state > 0 && (key === 'Escape') )
						|| (_kbd_input.state === 2 && key === ' ')
					   || (!_browsing && (_kbd_input.state == 1 && sp_or_enter)) );
		
		_browse_status = 0;
		if (back_to_first) {
			console.log('### back_to_first');
			_browsing = false;
		}
		if (exit_cmd) {
			eraseMenu();
			putLine('Never mind.');
			browse_end();
			return false;
		}
		if (_browsing) {
			if (_kbd_input.state === 0) {
				console.log('### Check select 1');
			} else if (_kbd_input.state > 0) {
				if (key === ' ') {
					menu_show_page(MENU_NEXT_PAGE, md);
					if (_menu_page === 0) {
						_kbd_input.state = 3;
						_browsing = false;
					}
					return true;
				} else {
					if (!menu_show_page(MENU_SELECT_ITEM, md, key)) {
						return true;	// read next char
					}
				}
				eraseMenu();
				menu_end_proc(md.callback);
				browse_end();
				return false;
			}
		} else {
			if (_kbd_input.state === 0 || back_to_first) {
				if (back_to_first) {
					eraseMenu();
				}
				let range = getLetterRange(letters);
				if ((!has(md.filter) || (_player.wallet && md.filter(_player.wallet)) ) && countMoney() > 0) {
					range = '$' + range;
				}
				putLine(prompt + ' [' + range + ' or ?*] ');
				_kbd_input.start(cmdfunc);
				_kbd_input.state = 1;
				_kbd_input.clearFilter();
				return true;
			} else if (_kbd_input.state === 1) {
				if (key === '?' || key === '*') {
					_kbd_input.state = 0;
					_browsing = true;
					_browse_filter = false;
					if (key === '?' && has(md.filter)) {
						_browse_filter = true;
					}
					createItemSlot();
					menu_show_page(MENU_FIRST_PAGE, md);
					if (_menu_page === 0) {
						_kbd_input.state = 3;
						_browsing = false;
					}
					return true;
				}
			} else {
				console.log('### Check select 3');
				if (menu_show_page(MENU_SELECT_ITEM, md, key)) {
					eraseMenu();
					menu_end_proc(md.callback);
					browse_end();
					return false;
				}
				return true;	// read next char
			}
		} 
		
		let o = null;
		if (key === '$' && countMoney() > 0) {
			o = _player.wallet;
		} else {
			o = _player.inv_slot[key];
			if (!o) {
				putLine("You don't have that object.--More--");
				_kbd_input.state = 0;
				return true;
			}
		}
		if (o) {
			selected[0] = o;
		}
		return false;
	}
	
	function removeProps(o, props) {
		var arr = (Array.isArray(props))? props: [ props ];
		for (let i = 0, len = arr.length; i < len; i++) {
			let p = arr[i];
			if (o.hasOwnProperty(p)) {
				delete o[p];
			}
		}
	}
	
	function drop_done(cart, data) {
		for (let i = 0, len = cart.length; i < len; i++) {
			let o = cart[i];
			drop_it(o);
		}
	}
	
	function drop_it(o) {
		var key = o.key;
		if (key === '$') {
			_player.wallet = null;
		} else {
			_player.inv_slot[key] = null;
		}
		removeProps(o, ['wielded', 'worn']);	
		o.inv = false;
		[o.y, o.x] = [_player.y, _player.x];
		let o_list = _map[_player.y][_player.x].o_list;
		o_list.pop();
		let keep = true;
		if (canSumUp(o)) {
			let o2 = findSameType(o, o_list);
			if (o2) {
				o2.qty += o.qty;
				keep = false;
			}
		}
		if (keep) {
			o_list.push(o);
			_objects.push(o);
		}
		o_list.push(_player);
		_queued_msg.push('You drop ' + getObjName(o) + '.');
	}
	
	function isEmptyInv() {
		for (let key in _player.inv_slot) {
			if (_player.inv_slot[key]) {
				return false;
			}
		}
		return (_player.wallet === null);
	}
	
	this.doDrop = function(key) {
		var o;
		var selected = [];
		
		if (isEmptyInv()) {
			putLine("You don't have anything to drop.");
			return false;
		}
		const md = {
			// title: '',
			fixed_key: true,
			multi_select: false,
			// filter: xxx
			callback: drop_done
		};
		if (browseInventory(key, this.doDrop, 'What do you want to drop?', selected, md)) {
			return true;
		}
		if (_browse_status < 0) {
			return false;
		}
		o = selected[0];
		
		if (key === '$') {
			_player.wallet = null;
		} else {
			_player.inv_slot[key] = null;
		}
		removeProps(o, ['wielded', 'worn']);	
		o.inv = false;
		[o.y, o.x] = [_player.y, _player.x];
		let o_list = _map[_player.y][_player.x].o_list;
		o_list.pop();
		let keep = true;
		if (canSumUp(o)) {
			let o2 = findSameType(o, o_list);
			if (o2) {
				o2.qty += o.qty;
				keep = false;
			}
		}
		if (keep) {
			o_list.push(o);
			_objects.push(o);
		}
		o_list.push(_player);
		putLine('You drop ' + getObjName(o) + '.');
		return false;
	};
	
	function findSameType(o, o_list) {
		for (let i = 0, len = o_list.length; i < len; i++) {
			let o2 = o_list[i];
			if (canSumUp(o2) && matchObj(o, o2)) {
				return o2;
			}
		}
		return null;
	}
	
	function canSumUp(o) {
		switch (o.type) {
			case OC_FOOD:
			case OC_GEM:
			case OC_GOLD:
			case OC_POTION:
			case OC_ROCK:
			case OC_SCROLL:
			case OC_STONE:
				break;
			case OC_TOOL:
				if (o.hasOwnProperty('container')) {
					return false;
				}
				break;
			default:
				return false;
		}
		return true;
	}
	
	function matchProps(o1, o2, props) {
		for (let i = 0, len = props.length; i < len; i++) {
			let p = props[i];
			let a1 = (o1.hasOwnProperty(p))? o1[p]: null;
			let a2 = (o2.hasOwnProperty(p))? o2[p]: null;
			if (a1 !== a2) {
				return false;
			}
		}
		return true;
	}
		
	function matchObj(o1, o2) {
		const props = [ 'appearance', 'enchanted', 'for_sale' ];
		if (o1.type !== o2.type || o1.cname_type !== o2.cname_type) {
			return false;
		}
		if ((o1.buc_status !== o2.buc_status) || (o1.known_level !== o2.known_level)) {
			return false;
		}
		if (o1.hasOwnProperty('charged') || o2.hasOwnProperty('charged')) {
			return false;
		}
		if (!matchProps(o1, o2, props)) {
			return false;
		}
		return true;
	}
	
	function getInvLetters(filter) {
		var list = [];
		var filter_enabled = has(filter);
		for (let key in _player.inv_slot) {
			let o = _player.inv_slot[key];
			if (o && (!filter_enabled || filter(o))) {
				list.push(key);
			}
		}
		return list;
	}
	
	function getLetterRange(keys) { // keys: sorted array
		var code_arr = [];
		var str = '';
		if (!keys.length) {
			return str;
		}
		var last_code = keys[0].charCodeAt(0);
		code_arr.push(last_code);
		for (let i = 1, len = keys.length; i < len; i++) {
			let code = keys[i].charCodeAt(0);
			if (code !== last_code + 1) {
				str = str + strRange(code_arr);
				code_arr = [];
			}
			code_arr.push(code);
			last_code = code;
		}
		if (code_arr.length > 0) {
			str = str + strRange(code_arr);
		}
		return str;
	}
	
	function strRange(code_arr) {
		if (code_arr.length === 1) {
			return String.fromCharCode(code_arr[0]);
		}
		var from = code_arr[0];
		var to = code_arr[code_arr.length - 1];
		var str = String.fromCharCode(from) + '-' + String.fromCharCode(to);
		return str;
	}
	
	this.doInventory = function(key) {
		if (isEmptyInv()) {
			putLine('Not carrying anything.');
			return false;
		}
		var o;
		var exit_cmd = ((_kbd_input.state > 0 && (key === 'Escape' || key === 'Enter') )
						|| (_kbd_input.state === 2 && key === ' '));
		if (exit_cmd) {
			eraseMenu();
			return false;
		}
		const md = {
			fixed_key: true
		};
		if (_kbd_input.state === 0) {
			_kbd_input.start(this.doInventory);
			createItemSlot();
			menu_show_page(MENU_FIRST_PAGE, md);
			return true;
		} else if (_kbd_input.state > 0) {
			if (key === ' ') {
				menu_show_page(MENU_NEXT_PAGE, md);
			}
			return true;
		}
		return false;
	};
	
	function popupText(lines, end_prompt) {
		var y, len;
		let max_width = getListWidth(lines);
		let x_pos = NCOLS - max_width - 2;
		for (y = 0, len = lines.length; y < len; y++) {
			_win.move(y, x_pos);
			_win.clrtoeol();
			_win.addch(' ' + lines[y]);
		}
		_win.move(y, x_pos);
		_win.clrtoeol();
		_win.addstr(' ' + end_prompt);
		_win.refresh();
	}
	
	function listThingsAt(y, x, flag) {
		var count = 0;
		var y, len;
		var str;

		_queued_text = [];
		str = flag? 'Other things': 'Things';
		_queued_text.push(str + ' that are here:');
		let o_list = _map[y][x].o_list;
		for (let i = 0, len = o_list.length; i < len; i++) {
			let o = o_list[i];
			if (o === _player || o.hasOwnProperty('stationary')) {
				continue;
			}
			let str = getObjName(o);
			_queued_text.push(str);
			count++;
		}
		if (!count) {
			_queued_text = [];
			return;
		}
		console.dir(_queued_text);
		_player.color = null; // player's cursor off
		_self.display();
		
		if (!_queued_msg.length) {
			popupText(_queued_text, '--More--');
			_kbd_input.start(key_to_continue);
			_kbd_input.setFilter([' ', 'Escape']);
		}
	}
	
	this.printMessage = function() {
		var str = '"Hello, ' + _player.name + "!  Welcome to Angmagssalik's general store!" + '"';
		putLine(str);
	};
	
	function putLine(str) {
		_win.move(0, 0);
		_win.clrtoeol();
		_win.addstr(str);
		_win.refresh();
	}
	
	this.deleteLines = function() {
		for (let y = 0; y < 2; y++) {
			_win.move(y, 0);
			_win.clrtoeol();
		}
	}
	
	function eraseMenu() {
		_self.deleteLines();
		_player.color = 'cursor';	// player's cursor on
		_self.display(true);
		_self.printStatus(true);
	}
	
	Object.defineProperty(this, 'playerXY', {
		get: function() {
			return { x: _player.x, y: _player.y };
		}
	});
	
	this.somethingAt = function(y, x, me) {
		if (typeof me === 'boolean' && me) {
			me = _player;
		}
		var o_list = _map[y][x].o_list;
		for (let i = 0, len = o_list.length; i < len; i++) {
			if (o_list[i] !== me) {
				return true;
			}
		}
		return false;
	};
	
	// DEBUG
	this.dumpObjects = function(y, x) {
		var o_list = _map[y][x].o_list;
		console.log('## dump objects at y=%d x=%d', y, x);
		console.dir(o_list);
	};
	
	// DEBUG
	this.dumpObjectsAll = function() {
		for (let y = 0; y < _ymax; y++) {
			for (let x = 0; x < _xmax; x++) {
				if (_map[y][x].o_list.length > 0) {
					this.dumpObjects(y, x);
				}
			}
		}
	};
	
	// DEBUG
	this.dumpMonsters = function() {
		console.log('### monsters ###');
		console.dir(_monsters);
	};
	
	// DEBUG
	this.dumpInvSlot = function() {
		console.log("### inventory slot");
		console.dir(_player.inv_slot);
	}
	
	// DEBUG
	this.makeObjects = function() {
		const list = [
			{ type: OC_GOLD, cname: CN_GOLD, qty: [1, 20], known_level: 1 },
			{ type: OC_SCROLL, cname: CN_SCROLL_IDENTIFY, known_level: 1 },
			{ type: OC_GEM, cname: CN_GEM_DIAMOND, qty: [1, 5] },
			{ type: OC_ROCK, cname: CN_ROCK, qty: [1, 5] },
			{ type: OC_STONE, cname: CN_LUCKSTONE, qty: [1, 5] }
		];
		const [y, x] = [_player.y, _player.x];
		var o_list = _map[y][x].o_list;
		o_list.pop();	// player
		for (let i = 0, len = list.length; i < len; i++) {
			let tp = list[i];
			let o = newObj(obj_class, tp.type, tp.cname);
			[o.y, o.x] = [y, x];
			o.qty = 1;
			if (tp.hasOwnProperty('qty')) {
				o.qty = pickNumber(tp.qty);
			}
			if (tp.hasOwnProperty('charge')) {
				o.charge = pickNumber(tp.charge);
			}
			if (tp.hasOwnProperty('enchanted')) {
				o.enchanted = pickNumber(tp.enchanted);
			}
			if (tp.hasOwnProperty('known_level')) {
				o.known_level = tp.known_level;
			}
			o_list.push(o);
			_objects.push(o);
		}
		o_list.push(_player);
		this.display();
	};
	
	// DEBUG
	this.clearInventory = function() {
		_player.inv_slot = {};
		_player.wallet = null;
		putLine('## Clear All Inverntory');
	};
	
	init();
}
