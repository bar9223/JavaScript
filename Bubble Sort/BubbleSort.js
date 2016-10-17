var arr = [3,4,6,10,20,23,43,99];
 var z;
function bubblesort(arr){
    
    for(x=0; x<arr.length ;x++){
        for(y=1;y<arr.length -x-1 ;y++){
            if(arr[y]>arr[y+1]){
                
                z=arr[y];
                arr[y]=arr[y+1];
                arr[y+1]=z;
                
            }
            
        }
    
    }
    return arr;
}

console.log(bubblesort(arr));