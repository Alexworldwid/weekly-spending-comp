import Barchart from "./barchart";
import Total from "./Total";

export default function spending() {
    return ( 
        <section className="spending">
            <h1 className="text-2xl font-bold mb-3">Spending - Last 7 days</h1>
            <Barchart />
            <div className="h-0.5 w-full bg-gray-200 my-3"></div>
            <Total />
        </section>
     );
}
 
