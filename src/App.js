import { render } from "@testing-library/react"

const App = () => {
//const-definitions

return (
<div>
  <Header />
  <Content />
  <Total />


</div>
)
} 

const Header = () => {
  const course = 'Half Stack application development'
return (
  <h1>{course}</h1>
)
}

/* const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  
  return(
   <><p>{part1} {exercises1}</p>
   <p>{part2} {exercises2}</p>
   <p>{part3} {exercises3}</p>
   </>
  )
}
 */
const Content = () => {

  return(
  <div>
  <Part />
  <Part />
  <Part />
  </div>
  )
}

const Part = () =>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  return (
   <p>{part1} {exercises1}</p>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
  <p>Number of Exercises {exercises1 + exercises2 + exercises3}</p>
  )
}
 



/*return (
  <div>
    <h1>{course}</h1> 
    <p>
      {part1} {exercises1}
    </p>
    <p>
      {part2} {exercicses2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
    <p>Number of exercises {exercises1 + exercicses2 + exercises3}</p>
  </div>
) 
*/



export default App;