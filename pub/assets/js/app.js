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
                'level_title': ''
            },
            current_question_state: {
                'question_number': 0,
                'answer_given': false,
                'answer_correct': false,
            },
            test_is_complete: false,
            contact_data: {
                'email': '',
                'telephone': '',
                'name': ''
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
                    return;
                }
                this.current_question_state.answer_given = false;
                this.current_question_state.answer_correct = false;

                this.question = questionData[this.current_question_state.question_number];
                this.answers = questionData[this.current_question_state.question_number].answers;

                return;
            },

            isLastQuestion: function () {
                if (this.question_count - this.current_question_state.question_number === 1) {
                    return true;
                }
                return false;
            },

            showResults: function (e) {
                this.test_is_complete = true;
                this._evaluateResult();
                return;
            },

            _evaluateResult: function () {
                if (this.test_progress.correct <= 10) {
                    this.test_progress.level_title = 'Beginner';
                }
                if (this.test_progress.correct >= 15) {
                    this.test_progress.level_title = 'Elementary';
                }
                if (this.test_progress.correct >= 25) {
                    this.test_progress.level_title = 'Intermediate';
                }
                if (this.test_progress.correct == this.question_count) {
                    this.test_progress.level_title = 'Upper-Intermediate';
                }
                return;
            },

            _answerIsCorrect: function (answer_idx) {
                return this.question.answer_key === this.question.answers[answer_idx].text;
            },

            submitContact: function (e) {
                e.preventDefault();
                console.log(e);
                var submitData = {
                    'test_data': this.test_progress,
                    'contact_data': this.contact_data
                };
                return;

                //possibly submit data somewhere
                console.log(submitData);
                this.$http.post('/test/submit', submitData, function (data) {
                    if (data.result === 'success') {
                    } else {
                        alert('Ой! Что-то пошло не так :( Пожалуйста, попробуйте еще раз.');
                        console.log(data);
                    }
                }).catch(function (data) {
                    alert('Ой! Что-то пошло не так :( Пожалуйста, попробуйте еще раз.');
                    console.log(data);
                });
            },
        }
    });
}