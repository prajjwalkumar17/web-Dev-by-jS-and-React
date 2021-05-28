function tempConvert(celcius){
var F = (9 * celcius / 5) + 32;
return F;
}
document.getElementById("fahr_1").innerHTML=tempConvert(38);
document.getElementById("fahr_2").innerHTML=tempConvert(24);
document.getElementById("fahr_3").innerHTML=tempConvert(-1);

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
document.getElementById("best_students").innerHTML= classification.slice(-3,);

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}


document.getElementById("course_title").innerHTML=course.title;
document.getElementById("main_category").innerHTML=course.categories[0];
document.getElementById("reviews_5_stars").innerHTML=Math.round((course["5_stars_reviews"]/(course["5_stars_reviews"]+course["4_stars_reviews"]
+ course["3_stars_reviews"] +course["3_stars_reviews"] +course["2_stars_reviews"] 
+course["1_stars_reviews"] ))*100);


var shoppingList=["Milk","Butter",'Bread','Beer','Rice','Potatoes','Chocolate'];
// var last=shoppingList.pop();
shoppingList.unshift(shoppingList.pop());
console.log(shoppingList);

shoppingList.push("Cheese");
shoppingList.push("Eggs");
console.log(shoppingList);






















