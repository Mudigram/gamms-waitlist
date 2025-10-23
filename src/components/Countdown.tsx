import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = { days: 10, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="pt-6 border-t border-white/10">
            <div className="flex justify-center gap-5 sm:gap-6 text-lime-400 font-semibold text-lg">
                <div className="text-center">
                    <p>{timeLeft.days}</p>
                    <span className="block text-xs text-gray-500">DAYS</span>
                </div>
                <div className="text-center">
                    <p>{timeLeft.hours}</p>
                    <span className="block text-xs text-gray-500">HOURS</span>
                </div>
                <div className="text-center">
                    <p>{timeLeft.minutes}</p>
                    <span className="block text-xs text-gray-500">MINUTES</span>
                </div>
                <div className="text-center">
                    <p>{timeLeft.seconds}</p>
                    <span className="block text-xs text-gray-500">SECONDS</span>
                </div>
            </div>
            <p className="text-gray-500 text-xs mt-2">
                LEFT UNTIL FULL RELEASE
            </p>
        </div>
    );
}
