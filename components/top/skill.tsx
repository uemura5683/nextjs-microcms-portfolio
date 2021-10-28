import Mhtml  from '../extend/skill/html'
import Mcss   from '../extend/skill/css'
import Mjs    from '../extend/skill/js'
import Mjq    from '../extend/skill/jq'
import Mphp   from '../extend/skill/php'
import Mscss  from '../extend/skill/scss'
import Mpug   from '../extend/skill/pug'
import Mgo    from '../extend/skill/go'
import Mvue   from '../extend/skill/vue'
import Mmt    from '../extend/skill/mt'
import Mmcms  from '../extend/skill/mcms'
import Mwp    from '../extend/skill/wp'
import Mnuxt  from '../extend/skill/nuxt'
import Mnext  from '../extend/skill/next'
import Mgulp  from '../extend/skill/gulp'
import Mbase  from '../extend/skill/base'
import Mfigma from '../extend/skill/figma'
import Mreact from '../extend/skill/react'
import Mts    from '../extend/skill/ts'

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
          <Mgulp></Mgulp>
          <Mbase></Mbase>
          <Mfigma></Mfigma>
          <Mreact></Mreact>
          <Mts></Mts>
      </ul>
    </section>
  )
}