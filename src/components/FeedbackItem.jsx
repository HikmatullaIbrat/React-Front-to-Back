// // {useState} is a hook that is imported in start of document
// import {useState} from 'react'

function FeedbackItem({item}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState("This is an example of feedback item")
    // const handleClick = () =>{
    //     // setRating(10 )
    //     setRating((previousNum)=>{
    //         console.log(previousNum)
    //         return previousNum + 1
    //     })
    // }

  return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
    </div>
  )
}

export default FeedbackItem