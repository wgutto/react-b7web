import { Circle } from "./Circle"
import { Square } from "./Square"

export const Geo = () => {
    return (
        <div className="flex py-2 gap-10">
            <Square/>
            <Circle/>
        </div>
    )
}