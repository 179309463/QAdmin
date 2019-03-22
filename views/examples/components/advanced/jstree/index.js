var _0x1b9b = ['#clbk', '父节点', '子节点', '#evts', 'changed.jstree', 'selected', 'info', '您选择的节点是：', 'instance', 'get_node', 'text', '#checkbox', '父节点\x201', '父节点\x202', 'checkbox', '#contextmenu', 'contextmenu', 'search', 'isNull', '#jstreeSearch', 'val', '#dnd', 'dnd', 'Content', 'jstree', '子节点\x201', '子节点\x202', '#frmt', 'data', 'empty', '/views/examples/components/advanced/jstree/index.json', 'JSON']; (function(_0x55c31e, _0x43ec98) {
    var _0x4e4d34 = function(_0x119415) {
        while (--_0x119415) {
            _0x55c31e['push'](_0x55c31e['shift']());
        }
    };
    _0x4e4d34(++_0x43ec98);
} (_0x1b9b, 0x137));
var _0x3f95 = function(_0x5aadfe, _0x434c86) {
    _0x5aadfe = _0x5aadfe - 0x0;
    var _0x4d5cfe = _0x1b9b[_0x5aadfe];
    return _0x4d5cfe;
}; (function(_0x23fd4c, _0x52370a, _0x2d281) {
    'use strict';
    /* global _, toastr */
    _0x52370a[_0x3f95('0x0')] = {
        'run': function() {
            'use strict';
            var _0x524af5 = null;
            _0x2d281('#data')[_0x3f95('0x1')]({
                'core': {
                    'data': [{
                        'text': '父节点',
                        'children': [{
                            'text': _0x3f95('0x2')
                        },
                        {
                            'text': _0x3f95('0x3')
                        }]
                    }]
                }
            });
            _0x2d281(_0x3f95('0x4'))['jstree']({
                'core': {
                    'data': [{
                        'text': '父节点',
                        'state': {
                            'opened': !![]
                        },
                        'children': [{
                            'text': '子节点\x201',
                            'state': {
                                'selected': !![]
                            }
                        },
                        {
                            'text': _0x3f95('0x3'),
                            'state': {
                                'disabled': !![]
                            }
                        }]
                    }]
                }
            });
            _0x2d281('#ajax')[_0x3f95('0x5')]('jstree', ![])[_0x3f95('0x6')]()[_0x3f95('0x1')]({
                'core': {
                    'data': {
                        'url': _0x3f95('0x7'),
                        'dataType': _0x3f95('0x8')
                    }
                }
            });
            _0x2d281('#lazy')['jstree']({
                'core': {
                    'data': {
                        'url': _0x3f95('0x7'),
                        'dataType': _0x3f95('0x8'),
                        'data': function(_0x14745c) {
                            return {
                                'id': _0x14745c['id']
                            };
                        }
                    }
                }
            });
            _0x2d281(_0x3f95('0x9'))[_0x3f95('0x1')]({
                'core': {
                    'data': function(_0x24ddae, _0x3c0806) {
                        if (_0x24ddae['id'] === '#') {
                            _0x3c0806([{
                                'text': _0x3f95('0xa'),
                                'id': '1',
                                'children': !![]
                            }]);
                        } else {
                            _0x3c0806([_0x3f95('0xb')]);
                        }
                    }
                }
            });
            _0x2d281(_0x3f95('0xc'))['on'](_0x3f95('0xd'),
            function(_0x21080c, _0x1926c4) {
                if (_0x1926c4[_0x3f95('0xe')]['length']) {
                    toastr[_0x3f95('0xf')](_0x3f95('0x10') + _0x1926c4[_0x3f95('0x11')][_0x3f95('0x12')](_0x1926c4[_0x3f95('0xe')][0x0])[_0x3f95('0x13')]);
                }
            })[_0x3f95('0x1')]({
                'core': {
                    'multiple': ![],
                    'data': [{
                        'text': _0x3f95('0xa'),
                        'children': [{
                            'text': '子节点\x201',
                            'id': 0x1
                        },
                        {
                            'text': _0x3f95('0x3')
                        }]
                    }]
                }
            });
            _0x2d281(_0x3f95('0x14'))[_0x3f95('0x1')]({
                'core': {
                    'data': [{
                        'text': _0x3f95('0x15')
                    },
                    {
                        'text': _0x3f95('0x16'),
                        'state': {
                            'opened': !![],
                            'selected': !![]
                        },
                        'children': [{
                            'text': _0x3f95('0x2')
                        },
                        {
                            'text': '子节点\x202'
                        }]
                    }]
                },
                'plugins': [_0x3f95('0x17')]
            });
            _0x2d281(_0x3f95('0x18'))[_0x3f95('0x1')]({
                'core': {
                    'check_callback': !![],
                    'data': [{
                        'text': '父节点\x201'
                    },
                    {
                        'text': _0x3f95('0x16'),
                        'state': {
                            'opened': !![],
                            'selected': !![]
                        },
                        'children': [{
                            'text': _0x3f95('0x2')
                        },
                        {
                            'text': '子节点\x202'
                        }]
                    }]
                },
                'plugins': [_0x3f95('0x19')]
            });
            _0x2d281('#search')[_0x3f95('0x1')]({
                'core': {
                    'data': [{
                        'text': _0x3f95('0x15')
                    },
                    {
                        'text': '父节点\x202',
                        'state': {
                            'opened': !![],
                            'selected': !![]
                        },
                        'children': [{
                            'text': _0x3f95('0x2')
                        },
                        {
                            'text': '子节点\x202'
                        }]
                    }]
                },
                'plugins': [_0x3f95('0x1a')]
            });
            _0x2d281('#jstreeSearch')['keyup'](function() { ! _[_0x3f95('0x1b')](_0x524af5) && clearTimeout(_0x524af5);
                _0x524af5 = setTimeout(function() {
                    var _0x1350cc = _0x2d281(_0x3f95('0x1c'))[_0x3f95('0x1d')]();
                    _0x2d281('#search')[_0x3f95('0x1')]( !! [])[_0x3f95('0x1a')](_0x1350cc);
                },
                0xfa);
            });
            _0x2d281(_0x3f95('0x1e'))[_0x3f95('0x1')]({
                'core': {
                    'check_callback': !![],
                    'data': [{
                        'text': _0x3f95('0x15')
                    },
                    {
                        'text': _0x3f95('0x16'),
                        'state': {
                            'opened': !![],
                            'selected': !![]
                        },
                        'children': [{
                            'text': '子节点\x201'
                        },
                        {
                            'text': _0x3f95('0x3')
                        }]
                    }]
                },
                'plugins': [_0x3f95('0x1f')]
            });
        }
    };
} (document, window, jQuery));