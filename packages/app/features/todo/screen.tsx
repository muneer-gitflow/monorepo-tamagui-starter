import React from 'react'
import { YStack, XStack, Text, Card } from 'tamagui'

// Sample todo data (you can replace this with your actual data)
const todos = [
  { id: 1, title: 'Learn Tamagui', description: 'Master the UI framework' },
  { id: 2, title: 'Build Todo App', description: 'Create a responsive todo app' },
  { id: 3, title: 'Write Tests', description: 'Add unit tests for components' },
  { id: 4, title: 'Deploy App', description: 'Deploy to production' },
  { id: 5, title: 'Learn Tamagui', description: 'Master the UI framework' },
  { id: 6, title: 'Build Todo App', description: 'Create a responsive todo app' },
  { id: 7, title: 'Write Tests', description: 'Add unit tests for components' },
  { id: 8, title: 'Deploy App', description: 'Deploy to production' },
  { id: 9, title: 'Learn Tamagui', description: 'Master the UI framework' },
  { id: 10, title: 'Build Todo App', description: 'Create a responsive todo app' },
  { id: 11, title: 'Write Tests', description: 'Add unit tests for components' },
  { id: 12, title: 'Deploy App', description: 'Deploy to production' },
  { id: 13, title: 'Learn Tamagui', description: 'Master the UI framework' },
  { id: 14, title: 'Build Todo App', description: 'Create a responsive todo app' },
  { id: 15, title: 'Write Tests', description: 'Add unit tests for components' },
  { id: 16, title: 'Deploy App', description: 'Deploy to production' },
  { id: 17, title: 'Learn Tamagui', description: 'Master the UI framework' },
  { id: 18, title: 'Build Todo App', description: 'Create a responsive todo app' },
  { id: 19, title: 'Write Tests', description: 'Add unit tests for components' },
  { id: 20, title: 'Deploy App', description: 'Deploy to production' },
]

export default function TodoScreen() {
  return (
    <YStack padding="$4" gap="$4" alignItems="center" width="100%">
      <YStack maxWidth={1400} width="100%">
        <Text fontSize="$8" fontWeight="bold">
          My Todos
        </Text>

        <XStack
          flexWrap="wrap"
          gap="$4"
          $sm={{
            marginTop: '$4',
            justifyContent: 'flex-start',
          }}
          $gtSm={{
            marginTop: '$12',
            justifyContent: 'center',
          }}
        >
          {todos.map((todo) => (
            <Card
              key={todo.id}
              elevate
              bordered
              animation="bouncy"
              scale={0.9}
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              $sm={{ width: '100%' }}
              $gtSm={{ width: 250 }}
            >
              <Card.Header padded>
                <Text fontSize="$6" fontWeight="bold">
                  {todo.title}
                </Text>
              </Card.Header>
              <Card.Footer padded>
                <Text fontSize="$4" opacity={0.8}>
                  {todo.description}
                </Text>
              </Card.Footer>
            </Card>
          ))}
        </XStack>
      </YStack>
    </YStack>
  )
}
