const numbers=[12,11,44,55,66,77,88,99,65,43];
const output=[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result=element*element;
    output.push(result);

    
}
//console.log(output);
// function square(element){
//     return element*element;
// }

//const square=element=>(element*element);
//const square=x=>x*x;
const result2= numbers.map(function(element,index,array){
    return element*element;
})
console.log(result2);

const bigger=numbers.filter(x=> x<12);
console.log(bigger);

const find=numbers.find(x=> x>12);
console.log(find);

const numbers1=[12,13,14,15,16,17,18,19,20];


const result3=numbers1.map(function(element1,index){
      return element1*element1;
})
console.log(result3);
