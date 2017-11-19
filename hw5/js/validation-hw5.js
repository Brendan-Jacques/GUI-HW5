/*
 Name: Brendan Jacques, brendan_jacques@student.uml.edu
 Student - Computer Science Major, UMass Lowell
 Comp.4610, GUI Programming I
 File: /usr/cs/2018/bjacques/public_html/461f2017/hw4/js/validation-hw5.js
 Created: 18-November-2017
*/

$("document").ready(function() {
	$("#car-number").validate({
		rules: {
			input_field_num: {
				required: true,
				digits: true,
				min: 1,
				max: 199
			}
		},
		messages: {
			input_field_num: {
				min: "*Please enter a valid integer greater than 0.",
				max: "*Please enter a valid integer less than 200.",
				digits: "*Please enter a vaild integer."
			}
		}
	});
	$("#car-compare-data").validate({
		rules: {
			per_gallon: {
				required: true,
				number: true,
				min: 1,
				max: 1000000
			},
			miles_per_month: {
				required: true,
				number: true,
				min: 1,
				max: 1000000
			},
		},
		messages: {
			per_gallon: "*Please enter value greater than 0.",
			miles_per_month: "*Please enter value greater than 0."
		},
	});
	$("#car-number").submit(function(e) {
		e.preventDefault();
	});
	$("#car-compare-data").submit(function(e) {
		e.preventDefault();
	});
})