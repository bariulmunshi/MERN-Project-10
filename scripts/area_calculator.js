function calculateTriangleArea(){
    //get triangle base value
    const baseField=document.getElementById('triangle-base');
    const baseValueText=baseField.value;
    const base =parseFloat(baseValueText);
    console.log(base); 
    //get triangle base value
    const heightField=document.getElementById('triangle-height');
    const heightValueText=heightField.value;
    const height =parseFloat(heightValueText);
    console.log(height); 

    //Math
    const area=0.5*base* height;
    console.log(area);

    // show Triangle Area
    const areaSpan=document.getElementById('triangle-area');
    areaSpan.innerText=area;

    addToCalculationEntry("Triangle",area);
}
function calculateRectangleArea(){
    //get Rectangle width value
    const widthField=document.getElementById('rectangle-width');
    const widthValueText=widthField.value;
    const width =parseFloat(widthValueText);
    console.log(width); 
    //get Rectangle length value
    const lengthField=document.getElementById('rectangle-length');
    const lengthValueText=lengthField.value;
    const length =parseFloat(lengthValueText);
    console.log(length); 

    //validate input:width & length
    if(isNaN(width) || isNaN(length)){
        // console.log('width is not a number')
        alert('Please enter a number');
        return;
    }

    //Math
    const area=width*length;
    console.log(area);

    // show Rectangle Area
    const areaSpan=document.getElementById('rectangle-area');
    areaSpan.innerText=area;
    addToCalculationEntry("Rectangle",area);

}


//reusable function to remove duplicates code
function calculateParallelogramArea(){
    const base=getInputValue('parallelogram-base');
    // console.log(base);
    const height=getInputValue('parallelogram-height');
    //validate
    if(isNaN(base) || isNaN(height)) {
        alert('please enter number');
        return ;    
    }
    const area = base*height;
    setElementInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEntry("Parallelogram",area);
}
//for ellipse
function calculateEllipseArea(){
    const majorRadius=getInputValue('ellipse-major-radius');

    const minorRadius=getInputValue('ellipse-minor-radius')
    
    const area=3.14*majorRadius*minorRadius;

    setElementInnerText('ellipse-area',area);
    addToCalculationEntry("Ellipse",area);
}

//reusable get input value field in number
function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}

//reusable set span, p, div, etc text
function setElementInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area; 
}


// add to calculation entry 

function addToCalculationEntry(areaType,area){
    console.log(areaType+" "+area);
    const calculationEntry = document.getElementById('calculation-entry')
    const count =calculationEntry.childElementCount;
    const p=document.createElement('p')
    p.classList.add('my-4');
    // p.innerHTML=areaType+" "+ area;
    p.innerHTML=`${count+1}. ${areaType} ${area} cm<sup>2</sup>  <button class="btn btn-success btn-sm">Convert</button>`;
    calculationEntry.appendChild(p);
}