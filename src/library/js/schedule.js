(function (undefined) {
	var _global;
	//工具函数
	//配置合并
	function extend (def,opt,override) {
		for(var k in opt){
			if(opt.hasOwnProperty(k) && (!def.hasOwnProperty(k) || override)){
				def[k] = opt[k]
			}
		}
		return def;
	}
	function zero(n){
		if(n<10){
		   return "0"+n	
		}else{
		   return ""+n
		}
	}
	//日期格式化
	function formartDate (y,m,d,symbol,flag) {
		symbol = symbol || '-';
		m = (m.toString())[1] ? m : '0'+m;
		d = (d.toString())[1] ? d : '0'+d;
		if (symbol == 'd') {
			if (flag) {
				return y + '年' + m + '月';
			} else {
				return y + '年' + m + '月' + d + '日';
			}
		} else {
			return y + symbol + m + symbol + d;
		}
	}

	function Schedule (opt) {
		var def = {},
			opt = extend(def,opt,true),
			curDate = opt.date ? new Date(opt.date) : new Date(),
			year = curDate.getFullYear(),
			month = curDate.getMonth(),
			day = curDate.getDate(),	
			currentYear = curDate.getFullYear(),
			currentMonth = curDate.getMonth(),
			currentDay = curDate.getDate(),
			selectedDate = '',
			el = document.querySelector(opt.el) || document.querySelector('body'),
			_this = this;
		var bindEvent = function (){
			el.addEventListener('click',function(e){
				switch (e.target.id) {
					case 'nextMonth': 
						_this.nextMonthFun();
						break;
					case 'nextYear': 
						_this.nextYearFun();
						break;
					case 'prevMonth': 
						_this.prevMonthFun();
						break;
					case 'prevYear': 
						_this.prevYearFun();
						break;
					default:
						break;
				};
//				if(e.target.className.indexOf('currentDate') > -1){
//					console.log(e.target);
//					opt.clickCb && opt.clickCb(year, month+1, e.target.innerHTML);
//					selectedDate = e.target.title;
//					day = e.target.innerHTML;
//					render();
//				}
			},false)
		}
		var init = function () {
			var line='';
			var scheduleHd = '<div class="schedule-hd">'+
								'<div>'+
//									'<span class="arrow" id="prevYear"></span>'+
									'<i class="icons arrow iconfont icon-jiantou-left" id="prevMonth">&#xe626;</i>'+
								'</div>'+
								'<div class="today">'+formartDate(year,month+1,day,'d',true)+'</div>'+
								'<div>'+
									'<i class="icons arrow iconfont icon-jiantou-right" id="nextMonth">&#xe60a;</i>'+
//									'<span class="arrow" id="nextYear"></span>'+
								'</div>'+
							'</div>'
			var scheduleWeek = '<ul class="week-ul ul-box">'+
									'<li>周日</li>'+
									'<li>周一</li>'+
									'<li>周二</li>'+
									'<li>周三</li>'+
									'<li>周四</li>'+
									'<li>周五</li>'+
									'<li>周六</li>'+
								'</ul>'
			var scheduleBd = '<ul class="schedule-bd ul-box" ></ul>'; 
			var scheduleBdd = '<p style="height:20px;line-height:20px;color:#FDC528;text-align:center">'+$(".uc_info").text()+'</p>'; 
			el.innerHTML = line + scheduleHd + scheduleWeek + scheduleBd + scheduleBdd;
			bindEvent();
			render();
		}
		var render = function () {
			var fullDay = new Date(year,month+1,0).getDate(), //当月总天数
				startWeek = new Date(year,month,1).getDay(), //当月第一天是周几
				total = (fullDay+startWeek)%7 == 0 ? (fullDay+startWeek) : fullDay+startWeek+(7-(fullDay+startWeek)%7),//元素总个数
				lastMonthDay = new Date(year,month,0).getDate(), //上月最后一天
				eleTemp = [];
			for(var i = 0; i < total; i++){
				if(i<startWeek){
					//eleTemp.push('<li class="other-month"><span class="dayStyle">'+(lastMonthDay-startWeek+1+i)+'</span></li>');
					eleTemp.push('<li class="other-month"></li>');
				}else if(i<(startWeek+fullDay)){
					var nowDate = formartDate(year,month+1,(i+1-startWeek),'');
					var addClass = '';
//					selectedDate == nowDate && (addClass = 'selected-style');	// 日期选择变色功能
					formartDate(currentYear,currentMonth+1,currentDay,'') == nowDate && (addClass = 'today-flag');
					var sickHtml = '<i class="green">√</i>',personalHtml = '<i class="grey">-</i>';
					var markHtml = '',markCss = '';
					//【checking-in 】
					//【absence 】
					//【yours 】
					//【leave 】
					eleTemp.push('<li title="'+nowDate+'" data-ny="'+year+zero(month+1)+'"  data-day="'+zero(i+1-startWeek)+'" class="current-month" ><span title='+nowDate+' class="currentDate dayStyle '+ markCss +addClass+'">'+(i+1-startWeek)+ markHtml +'</span></li>')
				}else{
					//eleTemp.push('<li class="other-month"><span class="dayStyle">'+(i+1-(startWeek+fullDay))+'</span></li>');
					eleTemp.push('<li class="other-month"></li>');
				}
			}
			el.querySelector('.schedule-bd').innerHTML = eleTemp.join('');
			el.querySelector('.today').innerHTML = formartDate(year,month+1,day,'d',true)+"签到记录";
			
			try{ 

				if(flushmonth&&typeof(flushmonth)=="function"){ 
					flushmonth(year,month+1,day);
				}else{ 
					console.log("不存在的函数"); 
				} 
			}catch(e){ 
				console.log('none');
			} 

			
			
		};
		this.nextMonthFun = function () {
			if(month+1 > 11){
				year += 1;
				month = 0;
			}else{
				month += 1;
			}
			render();
			opt.nextMonthCb && opt.nextMonthCb(year,month+1,day);
			loadit()
		},
		this.nextYearFun = function () {
			year += 1;
			render();
			opt.nextYeayCb && opt.nextYeayCb(year,month+1,day);
		},
		this.prevMonthFun = function () {
			if(month-1 < 0){
				year -= 1;
				month = 11;
			}else{
				month -= 1;
			}
			render();
			opt.prevMonthCb && opt.prevMonthCb(year,month+1,day);
			loadit()
		},
		this.prevYearFun = function () {
			year -= 1;
			render();
			opt.prevYearCb && opt.prevYearCb(year,month+1,day);
		}
		init();
	}
	//将插件暴露给全局对象
	_global = (function(){return this || (0,eval)('this')}());
	if(typeof module !== 'undefined' && module.exports){
		module.exports = Schedule;
	}else if (typeof define === "function" && define.amd){
		define(function () {
			return Schedule;
		})
	}else {
		!('Schedule' in _global) && (_global.Schedule = Schedule);
	}
}());