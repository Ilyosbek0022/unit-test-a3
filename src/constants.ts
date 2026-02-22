import { Section } from './types';

export const TEST_DATA: Section[] = [
  {
    id: 'grammar-1',
    title: 'Grammar',
    instruction: '1 Complete the sentences with is, are, isn\'t or aren\'t.',
    questions: [
      { id: 'g1-2', type: 'fill', instruction: '', text: '2 There [blank] no pens in the bag.', correctAnswers: ['are'] },
      { id: 'g1-3', type: 'fill', instruction: '', text: '3 There [blank] any cups.', correctAnswers: ['aren\'t'] },
      { id: 'g1-4', type: 'fill', instruction: '', text: '4 There [blank] one book here.', correctAnswers: ['is'] },
      { id: 'g1-5', type: 'fill', instruction: '', text: '5 No, there [blank] a phone in the room.', correctAnswers: ['isn\'t'] },
      { id: 'g1-6', type: 'fill', instruction: '', text: '6 Yes, there [blank] three girls in the class.', correctAnswers: ['are'] },
    ]
  },
  {
    id: 'grammar-2',
    title: 'Grammar',
    instruction: '2 Complete the conversations.',
    questions: [
      { id: 'g2-2-alt', type: 'fill', instruction: '', text: 'B: Yes, there [blank].', correctAnswers: ['is'] },
      { id: 'g2-3', type: 'fill', instruction: '', text: 'A: Are there [blank] chairs in the room?', correctAnswers: ['any'] },
      { id: 'g2-4', type: 'fill', instruction: '', text: 'B: No, there [blank].', correctAnswers: ['aren\'t'] },
      { id: 'g2-5', type: 'fill', instruction: '', text: 'A: How [blank] rooms are there?', correctAnswers: ['many'] },
      { id: 'g2-6', type: 'fill', instruction: '', text: 'B: There [blank] five rooms.', correctAnswers: ['are'] },
      { id: 'g2-7', type: 'fill', instruction: '', text: 'A: Is there [blank] TV?', correctAnswers: ['a'] },
      { id: 'g2-8', type: 'fill', instruction: '', text: 'B: No, there [blank].', correctAnswers: ['isn\'t'] },
      { id: 'g2-9', type: 'fill', instruction: '', text: 'A: [blank] there any boxes?', correctAnswers: ['Are'] },
      { id: 'g2-10', type: 'fill', instruction: '', text: 'B: No, there [blank].', correctAnswers: ['aren\'t'] },
    ]
  },
  {
    id: 'grammar-3',
    title: 'Grammar',
    instruction: '3 Put the words in the correct order to make sentences and questions.',
    questions: [
      { id: 'g3-2', type: 'order', instruction: '2 bag / The / expensive / isn\'t', words: ['bag', 'The', 'expensive', 'isn\'t'], correctAnswers: ['The bag isn\'t expensive.'] },
      { id: 'g3-3', type: 'order', instruction: '3 is / computer / This / old / an', words: ['is', 'computer', 'This', 'old', 'an'], correctAnswers: ['This is an old computer.'] },
      { id: 'g3-4', type: 'order', instruction: '4 not / phone / good / It\'s / a', words: ['not', 'phone', 'good', 'It\'s', 'a'], correctAnswers: ['It\'s not a good phone.'] },
      { id: 'g3-5', type: 'order', instruction: '5 supermarket / There / one / is / big', words: ['supermarket', 'There', 'one', 'is', 'big'], correctAnswers: ['There is one big supermarket.'] },
      { id: 'g3-6', type: 'order', instruction: '6 and / chairs / desks / are / new / There', words: ['and', 'chairs', 'desks', 'are', 'new', 'There'], correctAnswers: ['There are new desks and chairs.', 'There are new chairs and desks.'] },
      { id: 'g3-7', type: 'order', instruction: '7 town / your / any / there / Are / cafés / good / in', words: ['town', 'your', 'any', 'there', 'Are', 'cafés', 'good', 'in'], correctAnswers: ['Are there any good cafés in your town?'] },
    ]
  },
  {
    id: 'vocabulary-4',
    title: 'Vocabulary',
    instruction: '4 Complete the place words.',
    questions: [
      { id: 'v4-2', type: 'spelling', instruction: '2 b _ _ k _ h _ p', clue: 'b _ _ k _ h _ p', correctAnswers: ['bookshop'] },
      { id: 'v4-3', type: 'spelling', instruction: '3 r _ _ t _ u _ _ _ t', clue: 'r _ _ t _ u _ _ _ t', correctAnswers: ['restaurant'] },
      { id: 'v4-4', type: 'spelling', instruction: '4 s _ _ t _ _ n', clue: 's _ _ t _ _ n', correctAnswers: ['station'] },
      { id: 'v4-5', type: 'spelling', instruction: '5 c _ _ _ m a', clue: 'c _ _ _ m a', correctAnswers: ['cinema'] },
      { id: 'v4-6', type: 'spelling', instruction: '6 h _ _ _ e', clue: 'h _ _ _ e', correctAnswers: ['house'] },
      { id: 'v4-7', type: 'spelling', instruction: '7 p _ _ k', clue: 'p _ _ k', correctAnswers: ['park'] },
      { id: 'v4-8', type: 'spelling', instruction: '8 b _ _ k', clue: 'b _ _ k', correctAnswers: ['bank'] },
      { id: 'v4-9', type: 'spelling', instruction: '9 m a _ k _ _', clue: 'm a _ k _ _', correctAnswers: ['market'] },
      { id: 'v4-10', type: 'spelling', instruction: '10 h _ _ _ l', clue: 'h _ _ _ l', correctAnswers: ['hotel'] },
    ]
  },
  {
    id: 'vocabulary-5',
    title: 'Vocabulary',
    instruction: '5 Complete the text with the words in the box.',
    options: ['bathroom', 'bedroom', 'cheap', 'kitchen', 'small', 'toilet', 'TV', 'wifi'],
    questions: [
      { id: 'v5-text', type: 'cloze', instruction: 'My flat is 1 small, but it isn\'t expensive, it\'s 2 [blank]. There is one 3 [blank] with my bed, and there is a nice living room with a 4 [blank]. In the 5 [blank] there is an oven, and in the 6 [blank] there is a 7 [blank] and a shower. There is good 8 [blank] for my computer. My flat is nice!', correctAnswers: ['cheap', 'bedroom', 'TV', 'kitchen', 'bathroom', 'toilet', 'wifi'] },
    ]
  },
  {
    id: 'vocabulary-6',
    title: 'Vocabulary',
    instruction: '6 Complete the sentences with the correct adjective. The first letter is given.',
    questions: [
      { id: 'v6-2', type: 'fill', instruction: '', text: '2 It\'s a big flat. It\'s not s[blank].', correctAnswers: ['mall'] },
      { id: 'v6-3', type: 'fill', instruction: '', text: '3 They\'re expensive. They aren\'t c[blank].', correctAnswers: ['heap'] },
      { id: 'v6-4', type: 'fill', instruction: '', text: '4 This computer is good. It isn\'t b[blank].', correctAnswers: ['ad'] },
      { id: 'v6-5', type: 'fill', instruction: '', text: '5 The TV is old. It isn\'t n[blank].', correctAnswers: ['ew'] },
    ]
  },
  {
    id: 'function-7',
    title: 'Function',
    instruction: '7 Complete the conversations about asking and giving directions with the words in the box.',
    options: ['down', 'Excuse', 'It\'s', 'near', 'next', 'one', 'past', 'right', 'straight', 'turn', 'Where\'s'],
    questions: [
      { id: 'f7-text', type: 'cloze', instruction: 'A: Is there a café 1 near here?\nB: Yes, there\'s 2 [blank] on Green Street. Go 3 [blank] on and 4 [blank] left after the bank. The café is 5 [blank] to the cinema.\n\nA: 6 [blank] me. 7 [blank] the supermarket, please?\nB: 8 [blank] on Station Road. Go 9 [blank] the park and turn 10 [blank]. Go 11 [blank] this road. The supermarket is on the left.', correctAnswers: ['one', 'straight', 'turn', 'next', 'Excuse', 'Where\'s', 'It\'s', 'past', 'right', 'down'] },
    ]
  }
];
