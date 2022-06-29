import React from 'react';
import { VictoryChart, VictoryBar } from "victory";





export default function Chart() {
  return (
    <div>
        <VictoryChart domainPadding={25}>
            <VictoryBar
                categories={{
                x: ["birds", "cats", "dogs", "fish", "frogs"]
                }}
                data={[
                {x: "cats", y: 1},
                {x: "dogs", y: 2},
                {x: "birds", y: 3},
                {x: "fish", y: 2},
                {x: "frogs", y: 1}
                ]}
            />
        </VictoryChart>





    </div>
  )
}
