var _0x2f51 = ['context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-clipboard', '---------', '#exampleContext2\x20>\x20span', 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-scissor', '#exampleContext3', 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-share', 'info', 'items', 'name', '菜单已显示', 'contextMenu', '#exampleContext1', 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-copy']; (function(_0x46adcd, _0x1c4d45) {
    var _0x4706ec = function(_0x3dcd65) {
        while (--_0x3dcd65) {
            _0x46adcd['push'](_0x46adcd['shift']());
        }
    };
    _0x4706ec(++_0x1c4d45);
} (_0x2f51, 0x19d));
var _0x2fc2 = function(_0x3babb8, _0x5ef1d7) {
    _0x3babb8 = _0x3babb8 - 0x0;
    var _0x5d39de = _0x2f51[_0x3babb8];
    return _0x5d39de;
}; (function(_0x4990d9, _0x43954d, _0x2c9af7) {
    'use strict';
    /* global toastr */
    _0x2c9af7(function() {
        _0x2c9af7[_0x2fc2('0x0')]({
            'selector': _0x2fc2('0x1'),
            'items': {
                'edit': {
                    'name': '复制',
                    'icon': function() {
                        return _0x2fc2('0x2');
                    }
                },
                'cut': {
                    'name': '剪贴',
                    'icon': function() {
                        return 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-scissor';
                    }
                },
                'copy': {
                    'name': '粘贴',
                    'icon': function() {
                        return _0x2fc2('0x3');
                    }
                },
                'sep1': _0x2fc2('0x4'),
                'share': {
                    'name': '分享',
                    'icon': function() {
                        return 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-share';
                    }
                }
            }
        });
        _0x2c9af7[_0x2fc2('0x0')]({
            'selector': _0x2fc2('0x5'),
            'items': {
                'edit': {
                    'name': '复制',
                    'icon': function() {
                        return _0x2fc2('0x2');
                    }
                },
                'cut': {
                    'name': '剪贴',
                    'icon': function() {
                        return _0x2fc2('0x6');
                    }
                },
                'copy': {
                    'name': '粘贴',
                    'icon': function() {
                        return 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-clipboard';
                    }
                },
                'sep1': '---------',
                'share': {
                    'name': '分享',
                    'icon': function() {
                        return 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-share';
                    }
                }
            }
        });
        _0x2c9af7[_0x2fc2('0x0')]({
            'selector': _0x2fc2('0x7'),
            'items': {
                'edit': {
                    'name': '复制',
                    'icon': function() {
                        return _0x2fc2('0x2');
                    }
                },
                'cut': {
                    'name': '剪贴',
                    'icon': function() {
                        return 'context-menu-icon\x20context-menu-extend-icon\x20icon\x20wb-scissor';
                    }
                },
                'copy': {
                    'name': '粘贴',
                    'icon': function() {
                        return _0x2fc2('0x3');
                    }
                },
                'sep1': _0x2fc2('0x4'),
                'share': {
                    'name': '分享',
                    'icon': function() {
                        return _0x2fc2('0x8');
                    }
                }
            },
            'callback': function(_0xa9eeae, _0x9858e) {
                toastr[_0x2fc2('0x9')](_0x9858e[_0x2fc2('0xa')][_0xa9eeae][_0x2fc2('0xb')]);
            },
            'events': {
                'show': function() {
                    toastr[_0x2fc2('0x9')](_0x2fc2('0xc'));
                },
                'hide': function() {
                    toastr[_0x2fc2('0x9')]('菜单已隐藏');
                }
            }
        });
    });
} (document, window, jQuery));