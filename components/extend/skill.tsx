import Mhtml from '../skill/html'
import Mcss  from '../skill/css'
import Mjs   from '../skill/js'
import Mjq   from '../skill/jq'
import Mphp  from '../skill/php'
import Mscss from '../skill/scss'
import Mpug  from '../skill/pug'
import Mgo   from '../skill/go'
import Mvue  from '../skill/vue'
import Mmt   from '../skill/mt'
import Mmcms from '../skill/mcms'
import Mwp   from '../skill/wp'
import Mnuxt from '../skill/nuxt'
import Mnext from '../skill/next'
import Mnode from '../skill/node'
import Mgulp from '../skill/gulp'
import Mbase from '../skill/base'
import Mfigma from '../skill/figma'
import Mreact from '../skill/react'

export default function Skill() {
  return (
    <section id="p-skill" className="u-gray has-animation" data-set-color="dark">
      <h2 className="c-title white">SKILL</h2>
      <ul className="skill__list">
          <Mhtml></Mhtml>
          <Mcss></Mcss>
          <Mjs></Mjs>
          <Mjq></Mjq>
          <Mphp></Mphp>
          <Mscss></Mscss>
          <Mpug></Mpug>
          <Mgo></Mgo>
          <Mvue></Mvue>
          <Mmt></Mmt>
          <Mmcms></Mmcms>
          <Mwp></Mwp>
          <Mnuxt></Mnuxt>
          <Mnext></Mnext>
          <Mnode></Mnode>
          <Mgulp></Mgulp>
          <Mbase></Mbase>
          <Mfigma></Mfigma>
          <Mreact></Mreact>
      </ul>
    </section>
  )
}