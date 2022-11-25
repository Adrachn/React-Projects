// import { useState } from "react"
// // we use the copy to cipboard library that does all the work for us
// //import copy from "copy-to-clipboard"
// import { CopyToClipboard } from "react-copy-to-clipboard";

// export default function useCopyToClipboard() {
//   const [value, setValue] = useState()
//   const [success, setSuccess] = useState()

//   const copyToClipboard = (text, options) => {
//     const result = CopyToClipboard/*copy*/(text, options)
//     if (result) setValue(text)
//     setSuccess(result)
//   }

//   return [copyToClipboard, { value, success }]
// }