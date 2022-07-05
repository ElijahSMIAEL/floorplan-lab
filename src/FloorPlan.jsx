import Bedroom from "./Bedroom"
import Bath from "./Bath"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"


const FloorPlan = () => {
  return(
    <div>
      <Bedroom bedNum='1'/>
      <Bath size='Full'/>
      <LivingRoom />
      <Kitchen />
      <Bedroom bedNum='2'/>
      <Bath size='Half'/>
      <Bedroom bedNum='3'/>
    </div>
  )
}

export default FloorPlan
