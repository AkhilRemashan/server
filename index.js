var rect = {
    perimeter : (x, y) => (2*(x + y)),
    area : (x, y) => (x * y)
};

function solveRect (l, b) {
    console.log ("solution for rect with l = " + l + "and b = " + b);

    if (l <= 0 || b <=0 ){
        console.log ("diamentions should not b zero");
    }
    else {
        console.log("area of rect is " + rect.area(l, b));
    }
}

solveRect(2,4);
solveRect(2,0);