
//BTVN 1: biện luận phương trình bậc 2
// có dạng ax^2+bx+c = 0;
var a= 5;
var b = -10 
var c = 4

if(a == 0){
    if(b ==0){
        if(c == 0){
            console.log("phương trình có vô số nghiệm");
        }else{
            console.log("phương trình vô nghiệm");
        }
    }else{
        console.log("phương trình có nghiệm duy nhất x = ",-c/a);
    }
}else{
    var delta = b*b  - 4 * a *c;
    if(delta > 0){
        console.log("phương trình có 2 nghiệm x1 = ",(-b + Math.sqrt(delta))/(2 *a) + " và x2 =" , (-b - Math.sqrt(delta))/(2 *a));
    }else if(delta == 0){
        console.log("phương trình có nghiệm kép x = ",-b/(2*a));
    }else{
        console.log("phương trình vô nghiệm");
    }
    
}


var arr =[1,5,9,100,55,88,99,66,44,7,88,99,66,7,11,22,66,8];
//log ra màn hình số lần suất hiện của phần tử có giá trị là 66

var tmp =0
for(let i=0; i< arr.length;i++)
{
    if(arr[i] ==66){
       tmp++;
    }
}
console.log("số lần xuất hiện của phần tử 66 là:",tmp)

var array =[1,7,9,100,55,88,99,66,44,7,100,88,99,66,7,11,22,66,8];
//log ra màn hình số lần xuất hiện của phần tử có giá trị khác nhau
var arrayTemp=[];

var countNumer =0;

for(let i=0; i< array.length;i++)
{
    let check = true;
    for(let j=0; j< i;j++)
    {
        if(array[j] == array[i]){
            check = false;
            break;
        }
        
    }
    if(check){
        
        let count =1;
        for(let k=i+1; k< array.length;k++)
        {
            if(array[i] == array[k]){
                count++
            }
        }
        console.log("Số lần xuất hiện của phần từ ",array[i], "trong mảng đã cho là: ", count);

    }
}