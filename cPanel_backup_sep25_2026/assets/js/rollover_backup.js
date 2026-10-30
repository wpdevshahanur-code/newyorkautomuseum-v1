/*** 
 * Title Rollover 
 **/

 const rolloverList = [
    'The History & Future of EV',
    'World Motorsport Hall of Fame',
    'The History & Future of Brakes',
    'The History & Future of Engines and Motors',
    'The History & Future of Transmissions',
    'The History & Future of Tires',
    'The History & Future of Fuels',
    'The Future of Transportation',
    'The E-Mobility Autonomous & AI Wing'
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