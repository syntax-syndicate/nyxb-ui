import { Italic } from "lucide-react"

import { Toggle } from "~/registry/default/ui/toggle"

export default function ToggleOutline() {
   return (
      <Toggle variant="outline" aria-label="Toggle italic">
         <Italic className="size-4" />
      </Toggle>
   )
}
