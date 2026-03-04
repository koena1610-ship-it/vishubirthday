import { motion } from "framer-motion";
import { Button } from "../Button";
import { MoveRight } from "lucide-react";

const Card = ({ text }) => {

    return (
        <div
            className="relative w-40 h-48"
        >
            <motion.div
                className="w-full h-full preserve-3d relative will-change-transform"
            >
                <div
                    className="absolute inset-0 backface-hidden bg-white p-4 shadow-xl flex flex-col justify-center text-center border-2 border-rose-100 overflow-hiden"
                >
                    <div className="h-36 overflow-auto flex items-start">
                        <p className="text-sm text-gray-700 font-medium leading-relaxed my-auto">{text}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ComplimentsScreen({ onNext }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <h2 className="text-4xl md:text-5xl text-balance font-dancing font-semibold text-rose-500/85 mb-12 z-10 text-center">
                My favorite things about you
            </h2>

            <div className="relative w-full max-w-md h-96 flex items-center justify-center">
                <div className="absolute top-0 max-[366px]:left-0 left-3 md:left-14 z-10 -rotate-6">
                    <Card
                        text="Happy advance birthday, Mr. Nirlojjo. 22 days and you officially turn 25."
                    />
                </div>
                <div className="absolute top-3 md:top-4 max-[366px]:right-0 right-4 md:right-14 z-20 rotate-12">
                    <Card
                        text="Out of all the people in this world, somehow you became my favorite human."
                    />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 -rotate-2">
                    <Card
                        text="And honestly… I still smile when you say 'I love you 3000'."
                </div>
            </div>

            <Button
                onClick={onNext}
                className="mt-8"
            >
                Tap for your next birthday surprise 🎁 <MoveRight size={18} className="mt-0.5" />
            </Button>
        </motion.div>
    );
};
