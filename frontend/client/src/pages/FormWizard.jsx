import {useState} from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import ProgressBar from "../components/ProgressBar";
import {motion} from "framer-motion";

export default function FormWizard(){
    const [step,setStep] = useState(1);
    const [form,setform]=useState({});
    const next=(data)=>{
        setform({...form,...data});
        setStep(step+1);
    };
    const back=()=>setStep(step-1);
    return(
        <div className="min_h-screen flex itmes-center justify-center bg-slate-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w--2xl">
                <ProgressBar step={step} />
                <motion.div
                key={step}
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.4}}>
                    {step===1 && <Step1 next={next} />}
                    {step===2 && <Step2 next={next} back={back} />}
                    {step===3 && <Step3 next={next} back={back}  />}
                    {step===4 && <Step4 data={form} back={back}  />}

                </motion.div>
        </div>
        </div>
    );
}