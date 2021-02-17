export function ssSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    //const auxiliaryArray = array.slice();
    ssSortHelper(array, 0, array.length - 1,animations);
    return animations;
  }
  
  function ssSortHelper( mainArray,startIdx,endIdx,animations,)
   {
    //let k = startIdx;
    let i = startIdx;
    let j = startIdx + 1;
    let min_idx=startIdx;  
  
    // One by one move boundary of unsorted subarray  
    for (i = startIdx; i < endIdx; i++)  
    {  
       const animation = {};
       //let k=0;
        // Find the minimum element in unsorted array  
        min_idx = i;  
        for (j = i+1; j < endIdx+1; j++)
        { 
            //animation.comparison[k++]=[j,min_idx]; 
            if (mainArray[j] < mainArray[min_idx])  
            min_idx = j;  

        }
        animation.comparison1=[min_idx,min_idx];
        // Swap the found minimum element with the first element  
        //swap(&arr[min_idx], &arr[i]);
        //animation.swap = [i, min_idx]; 
        const temp=mainArray[i];
        animation.swap1 = [i, mainArray[min_idx]];
        mainArray[i]=mainArray[min_idx];
        //animations.push(animation);
        //const animatio = {};
        animation.swap2 = [min_idx, temp];
        mainArray[min_idx]=temp;
        //console.log(arrayBars[barOneIdx])
        animation.comparison2=[i,i]; 
        animations.push(animation);
    }  
}  
    
 