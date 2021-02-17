import React from 'react';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';
import * as sortingbyss from '../sortingAlgorithms/sortingbyss.js';
import * as sortingbybb from '../sortingAlgorithms/sortingbybb.js';
import * as sortingbyb from '../sortingAlgorithms/sortingbybb-copy.js';
import './SortingVisualizer.css';



// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;


export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i <NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
      //array.push(i*10);
    }
    this.setState({array});
    
  }

  mergeSort() {
    const animations = sortingAlgorithms.mergeSort(this.state.array);
    const newAnimations = [];
    for(const animation of animations){
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);

    }
    const arrayBars = document.getElementsByClassName('array-bar');
    for(let i=0;i< newAnimations.length; i++) {
      //const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if(isColorChange){
        const [barOneIdx, barTwoIdx] = newAnimations[i];
      const barOneStyle =arrayBars[barOneIdx].style;
      const barTwoStyle =arrayBars[barTwoIdx].style;
      const color =i % 3 === 0 ? 'red' : 'pink';
      setTimeout(() => {
        
        barOneStyle.background = color;
        barTwoStyle.background = color;
      }, i * ANIMATION_SPEED_MS);
    }else{
      setTimeout(() => {
        const [barOneIdx, newHeight] =newAnimations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height= `${newHeight}px`;
        
       
      }, i * ANIMATION_SPEED_MS);
    
    }
  }
}
ssSort(){
  //console.log(this.state.array); 
  const animations = sortingbyss.ssSort(this.state.array);
    const newAnimations = [];
    for(const animation of animations){
      //newAnimations.push(animation.comparison);
      //newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap1);//0
      newAnimations.push(animation.comparison1);//1
      newAnimations.push(animation.swap2);//2
      newAnimations.push(animation.comparison2);//3,7,

    }
    const arrayBars = document.getElementsByClassName('array-bar');
  for(let i=0;i< newAnimations.length; i++) {
    const isColorChange = i % 2 !== 1; 
    if(isColorChange)
    {
      setTimeout(() => {
        const [barOneIdx, newHeight] =newAnimations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height= `${newHeight}px`;
        //console.log(newHeight);
       
      }, i * ANIMATION_SPEED_MS);
    }
    else{
      const isColorChang = i % 4 !== 3;
      if(isColorChang)
      {const [barOneIdx, barTwoIdx] = newAnimations[i];
      const barOneStyle =arrayBars[barOneIdx].style;
      const barTwoStyle =arrayBars[barTwoIdx].style;
      const color ='pink';
      setTimeout(() => {
        
        barOneStyle.background = color;
        barTwoStyle.background = color;
      }, i * ANIMATION_SPEED_MS);
    }
    else{
      const [barOneIdx, barTwoIdx] = newAnimations[i];
      const barOneStyle =arrayBars[barOneIdx].style;
      const barTwoStyle =arrayBars[barTwoIdx].style;
      const color ='red';
      setTimeout(() => {
        
        barOneStyle.background = color;
        barTwoStyle.background = color;
      }, i * ANIMATION_SPEED_MS);
    }
    }
    
  }
  //console.log(this.state.array);
  
}
bbSort(){
  const animations = sortingbybb.bbSort(this.state.array);
  const newAnimations = [];
  for(const animation of animations){
    //newAnimations.push(animation.comparison);
    //newAnimations.push(animation.comparison);
    
    newAnimations.push(animation.comparison1);
    newAnimations.push(animation.swap1);//0
    newAnimations.push(animation.swap2);//2
    newAnimations.push(animation.comparison2);
    //3,7,

  }
  const arrayBars = document.getElementsByClassName('array-bar');
for(let i=0;i< newAnimations.length; i++) {
  
  const isColorChange = i % 4 === 0;
  const isColorChang = i % 4 === 3;
  if(isColorChange){
    const [barOneIdx, barTwoIdx] = newAnimations[i];
    const barOneStyle =arrayBars[barOneIdx].style;
    const barTwoStyle =arrayBars[barTwoIdx].style;
    const color ='pink';
    setTimeout(() => {
    
        barOneStyle.background = color;
      barTwoStyle.background = color;
      }, i * ANIMATION_SPEED_MS);
  }
  if(isColorChang){
    const [barOneIdx, barTwoIdx] = newAnimations[i];
    const barOneStyle =arrayBars[barOneIdx].style;
    const barTwoStyle =arrayBars[barTwoIdx].style;
    const color ='blue';
    setTimeout(() => {
    
        barOneStyle.background = color;
      barTwoStyle.background = color;
      }, i * ANIMATION_SPEED_MS);
  }
  else{

    setTimeout(() => {
      const [barOneIdx, newHeight] =newAnimations[i];
      //console.log(barOneIdx);
      const barOneStyle = arrayBars[barOneIdx].style;
      barOneStyle.height= `${newHeight}px`;
      //console.log(newHeight);
     
    }, i * ANIMATION_SPEED_MS);
  //}
  
  }
}
}

recolor(){
    //arrayBars[49].style.background= 'blue';
    const arrayBarsh = document.getElementsByClassName('array-bar');
    for (let j = 0; j < NUMBER_OF_ARRAY_BARS; j++) {
      
      const barOneStyle =arrayBarsh[j].style;
      
      const color ='blue';
      setTimeout(() => {
        
        barOneStyle.background = color;
        //barTwoStyle.background = color;
      }, j * 10);
      //barOneStyle.background = color;
      
    }
    
  }
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const ergeSortedArray = sortingbyb.bbSort(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, ergeSortedArray));
    }
  }
  countarray(){
    console.log(this.state.array);
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
        style={{height: `${value}px`}}></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.ssSort()}>SS Sort</button>
        <button onClick={() => this.bbSort()}>BB Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>Test</button>
        <button onClick={() => this.recolor()}>Reset</button>
        <button onClick={() => this.countarray()}>count</button>
         </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}