import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from'./Right'
import"./home.css"

export default function Home() {
  return (
    <>
    <div class="homepage">

      <div class="left">
        <Left />
      </div>

      <div class="middle">
        <Middle />
        </div>

      <div class="right">
        <Right/>
      </div>

      </div>
    </>
  );
}
