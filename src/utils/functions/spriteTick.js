// https://www.youtube.com/watch?v=QagmI1dUgr4
let x = 380, y = 0, x1 = 0;
let tick_count = 0, tick_count1 = 0, tick_count2 = 0;
 
// let  sprite;
// export function tick(ctx, sprite) {
//     x = (x === 9984 ? 0 : x + 384)
//     ctx.drawImage(sprite, x, 300, 120, 150, 15,15, 130, 130);
//     requestAnimationFrame(tick)
// }
//  -- размеры листа спрайтов  ----
// 10368/27 = 384
// 10368 - 384 = 9984
export function tick() {
    if(tick_count >  5){
        // x = (x === 9984 ? 0 : x + 384)
        x = (x === 9120 ? 0 : x + 380)
        tick_count = 0;
        // x = (x === 6144 ? 0 : x + 384)
    }
    tick_count +=1;
    // ctx.drawImage(sprite, x, 300, 120, 150, 15,15, 130, 130);
    // requestAnimationFrame(tick)
    return x
}

//  --  размеры   -----------
// 860 х 740 - весь;  215 х 185- один спрайт
// 740 - 185 = 555 -отнимаем последний лишний шаг
export function tickVertical() {
    if(tick_count1 >  5){
        y = (y === 555 ? 0 : y + 185)
        // x = (x === 10368 ? 0 : x + 384)
        tick_count1 = 0;
        // x = (x === 6144 ? 0 : x + 384)
    }
    tick_count1 +=1;
    // ctx.drawImage(sprite, x, 300, 120, 150, 15,15, 130, 130);
    // requestAnimationFrame(tick)
    return y
}

//  --  размеры   -----------
// 860 х 740 - весь;  215 х 185- один спрайт
// 860 - 215 = 645 -отнимаем последний лишний шаг
export function tickHorizontal() {
    if(tick_count2 >  10){
        x1 = (x1 === 690 ? 0 : x1 + 230)
        // x = (x === 10368 ? 0 : x + 384)
        tick_count2 = 0;
        // x = (x === 6144 ? 0 : x + 384)
    }
    tick_count2 +=1;
    // ctx.drawImage(sprite, x, 300, 120, 150, 15,15, 130, 130);
    // requestAnimationFrame(tick)
    return x1
}
//   100x500
let y2 = 0, tick_count3 = 0;
export function tickSimple() {
    if(tick_count3 >  10){
        y2 = (y2 === 400 ? 0 : y2 + 100)
        // x = (x === 10368 ? 0 : x + 384)
        tick_count3 = 0;
        // x = (x === 6144 ? 0 : x + 384)
    }
    tick_count3 +=1;
    return y2
}

let x2 = 2000, tick_count4 = 0;
export function tick2() {
    if(tick_count4 >  5){
        x2 = (x2 === 9000 ? 0 : x2 + 1000)
        tick_count4 = 0;
    }
    tick_count4 +=1;
    return x2
}