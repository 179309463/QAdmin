$(function () {
	var price = 0, basicFlag = true, typesData = {}, _type;

    // 表单相关
    var product = new Vue({
        el: '#product',
        data: formData,
        mounted: function () {
            // 侧边栏滚动停靠
            $('.ui.sticky').sticky({
                offset: 20
            });
            
        },
        updated: function () {
        	this.price();
        	$('.license, #price, #payment').show();
            $('#price').html('<label>共需支付：</label><span><b><small> &yen;</small>' + price + '</b><span>');
            
        },
        methods: {
        	updateT: function(type){
        		render.types(type);
        	},
        	updateV: function(version){
        		render.version(version);
        	},
        	save: function(){
        		var data = $('#product').serializeArray(),
        			msg = {},
        			_type = data.shift();
        		
        		if(data.length < 1){
        			return;
        		}
        		
        		_type = _type.value;
        		msg.uuid = data.shift().value;
        		msg.items = [];
        		
        		for(var i=0;i<data.length;i++){
        			msg.items.push({
        				type: data[i].name,
        				uuid: data[i].value
        			});
        		}
        		
        		$.getJSON('/user/order/'+_type+'/save?from=ajax', {data:JSON.stringify(msg)}, function (rs) {
                    if(rs.code === 1001){
                    	loginModal();
                    	return;
                    }
                    
                    if (rs.status === 1) {
                       window.location.href="/user/payment?uuid="+rs.data+"&type=0";
                    } else {
                        toastr.warning(rs.message);
                    }
                });
        	}, 
        	filter: function(self){
        		var arrCode = [], arrPro = [],
        			_code = product.$data.code,
        			_program = product.$data.program;
        	
        		for(var i=0;i<_code.length;i++){
        			if(!_code[i].selected){
        				arrCode.push(0);
        			}
        		}
        		
        		for(var n=0;n<_program.length;n++){
        			if(!_program[n].selected){
        				arrPro.push(0);
        			}
        		}
        		
        		if(arrPro.length !== _program.length){
        			for(var m=0;m<_code.length;m++){
        				if(_code[m].selected && basicFlag && _code[m].value === '431ac7e9-f469-49ff-bbf4-cce40d0b3530'){
        					_code[m].selected = false;
        					basicFlag = false;
        				}
        			}
        		}else{
        			if(arrCode.length === _code.length){
        				self.selected = true;
        			}
        		}
        		
        		if(arrCode.length === 0){
        			for(var m=0;m<_code.length;m++){
        				_code[m].selected = false;
        			}
        			
        			self.selected = true
        		}
        		
        		
        		this.price();
        	},
        	price: function(){
        		price = 0;
        		
        		$('[name="program"]:checked').each(function(){
        			price += Number($(this).attr('data-price'));
        		});
        		
        		$('[name="style"]:checked').each(function(){
        			price += Number($(this).attr('data-price'));
        		});
        		
        		$('[name="code"]:checked').each(function(){
        			price += Number($(this).attr('data-price'));
        		});
        		
        		$('[name="theme"]:checked').each(function(){
        			price += Number($(this).attr('data-price'));
        		});
        		
        		/*$('[name="services"]:checked').each(function(){
        			price += Number($(this).attr('data-price'));
        		});*/
        		
        		$('[name="domain"]:checked').each(function(){
        			price += Number($(this).attr('data-price'));
        		});
        		
        	}
        }
    });
    
    var render = {
    	changeStatus: function(opt){
    		if(opt.type === 'version'){
    			
    		}else if(opt.type = 'type'){
    			
    		}
    	},
    	getData: function(){
    		var self =this;
    		
    		$.ajax({
        		url: '/buy/initData',
        		dataType: 'JSON',
        		success: function(data){
        			if(data){
        				self.storeData(data.types);
        				self.domains(data.domains);
        				/*self.services(data.services);*/
        			}else{
        				toastr.warning('出错了，请重试');
        			}
        		},
        		error: function(){
        			toastr.error('服务器异常，请稍后再试');
        		}
        	});
    	},
    	storeData: function(data){
    		var code;
    		
    		var callback = function(opt){
    			var versionData = {};
    			
    			for(var n=0;n<opt.length;n++){
        			versionData[opt[n].uuid] = {};
        			
        			for(var item in opt[n]){
        				if(item === 'uuid'){
        					continue;
        				}
        				versionData[opt[n].uuid][item] = opt[n][item];
        			}
        		}
    			
    			return versionData;
    		};
    	
    		for(var i=0;i<data.length;i++){
    			code = data[i].code;
    			typesData[code] = {};
    			
    			for(var item in data[i]){
    				if(item === 'codes'){
    					typesData[code]['codes'] = callback(data[i].codes);
    				}else{
    					typesData[code][item] = data[i][item];
    				}
    			}
    		}
    		
    		this.types();
    	},
    	types: function(type){
    		var types = [];
    		
    		for(var item in typesData){
    			types.push({
    				text: typesData[item].name,
    				value: item
    			});
    			
    			if(typeof type === 'undefined'){
        			types[0].selected = true;
            		_type = types[0].value;
        		}else if(item === type){
        			types[types.length -1].selected = true;
            		_type = item;
        		}
    		}
    		
    		product.$data.types = types;
    		
    		this.version();
    	},
    	version: function(v){ // 版本
    		var version = [],
    			versionData = typesData[_type].codes,
    			_result, data;
    		
    		if(typeof v === 'undefined' && JSON.stringify(versionData) === '{}'){
				data = versionData;
    		}
    		
    		for(var item in versionData){
    			version.push({
    				text: versionData[item].version,
    				value: item
    			});
    			
    			_result = (typeof v === 'undefined' && versionData[item].default) || item === v;
    			if(_result){
    				version[version.length -1].selected = true;
    				data = versionData[item];
    			}
    		}
    		
    		product.$data.version = version;
    		
    		this.program(data.program);
			this.code(data.code);		
			this.theme(data.theme);
    	},
    	program: function(opt){ // 后端程序
    		var program = [];
    		
    		if(typeof opt !== 'undefined'){
    			for(var i=0;i<opt.length;i++){
        			program.push({
        				text: opt[i].name,
        				value: opt[i].uuid,
        				price: opt[i].price,
        				selected: opt[i].default
        			});
        		};
    		}
    		
    		product.$data.program = program
    		
    	},
    	code: function(opt){ // qadmin源码
    		var code = [];
    		
    		if(typeof opt !== 'undefined'){
    			for(var i=0;i<opt.length;i++){
        			code.push({
        				text: opt[i].name,
        				value: opt[i].uuid,
        				price: opt[i].price,
        				selected: opt[i].default
        			});
        		};
    		}
    		
    		product.$data.code = code;
    	},
    	theme: function(opt){ // 主题及布局
    		var theme = [];
    		
    		if(typeof opt !== 'undefined'){
    			for(var i=0;i<opt.length;i++){
        			theme.push({
        				text: opt[i].name,
        				value: opt[i].uuid,
        				price: opt[i].price,
        				selected: opt[i].default
        			});
        		};
    		}
    		
    		product.$data.theme = theme;
    	},
    	domains: function(opt){ // 授权域名
    		var domains = {selected: '', items: []};
    		
    		for(var i=0;i<opt.length;i++){
    			domains.items.push({
    				id: opt[i].id,
    				text: opt[i].name,
    				value: opt[i].uuid,
    				price: opt[i].price
    			});
    			
    			if(opt[i].default){
    				domains.selected = domains.items[i].value;
    			}
    		};
    		
    		product.$data.domains = domains;
    	}/*,
    	services: function(opt){ // 售后支持
    		var services = {selected: '', items: []};
    		
    		for(var i=0;i<opt.length;i++){
    			services.items.push({
    				id: opt[i].id,
    				text: opt[i].name,
    				value: opt[i].uuid,
    				price: opt[i].price
    			});
    			
    			if(opt[i].default){
    				services.selected = services.items[i].value;
    			}
    		};
    		
    		product.$data.services = services;
    	}*/
    };
    
    render.getData();
    
    $(document).on('click', 'input[name="theme"]', function(e){
    	e.preventDefault();
    });
    
});