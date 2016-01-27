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
];

window.onload = function () {

    window.vueTest = new Vue({
        el: '#winwin-quiz',
        data: {
            question: questionData[0],
            answers: questionData[0].answers,
            question_count: questionData.length,
            test_progress: {
                'answered': 0,
                'correct': 0,
                'failed': 0,
                'button_label': "Next Question >"
            },
            current_question_state: {
                'question_number': 0,
                'answer_given': false,
                'answer_correct': false,
            }
        },
        methods: {
            chooseAnswer: function (answer_idx) {
                if (this.current_question_state.answer_given) {
                    return;
                }
                this.current_question_state.answer_given = true;
                if (this._answerIsCorrect(answer_idx)) {
                    this.test_progress.answered++;
                    this.test_progress.correct++;
                    this.current_question_state.answer_correct = true;
                    return;
                }
                console.log(this._answerIsCorrect(answer_idx));
                this.test_progress.answered++;
                this.test_progress.failed++;
            },

            answerCssClass: function (answer_idx) {
                if (!this.current_question_state.answer_given) {
                    return '';
                }
                if (this._answerIsCorrect(answer_idx)) {
                    return 'list-group-item-success disabled';
                }
                return 'list-group-item-danger disabled';
            },

            triggerSuccessMessage: function () {
                if (this.current_question_state.answer_correct == true) {
                    return true;
                }
                return false;
            },

            triggerErrorMessage: function () {
                if (this.current_question_state.answer_given == true && this.current_question_state.answer_correct == false) {
                    return true;
                }
                return false;
            },

            nextQuestion: function (e) {

                if (++this.current_question_state.question_number >= this.question_count) {
                    console.log(this.test_progress);
                    return;
                }

                if (this.question_count - this.current_question_state.question_number === 1) {
                    //TODO: this sucks :(
                    this.test_progress.button_label = 'Get My Results!'
                }

                this.current_question_state.answer_given = false;
                this.current_question_state.answer_correct = false;

                console.log(this.current_question_state);

                this.question = questionData[this.current_question_state.question_number];
                this.answers = questionData[this.current_question_state.question_number].answers;

                return;
            },

            _answerIsCorrect: function (answer_idx) {
                return this.question.answer_key === this.question.answers[answer_idx].text;
            },


        }
    });
}