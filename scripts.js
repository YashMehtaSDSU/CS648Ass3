//1
window.console.log("1st");
var filmsList = ["Scream", "F9", "Spiderman", "Antman", "Glass"];
window.console.log(filmsList[1]);

//2
window.console.log("2nd");
var films = new Array(5);
films[0] = "Scream";
films[1] = "F9";
films[2] = "Spiderman"
films[3] = "Antman";
films[4] = "Glass";
window.console.log(films[0]);

//3
window.console.log("3rd");
var films = new Array(5);
films[0] = "Scream";
films[1] = "F9";
films[2] = "Spiderman"
films[3] = "Antman";
films[4] = "Glass";
films.splice(2, 0, "Close");
window.console.log(films.length);

//4
window.console.log("4th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass"];
delete films[0];
window.console.log(films);

//5
window.console.log("5th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
for (var film in films) {
	window.console.log(films[film]);
}

//6
window.console.log("6th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
for (var film of films) {
  window.console.log(film);
}

//7
window.console.log("7th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
films.sort();
for (var film of films) {
  console.log(film);
}

//8
window.console.log("8th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
var leastFavfilms = ["Thor", "80 for brady", "Titanic"];
console.log("Films I like:\n");
var element;
for (element in films) {
    if (films.hasOwnProperty(element)) {
        console.log(films[element]);
    }
}
console.log("\n")
console.log("Films I regret watching:\n");
var element;
for (element in leastFavfilms) {
    if (films.hasOwnProperty(element)) {
        console.log(leastFavfilms[element]);
    }
}

//9
window.console.log("9th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
var leastFavfilms = ["Thor", "80 for brady", "Titanic"];
window.console.log("films I like:");
for (element in films) {
    if (films.hasOwnProperty(element)) {
        console.log(films[element]);
    }
}
window.console.log("\nfilms I regret watching:");
for (element in leastFavfilms) {
    if (leastFavfilms.hasOwnProperty(element)) {
        console.log(leastFavfilms[element]);
    }
}
RS = films.concat(leastFavfilms);
RS.sort().reverse();
console.log("Reverse sorted list of concatenated films:");
for (element in RS) {
    if (RS.hasOwnProperty(element)) {
        console.log(RS[element]);
    }
}

//10
window.console.log("10th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
var leastFavfilms = ["Thor", "80 for brady", "Titanic"];
window.console.log("films I like:");
for (element in films) {
    if (films.hasOwnProperty(element)) {
        console.log(films[element]);
    }
}
window.console.log("\nfilms I regret watching:");
for (element in leastFavfilms) {
    if (leastFavfilms.hasOwnProperty(element)) {
        console.log(leastFavfilms[element]);
    }
}
RS = films.concat(leastFavfilms);
RS.sort().reverse();
console.log("Reverse sorted list of concatenated films:");
for (element in RS) {
    if (RS.hasOwnProperty(element)) {
        console.log(RS[element]);
    }
}
var lastfilm = RS.pop();
console.log("The last film in the concatenated array is: " + lastfilm);

//11
window.console.log("11th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
var leastFavfilms = ["Thor", "80 for brady", "Titanic"];
window.console.log("films I like:");
for (element in films) {
    if (films.hasOwnProperty(element)) {
        console.log(films[element]);
    }
}
window.console.log("\nfilms I regret watching:");
for (element in leastFavfilms) {
    if (leastFavfilms.hasOwnProperty(element)) {
        console.log(leastFavfilms[element]);
    }
}
RS = films.concat(leastFavfilms);
RS.sort().reverse();
console.log("Reverse sorted list of concatenated films:");
for (element in RS) {
    if (RS.hasOwnProperty(element)) {
        console.log(RS[element]);
    }
}
console.log("The First film in the concatenated array is: ");
window.console.log(RS.shift());

//12
window.console.log("12th");
var films = ["Scream", "F9", "Spiderman", "Antman", "Glass", "Living", "Close"];
var leastFavfilms = ["Thor", "80 for brady", "Titanic"];
films = films.concat(leastFavfilms);
var indices = [];
for (var i = 0; i < films.length; i++) {
    if (films[i]==="Thor" || films[i] === "80 for brady" || films[i]==="Titanic") {
        indices.push(i);

    }
}
for (var i of indices.reverse()){
  films.splice(i,1);
}
films.splice(7,0,"Singham","Race","Race 3");
console.log("Updated film list:");
for (let film of films) {
  console.log(film);
}

//13
window.console.log("13th");
var films = [["Knock at the cabin", 1], ["Plane", 2], ["Missing", 3], [" Of an Age", 4], ["The Whale", 5]];
var filmNames = films.filter(function(film) {
  return typeof film[0] === 'string';
});
console.log("film Names: ");
for (var film of filmNames) {
  console.log(film[0]);
}

//14
window.console.log("14th");
var employees = ["ZACK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(employeeArray) {
  console.log("Employees:");
  for (var employee of employeeArray) {
    console.log(employee);
  }
};
showEmployee(employees);

//15
window.console.log("15th");
function filteration(a) {
  return a.filter(function(item) {
    return item !== false && item !== null && item !== 0 && item !== "";
  });
}
window.console.log(filteration([58, '', 'abcd', true, null, false, 0]));

//16
window.console.log("16th");
function randomFunction(a) {
  return a[Math.floor(Math.random() * a.length)];
}
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(randomFunction(n));

//17
window.console.log("17th");
function largest(numbers) {
    let maximum = numbers[0];
    for (var i=0;i<numbers.length;i+=1) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }
    return maximum;
}
var a = [1, 20, 3, 40, 5, 6, 70, 8, 99, 100];
console.log("Largest number is "+largest(a));