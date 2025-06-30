// the main is for making the 12 hr complete we need to make 360 degree rotation of an line of hour in watch
// similar;y for 1 hr=360degree/12=30degree
// now for (h)hrs=(30h+m/2)--------------------------------[IMP]

// now for minute hand 
// 60min=360degree
// 1min=6degree
// m minutes=6m(degree)

// for second hand
// 60 seconds=360degree
// 1 sec=6 degree
// s seconds=6s(degree)

// code


// setINterval means isko krte rho 1000ms means hr second baad yh task perfor kro
setInterval(()=>{
  d=new Date();
//   make functions for hours minutes and second
hTime=d.getHours();
mtime=d.getMinutes();
sTime=d.getSeconds();

// now ab sbke rotations calculate krenge by using above formulas
hRotation=30*hTime+mtime/2;
mRotation=6*mtime;
sRotation=6*sTime;
   

// rotate krwane ke liye hand ko
hour.style.transform=`rotate(${hRotation}deg)`;
minute.style.transform=`rotate(${mRotation}deg)`;
second.style.transform=`rotate(${sRotation}deg)`;
},1000);
