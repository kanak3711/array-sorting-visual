export function bbSort(array) {
    //const animations = [];
    if (array.length <= 1) return array;
    //const auxiliaryArray = array.slice();
    bbSortHelper(array, 0, array.length - 1, );//animations);
    return array;
  }
  
  function bbSortHelper( mainArray,startIdx,endIdx,)//animations,)
   {
    //let k = startIdx;
    let i = startIdx;
    let j = startIdx;
    //let min_idx=startIdx;  
  
    // One by one move boundary of unsorted subarray   
    for (i = 0; i < endIdx; i++)      
    {  
        // Last i elements are already in place  
        for (j = 0; j < endIdx-i; j++)  
        { if (mainArray[j] > mainArray[j+1])  
            {
                let temp=mainArray[j];
                mainArray[j]=mainArray[j+1];
                mainArray[j+1]=temp;
                //swap(&arr[j], &arr[j+1]);  

            }
        }
   }
    

   /* for (i = startIdx; i < endIdx; i++)  
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
    } */ 
}  
    
 