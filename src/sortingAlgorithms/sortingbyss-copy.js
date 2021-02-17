export function ssSort(array) {
    //const animations = [];
    if (array.length <= 1) return array;
    //const auxiliaryArray = array.slice();
    ssSortHelper(array, 0, array.length - 1, );//animations);
    return array;
  }
  
  function ssSortHelper( mainArray,startIdx,endIdx,)//animations,)
   {
    //let k = startIdx;
    let i = startIdx;
    let j = startIdx + 1;
    let min_idx=startIdx;  
  
    // One by one move boundary of unsorted subarray  
    for (i = startIdx; i < endIdx; i++)  
    {  
        //const animation = {};
        // Find the minimum element in unsorted array  
        min_idx = i;  
        for (j = i+1; j < endIdx+1; j++)
        { 
            //animation.comparison=[j,min_idx]; 
            if (mainArray[j] < mainArray[min_idx])  
            min_idx = j;  

        }
  
        // Swap the found minimum element with the first element  
        //swap(&arr[min_idx], &arr[i]);
        //animation.swap = [i, min_idx]; 
        let temp=mainArray[i];
        mainArray[i]=mainArray[min_idx];
        mainArray[min_idx]=temp;
         
       // animations.push(animation);
    }  
}  
    
 