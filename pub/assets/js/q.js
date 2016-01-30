/**
 * Created by seva on 28.01.16.
 */
var questionData = [
    {
        'number': 1,
        'text': 'I ____ 22 years old.',
        'answers': [
            {'text': 'am'},
            {'text': 'is'},
            {'text': 'are'},
        ],
        'answer_key': 'am'
    },
    {
        'number': 2,
        'text': '____ you live in Paris?',
        'answers': [
            {'text': 'Does'},
            {'text': 'Do'},
            {'text': 'Are'},
        ],
        'answer_key': 'Do'
    },
    {
        'number': 3,
        'text': 'He often ____ to the cinema.',
        'answers': [
            {'text': 'gos'},
            {'text': 'go'},
            {'text': 'goes'},
        ],
        'answer_key': 'goes'
    },
    {
        'number': 4,
        'text': 'What’s ___ job?',
        'answers': [
            {'text': 'she'},
            {'text': 'her'},
            {'text': 'he'},
        ],
        'answer_key': 'her'
    },
    {
        'number': 5,
        'text': 'How much does it ___?',
        'answers': [
            {'text': 'costs'},
            {'text': 'cost'},
            {'text': 'costed'},
        ],
        'answer_key': 'cost'
    },
    {
        'number': 6,
        'text': 'There are two ___ on the wall.',
        'answers': [
            {'text': 'photos'},
            {'text': 'photo'},
            {'text': 'photoes'},
        ],
        'answer_key': 'photos'
    },
    {
        'number': 7,
        'text': 'We ___ to Japan last summer.',
        'answers': [
            {'text': 'go'},
            {'text': 'went'},
            {'text': 'going'},
        ],
        'answer_key': 'went'
    },
    {
        'number': 8,
        'text': 'My mum ___ TV at the moment.',
        'answers': [
            {'text': 'watches'},
            {'text': 'watched'},
            {'text': 'is watching'},
        ],
        'answer_key': 'is watching'
    },
    {
        'number': 9,
        'text': 'Mark left work 10 minutes ___.',
        'answers': [
            {'text': 'ago'},
            {'text': 'past'},
            {'text': 'since'},
        ],
        'answer_key': 'ago'
    },
    {
        'number': 10,
        'text': 'This is ___ play l`ve ever seen.',
        'answers': [
            {'text': 'the better'},
            {'text': 'the best'},
            {'text': 'the most best'},
        ],
        'answer_key': 'the best'
    },
    {
        'number': 11,
        'text': 'Let’s ___ for a walk.',
        'answers': [
            {'text': 'get'},
            {'text': 'have'},
            {'text': 'go'},
        ],
        'answer_key': 'go'
    },
    {
        'number': 12,
        'text': 'Jim is ___ his bike.',
        'answers': [
            {'text': 'having'},
            {'text': 'riding'},
            {'text': 'driving'},
        ],
        'answer_key': 'riding'
    },
    {
        'number': 13,
        'text': 'Have you ever ___ Japanese food?',
        'answers': [
            {'text': 'eaten'},
            {'text': 'eat'},
            {'text': 'ate'},
        ],
        'answer_key': 'eaten'
    },
    {
        'number': 14,
        'text': 'I usually go shopping ___ the weekend.',
        'answers': [
            {'text': 'on'},
            {'text': 'at'},
            {'text': 'for'},
        ],
        'answer_key': 'at'
    },
    {
        'number': 15,
        'text': 'I have ___ washed my hair.',
        'answers': [
            {'text': 'ever'},
            {'text': 'already'},
            {'text': 'yet'},
        ],
        'answer_key': 'already'
    },
    {
        'number': 16,
        'text': 'There is ___ milk in the fridge.',
        'answers': [
            {'text': 'some'},
            {'text': 'any'},
            {'text': 'a'},
        ],
        'answer_key': 'some'
    },
    {
        'number': 17,
        'text': 'When can we meet again?',
        'answers': [
            {'text': 'When are you free?'},
            {'text': 'It was two days ago.'},
            {'text': 'Can you help me?'},
        ],
        'answer_key': 'When are you free?'
    },
    {
        'number': 18,
        'text': 'My aunt is going to stay with me.',
        'answers': [
            {'text': 'How do you do?'},
            {'text': 'How long for?'},
            {'text': 'How was it?'},
        ],
        'answer_key': 'How long for?'
    },
    {
        'number': 19,
        'text': 'When do you study?',
        'answers': [
            {'text': 'at school'},
            {'text': 'in the evenings'},
            {'text': 'in the library'},
        ],
        'answer_key': 'in the evenings'
    },
    {
        'number': 20,
        'text': 'Let’s have dinner now.',
        'answers': [
            {'text': 'You aren’t eating.'},
            {'text': 'There aren’t any.'},
            {'text': 'Tom isn’t here yet.'},
        ],
        'answer_key': 'Tom isn’t here yet.'
    },
    {
        'number': 21,
        'text': 'I can’t find my keys anywhere - I ___ have left them at work.',
        'answers': [
            {'text': 'can'},
            {'text': 'must'},
            {'text': 'ought'},
            {'text': 'would'},
        ],
        'answer_key': 'must'
    },
    {
        'number': 22,
        'text': 'When a car pulled out in front of her, Jane did well not to ____ control of her bicycle.',
        'answers': [
            {'text': 'miss'},
            {'text': 'lose'},
            {'text': 'fail'},
            {'text': 'drop'},
        ],
        'answer_key': 'lose'
    },
    {
        'number': 23,
        'text': 'According to Richard’s ____ the train leaves at 7 o’clock.',
        'answers': [
            {'text': 'opinion'},
            {'text': 'advice'},
            {'text': 'knowledge'},
            {'text': 'information'},
        ],
        'answer_key': 'information'
    },
    {
        'number': 24,
        'text': 'When you stay in a country for some time you get used to the people’s _____ of life.',
        'answers': [
            {'text': 'habit'},
            {'text': 'custom'},
            {'text': 'way'},
            {'text': 'system'},
        ],
        'answer_key': 'way'
    },
    {
        'number': 25,
        'text': 'We ___ send private e-mails from work.',
        'answers': [
            {'text': 'mustn’t'},
            {'text': 'don’t have to'},
            {'text': 'needn’t'},
        ],
        'answer_key': 'mustn’t'
    },
    {
        'number': 26,
        'text': 'This film is so ___.',
        'answers': [
            {'text': 'bored'},
            {'text': 'bore'},
            {'text': 'boring'},
        ],
        'answer_key': 'boring'
    },
    {
        'number': 27,
        'text': 'I don’t think we ___ to come to the party.',
        'answers': [
            {'text': '‘ll be able'},
            {'text': '‘ll can'},
            {'text': 'can'},
        ],
        'answer_key': '‘ll be able'
    },
    {
        'number': 28,
        'text': 'If I were you I ___ married.',
        'answers': [
            {'text': 'wouldn’t get'},
            {'text': 'didn’t get'},
            {'text': 'wouldn’t got'},
        ],
        'answer_key': 'wouldn’t get'
    },
    {
        'number': 29,
        'text': 'She told the children ___ a noise.',
        'answers': [
            {'text': 'that they don’t make'},
            {'text': 'not to make'},
            {'text': 'to not make'},
        ],
        'answer_key': 'not to make'
    },
    {
        'number': 30,
        'text': 'Could you tell me ___, please?',
        'answers': [
            {'text': 'where is the post office'},
            {'text': 'where the post office is'},
            {'text': 'where the post office'},
        ],
        'answer_key': 'where the post office is'
    },
    {
        'number': 31,
        'text': 'My case is ___ heavy, that I can hardly pick it up.',
        'answers': [
            {'text': 'so'},
            {'text': 'such'},
            {'text': 'such a'},
        ],
        'answer_key': 'so'
    },
    {
        'number': 32,
        'text': 'I couldn’t help ___ when Ted fell off his bicycle.',
        'answers': [
            {'text': 'to laugh'},
            {'text': 'laugh'},
            {'text': 'laughing'},
        ],
        'answer_key': 'laughing'
    },
    {
        'number': 33,
        'text': 'We had better ___ much longer.',
        'answers': [
            {'text': 'not staying'},
            {'text': 'don’t stay'},
            {'text': 'not stay'},
        ],
        'answer_key': 'not stay'
    },
    {
        'number': 34,
        'text': 'Do you fancy ___ a film tonight?',
        'answers': [
            {'text': 'to see'},
            {'text': 'seeing'},
            {'text': 'to seeing'},
        ],
        'answer_key': 'seeing'
    },
    {
        'number': 35,
        'text': 'Strong measures must ___ to reduce the number of knife crimes.',
        'answers': [
            {'text': 'be taken'},
            {'text': 'take'},
            {'text': 'have taken'},
        ],
        'answer_key': 'be taken'
    },
];
