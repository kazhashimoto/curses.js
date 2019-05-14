
const NLINES = 24;
const NCOLS = 80;
		
function Tty(id) {
	var _id = id;
	var _tty = document.getElementById(id);

	this.initScreen = function() {
		for (let y = 0; y < NLINES; y++) {
			var p = document.createElement('p');
			p.classList.add('line');
			var s = '';
			for (let x = 0; x < NCOLS; x++) {
				s += ' ';
			}
			p.textContent = s;
			_tty.appendChild(p);
		}
	};

	this.output = function(y, str) {
		var p = getRowObj(y);
		p.innerHTML = str;
	};

	function getRowObj(y) {
		var row = +y + 1;
		var sel = '#' + _id + ' p:nth-child(' + row + ')';
		var p = document.querySelector(sel);
		return p;
	}
}

function Curses(tty) {
	var _tty = tty;
	var _cur_y = 0;
	var _cur_x = 0;
	var _line_buf = [];
	var _cursor_visible = false;
	var _attr_on = null;
	
	Object.defineProperty(
		this,
		'cursorVisible', 
		{
			get: function() { return _cursor_visible; },
			set: function(v) {
				if (typeof v === 'boolean') {
					_cursor_visible = v;
				}
			}
		}
	);

	this.move = function(y, x) {
		_cur_y = y;
		_cur_x = x;
	};
	this.addch = function(ch) {
		var b = _line_buf[_cur_y];
		var s = b.content;
		s[_cur_x].data = ch;
		s[_cur_x].attr = _attr_on;
		b.changed = true;
		_cur_x++;
		if (_cur_x >= NCOLS) {
			_cur_y++;
			_cur_x = 0;
		}
	};
	this.mvaddch = function(y, x, ch) {
		this.move(y, x);
		this.addch(ch);
	};

	this.addstr = function(str) {
		for (let i = 0, len = str.length; i < len; i++) {
			this.addch(str.charAt(i));
		}
	};
	this.mvaddstr = function(y, x, str) {
		this.move(y, x);
		this.addstr(str);
	};
	
	this.clrtoeol = function() {
		var b = _line_buf[_cur_y];
		var s = b.content;
		for (let x = _cur_x; x < NCOLS; x++) {
			s[x].data = ' ';
			s[x].attr = null;
		}
		b.changed = true;
	};
	
	this.attron = function(name) {
		_attr_on = name;
	}
	
	this.attroff = function(name) {
		_attr_on = null;
	}

	this.refresh = function() {
		for (let y = 0; y < NLINES; y++) {
			var b = _line_buf[y];
			if (b.changed) {
				// console.log('refresh: y=' + y + ' content=' + b.content);
				_tty.output(y, getLineData(y));
				b.changed = false;
			}
		}
	};

	function getLineData(y) {
		var buf = _line_buf[y].content;
		var str = '';
		for (let x = 0; x < NCOLS; x++) {
			let o = buf[x];
			if (o.attr) {
				str += '<span class="' + o.attr + '">';
			}
			str += o.data;
			if (o.attr) {
				str += '</span>';
			}
		}
		return str;
	}

	function init() {
		for (let y = 0; y < NLINES; y++) {
			_line_buf[y] = {};
			var s = [];
			for (let x = 0; x < NCOLS; x++) {
				s[x] = {};
				s[x].data = ' ';
				s[x].attr = null;
				s[x].attr_alt = null;
			}
			_line_buf[y].changed = false;
			_line_buf[y].content = s;
		}
	}

	init();
}

