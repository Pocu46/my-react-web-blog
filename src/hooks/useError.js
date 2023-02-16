const {useState} = require("react");

export const useError = ref => {
  const [error, setError] = useState(false)

  if(ref.current.value.trim().length < 3) {
    setError(true)
    ref.current.focus()
  }

  return {error}
}