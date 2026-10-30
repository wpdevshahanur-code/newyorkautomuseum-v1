/*** 
 * Title Rollover 
 **/

 const rolloverList = [
    'Wheels & Rims Wing',
    'Engine & Transmission Wing',
    'Innovation & Technology Wing',
    'Body & Chassis Wing',
    'Suspension Wing',
    'EV & Alternative Fuel Wing',
    'Autonomous Driving Wing',
    'Theatre/Stage Wing',
    'History of Automotive Wing',
    'Future of Automotive Wing',
    'Restoration Wing'
];

const rolloverCount = rolloverList.length;

 window.onload = init();

function init(){
    setTimeout(function(){
        rolloverTitle(0);
    }, 3700);
}
function rolloverTitle(num){
    var elem = document.querySelector('#rollovers');
    var nextTitle = num+1
    if( nextTitle >= rolloverCount){
        nextTitle = 0;
    }
    
    TweenLite.to(elem, 0.2, {
        'transform' : 'rotateX(90deg)',
        ease:Power2.easeOut
    });
    setTimeout(function(){
        elem.innerHTML = rolloverList[nextTitle];
        TweenLite.to(elem, 0.2, {
            'transform' : 'rotateX(0deg)',
            ease:Power2.easeOut
        });
        setTimeout(function(){
            rolloverTitle(nextTitle);
        }, 2700);
    }, 200);

}