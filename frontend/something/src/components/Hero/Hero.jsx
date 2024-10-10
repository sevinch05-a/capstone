import React from 'react'
import './Hero.css'
import hand_icon from '/hand.jpg'
import arrow_icon from '/arrow-icon.jpg'
// import hero_video from '/download3.mp4'

export const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
        </div>


        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" id='arrow'/>
        </div>

       </div>
       <div className="hero-right">
        <video src="https://v45.tiktokcdn-us.com/1a50758b38b836053e6b99b47c0655ff/6705e3b8/video/tos/alisg/tos-alisg-pve-0037c001/oIUDOGJsEvFgI4FgmW1AkfXfN96RBYE5KQB34I/?a=1180&bti=OjR2KXMxaGRzZ3dAajo6NkAvOm1mXm92aSsxcWAjMTQzYA%3D%3D&ch=0&cr=0&dr=0&er=0&lr=all&net=0&cd=0%7C0%7C0%7C0&cv=1&br=4388&bt=2194&cs=0&ds=3&ft=LpcNvz4HhWH6BXIoGlLo0PD1&mime_type=video_mp4&qs=0&rc=OThpNTRlOGY4OGY0OzRpZEBpanQ7aXc5cnBxdTMzODczNEA0Ni01LTUxNWMxMDEwXl4yYSNnNS8wMmQ0cmZgLS1kMTFzcw%3D%3D&vvpl=1&l=202410082000123902CF3F6808000BA559&btag=e0008d000" autoPlay loop muted/>
        <video src="https://v45.tiktokcdn-us.com/8a66ae87f0315cc132a0aa79770b6b7e/6705f675/video/tos/useast2a/tos-useast2a-ve-0068c004/ogEjjXI51fTczRDFCgfcFwASgCQNRGQfCt8NaI/?a=1180&bti=OjR2KXMxaGRzZ3dAajo6NkAvOm1mXm92aSsxcWAjMTQzYA%3D%3D&ch=0&cr=0&dr=0&er=0&lr=all&net=0&cd=0%7C0%7C0%7C0&cv=1&br=2472&bt=1236&cs=0&ds=6&ft=LpcNvz4HhWH6BRp.GlLo0PD1&mime_type=video_mp4&qs=0&rc=Njg0ZjNpPGY8aTs4ZDxnZEBpMzk5NnQ5cnFwdTMzNzczM0AtLzY0Mi1jXmAxMTJgYzAvYSNrMmZwMmRzZHBgLS1kMTZzcw%3D%3D&vvpl=1&l=2024100821195982B6D4180313C50D73D7&btag=e0008d000" autoPlay loop muted/>

       </div>
        </div>
  )
}

export default Hero;
