import React from 'react'
import BarLoader from 'react-spinners/BarLoader';
import Layout from './Layout';
import './LoaderBar.css'

const LoaderBar = ({loaderColor}) => {
  return (
  <>
    <Layout title={"Checking authentication..."}>
        <div>
        <div className="loaderbar--div">
            <center>
                <BarLoader height={4} width={200} color={loaderColor ? loaderColor : '#C1FF11'} />
                 <br/>
                  <h1>Checking authentication...</h1>
            </center>
        </div>
        </div>
    </Layout>
</>
  )
}

export default LoaderBar;