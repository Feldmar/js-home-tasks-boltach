'use strict';

var john = {
	fullName : 'John J',
	bills : [124, 48, 268, 180, 42],
	tips : [],
	total : [],
	calcTips: function(){
		for(var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if(bill < 50) {
				percentage = 0.2;
			} else if (bill >= 50 && bill < 200) {
				percentage = 0.15;
			} else {
				percentage = 0.1;
			}	
		this.tips[i] = bill * percentage;
		this.total[i] = (bill * 2) * percentage;	
        }	
	}
}
john.calcTips();

var mark = {
	fillName : 'Mark F',	
	bills : [77, 375, 110, 45],
    tips : [],
	total : [],
	calcTips: function(){
		for(var i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 100){
				percentage = 0.2;
			} else if (bill >= 100 && bill < 300) {
				percentage = 0.1;
			} else {
				percentage = 0.25;
			}
			this.tips[i] = bill * percentage;
			this.total[i] = (bill * 2) * percentage;
		}
	}
}

mark.calcTips();

function calcСt(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}

var j = calcСt(john.tips);
var m = calcСt(mark.tips);

if (j > m) {
	console.log( 'Cемья' +'\u00A0' +john.fullName+ ' в среднем заплатила больше всего чаевых, а именно :' +'\u00A0' +j);
} else if (j < m) {
	console.log('Cемья' +'\u00A0' +mark.fullName+ ' в среднем заплатила больше всего чаевых, а именно :' +'\u00A0' +m);
}