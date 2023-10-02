console.log("connected");
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

    //Math
    const area=width*length;
    console.log(area);

    // show Rectangle Area
    const areaSpan=document.getElementById('rectangle-area');
    areaSpan.innerText=area;
}
