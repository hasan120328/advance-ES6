const student=[
    {id: 121, name:'hasan sheikh'},
    {id:132, name:'sakib khan'},
    {id:321, name:'dipjol'},
    {id:543, name:'kabila'}
]


const idName=[];

const result=student.map(s=>s.name);
console.log(result);

for (let i = 0; i < result.length; i++) {
    const element = result[i];
    const total=element;
    idName.push(total);
    
    
}
console.log(idName);


const result2=student.map(s=>s.id);
console.log(result2);
for (let i = 0; i < result2.length; i++) {
    const element = result2[i];
    const total1=element;
    idName.push(total1);
    
}
console.log(idName);


const filter=student.filter(s=>s.id<212);
console.log(filter);

const find=student.find(s=>s.id>321);
console.log(find);


