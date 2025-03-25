import { Card, CardContent } from "@/components/ui/card"

interface CardTechnologyProps {
  technology: string
}

export function CardTechnology({ technology }: CardTechnologyProps) {
  return (
    <Card className="flex-1 min-w-[120px] max-w-[150px] py-2">
      <CardContent className="px-4 py-0 text-sm text-center">
        <span className="cursor-default text-gray-500">{technology}</span>
      </CardContent>
    </Card>
  )
}