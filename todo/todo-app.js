
/** @jsx TinyReact.createElement */

var root = document.getElementById('root')

var step1=(
    <div>
        <h1 style={{color:"red"}}>hello</h1>
        {2===2 && <div>Success</div>}
        {2===1 && <div>Fail</div>}
    </div>
)

console.log(step1)