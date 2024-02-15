//import * as everything from "./modules.js"

/*console.log(everything.cars)
console.log(everything.default())
console.log(everything.getIndexCar(
    (function (){
        let index = window.prompt("Which index, man?")

        if(index>everything.cars.length || index<0){
            return 0
        }else{

            return index
        }

    })()
))
*/

import c from "./classmodules.js"

c.cleanCourses()
c.resetCourses()
c.setCourse("Python")
console.log(c.getCourses())