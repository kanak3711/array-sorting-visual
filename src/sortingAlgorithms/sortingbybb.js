export function bbSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    //const auxiliaryArray = array.slice();
    bbSortHelper(array, 0, array.length - 1,animations);
    return animations;
  }
  
  function bbSortHelper( mainArray,startIdx,endIdx,animations,)
   {
    //let k = startIdx;
    let i = startIdx;
    let j = startIdx;
    //let min_idx=startIdx;  
    
    // One by one move boundary of unsorted subarray   
    for (i = 0; i <endIdx; i++)      
    {  
        
        // Last i elements are already in place  
        for (j = 0; j < endIdx-i; j++)  
        { 
            
            if (mainArray[j] > mainArray[j+1])  
            {
                
                /*let temp=mainArray[j];
                animation.swap1 = [j, mainArray[j+1]];
                mainArray[j]=mainArray[j+1];
                animation.swap2 = [j+1, temp];
                mainArray[j+1]=temp;
                //swap(&arr[j], &arr[j+1]);  */


                const animation = {};

                animation.comparison1=[j,j+1]; 
                
                //animation.comparison2=[j,j+1]; 
                const temp=mainArray[j];
                
                animation.swap1 = [j, mainArray[j+1]];
                mainArray[j]=mainArray[j+1];
                
                animation.swap2 = [j+1, temp];
                mainArray[j+1]=temp;
                
                animation.comparison2=[j,j+1]; 
                //console.log(arrayBars[barOneIdx])
                //animation.comparison2=[i,i]; 
                animations.push(animation);

            }
            //animations.push(animation);
        }
        /*const animation = {};

        animation.comparison=[endIdx-i,endIdx-i]; 
        animations.push(animation);*/

        
   }

}  
    
 