import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="container mx-auto text-center px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
          <div className="pb-8 text-center">
            <div className="flex justify-center">
              <img src="https://i.ibb.co/7vWVZzV/cityimage.jpg" width="100%"/>
            </div>
            <span className="opacity-50 text-xs"><a href="https://unsplash.com/@seakei" target="_blank">Shot by CK Yeo on Unsplash</a></span>
          </div>

          <div className="pb-16 px-16 sm:px-0">
              <h1 className="text-xl">We are Malaysians.</h1><br/>
              <strong>🇲🇾 Malaysians Who Make</strong> is the place to discover talented, 
              passionate Malaysians who strive to build and create things. 
              From artists, writers, speakers to indie makers, let's grow a community 
              of like-minded people who make the world a better place.<br/><br/>
              <h3>Built with Malaysians in mind.</h3><br/>
              Fellow makers - connect with people just like you.<br/>
              Recruiters - find potential candidates for your company or project.<br/>
              Event organizers - use this to find speakers for your next event.<br/>
              Youtubers &amp; Podcasters - use this to find your next guest. :)
          </div>
          <div className="pb-16 px-16 sm:px-0">
              <h2>Join the initiative lah.</h2><br/>
              Want to be part of this initiative?&nbsp; <a href="https://forms.gle/tGzbZJaden9ZCSZe7" 
              target="_blank" className="textlink">Nominate someone/yourself.</a><br/>
              If you'd like to be removed from the directory,&nbsp;
              <a href="https://forms.gle/umFovh3P3AVtvFJ7A" target="_blank" className="textlink">let us know.</a><br/>
              Follow us on <a href="https://twitter.com/malaysianswhomake" target="_blank" className="textlink">Twitter</a><br/>
              Feedback or idea?&nbsp;<a href="https://forms.gle/LeWjrJG8fXkC1Ud77" target="_blank"
              className="textlink">Share with us</a>.<br/>
          </div>
          <div className="pb-16 px-12 sm:px-0">
              <h2>Inspiration</h2><br/>
              This site is inspired by these great initiatives.<br/>
              Check them out as well!<br/>
              <div className="py-8 px-24 md:px-0 sm:px-0">
                    <div className="flex pb-8 grid-cols-3 text-left font-semibold sm:text-s">
                      <div className="inline-block px-4 sm:px-2">
                        <a href="https://www.adplist.org/" target="_blank">
                          <img src="https://i.ibb.co/NVqLDhD/adplist.png" alt="adplist" className="pb-1"/>
                          <span>Amazing Design People List</span>
                        </a>
                      </div>
                      <div className="inline-block px-4 sm:px-2">
                        <a href="https://womenwho.design/" target="_blank">
                          <img src="https://i.ibb.co/Q8GMzNh/womenwhodesign.png" alt="womenwhodesign" className="pb-1"/>
                          <span>Women Who Design</span>
                        </a>
                      </div>
                      <div className="inline-block px-4 sm:px-2">
                        <a href="https://www.latinxswhodesign.com/" target="_blank">
                          <img src="https://i.ibb.co/yV5wHtT/latinxswhodesign.png" alt="latinxswhodesign" className="pb-1"/>
                          <span>Latinxs Who Design</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex grid-cols-3 text-left font-semibold sm:text-s">
                      <div className="inline-block px-4 sm:px-2">
                        <a href="https://peopleofcraft.com/" target="_blank">
                          <img src="https://i.ibb.co/MZdGkvC/peopleofcraft.png" alt="peopleofcraft" className="pb-1"/>
                          <span>People of Craft</span>
                        </a>
                      </div>
                      <div className="inline-block px-4 sm:px-2">
                        <a href="https://queerdesign.club/" target="_blank">
                          <img src="https://i.ibb.co/LQC63bg/queerdesignclub.png" alt="queerdesignclub" className="pb-1"/>
                          <span>Queer Design Club</span>
                        </a>
                      </div>
                      <div className="inline-block px-4 sm:px-2">
                        <a href="https://blackswho.design/" target="_blank">
                          <img src="https://i.ibb.co/5TbXprx/blackswhodesign.png" alt="latinxswhodesign" className="pb-1"/>
                          <span>Blacks Who Design</span>
                        </a>
                      </div>
                    </div>
              </div>
          </div>


          <div className="pb-16 px-16 sm:px-0">
              <h2>Credits</h2><br/>
              Designed and coded by <a href="https://twitter.com/rachelhxw" target="_blank"
              className="textlink">Rachel How</a>.<br/>
              Special thanks to <a href="https://github.com/vinzloh" target="_blank"
              className="textlink">Vinz Loh</a> 
              &nbsp;for major help on code &amp; mentoring me.<br/>
              You can check out the source code on&nbsp;<a href="https://github.com/RachelHow/malaysianswhomake" 
              target="_blank" className="textlink">GitHub</a>.
          </div>
          <div>
              <a href="/" className="font-semibold">&lt; GO BACK</a>
          </div>
      </div>
    </Layout>
  );
}

export default About