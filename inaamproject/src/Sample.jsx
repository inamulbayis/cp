import { Button, TextField } from "@mui/material";
import React from "react";

function Sample() {
  return( 
    <>
      {/* <div className="flex gap-4">
        <div className="grid grid-colos-3 gap-3">
          <div className="text-amber-400 bg-amber-900 border-amber-650 w-[100px] h-[100px]">Hello Google</div>
          <div className="text-green-300">welcome to the website
            </div></div></div> */}
      <Button>Click</Button>
      <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button>Primary</Button>
<Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    
      <Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>

   </>
  )
}
      export default Sample
 


