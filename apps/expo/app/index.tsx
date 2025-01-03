import { Button } from '@my/ui'
import { YStack } from '@my/ui'
import { XStack, Text } from '@my/ui'
import { HomeScreen } from 'app/features/home/screen'
import { Link, Stack } from 'expo-router'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <YStack>
        <XStack>
          <Button size="$6" icon={ChevronDown} circular onPress={() => {}} />
        </XStack>
        <Link href="/todo">
          <Text>Todo</Text>
        </Link>
      </YStack>
    </>
  )
}
