import TypingAnimation from "~/registry/default/ui/typing-animation"

export default async function TextRevealDemo() {
   return (
      <TypingAnimation
         className="text-4xl font-bold text-black dark:text-white"
         text="Typing Animation"
      />
   )
}
