import '../../../node_modules/react-vis/dist/style.css'

import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis'

export const Chart = () => {

    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 },
        { x: 10, y: 10},
        { x: 11, y: 15 },
        { x: 12, y: 14 },
        { x: 13, y: 19 },
        { x: 14, y: 11 },
        { x: 15, y: 17 },
        { x: 16, y: 16 },
        { x: 17, y: 13 },
        { x: 18, y: 12 },
        { x: 19, y: 10 }
    ]

    return (
        <div style={{ marginTop: "15px" }}>
            <XYPlot height={300} width={800}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="purple" />
                <LineSeries data={data} color="yellow" />
            </XYPlot>
        </div>
    )
}
