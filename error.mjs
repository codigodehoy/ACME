import { readFile } from "fs/promises"



// I said You don't want to use it
process.on("uncaughtException", (e)=>{
  console.error(e)
});
