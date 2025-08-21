"use client"


const SPRING = {
    type: "spring" as const,
    stiffness: 130.40,
    damping: 14.50,
    mass: 1,
};

const SubmissionStateMessage = ({ value, reset }: { value: ActionResult<string> | null, reset: () => void }) => {
    
}