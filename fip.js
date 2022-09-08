function calculateAreaRectangle() {
    let width = document.getElementById("width").value;
    let length = document.getElementById("length").value;
    let area = (width * length).toFixed(2);
    document.getElementById("area").value = area;
  }

function calculatePerimeterRectangle() {
    let width = document.getElementById ("width").value;
    let length = document.getElementById ("length").value;
    let perimeter = (w+w+l+l).toFixed(3);
    document.getElementById("perimeter").value = perimeter;
}

function calculateAreaCircle() {
    let radius = document.getElementById("radius").value;
    let areaC = (Math.PI  * radius * radius).toFixed(2);
    document.getElementById("areaC").value = areaC;
}

function calculatePerimeterCircle(){
    let radius=document.getElementById("perimeter").value;
    let perimeterC=(2*Math.PI *radius *radius).toFixed(3);
    document.getElementById("perimeterC").value = perimeterC;
}
    
function calculateAreaTriangle() {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let areaT = ((base * height) / 2).toFixed(2);
    document.getElementById("areaT").value = areaT;
  }
  
  function calculatePerimeterTriangle(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let base = document.getElementById("base").value;
    let perimeterT = ((width+height+base)/2).toFixed(3);
    document.getElementById("perimeterT").value = perimeterT;
  }




  