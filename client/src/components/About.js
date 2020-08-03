import React, {useEffect, useState} from 'react'
import { getAboutpage } from '../api/api'

function About() {
  const [body, setbody] = useState(null)
  useEffect(() => {
    getAboutpage().then(res => setbody(res.data))
  }, [body])
  return(
    <div>
      <pre>{body ? body.body : null}</pre>
    </div>
  )
}
export default About