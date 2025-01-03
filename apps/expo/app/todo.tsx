import { Button } from '@my/ui'
import { YStack } from '@my/ui'
import { XStack } from '@my/ui'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import TodoScreen from 'app/features/todo/screen'
export default function Todo() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Todo',
        }}
      />
      <TodoScreen />
    </>
  )
}
