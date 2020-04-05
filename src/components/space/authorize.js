import React, { useState } from "react"

const Authorize = ({ authorize }) => {
  const [password, setPassword] = useState("")

  return (
    <div>
      <h3>Authorize yourself</h3>
      <form
        method="post"
        onSubmit={event => {
          event.preventDefault()
          authorize(password)
        }}
      >
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default Authorize
