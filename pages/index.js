import React, { useEffect, useState } from 'react'

const Home = ({GIPSecret}) => {
  const [APISecret, setApiSecret] = useState(null);
  
  useEffect(() => {
    async function getApiSecret() {
      const res = await fetch('/api/')
      const APISecret = await res.json()
      setApiSecret(APISecret)
      console.log(res.json())
    }
    getApiSecret();
  }, []);

  return (
    <div>
      <div>
        <p>
          Api Secret:&nbsp; {APISecret
            ? <span><b>{APISecret.APISecret}</b></span>
            : <span>undefined</span>}
        </p>
      </div>
      <div>
        <p>
          GIP Secret:&nbsp; {GIPSecret
            ? <span><b>{GIPSecret}</b></span>
            : <span>undefined</span>}
        </p>
      </div>
    </div>
  )
}

Home.getInitialProps =  () => {
  const GIPSecret = process.env.GIPSecret
  return {GIPSecret}
}

export default Home
