import { HomeScreen } from 'app/features/home/screen'
import { YStack } from '@tamagui/stacks'
import { Button, XStack } from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'

export default function Page() {
  return (
    <YStack>
      <XStack>
        <Button size="$6" icon={ChevronDown} circular onPress={() => {}} />
      </XStack>
    </YStack>
  )
}
