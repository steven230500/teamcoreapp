import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getQuestions, sendAnswers} from './services/QuizRepository';

const QuizPage = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = () => {
    setIsLoading(true);
    getQuestions()
      .then(res => {
        setQuestions(res.data);
        setOptions(res.data[0].answers);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(questions[ques + 1]);
  };

  const handlSelectedOption = option => {
    let questionData = {
      question_id: questions[ques].question_id,
      answer_id: option.answer_id,
    };
    let data = [...selectedAnswers, questionData];
    setSelectedAnswers(data);

    if (ques + 1 !== questions.length) {
      setQues(ques + 1);
      setOptions(questions[ques + 1].answers);
    }
    if (ques + 1 === questions.length) {
      handleShowResult(data);
    }
  };

  const handleShowResult = data => {
    sendAnswers(data);
    navigation.navigate('Result');
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 32, fontWeight: '700'}}>LOADING...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>Q. {questions[ques].question}</Text>
            </View>
            <View style={styles.options}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionButtom}
                  onPress={() => handlSelectedOption(option)}>
                  <Text style={styles.option}>{option.answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default QuizPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
