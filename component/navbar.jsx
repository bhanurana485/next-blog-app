import React from 'react'
import Head from "next/head";
import Link from 'next/link'

const Navbar = () =>{
return(
    <>
     <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="header">
        <Link href="">
        <a  className="logo">My Blog Website</a>
        </Link>
  
  <div className="header-right">
    <Link href="/"><a>Home</a></Link>
  <Link href='about-us'><a>About</a></Link>
  <Link href="/auth/login"><a>Login</a></Link>
  <Link href="/auth/register"><a>Register</a></Link>
  <Link href="/contactus"><a>Contact</a></Link>
  
  </div>
</div>


    </>
)
}
export default Navbar