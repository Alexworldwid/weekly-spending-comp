import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export default function Balance() {
    return ( 
        <section className="balance">
            <div className="">
                <p className="text-slate-200 mb-2">My balance</p>
                <p className="text-white text-3xl">$921.48</p>
            </div>
            <div>
                <Image src={logo} alt="logo" width={70} height='auto' quality={100} />
            </div>
        </section>
     );
}
 
