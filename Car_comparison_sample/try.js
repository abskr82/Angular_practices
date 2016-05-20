carObjArr =[
	{
		"name": "Renault Duster",
		"Fuel Type": "Diesel",
		"price": "11.67 lakh",
		"priceLoc": "Ex-Showroom Price(New Delhi)",
		"Length(mm)": 4300,
		"Width(mm)": 1800,
		"Height(mm)": 1600,
		"Seating Capacity(Person)": 5,
		"Displacement(cc)": 1409,
		"Max Power(bhp@rpm)": "108 @ 3900",
		"Max Torque(Nm@rpm)": "248 @ 2250",
		"Mileage (ARAI)(kmpl)": 19.6,
		"Alternet Fuel": "Not Applicable",
		"Transmission Type": "Manual",
		"No of gears(Gears)" : 6
	},
	{
		"name": "Renault Duster2",
		"Fuel Type": "Diesel",
		"price": "11.67 lakh",
		"priceLoc": "Ex-Showroom Price(New Delhi)",
		"Length(mm)": 4300,
		"Width(mm)": 1800,
		"Height(mm)": 1600,
		"Seating Capacity(Person)": 5,
		"Displacement(cc)": 1409,
		"Max Power(bhp@rpm)": "108 @ 3900",
		"Max Torque(Nm@rpm)": "248 @ 2250",
		"Mileage (ARAI)(kmpl)": 19.6,
		"Alternet Fuel": "Not Applicable",
		"Transmission Type": "Manual",
		"No of gears(Gears)" : 6
	},
	{
		"name": "Renault Duster3",
		"Fuel Type": "Diesel",
		"price": "11.67 lakh",
		"priceLoc": "Ex-Showroom Price(New Delhi)",
		"Length(mm)": 4300,
		"Width(mm)": 1800,
		"Height(mm)": 1600,
		"Seating Capacity(Person)": 5,
		"Displacement(cc)": 1409,
		"Max Power(bhp@rpm)": "108 @ 3900",
		"Max Torque(Nm@rpm)": "248 @ 2250",
		"Mileage (ARAI)(kmpl)": 19.6,
		"Alternet Fuel": "Not Applicable",
		"Transmission Type": "Manual",
		"No of gears(Gears)" : 6
	},
	{
		"name": "Renault Duster4",
		"Fuel Type": "Diesel",
		"price": "11.67 lakh",
		"priceLoc": "Ex-Showroom Price(New Delhi)",
		"Length(mm)": 4300,
		"Width(mm)": 1800,
		"Height(mm)": 1600,
		"Seating Capacity(Person)": 5,
		"Displacement(cc)": 1409,
		"Max Power(bhp@rpm)": "108 @ 3900",
		"Max Torque(Nm@rpm)": "248 @ 2250",
		"Mileage (ARAI)(kmpl)": 19.6,
		"Alternet Fuel": "Not Applicable",
		"Transmission Type": "Manual",
		"No of gears(Gears)" : 6
	}
];


		var mainObjArr = [];

		for(var k in carObjArr[0]){
			mainObjArr.push({

			})
			mainObjArr[mainObjArr.length-1] = {};
			mainObjArr[mainObjArr.length-1]["feature"] = k;
			for(var i = 0; i < carObjArr.length;i++){
				mainObjArr[mainObjArr.length-1][carObjArr[i].name] = carObjArr[i][k];
			}
		}

		var similarObjArr = [] ;
		mainObjArr.forEach(function(obj){
			var count = 0;
			var similarCount = 0;
			var prevObjVal = "";
			for(var s in obj){
				if(s != "feature" && count >0){ /*exclude feature field*/
					if(prevObjVal === obj[s]){
						console.log("prevObjVal"+prevObjVal);
						console.log("New val "+obj[s]);
						similarCount += 1;
					}
				}
				count+=1;
				prevObjVal = obj[s];
			}
			// checkif the similarFlag is 1 then add the value to the array
			if( similarCount === count - 2 ){
				similarObjArr.push(obj);
			}
		});

		var diffObjArr = [] ;
		mainObjArr.forEach(function(obj){
			var count = 0;
			var similarCount = 0;
			var prevObjVal = "";
			for(var s in obj){
				if(s != "feature" && count >0 ){ /*exclude feature field*/
					if(prevObjVal === obj[s]){
						console.log("prevObjVal"+prevObjVal);
						console.log("New val "+obj[s]);
						similarCount += 1;
					}
				}
				count+=1;
				prevObjVal = obj[s];
			}
			// checkif the similarFlag is 1 then add the value to the array
			if( similarCount === 0 ){
				diffObjArr.push(obj);
			}
		});

	console.log(diffObjArr);	


// console.log(mainObjArr);