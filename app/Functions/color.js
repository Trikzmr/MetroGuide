import {color, connections} from "./Lists";

export const fillclr = (path) =>
{
    color.length = 0;
    let l = 0;
    let r = l+1;

    while(r<path.length)
    {
        color.push(findcolor(path[l], path[r]));
        l++;
        r++;
    }
    console.log("color: " + color);
}
//#0000FFB3
function findcolor(l, r) {
    for (let i = 0; i < connections.length; i++) {
      if ((l === connections[i][0] && r === connections[i][1]) || (l === connections[i][1] && r === connections[i][0])) {
        if (i < 25) {
          return "#0000FFB3";
        } else if (i >= 25 && i < 41) {
          return "#00FF0066";
        } else if (i >= 41 && i < 51) {
          return "#FF69B466";
        } else if (i >= 51 && i < 63) {
          return "#80008099";
        } else if (i >= 63 && i < 85) {
          return "#FFA50066";
        } else if (i >= 85) {
          return "#FF000066";
        }
      }
    }
    return "defaultColor"; // Default color if no match found
  }