//rest
let a=[1,2,4];
let b=[6,7,8,9];

rest1=()=>c=[...a,...b];
console.log(rest1());

rest2=(a,b)=>c=[...a,10,55,...b];
console.log(rest2(a,b));

rest3=(a,b)=>c=[...a,[1,1,2,3,4],...b];
console.log(rest3(a,b));

rest4=(a,b)=>c=[...a,{name:"Arun"},...b];
console.log(rest4(a,b));

rest5=(a,b)=>c=[10,23,...a,...b];
console.log(rest5(a,b));

rest6=(a,b)=>c=[...a,...b,23,45];
console.log(rest6(a,b));

rest7=(a,b)=>c=[12,23,...a,...b,23,56];
console.log(rest7(a,b));

rest8=(a,b)=>c=[54,78,...a,78,56,...b,34,56];
console.log(rest8(a,b));

rest9=(a,b)=>c=[...a,...b];
console.log(rest9(a,b));


